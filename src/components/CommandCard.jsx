import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CommandCard({ command }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[#030303] border border-[#2c2c2e] rounded-lg overflow-hidden transition-all hover:border-[#ffdb89] hover:shadow-lg font-mono"
      id={command.name}
    >
      {/* Header */}
      <div
        className="flex items-center p-4 cursor-pointer bg-[#030303] hover:bg-[#2c2c2e] transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-bold text-[#ffdb89] min-w-[120px] text-base">
          /{command.name}
        </span>
        <span className="flex-1 text-gray-300 text-sm mx-4">
          {command.shortDesc}
        </span>
        <span className="text-[#a67d43] text-xl w-6 text-center hover:text-[#ffdb89] transition-colors">
          {expanded ? '−' : '+'}
        </span>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="p-4 border-t border-dashed border-[#2c2c2e] bg-[#2c2c2e] font-sans">
          <p className="text-gray-300 mb-4 leading-relaxed">{command.description}</p>

          <div className="mb-4 bg-[#030303] p-3 rounded border-l-4 border-[#ffdb89]">
            <strong className="text-[#ffdb89] font-mono mr-2">Usage:</strong>
            <code className="text-white font-mono text-sm">{command.usage}</code>
          </div>

          <div className="mt-4">
            <strong className="text-[#ffdb89] font-mono block mb-2">Example:</strong>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              className="rounded border border-[#2c2c2e] !bg-[#030303]"
            >
              {command.example}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}