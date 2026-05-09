import React from 'react';
import { Settings, Cloud, Palette, Bot, Key, Laptop, Smartphone as Phone, Monitor } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="flex-1 bg-[#121316] overflow-y-auto p-4 md:p-8 lg:p-12 flex justify-center pb-20">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Settings Navigation Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h1 className="text-3xl font-bold text-[#e3e2e6] mb-8">Settings</h1>
          <nav className="flex flex-col gap-2">
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-[#292a2d] transition-colors text-[13px] font-medium flex items-center gap-3">
              <Settings size={20} /> General
            </a>
            <a href="#" className="px-4 py-3 rounded-lg bg-[#0f3460]/20 text-[#e94560] text-[13px] font-medium flex items-center gap-3 border-l-2 border-[#e94560]">
              <Cloud size={20} /> Sync
            </a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-[#292a2d] transition-colors text-[13px] font-medium flex items-center gap-3">
              <Palette size={20} /> Appearance
            </a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-[#292a2d] transition-colors text-[13px] font-medium flex items-center gap-3">
              <Bot size={20} /> AI Models
            </a>
          </nav>
        </aside>

        {/* Settings Content Panel */}
        <div className="flex-1 flex flex-col gap-8">
          <header className="border-b border-[#43474f]/30 pb-4">
            <h2 className="text-2xl font-bold text-[#e3e2e6]">Sync Configuration</h2>
            <p className="text-base text-slate-400 mt-2">Manage your local-first synchronization and connected devices.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Core Sync Toggle */}
            <div className="bg-[#1f2b4a] rounded-xl p-4 border border-[#0f3460] shadow-md flex flex-col justify-between col-span-1 xl:col-span-2 relative overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e94560] to-transparent opacity-50"></div>
               <div className="flex items-start justify-between">
                  <div>
                     <h3 className="text-[13px] font-medium text-[#e3e2e6] flex items-center gap-2">
                        <Key className="text-[#e94560]" size={18} /> End-to-End Encryption
                     </h3>
                     <p className="text-base text-slate-400 mt-1 max-w-lg">Your vault is encrypted locally before syncing. NoteAI cannot read your notes.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" defaultChecked className="sr-only peer" />
                     <div className="w-11 h-6 bg-[#333538] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#e94560]"></div>
                  </label>
               </div>
               <div className="mt-4 pt-4 border-t border-[#0f3460] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <span className="inline-flex items-center px-2 py-1 bg-[#0f3460]/30 border border-[#0f3460] rounded text-[#e94560] font-mono text-[13px]">Active</span>
                     <span className="font-mono text-[13px] text-slate-500">Last synced: 2 mins ago</span>
                  </div>
                  <button className="text-[13px] font-medium text-[#e94560] hover:text-white transition-colors">View Recovery Key</button>
               </div>
            </div>

            {/* Sync Server */}
            <div className="bg-[#1f2b4a] rounded-xl p-4 border border-[#0f3460] shadow-md flex flex-col gap-4">
               <div>
                  <h3 className="text-[13px] font-medium text-[#e3e2e6]">Sync Server</h3>
                  <p className="text-sm text-slate-400 mt-1">Choose where your encrypted data is stored.</p>
               </div>
               <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-[#0f3460] bg-[#121316]/50 cursor-pointer hover:bg-[#1e2023] transition-colors">
                     <input type="radio" name="sync_server" defaultChecked className="text-[#e94560] focus:ring-[#e94560] bg-[#333538] border-[#43474f]" />
                     <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#e3e2e6]">NoteAI Cloud</span>
                        <span className="font-mono text-[13px] text-slate-500">Default, managed storage</span>
                     </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-[#0f3460] bg-[#121316]/50 cursor-pointer hover:bg-[#1e2023] transition-colors">
                     <input type="radio" name="sync_server" className="text-[#e94560] focus:ring-[#e94560] bg-[#333538] border-[#43474f]" />
                     <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-[#e3e2e6]">Custom CouchDB</span>
                        <span className="font-mono text-[13px] text-slate-500">Self-hosted sync</span>
                     </div>
                  </label>
               </div>
            </div>

            {/* AI Conflict Resolution */}
            <div className="bg-[#1f2b4a] rounded-xl p-4 border border-[#0f3460] shadow-md flex flex-col gap-4">
               <div className="flex items-start gap-3">
                  <Bot className="text-[#e94560] mt-0.5" size={20} />
                  <div>
                     <h3 className="text-[13px] font-medium text-[#e3e2e6]">AI Conflict Resolution</h3>
                     <p className="text-sm text-slate-400 mt-1">Allow local AI to intelligently merge minor text conflicts.</p>
                  </div>
               </div>
               <div className="mt-auto bg-[#16213e] p-3 rounded border border-[#0f3460] flex items-center justify-between border-l-2 border-l-[#e94560]">
                  <span className="font-mono text-[13px] text-slate-400">Model: Llama-3-8B-Instruct (Local)</span>
                  <button className="text-[13px] font-medium text-[#e94560] hover:text-white transition-colors">Configure</button>
               </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold text-[#e3e2e6] mb-4">Connected Devices</h3>
            <div className="bg-[#1a1c1f] rounded-xl border border-[#43474f]/30 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-[#43474f]/30 hover:bg-[#1f2b4a] transition-colors">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#121316] flex items-center justify-center border border-[#0f3460]">
                       <Laptop className="text-slate-400" size={20} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-medium text-[#e3e2e6] flex items-center gap-2">
                         MacBook Pro (Work)
                         <span className="inline-flex items-center px-1.5 py-0.5 bg-[#0f3460]/30 border border-[#0f3460] rounded text-[#a9c8fc] font-mono text-[10px] uppercase">This Device</span>
                       </h4>
                       <p className="font-mono text-[13px] text-slate-500 mt-0.5">macOS · Synced just now</p>
                    </div>
                 </div>
                 <button className="px-3 py-1.5 rounded bg-[#1e2023] text-slate-500 text-[13px] font-medium cursor-not-allowed border border-[#43474f]/30" disabled>Current</button>
              </div>

              <div className="flex items-center justify-between p-4 border-b border-[#43474f]/30 hover:bg-[#1f2b4a] transition-colors">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#121316] flex items-center justify-center border border-[#0f3460]">
                       <Phone className="text-slate-400" size={20} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-medium text-[#e3e2e6]">iPhone 14 Pro</h4>
                       <p className="font-mono text-[13px] text-slate-500 mt-0.5">iOS · Synced 2 hours ago</p>
                    </div>
                 </div>
                 <button className="px-3 py-1.5 rounded bg-[#0f3460] hover:brightness-105 text-white text-[13px] font-medium transition-all">Revoke</button>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-[#1f2b4a] transition-colors">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#121316] flex items-center justify-center border border-[#0f3460]">
                       <Monitor className="text-slate-400" size={20} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-medium text-[#e3e2e6]">Home PC</h4>
                       <p className="font-mono text-[13px] text-slate-500 mt-0.5">Windows 11 · Synced yesterday</p>
                    </div>
                 </div>
                 <button className="px-3 py-1.5 rounded bg-[#0f3460] hover:brightness-105 text-white text-[13px] font-medium transition-all">Revoke</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
