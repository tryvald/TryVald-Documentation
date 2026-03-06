const commands = {
  Utility: [
    { 
      name: 'ping', 
      shortDesc: 'Check bot latency', 
      description: 'Returns the bot\'s current response time in milliseconds.', 
      usage: '/ping', 
      example: '/ping' 
    },
    { 
      name: 'avatar', 
      shortDesc: 'Get a user\'s avatar', 
      description: 'Displays the avatar of a user in full size. If no user is specified, shows your own avatar.', 
      usage: '/avatar [user]', 
      example: '/avatar @username' 
    },
    { 
      name: 'serverinfo', 
      shortDesc: 'Server statistics', 
      description: 'Shows detailed information about the current server, including owner, member count, channel count, roles, boost level, and creation date.', 
      usage: '/serverinfo', 
      example: '/serverinfo' 
    },
    { 
      name: 'userinfo', 
      shortDesc: 'Get user information', 
      description: 'Displays information about a user, such as account creation date, join date, roles, and ID.', 
      usage: '/userinfo [user]', 
      example: '/userinfo @username' 
    },
    { 
      name: 'roll', 
      shortDesc: 'Roll dice', 
      description: 'Rolls dice using standard notation like 2d6, 1d20+3, or 3d8-1. Supports up to 100 dice with up to 1000 sides.', 
      usage: '/roll <dice>', 
      example: '/roll 2d6' 
    },
    { 
      name: 'choose', 
      shortDesc: 'Randomly pick an option', 
      description: 'Randomly selects one item from a comma‑separated list of options.', 
      usage: '/choose <options>', 
      example: '/choose pizza, burger, salad' 
    },
    { 
      name: 'poll', 
      shortDesc: 'Create a reaction poll', 
      description: 'Creates a poll with up to 5 options. Users vote by reacting with number emojis.', 
      usage: '/poll <question> <option1> <option2> [option3...]', 
      example: '/poll "Best color?" "Red" "Blue" "Green"' 
    },
    { 
      name: 'help', 
      shortDesc: 'Get command help', 
      description: 'Shows a list of all commands or detailed information about a specific command.', 
      usage: '/help [command]', 
      example: '/help kick' 
    },
  ],
  Moderation: [
    { 
      name: 'kick', 
      shortDesc: 'Kick a member', 
      description: 'Kicks a member from the server. An optional reason can be provided.', 
      usage: '/kick <user> [reason]', 
      example: '/kick @username Spamming' 
    },
    { 
      name: 'ban', 
      shortDesc: 'Ban a member', 
      description: 'Bans a member from the server. You can optionally delete messages from the last X days (0‑7).', 
      usage: '/ban <user> [reason] [delete_days]', 
      example: '/ban @username 7' 
    },
    { 
      name: 'timeout', 
      shortDesc: 'Timeout a member', 
      description: 'Restricts a member\'s communication for a specified duration (e.g., 10m, 2h, 1d).', 
      usage: '/timeout <user> <duration> [reason]', 
      example: '/timeout @username 1h Being rude' 
    },
    { 
      name: 'mute', 
      shortDesc: 'Mute a member (alias for timeout)', 
      description: 'Alias for /timeout. Mutes a member for a specified duration.', 
      usage: '/mute <user> <duration> [reason]', 
      example: '/mute @username 30m' 
    },
    { 
      name: 'clear', 
      shortDesc: 'Bulk delete messages', 
      description: 'Deletes a specified number of messages (1‑100) from the current channel.', 
      usage: '/clear <amount>', 
      example: '/clear 10' 
    },
    { 
      name: 'warn', 
      shortDesc: 'Warn a member', 
      description: 'Issues a warning to a member. Warnings are stored and can be viewed with /warnings.', 
      usage: '/warn <user> <reason>', 
      example: '/warn @username No advertising' 
    },
    { 
      name: 'warnings', 
      shortDesc: 'List warnings', 
      description: 'Shows all warnings for a specific member.', 
      usage: '/warnings <user>', 
      example: '/warnings @username' 
    },
    { 
      name: 'lock', 
      shortDesc: 'Lock or unlock a channel', 
      description: 'Locks a channel to prevent members from sending messages, or unlocks it. Can specify a duration for auto‑unlock.', 
      usage: '/lock enable [channel] [duration] [reason] or /lock disable [channel] [reason]', 
      example: '/lock enable #general 10m' 
    },
  ],
  Information: [
    { 
      name: 'weather', 
      shortDesc: 'Get current weather', 
      description: 'Shows current weather conditions for a specified city (requires OpenWeatherMap API key).', 
      usage: '/weather <city>', 
      example: '/weather London' 
    },
    { 
      name: 'define', 
      shortDesc: 'Dictionary definition', 
      description: 'Looks up the definition of a word using the Free Dictionary API.', 
      usage: '/define <word>', 
      example: '/define serendipity' 
    },
    { 
      name: 'urban', 
      shortDesc: 'Urban Dictionary lookup', 
      description: 'Searches for a word on Urban Dictionary and returns the top definition.', 
      usage: '/urban <word>', 
      example: '/urban yeet' 
    },
    { 
      name: 'crypto', 
      shortDesc: 'Cryptocurrency price', 
      description: 'Gets the current price of a cryptocurrency (e.g., bitcoin, ethereum) in a specified currency (default USD).', 
      usage: '/crypto <coin> [currency]', 
      example: '/crypto bitcoin usd' 
    },
    { 
      name: 'stock', 
      shortDesc: 'Stock price', 
      description: 'Retrieves current stock price for a US ticker symbol using Alpha Vantage API.', 
      usage: '/stock <symbol>', 
      example: '/stock AAPL' 
    },
    { 
      name: 'link', 
      shortDesc: 'Bot invite link', 
      description: 'Provides the OAuth2 invite link to add the bot to another server.', 
      usage: '/link', 
      example: '/link' 
    },
  ],
  Gaming: [
    { 
      name: '8ball', 
      shortDesc: 'Magic 8‑ball', 
      description: 'Ask a yes/no question and get a random answer from the magic 8‑ball.', 
      usage: '/8ball <question>', 
      example: '/8ball Will I win the lottery?' 
    },
    { 
      name: 'meme', 
      shortDesc: 'Random meme', 
      description: 'Fetches a random meme from Reddit.', 
      usage: '/meme', 
      example: '/meme' 
    },
    { 
      name: 'joke', 
      shortDesc: 'Random joke', 
      description: 'Tells a random joke (programming, general, etc.).', 
      usage: '/joke', 
      example: '/joke' 
    },
    { 
      name: 'dog', 
      shortDesc: 'Random dog image', 
      description: 'Shows a random dog picture from the Dog CEO API.', 
      usage: '/dog', 
      example: '/dog' 
    },
    { 
      name: 'cat', 
      shortDesc: 'Random cat image', 
      description: 'Shows a random cat picture from The Cat API.', 
      usage: '/cat', 
      example: '/cat' 
    },
    { 
      name: 'rps', 
      shortDesc: 'Rock‑paper‑scissors', 
      description: 'Play rock‑paper‑scissors against the bot with interactive buttons.', 
      usage: '/rps', 
      example: '/rps' 
    },
    { 
      name: 'tictactoe', 
      shortDesc: 'Tic‑Tac‑Toe game', 
      description: 'Starts a Tic‑Tac‑Toe game with another user using buttons.', 
      usage: '/tictactoe <opponent>', 
      example: '/tictactoe @friend' 
    },
  ],
  Advanced: [
    { 
      name: 'ticket', 
      shortDesc: 'Create a support ticket', 
      description: 'Creates a private text channel for the user to discuss with staff.', 
      usage: '/ticket [reason]', 
      example: '/ticket Need help with roles' 
    },
    { 
      name: 'giveaway', 
      shortDesc: 'Start a giveaway', 
      description: 'Starts a giveaway with a specified prize, duration, and number of winners. Users enter by clicking a button.', 
      usage: '/giveaway <prize> <duration> <winners>', 
      example: '/giveaway Nitro 30m 1' 
    },
    { 
      name: 'embed', 
      shortDesc: 'Create a custom embed', 
      description: 'Sends a custom embed with title, description, color, footer, and image.', 
      usage: '/embed <title> <description> [color] [footer] [image]', 
      example: '/embed "Announcement" "Hello world" #FF0000 "Thanks"' 
    },
    { 
      name: 'config', 
      shortDesc: 'Server configuration', 
      description: 'View or modify server configuration settings (get/set/delete keys).', 
      usage: '/config <get/set/delete> <key> [value]', 
      example: '/config get logChannel' 
    },
    { 
      name: 'log', 
      shortDesc: 'Configure logging', 
      description: 'Set up logging channel and toggle individual or all log events.', 
      usage: '/log <channel|toggle|toggleall|list|disable>', 
      example: '/log toggle messageDelete' 
    },
    { 
      name: 'translate', 
      shortDesc: 'Translate text', 
      description: 'Translates text from one language to another (auto‑detects source if omitted).', 
      usage: '/translate <text> <target> [source]', 
      example: '/translate Hello es' 
    },
    { 
      name: 'remind', 
      shortDesc: 'Set a reminder', 
      description: 'Sets a personal reminder that will be sent via DM after the specified duration.', 
      usage: '/remind <duration> <reminder>', 
      example: '/remind 1h Take a break' 
    },
    { 
      name: 'schedule', 
      shortDesc: 'Scheduled messages', 
      description: 'Create, list, enable, disable, or remove scheduled recurring messages.', 
      usage: '/schedule <add|list|remove|enable|disable>', 
      example: '/schedule add #general daily 9:00 AM "Good morning!"' 
    },
    { 
      name: 'reactionrole', 
      shortDesc: 'Reaction roles', 
      description: 'Create or delete reaction role panels using buttons.', 
      usage: '/reactionrole <create|delete>', 
      example: '/reactionrole create #roles "Title" "Description" role1:@Red label1:"Red" emoji1:🔴' 
    },
    { 
      name: 'welcome', 
      shortDesc: 'Welcome messages', 
      description: 'Configure customizable welcome messages (channel, enable/disable, embed content).', 
      usage: '/welcome <channel|enable|disable|test|title|description|color|image|footer|reset>', 
      example: '/welcome title "Welcome {user.name}!"' 
    },
    { 
      name: 'goodbye', 
      shortDesc: 'Goodbye messages', 
      description: 'Configure customizable goodbye messages.', 
      usage: '/goodbye <channel|enable|disable|test|title|description|color|image|footer|reset>', 
      example: '/goodbye description "{user} left the server."' 
    },
    { 
      name: 'autorole', 
      shortDesc: 'Auto‑role', 
      description: 'Configure automatic role assignment for new members and bots.', 
      usage: '/autorole <set|add|remove|list|setbot|disable|test>', 
      example: '/autorole add @Member' 
    },
  ],
  Developer: [
    { 
      name: 'eval', 
      shortDesc: 'Execute JavaScript (owner only)', 
      description: 'Evaluates arbitrary JavaScript code. Restricted to bot owner.', 
      usage: '/eval <code>', 
      example: '/eval 2+2' 
    },
    { 
      name: 'reload', 
      shortDesc: 'Reload a command (owner only)', 
      description: 'Reloads a command file without restarting the bot. Owner only.', 
      usage: '/reload <command>', 
      example: '/reload ping' 
    },
    { 
      name: 'stats', 
      shortDesc: 'Bot statistics', 
      description: 'Shows bot uptime, server count, memory usage, and other technical stats.', 
      usage: '/stats', 
      example: '/stats' 
    },
    { 
      name: 'send', 
      shortDesc: 'Send a message (owner only)', 
      description: 'Sends a message to a specified channel in a specified server. Owner only.', 
      usage: '/send <server_id> <channel_id> <message>', 
      example: '/send 123456 789012 Hello' 
    },
    { 
      name: 'listen', 
      shortDesc: 'Listen to a server (owner only)', 
      description: 'Toggles listening to all messages in a server. Messages are forwarded to owner DMs as embeds.', 
      usage: '/listen <server_id>', 
      example: '/listen 123456' 
    },
    { 
      name: 'deafen', 
      shortDesc: 'Stop listening (owner only)', 
      description: 'Stops listening to a server (alternative to using /listen again).', 
      usage: '/deafen <server_id>', 
      example: '/deafen 123456' 
    },
    { 
      name: 'ignore', 
      shortDesc: 'Manage ignored channels (owner only)', 
      description: 'Add, remove, or list channels that should be ignored while listening.', 
      usage: '/ignore <add|remove|list> <server_id> [channel_id]', 
      example: '/ignore add 123456 789012' 
    },
  ],
};

export default commands;