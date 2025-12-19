# The Official Community repository for the Pixely Discord Bot.

A Discord bot built with **Node.js** and **discord.js v13** using a simple command handler + category-based command folders.

## Table of contents

- Overview
- Features
- Tech stack
- Getting started
  - Prerequisites
  - Installation
  - Configuration
  - Run locally
- Project structure
- Deployment
- Security notes
- Contributing
- License

## Overview

This repository contains a Discord bot (entrypoint: `index.js`) that loads commands dynamically from the `commands/` directory via `handlers/command.js`.

## Features

- Command handler with:
  - Command aliases
  - Command categories (folders)
  - Auto-loading commands at startup
- A basic `help` command
- A `bug` command that can forward bug reports via a Discord webhook (configurable)

## Tech stack

- **Node.js** (engine set to `16.x`)
- **discord.js** `^13.2.0`
- **ascii-table** for CLI command load output
- **mongoose** (present in dependencies; use if you add DB features)

## Getting started

### Prerequisites

- **Node.js 16.x**
- A Discord Bot Application + Bot Token from the Discord Developer Portal

### Installation

```bash
npm install
```

### Configuration

This project supports configuring secrets via environment variables (recommended).

#### Required

- `DISCORD_TOKEN`

#### Optional

- `DISCORD_BUG_WEBHOOK_URL`
  - Used by the `bug` command (`commands/informative commands/bug.js`).
  - If not provided, the code currently falls back to the placeholder value `my key was here!`.

#### `config.json`

The repo includes a `config.json` for non-sensitive settings like the command prefix.

Current keys:

- `prefix`
- `token` (kept as a placeholder in this repo; prefer `DISCORD_TOKEN` instead)

Example:

```json
{
  "token": "my key was here!",
  "prefix": "pix "
}
```

### Run locally

```bash
node .
```

Or:

```bash
node index.js
```

#### Setting environment variables (Windows)

PowerShell (current session):

```powershell
$env:DISCORD_TOKEN="YOUR_TOKEN_HERE"
$env:DISCORD_BUG_WEBHOOK_URL="YOUR_WEBHOOK_URL_HERE"
node .
```

Command Prompt (current session):

```bat
set DISCORD_TOKEN=YOUR_TOKEN_HERE
set DISCORD_BUG_WEBHOOK_URL=YOUR_WEBHOOK_URL_HERE
node .
```

## Project structure

```text
.
├─ index.js                 # Bot entrypoint
├─ handlers/
│  └─ command.js            # Loads commands from commands/*/*.js
├─ commands/
│  ├─ fun commands/
│  ├─ informative commands/
│  ├─ moderation commands/
│  ├─ underwork commands/
│  └─ utility commands/
├─ config.json              # Prefix + placeholder token
├─ package.json
└─ Procfile                 # For worker-style hosting (e.g., Heroku)
```

### Command module format

Each command is expected to export an object like:

- `name` (string)
- `aliases` (optional string array)
- `description` (string)
- `run(client, message, args)` (function)

Commands are loaded from: `commands/<category>/<file>.js`.

## Deployment

### Heroku (or similar)

A `Procfile` is included:

- `Worker: node .`

Set environment variables in your host:

- `DISCORD_TOKEN`
- (optional) `DISCORD_BUG_WEBHOOK_URL`

Then deploy as a worker process.

## Security notes

- Do **not** commit real tokens, webhook URLs, database URIs, or any credentials to git.
- This repository intentionally replaces secret values with the placeholder string:
  - `my key was here!`
- Prefer using environment variables (`DISCORD_TOKEN`, etc.) for all secrets.

## Contributing

- Fork the repository
- Create a feature branch
- Make changes and test locally
- Open a pull request with a clear description

## License

This project is currently licensed under **ISC** (as specified in `package.json`).
