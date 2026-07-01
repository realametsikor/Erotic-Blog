import React from 'react';
import { 
  Menu, 
  Search, 
  Heart, 
  Play, 
  MessageSquare, 
  Users, 
  Compass, 
  BookOpen, 
  Home, 
  ChevronRight, 
  Radio, 
  Send, 
  Smile, 
  HeartCrack,
  Image as ImageIcon
} from 'lucide-react';

export default function LoveLinesHome() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans selection:bg-[#B33951] selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#121212]/90 border-b border-[#2A2A2A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-[#A3A3A3] hover:text-white transition" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
          <span className="text-xl font-serif font-bold tracking-wide text-[#F4EBE8] flex items-center gap-1">
            LoveLines <Heart className="w-4 h-4 fill-[#B33951] text-[#B33951] inline" />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#A3A3A3] hover:text-white transition" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-[#A3A3A3] hover:text-white transition" aria-label="Favorites">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="pb-24 max-w-md mx-auto">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#2A1B1E] to-[#121212] px-4 pt-8 pb-6 border-b border-[#2A2A2A]">
          <span className="text-xs font-bold tracking-widest text-[#E57A82] uppercase block mb-2">
            Your True Love Story Starts Here
          </span>
          <h1 className="text-3xl font-serif font-semibold text-white leading-tight mb-3">
            Rediscover Connection and Joy.
          </h1>
          <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
            Heartfelt stories, expert advice, and a community of real people nurturing lasting connection.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#B33951] hover:bg-[#942E42] text-white py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 shadow-lg shadow-[#B33951]/10">
              Read Stories <Heart className="w-4 h-4" />
            </button>
            <button className="w-full bg-transparent hover:bg-[#2A2A2A] text-[#E0E0E0] border border-[#404040] py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2">
              Listen to Podcasts <Radio className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Media Split Section (Video & Images Side-by-Side Grid) */}
        <section className="py-6 px-4 border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold flex items-center gap-2 text-white">
              <Heart className="w-4 h-4 text-[#E57A82]" /> Latest Real Stories
            </h2>
            <a href="#" className="text-xs font-medium text-[#E57A82] hover:underline">View real stories &rarr;</a>
          </div>

          <div className="grid grid-cols-2 gap-4 items-start">
            
            {/* Left Column: Featured Video Spotlight */}
            <div className="flex flex-col gap-2">
              <div className="relative aspect-[3/4] w-full bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl overflow-hidden group cursor-pointer">
                {/* Visual Video Placeholder Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <button className="w-12 h-12 rounded-full bg-[#B33951] hover:bg-[#942E42] hover:scale-105 active:scale-95 text-white flex items-center justify-center shadow-xl transition duration-200" aria-label="Play Featured Video">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </button>
                </div>
                {/* Fallback pattern graphics when no img source is present */}
                <div className="w-full h-full bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] flex items-center justify-center text-xs text-[#555] italic">
                  [Featured Video]
                </div>
              </div>
              <span className="text-xs font-semibold text-white tracking-wide truncate">
                A Chance Meeting (TRUE STORY)
              </span>
            </div>

            {/* Right Column: Featured Love Snippets (Image Gallery Grid) */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">Featured Love Snippets</span>
                  <a href="#" className="text-[10px] font-medium text-[#E57A82] hover:underline">View all</a>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl overflow-hidden flex items-center justify-center text-[9px] text-[#555] relative group cursor-pointer hover:border-[#404040] transition">
                      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition text-[#E57A82]">
                        <Heart className="w-2.5 h-2.5 fill-[#B33951]" />
                      </div>
                      <ImageIcon className="w-3.5 h-3.5 text-[#333]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Reading Streak Embedded Micro-Card */}
              <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-2.5 mt-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#A3A3A3] tracking-wide uppercase">Your Reading Streak</span>
                  <span className="text-[10px] font-bold text-white flex items-center gap-0.5">❤️ 4 days</span>
                </div>
                {/* Progress bars */}
                <div className="flex gap-1 h-1">
                  {[true, true, true, true, false, false, false].map((active, i) => (
                    <span key={i} className={`flex-1 rounded-full ${active ? 'bg-[#B33951]' : 'bg-[#333]'}`}></span>
                  ))}
                </div>
                <p className="text-[9px] text-[#A3A3A3] leading-tight">
                  Read one story a day to keep your streak—and unlock this week's Story of the Week.
                </p>
                <button className="w-full bg-[#2A1B1E] border border-[#4A252C] hover:bg-[#3A2529] text-[#E57A82] py-1.5 px-2 rounded-lg text-[9px] font-medium transition text-center mt-1">
                  Go to Community Dashboard &rarr;
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Relationship Tips */}
        <section className="py-6 px-4 border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-white">Relationship Tips</h2>
            <a href="#" className="text-xs font-medium text-[#E57A82] hover:underline">View all tips &rarr;</a>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Better Communication", desc: "Simple ways to talk and truly connect.", icon: MessageSquare },
              { label: "Build Stronger Bonds", desc: "Nurture intimacy and emotional connection.", icon: Heart },
              { label: "Overcoming Challenges", desc: "Handle conflicts and grow together.", icon: HeartCrack }
            ].map((tip, idx) => (
              <div key={idx} className="bg-[#1E1E1E] border border-[#2A2A2A] p-3 rounded-xl flex items-center justify-between hover:border-[#404040] transition cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2A1B1E] flex items-center justify-center text-[#E57A82]">
                    <tip.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-white group-hover:text-[#E57A82] transition">{tip.label}</h3>
                    <p className="text-[11px] text-[#A3A3A3] mt-0.5">{tip.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#555] group-hover:text-[#A3A3A3] transition" />
              </div>
            ))}
          </div>
        </section>

        {/* Explore by Topic */}
        <section className="py-6 px-4 border-b border-[#2A2A2A]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-white">Explore by Topic</h2>
            <a href="#" className="text-xs font-medium text-[#E57A82] hover:underline">View all topics &rarr;</a>
          </div>
          <div className="grid grid-cols-4 gap-2.5 text-center">
            {[
              { name: "First Love", icon: Heart },
              { name: "Long Distance", icon: Send },
              { name: "Marriage", icon: Users },
              { name: "Breakups", icon: HeartCrack },
              { name: "Self Love", icon: Smile },
              { name: "Everything Love", icon: Compass }
            ].map((topic, idx) => (
              <div key={idx} className="bg-[#1E1E1E] border border-[#2A2A2A] p-2.5 rounded-xl flex flex-col items-center justify-center gap-1.5 hover:border-[#404040] transition cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#121212] border border-[#2A2A2A] flex items-center justify-center text-[#E57A82]">
                  <topic.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-medium text-[#A3A3A3] truncate w-full">{topic.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Community Callout Banner */}
        <section className="m-4 p-5 bg-gradient-to-r from-[#3A1C22] to-[#1E1E1E] border border-[#4A252C] rounded-2xl text-center">
          <h2 className="text-sm font-medium text-white mb-1">Be part of a thriving community.</h2>
          <p className="text-[11px] text-[#A3A3A3] mb-4">Share your story, ask questions, and connect with other real people.</p>
          <button className="w-full bg-white hover:bg-[#E0E0E0] text-[#121212] py-2.5 px-4 rounded-xl text-xs font-medium transition shadow-md">
            Join Our Community
          </button>
        </section>

      </main>

      {/* Persistent Bottom Mobile Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-[#121212]/95 backdrop-blur-md border-t border-[#2A2A2A] py-2 px-6 flex justify-between items-center shadow-2xl">
        {[
          { label: "Home", icon: Home, active: true },
          { label: "Stories", icon: BookOpen },
          { label: "Search", icon: Search },
          { label: "Podcast", icon: Radio },
          { label: "Community", icon: Users }
        ].map((item, idx) => (
          <button key={idx} className={`flex flex-col items-center gap-1 transition ${item.active ? 'text-[#E57A82]' : 'text-[#888] hover:text-white'}`}>
            <item.icon className="w-5 h-5" />
            <span className="text-[9px] font-medium tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}
