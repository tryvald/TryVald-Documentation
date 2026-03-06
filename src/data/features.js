// src/data/features.js
// Comprehensive list of bot features for the homepage

const features = [
  {
    icon: '⚙️',
    title: 'Utility Commands',
    description: 'Essential everyday commands like ping, avatar, serverinfo, userinfo, roll, choose, poll, and help.',
    details: [
      'Check bot latency with /ping',
      'View user avatars in full size with /avatar',
      'Get detailed server statistics with /serverinfo',
      'See user info including join date and roles with /userinfo',
      'Roll dice with custom notation using /roll',
      'Let the bot pick from options with /choose',
      'Create reaction polls with /poll',
      'Get command help with /help'
    ]
  },
  {
    icon: '🛡️',
    title: 'Moderation',
    description: 'Complete toolkit to manage your server effectively.',
    details: [
      'Kick, ban, timeout, and warn members',
      'Bulk delete messages with /clear',
      'View warning history with /warnings',
      'Lock/unlock channels with optional auto‑unlock using /lock',
      'All actions logged if logging is enabled'
    ]
  },
  {
    icon: 'ℹ️',
    title: 'Information',
    description: 'Fetch real‑time data from various APIs.',
    details: [
      'Weather forecasts with /weather (OpenWeatherMap)',
      'Dictionary definitions with /define',
      'Urban Dictionary lookups with /urban',
      'Cryptocurrency prices with /crypto (CoinGecko)',
      'US stock prices with /stock (Alpha Vantage)',
      'Get bot invite link with /link'
    ]
  },
  {
    icon: '🎮',
    title: 'Gaming & Fun',
    description: 'Engage your community with interactive games and fun commands.',
    details: [
      'Magic 8‑ball with /8ball',
      'Random memes from Reddit with /meme',
      'Jokes with /joke',
      'Random dog and cat pictures with /dog and /cat',
      'Rock‑paper‑scissors with buttons via /rps',
      'Tic‑Tac‑Toe against friends with /tictactoe'
    ]
  },
  {
    icon: '📋',
    title: 'Logging System',
    description: 'Keep track of everything happening in your server.',
    details: [
      'Log messages deleted, edited, or bulk‑deleted',
      'Track member joins, leaves, and updates',
      'Log channel and role creations, deletions, and updates',
      'Monitor voice state changes',
      'Invite creation logging',
      'Fully configurable: choose which events to log and where',
      'Use /log to set up channel and toggle events individually or all at once'
    ]
  },
  {
    icon: '👋',
    title: 'Welcome & Goodbye',
    description: 'Greet new members and say farewell with fully customizable embeds.',
    details: [
      'Set separate channels and messages for join/leave',
      'Use placeholders: {user}, {user.name}, {server}, {memberCount}',
      'Customize embed title, description, color, image, and footer',
      'Test your configuration with /welcome test and /goodbye test',
      'Enable/disable independently'
    ]
  },
  {
    icon: '🎭',
    title: 'Auto‑Role',
    description: 'Automatically assign roles to new members and bots.',
    details: [
      'Assign one or multiple roles to members',
      'Optional separate role for bots',
      'Role hierarchy checks – bot won’t assign roles above itself',
      'Test with /autorole test',
      'Easy management with /autorole add, remove, list, setbot, disable'
    ]
  },
  {
    icon: '🔘',
    title: 'Reaction Roles (Buttons)',
    description: 'Let users choose roles by clicking buttons – modern and reliable.',
    details: [
      'Create panels with up to 6 roles (quick create)',
      'Each button has a label and optional emoji',
      'Toggle behavior: click once to add, again to remove',
      'Limit how many roles a user can select with max_selections',
      'Panels persist across bot restarts',
      'Delete panels with /reactionrole delete'
    ]
  },
  {
    icon: '⏰',
    title: 'Scheduled Messages',
    description: 'Plan recurring or one‑time messages with an intuitive interface.',
    details: [
      'Choose frequency: once, daily, weekly – no cron knowledge needed',
      'Set time with hour/minute/AM/PM',
      'Add full embed customization (title, color, image, footer)',
      'List, enable, disable, or remove scheduled messages',
      'All times in UTC for consistency',
      'Survives bot restarts'
    ]
  },
  {
    icon: '🎫',
    title: 'Ticket System',
    description: 'Let users create private support channels.',
    details: [
      'Users run /ticket with optional reason',
      'Private channel created with the user and bot',
      'Close button for staff to delete the channel'
    ]
  },
  {
    icon: '🎁',
    title: 'Giveaways',
    description: 'Run exciting giveaways with button entry.',
    details: [
      'Set prize, duration, and number of winners',
      'Users click to enter',
      'Winners randomly selected and announced',
      'Button disabled after giveaway ends'
    ]
  },
  {
    icon: '📝',
    title: 'Custom Embeds',
    description: 'Send beautifully formatted embeds with /embed.',
    details: [
      'Custom title, description, color, footer, and image',
      'Perfect for announcements and information'
    ]
  },
  {
    icon: '🔧',
    title: 'Server Configuration',
    description: 'Fine‑tune the bot to your server’s needs with /config.',
    details: [
      'View and change settings like log channel, auto‑role, welcome/goodbye, reaction panels, scheduled messages',
      'All configuration stored per server and persistent'
    ]
  },
  {
    icon: '🌐',
    title: 'Translation',
    description: 'Translate text on the fly with /translate.',
    details: [
      'Supports many languages (auto‑detect source or specify)',
      'Powered by LibreTranslate'
    ]
  },
  {
    icon: '⏳',
    title: 'Reminders',
    description: 'Never forget important tasks again.',
    details: [
      'Set personal reminders with /remind (e.g., 10m, 2h, 1d)',
      'Bot DMs you when time is up'
    ]
  },
  {
    icon: '🛠️',
    title: 'Developer Tools',
    description: 'Advanced commands for bot owners.',
    details: [
      '/eval – execute JavaScript code',
      '/reload – reload commands without restart',
      '/stats – view bot statistics (uptime, memory, servers)',
      '/send – send messages to any channel',
      '/listen – forward all messages from a server to owner DMs (with embeds)',
      '/deafen – stop listening',
      '/ignore – ignore specific channels while listening'
    ]
  },
  {
    icon: '📊',
    title: 'Extensive Logging',
    description: 'All actions are logged to Railway console for debugging.',
    details: [
      'Message content, commands, button clicks, modal submissions',
      'Guild join/leave events',
      'Error and warning logs',
      'Configurable log level (DEBUG, INFO, WARN, ERROR)'
    ]
  },
  {
    icon: '🚀',
    title: 'Modern & Scalable',
    description: 'Built with discord.js v14, fully modular, and easy to extend.',
    details: [
      'Uses latest Discord features (buttons, modals, embeds)',
      'Commands automatically loaded from folders',
      'Event handlers separated for maintainability',
      'Persistent storage with JSON files (ready for database upgrade)'
    ]
  }
];

export default features;