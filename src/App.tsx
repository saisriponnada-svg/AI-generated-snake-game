import React from 'react';
import { motion } from 'motion/react';
import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Music, Gamepad2, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-neon-cyan selection:text-black font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <main className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center gap-12">
        
        {/* Header */}
        <header className="text-center space-y-2">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Zap className="w-6 h-6 text-neon-lime animate-bounce" />
            <span className="text-xs font-mono uppercase tracking-[0.5em] text-neon-lime/60">System Online</span>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none"
          >
            <span className="neon-text-cyan">Neon</span>
            <br />
            <span className="neon-text-pink">Snake</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neon-cyan/40 font-mono text-sm uppercase tracking-widest"
          >
            Retro Vibes • Modern Beats
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar - Info/Stats */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-3 space-y-6 hidden lg:block"
          >
            <div className="p-6 bg-black/40 backdrop-blur-xl rounded-3xl border border-neon-lime/20">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="w-5 h-5 text-neon-lime" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-neon-lime">Controls</h2>
              </div>
              <ul className="space-y-3 text-xs font-mono text-white/60">
                <li className="flex justify-between">
                  <span>Move</span>
                  <span className="text-neon-lime">Arrows</span>
                </li>
                <li className="flex justify-between">
                  <span>Pause</span>
                  <span className="text-neon-lime">Space</span>
                </li>
                <li className="flex justify-between">
                  <span>Reset</span>
                  <span className="text-neon-lime">R</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black/40 backdrop-blur-xl rounded-3xl border border-neon-purple/20">
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-5 h-5 text-neon-purple" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-neon-purple">Playlist</h2>
              </div>
              <div className="space-y-2">
                {['Neon Horizon', 'Cyber Drift', 'Digital Rain'].map((track, i) => (
                  <div key={i} className="text-xs font-mono text-white/40 hover:text-neon-purple transition-colors cursor-pointer flex items-center gap-2">
                    <span className="text-[10px]">0{i+1}</span>
                    {track}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Snake Game */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-6 flex justify-center"
          >
            <SnakeGame />
          </motion.div>

          {/* Right Sidebar - Music Player */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-3 flex justify-center lg:justify-end"
          >
            <MusicPlayer />
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
            &copy; 2026 AI Studio • Built for the Future
          </p>
        </footer>
      </main>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[size:100%_2px,3px_100%]" />
    </div>
  );
}
