import React from 'react';
import { Bolt, Sparkles, Link as LinkIcon } from 'lucide-react';

export default function DashboardView() {
  const recentDocs = [
    { title: 'Sync Strategy Draft', summary: 'Exploring different approaches to handle offline mutations before attempting to merge with the central vault server.', time: '2 hrs ago', tag: 'Architecture' },
    { title: 'Meeting Notes: UI V2', summary: 'Key takeaways from the design sync. We need to focus on depth through tonal layering and avoid generic grays.', time: '5 hrs ago', tag: 'Design' },
    { title: 'To-Do List: Beta Launch', summary: '- Finalize dark mode colors\n- Test markdown parser edge cases\n- Write release notes', time: 'Yesterday', tag: 'Planning' },
    { title: 'Idea: Semantic Search', summary: 'What if we index the vault locally using a small LLM model so users can search by concept rather than exact keyword?', time: '2 days ago', tag: 'AI' },
  ];

  return (
    <div className="h-full overflow-y-auto p-6 lg:p-8 shrink-0">
      <div className="max-w-5xl mx-auto space-y-8 pb-24 md:pb-0">
        <section>
          <h2 className="text-3xl font-bold text-[#e3e2e6] mb-2 font-sans tracking-tight">Good morning, User</h2>
          <p className="text-slate-400 text-base">Here's what's happening in your vault today.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#16213e] rounded-xl border border-[#0f3460] p-6 flex flex-col shadow-lg shadow-black/20">
            <div className="flex items-center space-x-2 mb-4 text-slate-300">
              <Bolt size={20} className="text-[#e94560]" />
              <h3 className="text-lg font-semibold text-[#e3e2e6]">Quick Capture</h3>
            </div>
            <textarea
              className="w-full bg-[#121316] border border-[#0f3460] rounded-lg p-3 font-mono text-[13px] text-[#e3e2e6] focus:outline-none focus:border-[#e94560] focus:ring-1 focus:ring-[#e94560]/30 transition-all resize-none flex-1 min-h-[120px] placeholder:text-slate-600"
              placeholder="Jot down a fleeting thought..."
            ></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-[#e94560] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:brightness-105 transition-all bg-gradient-to-b from-white/10 to-transparent">
                Save
              </button>
            </div>
          </div>

          <div className="md:col-span-2 rounded-xl border border-[#e94560]/30 p-6 flex flex-col shadow-lg shadow-black/20 ai-border relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 bottom-0 bg-[#e94560]"></div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles size={20} className="text-[#e94560]" />
              <h3 className="text-lg font-semibold text-[#e3e2e6]">AI Insights</h3>
            </div>
            <p className="text-[15px] text-slate-300 mb-6 leading-relaxed">
              You've been highly focused on the <span className="text-[#e94560] font-medium mx-1">Local-First Architecture</span> over the past 48 hours. I've identified several recurring themes around conflict resolution and offline-first syncing strategies.
            </p>
            <div className="mt-auto space-y-3">
              <h4 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Suggested Connections</h4>
              <div className="flex flex-wrap gap-2">
                <button className="bg-[#0f3460]/30 border border-[#0f3460] rounded-full px-3 py-1.5 text-xs text-[#a9c8fc] hover:bg-[#1f2b4a] transition-colors flex items-center space-x-1.5">
                  <LinkIcon size={12} />
                  <span>CRDT Implementations</span>
                </button>
                <button className="bg-[#0f3460]/30 border border-[#0f3460] rounded-full px-3 py-1.5 text-xs text-[#a9c8fc] hover:bg-[#1f2b4a] transition-colors flex items-center space-x-1.5">
                  <LinkIcon size={12} />
                  <span>IndexedDB Limits</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#e3e2e6]">Recently Edited</h3>
            <a href="#" className="text-[#e94560] text-sm hover:text-white transition-colors">View All</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentDocs.map((doc, i) => (
              <div key={i} className="bg-[#16213e] rounded-xl border border-[#0f3460] p-4 hover:bg-[#1f2b4a] transition-colors duration-200 cursor-pointer group flex flex-col h-44">
                <h4 className="text-base font-semibold text-[#e3e2e6] mb-2 group-hover:text-[#e94560] transition-colors line-clamp-1 truncate">{doc.title}</h4>
                <p className="text-sm text-slate-400 line-clamp-3 mb-auto leading-relaxed whitespace-pre-wrap">{doc.summary}</p>
                <div className="flex items-center justify-between mt-4 text-slate-500 font-mono text-[11px]">
                  <span>{doc.time}</span>
                  <div className="bg-[#0f3460]/30 border border-[#0f3460] rounded px-2 py-0.5 text-[#a9c8fc]">{doc.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
