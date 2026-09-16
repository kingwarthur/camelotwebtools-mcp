#!/usr/bin/env node

/**
 * Camelot Web Tools - Official Model Context Protocol (MCP) Server
 *
 * Connects AI coding assistants (Claude Desktop, Cursor, Windsurf, Cline, etc.)
 * to all 79 deterministic, privacy-first Camelot Web Tools over stdio JSON-RPC 2.0.
 *
 * Endpoint: https://www.camelotwebtools.com/api/mcp
 * Documentation: https://www.camelotwebtools.com/llms.txt
 */

import readline from 'node:readline';

const ENDPOINT = process.env.CAMELOT_MCP_ENDPOINT || 'https://www.camelotwebtools.com/api/mcp';
const LICENSE_KEY = process.env.CAMELOT_LICENSE_KEY || '';
const SESSION_ID = process.env.CAMELOT_SESSION_ID || ('cli_' + Math.random().toString(36).slice(2, 11));

if (process.argv.includes('--version') || process.argv.includes('-v')) {
  console.log('camelotwebtools-mcp v1.0.0');
  process.exit(0);
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log([
    'Camelot Web Tools MCP Server',
    '',
    'Usage:',
    '  npx -y camelotwebtools-mcp',
    '',
    'Environment Variables:',
    '  CAMELOT_LICENSE_KEY   Pass your Pro ($19/mo, $149/yr) or Lifetime ($249) key for unlimited operations',
    '  CAMELOT_MCP_ENDPOINT  Override the live RPC endpoint (defaults to production)',
    '',
    'Documentation and Tools List: https://www.camelotwebtools.com/llms.txt'
  ].join('\n'));
  process.exit(0);
}

async function handleRequest(request) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'mcp-session-id': SESSION_ID
    };
    if (LICENSE_KEY) {
      headers['Authorization'] = LICENSE_KEY.startsWith('Bearer ') ? LICENSE_KEY : ('Bearer ' + LICENSE_KEY);
    }

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(request)
    });

    if (response.status === 204) {
      return null;
    }

    if (!response.ok) {
      const errorText = await response.text();
      return {
        jsonrpc: '2.0',
        id: request.id ?? null,
        error: {
          code: -32603,
          message: 'Camelot RPC error (' + response.status + '): ' + errorText
        }
      };
    }

    return await response.json();
  } catch (error) {
    return {
      jsonrpc: '2.0',
      id: request.id ?? null,
      error: {
        code: -32603,
        message: 'Network or execution error: ' + (error?.message || String(error))
      }
    };
  }
}

function startServer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', async (line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    try {
      const request = JSON.parse(trimmed);
      const response = await handleRequest(request);
      if (response) {
        process.stdout.write(JSON.stringify(response) + '\n');
      }
    } catch (parseError) {
      const errorResponse = {
        jsonrpc: '2.0',
        id: null,
        error: {
          code: -32700,
          message: 'Parse error: Invalid JSON received'
        }
      };
      process.stdout.write(JSON.stringify(errorResponse) + '\n');
    }
  });

  process.on('SIGINT', () => process.exit(0));
  process.on('SIGTERM', () => process.exit(0));
}

startServer();