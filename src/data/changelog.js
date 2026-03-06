const changelog = [
  {
    version: '1.0.0',
    date: '2026-02-27',
    changes: [
      'Initial release',
      'Added Utility commands: /ping, /avatar, /serverinfo, /userinfo, /roll, /choose, /poll, /help',
      'Added Moderation commands: /kick, /ban, /timeout, /clear, /warn, /warnings',
      'Added Information commands: /weather, /define, /urban, /crypto, /stock',
      'Added Gaming commands: /8ball, /meme, /joke, /dog, /cat, /rps, /tictactoe',
      'Added Advanced commands: /ticket, /giveaway, /embed, /config, /translate, /remind',
      'Added Developer commands: /eval, /reload, /stats (owner only)',
    ]
  },
  {
    version: '1.1.0',
    date: '2025-03-01',
    changes: [
      'Added comprehensive Logging system with /log command',
      'Log events: messageDelete, messageUpdate, guildMemberAdd, guildMemberRemove, channelCreate, channelDelete, roleCreate, roleDelete, voiceStateUpdate, messageBulkDelete, and more',
      'Added /log toggleall to enable/disable all events at once',
    ]
  },
  {
    version: '1.2.0',
    date: '2026-03-03',
    changes: [
      'Added /welcome and /goodbye commands for customizable join/leave messages',
      'Embed support with placeholders: {user}, {user.name}, {server}, {memberCount}',
      'Added /link command to get bot invite link',
    ]
  },
  {
    version: '1.3.0',
    date: '2026-03-4',
    changes: [
      'Added Auto‑Role system with /autorole command',
      'Support for multiple member roles and separate bot role',
      'Role hierarchy checks and error handling',
      'Added /autorole test to simulate join',
    ]
  },
  {
    version: '1.4.0',
    date: '2026-03-5',
    changes: [
      'Added Reaction Roles with /reactionrole command',
      'Button‑based panels, up to 6 roles per quick create',
      'Toggle behavior (add/remove on click), optional max selections',
      'Persistent storage and auto‑restore',
    ]
  },
  {
    version: '1.5.0',
    date: '2026-03-6',
    changes: [
      'Added Scheduled Messages with /schedule command',
      'Natural language scheduling: once, daily, weekly (no cron needed)',
      'Full embed customization',
      'List, enable, disable, and remove scheduled messages',
    ]
  },
  {
    version: '1.6.0',
    date: '2026-03-7',
    changes: [
      'Added /lock command to lock/unlock channels with optional duration',
      'Added /mute command (alias for /timeout)',
      'Improved owner commands: /send, /listen, /deafen, /ignore',
      'Message forwarding to owner DMs now uses rich embeds',
      'Bot messages are also forwarded when listening',
    ]
  },
  {
    version: '1.7.0',
    date: '2026-03-9',
    changes: [
      'Enhanced logging: added channelUpdate, roleUpdate, inviteCreate, guildMemberUpdate',
      'Added /log toggleall for quick configuration',
      'Improved error handling throughout',
      'Added support for custom emojis in reaction roles',
    ]
  },
  {
    version: '1.8.0',
    date: '2026-03-10',
    changes: [
      'Added /stats command with bot uptime, server count, memory usage',
      'Added /reload command to reload commands without restart',
      'Optimized command loading and event handling',
    ]
  },
  {
    version: '2.0.0',
    date: '2025-03-16',
    changes: [
      'Major refactor: migrated to discord.js v14',
      'Added all intents for full functionality',
      'Improved documentation website with React',
      'Now fully self‑hostable on Railway with auto‑deploy from GitHub',
      'Prepared for Discord bot verification (Terms of Service and Privacy Policy pages)',
    ]
  }
];

export default changelog;