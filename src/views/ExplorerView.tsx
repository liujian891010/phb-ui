import React from 'react';
import { FileText, Plus, Search, HelpCircle, Trash2, Settings, Cloud, BrainCircuit, MessageSquare, PlusCircle } from 'lucide-react';

export default function ExplorerView({ setView }: { setView: (v: string) => void }) {
  // Wait, I already created an explorer view that ONLY had the editor.
  // I should ensure this ExplorerView handles the split properly since in the App I pass setView.
  // Actually, wait, my earlier ExplorerView creation FAILED because it was bundled in the tool call error!
  // I MUST re-create ExplorerView.tsx here.
  return (
    <div className="flex flex-col h-full bg-[#1a1a2e] relative overflow-hidden">
      {/* Editor Toolbar */}
      <header className="bg-[#16213e] border-b border-[#0f3460] h-14 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <FileText size={18} />
            <span className="text-[13px] font-semibold">Product Roadmap.md</span>
          </div>
          <div className="h-4 w-px bg-[#0f3460]"></div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
            <span>1,240 words</span>
            <span>·</span>
            <span>Saved 2s ago</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#0f3460]/30 rounded-md p-0.5 border border-[#0f3460]">
            <button onClick={() => setView('wiki')} className="px-2 py-1.5 rounded text-[#e94560] hover:bg-[#1f2b4a] transition-colors flex items-center gap-1 font-mono text-[11px]">
              [[wiki]]
            </button>
          </div>
        </div>
      </header>

      {/* Editor Main Area w/ simulated view */}
      <div className="flex-1 overflow-y-auto flex relative bg-[#121316]">
        <div className="w-[50px] flex-shrink-0 bg-[#16213e]/50 border-r border-[#0f3460]/50 py-8 flex flex-col items-end pr-3 font-mono text-[14px] leading-[1.7] text-slate-600 select-none">
          {Array.from({ length: 15 }).map((_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        <div className="flex-1 p-8 font-mono text-[14px] leading-[1.7] text-slate-300 whitespace-pre-wrap outline-none">
          <span className="text-[#a9c8fc]"># Product Roadmap Q3-Q4</span>{'\n\n'}
          <span className="text-slate-400">## Core Objectives</span>{'\n'}
          1. Implement local-first vector search for the `.ai/wiki` directory.{'\n'}
          2. Optimize sync engine for large markdown vaults (&gt;10k files).{'\n'}
          3. Enhance the AI Assistant with multi-document context windowing.{'\n\n'}
          <span className="text-slate-400">## Current Sprint</span>{'\n'}
          - Building the split preview component.{'\n'}
          - <span className="text-[#e94560] cursor-pointer hover:underline" onClick={() => setView('wiki')}>[[Architecture_V2]]</span> review with the backend team.{'\n'}
          - Refactoring the <span className="text-[#a9c8fc]">Right Panel Assistant</span> UI.{'\n\n'}
          <span className="text-slate-400">## Notes from last sync</span>{'\n'}
          Need to ensure that the <span className="text-[#ffb782]">`style_active_navigation`</span> logic is strictly applied to the SideNavBar component as defined in the JSON.
        </div>
      </div>
    </div>
  );
}
