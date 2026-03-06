# All In one discord bot documentation

A feature-rich Discord bot built with discord.js v14. Includes utility, moderation, fun, and advanced commands, with a modular command structure and easy configuration.

## ✨ Features

- **Utility**: `/ping`, `/avatar`, `/serverinfo`, `/userinfo`, `/roll`, `/choose`, `/poll`
- **Moderation**: `/kick`, `/ban`, `/timeout`, `/clear`, `/warn`, `/warnings`
- **Information**: `/weather`, `/define`, `/urban`, `/crypto`, `/stock`
- **Gaming**: `/8ball`, `/meme`, `/joke`, `/dog`, `/cat`, `/rps`, `/tictactoe`
- **Advanced**: `/ticket`, `/giveaway`, `/embed`, `/config`, `/translate`, `/remind`
- **Developer**: `/eval`, `/reload`, `/stats`
- **Help**: `/help` (with command‑specific details)

All commands are grouped by category and support ephemeral responses where appropriate.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16.9.0 or higher)
- A [Discord bot application](https://discord.com/developers/applications) with:
  - Bot token
  - Client ID
  - Required intents enabled (at least `Guilds`)

## 🚀 Installation

1. **Clone the repository** (or download the source)
   ```bash
   git clone https://https://github.com/tryvald/Sanex-discord-bot
   cd discord-bot
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environement variables**
-    Copy `.env.example` to `.env` (if provided) or create a new `.env` file.
-    Fill in your bot token, client ID, and optionally a guild ID for faster command updates during development.

```env
  DISCORD_TOKEN=your_bot_token_here
  CLIENT_ID=your_application_client_id_here
  GUILD_ID=your_test_server_id_here   # Optional, for guild‑specific commands
  OWNER_ID=your_discord_user_id       # Required for /eval and /reload
  OPENWEATHER_API_KEY=your_key        # Optional, for /weather
  ALPHAVANTAGE_API_KEY=your_key       # Optional, for /stock
```
4. **Deploy slash commands**

```bash
   npm run deploy
```
This registers all commands with Discord. If `GUILD_ID` is set, commands are registered only for that guild (instant updates); otherwise they are registered globally (may take up to an hour).

## ▶️ Running the Bot
Start the bot with:

```bash
  npm start
```
For development with auto‑restart on file changes, you can use n`odemon`:

```bash
  npm install -g nodemon
  nodemon src/index.js
```
## 📁 Project Structure


```text
my-bot/
├── .env                     # Environment variables (never commit!)
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── index.js             # Main bot entry point
│   ├── config.js            # Configuration loader
│   ├── commands/            # All slash commands (subfolders = categories)
│   │   ├── utility/
│   │   ├── moderation/
│   │   ├── info/
│   │   ├── gaming/
│   │   ├── advanced/
│   │   └── developer/
│   ├── events/              # Event handlers (ready, interactionCreate, etc.)
│   ├── utils/               # Helper functions (logger, warningManager, guildConfig)
│   └── data/                 # JSON storage for warnings and guild configs
└── scripts/
    └── deploy-commands.js   # Command registration script
```
## 🧩 Adding New Commands
1. Create a new `.js` file in the appropriate category folder under `src/commands/`.
2. Use the following template:

```js
   const { SlashCommandBuilder } = require('discord.js');

  module.exports = {
    data: new SlashCommandBuilder()
      .setName('commandname')
      .setDescription('Command description')
      .addStringOption(option => option.setName('option').setDescription('Option description')),
    async execute(interaction) {
      // Command logic here
      await interaction.reply('Hello!');
    },
  };
```
3. Optionally add custom `usage` and `example` properties for the help command:

```js
module.exports = {
  data: ...,
  usage: '/commandname <required> [optional]',
  example: '/commandname value',
  async execute(interaction) { ... }
};
```
4. Run `npm run deploy` to register the new command.

## 🔧 Configuration
- **Bot intents:** Modify the `intents` array in `src/index.js` if your bot needs additional events (e.g., `GuildMessages`, `MessageContent`).
- **API keys:** Some commands (weather, stock) require external API keys. Add them to `.env` and uncomment the corresponding lines in `config.js`.
- **Warning system:** Warnings are stored in `src/data/warnings.json`. You can modify the storage logic in `src/utils/warningManager.js`.
- **Guild configuration:** Per‑server settings are stored in `src/data/guildConfig.json` and managed via the `/config command`.

## 📄 License
This project is licensed under the APACHE License – see the LICENSE file for details.

## 🙋 Support
If you have questions or need help, feel free to open an issue on GitHub or contact me on Discord (`16182062422638277253` this is actually my username xD ).
