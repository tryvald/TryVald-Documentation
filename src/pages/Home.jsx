import { useEffect } from 'react';
import commands from '../data/commands';
import CommandCard from '../components/CommandCard';

export default function Home() {
  // Smooth scroll for hash links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 font-mono">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#ffdb89]/10 via-transparent to-transparent pointer-events-none" />
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-[#ffdb89] mb-4 animate-pulse">
          TryVald
        </h1>
        <p className="text-2xl text-gray-300 mb-8 border-r-2 border-[#ffdb89] inline-block pr-2">
          Your all‑in‑one Discord bot
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#getting-started"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ffdb89] to-[#e6c27a] hover:from-[#e6c27a] hover:to-[#ffdb89] text-[#030303] font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </a>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1476990664204882062&permissions=8&integration_type=0&scope=bot+applications.commands"
            target="_blank"
            rel="noopener"
            className="px-8 py-3 rounded-full border border-[#ffdb89] text-[#ffdb89] font-bold hover:bg-gradient-to-r hover:from-[#ffdb89] hover:to-[#e6c27a] hover:text-[#030303] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            Invite Bot
          </a>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="scroll-mt-20 mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-4 inline-block border-b-4 border-[#ffdb89] pb-1">
          Getting Started
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Add TryVald to your server with the link above. The bot requires{' '}
          <strong className="text-[#ffdb89]">Administrator</strong> permissions to function fully.
          If you can't grant that, ensure the bot's role has necessary permissions
          (Manage Roles, Manage Channels, etc.).
        </p>
      </section>

      {/* Command Categories */}
      {Object.entries(commands).map(([category, cmds]) => (
        <section
          key={category}
          id={category.toLowerCase()}
          className="scroll-mt-20 mb-16"
        >
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6 inline-block border-b-4 border-[#ffdb89] pb-1">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {cmds.map(cmd => (
              <CommandCard key={cmd.name} command={cmd} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}