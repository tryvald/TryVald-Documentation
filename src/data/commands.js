const commands = {
  Utility: [
    { name: 'ping', shortDesc: 'Check bot latency', description: 'Returns the bot\'s current response time.', usage: '/ping', example: '/ping' },
    { name: 'avatar', shortDesc: 'Get a user\'s avatar', description: 'Displays the avatar of a user in full size.', usage: '/avatar [user]', example: '/avatar @user' },
    { name: 'serverinfo', shortDesc: 'Server statistics', description: 'Shows details about the server.', usage: '/serverinfo', example: '/serverinfo' },
    // ... add all utility commands
  ],
  Moderation: [
    { name: 'kick', shortDesc: 'Kick a member', description: 'Kicks a member from the server.', usage: '/kick <user> [reason]', example: '/kick @user Spamming' },
    // ... etc.
  ],
  // ... all categories
};

export default commands;