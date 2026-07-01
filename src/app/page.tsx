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
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2426] font-sans antialiased selection:bg-[#802234] selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFEAE4] px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-[#4A3E3D] hover:text-[#802234] transition" aria-label="Menu">
            <Menu className="w-6 h-6 stroke-[2]" />
          </button>
          <span className="text-2xl font-serif font-bold tracking-tight text-[#802234] flex items-center gap-1">
            LoveLines <Heart className="w-4 h-4 fill-[#802234] text-[#802234] inline" />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#4A3E3D] hover:text-[#802234] transition" aria-label="Search">
            <Search className="w-5 h-5 stroke-[2]" />
          </button>
          <button className="text-[#4A3E3D] hover:text-[#802234] transition" aria-label="Favorites">
            <Heart className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </header>

      <main className="pb-24 max-w-md mx-auto bg-[#FDFBF7]">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#F3ECE4] to-[#FDFBF7] px-5 pt-8 pb-8 text-left">
          <span className="text-[11px] font-bold tracking-widest text-[#943E48] uppercase block mb-2.5">
            Your True Love Story Starts Here.
          </span>
          <h1 className="text-3.5xl font-serif font-bold text-[#1F1617] leading-[1.15] tracking-tight mb-3">
            Rediscover<br />Connection<br />and Joy.
          </h1>
          <p className="text-[13px] text-[#5A4F50] font-normal leading-relaxed max-w-[85%] mb-6">
            Heartfelt stories, expert advice, and a community of real people nurturing lasting connection.
          </p>
          <div className="flex flex-col gap-2.5 max-w-[70%]">
            <button className="w-full bg-[#802234] hover:bg-[#661A29] text-white py-2.5 px-4 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2 shadow-sm">
              Read Stories <Heart className="w-4 h-4 fill-white" />
            </button>
            <button className="w-full bg-transparent hover:bg-[#F3ECE4] text-[#4A3E3D] border border-[#A69B97] py-2.5 px-4 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2">
              Listen to Podcasts <Radio className="w-4 h-4" />
            </button>
          </div>
          
          {/* Subtle illustrative container boundary matching the mock layout framing */}
          <div className="absolute right-0 top-12 bottom-4 w-[35%] bg-gradient-to-l from-[#F3ECE4]/40 to-transparent pointer-events-none rounded-l-2xl border-l border-white/20" />
        </section>

        {/* Media Split Feed Section */}
        <section className="py-2 px-4">
          <div className="flex items-center justify-between mb-3.5 px-1">
            <h2 className="text-sm font-bold flex items-center gap-2 text-[#1F1617]">
              <Heart className="w-4 h-4 text-[#943E48] fill-[#943E48]" /> Latest Real Stories
            </h2>
            <a href="#" className="text-xs font-semibold text-[#943E48] hover:underline flex items-center gap-0.5">
              View real stories <span className="text-[10px]">&rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-12 gap-3.5 items-start">
            
            {/* Left Column: Featured Video Spotlight (5.5 cols out of 12) */}
            <div className="col-span-6 flex flex-col gap-2 bg-white p-2 rounded-2xl border border-[#EFEAE4] shadow-sm">
              <div className="relative aspect-[3/4] w-full bg-[#F3ECE4] rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition duration-200" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button className="w-11 h-11 rounded-full bg-[#802234] text-white flex items-center justify-center shadow-md shadow-[#802234]/20 transition" aria-label="Play Video">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </button>
                </div>
                <div className="w-full h-full bg-[#EFEAE4] flex items-center justify-center text-[10px] text-[#A69B97] italic">
                  [Video Preview]
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#1F1617] px-1 pb-1 tracking-tight line-clamp-1">
                A Chance Meeting (TRUE STORY)
              </span>
            </div>

            {/* Right Column: Gallery Grid & Streak Card (6 cols out of 12) */}
            <div className="col-span-6 flex flex-col justify-between min-h-full">
              <div>
                <div className="flex items-center justify-between mb-2 px-0.5">
                  <span className="text-[11px] font-bold text-[#1F1617]">Featured Love Snippets</span>
                  <a href="#" className="text-[10px] font-bold text-[#943E48] hover:underline">View all</a>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-white border border-[#EFEAE4] rounded-xl overflow-hidden flex items-center justify-center text-[10px] relative cursor-pointer shadow-sm hover:border-[#A69B97] transition">
                      <ImageIcon className="w-4 h-4 text-[#C4B9B5]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Reading Streak Embedded Card */}
              <div className="bg-[#F6EFEA] border border-[#EAE0D7] rounded-xl p-3 mt-3.5 flex flex-col gap-1.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#5A4F50] tracking-wide uppercase">Your Reading Streak</span>
                  <span className="text-[10px] font-bold text-[#1F1617] flex items-center gap-0.5">❤️ 4 days</span>
                </div>
                <div className="flex gap-1 h-1 my-0.5">
                  {[true, true, true, true, false, false, false].map((active, i) => (
                    <span key={i} className={`flex-1 rounded-full ${active ? 'bg-[#802234]' : 'bg-[#D6C9C3]'}`}></span>
                  ))}
                </div>
                <p className="text-[9px] text-[#5A4F50] font-normal leading-tight">
                  Read one story a day to keep your streak—and unlock this week's Story of the Week.
                </p>
                <button className="w-full bg-white border border-[#E2D5CB] hover:bg-[#F3ECE4] text-[#802234] py-1.5 px-2 rounded-lg text-[9px] font-bold transition text-center mt-1 shadow-sm">
                  Go to Community Dashboard &rarr;
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Relationship Tips */}
        <section className="py-5 px-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-sm font-bold text-[#1F1617] flex items-center gap-1">
              <span className="text-xs">📝</span> Relationship Tips
            </h2>
            <a href="#" className="text-xs font-semibold text-[#943E48] hover:underline">View all tips &rarr;</a>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Better Communication", desc: "Simple ways to talk and truly connect.", icon: MessageSquare },
              { label: "Build Stronger Bonds", desc: "Nurture intimacy and emotional connection.", icon: Heart },
              { label: "Overcoming Challenges", desc: "Handle conflicts and grow together.", icon: HeartCrack }
            ].map((tip, idx) => (
              <div key={idx} className="bg-white border border-[#EFEAE4] p-3 rounded-xl flex items-center justify-between hover:border-[#A69B97] transition cursor-pointer group shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F6EFEA] flex items-center justify-center text-[#943E48]">
                    <tip.icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1F1617] group-hover:text-[#802234] transition">{tip.label}</h3>
                    <p className="text-[11px] text-[#5A4F50] font-normal mt-0.5">{tip.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#A69B97] group-hover:text-[#4A3E3D] transition" />
              </div>
            ))}
          </div>
        </section>

        {/* Explore by Topic */}
        <section className="py-5 px-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-sm font-bold text-[#1F1617]">Explore by Topic</h2>
            <a href="#" className="text-xs font-semibold text-[#943E48] hover:underline">View all topics &rarr;</a>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { name: "First Love", icon: Heart },
              { name: "Long Distance", icon: Send },
              { name: "Marriage", icon: Users },
              { name: "Breakups", icon: HeartCrack },
              { name: "Self Love", icon: Smile },
              { name: "Everything Love", icon: Compass }
            ].map((topic, idx) => (
              <div key={idx} className="bg-white border border-[#EFEAE4] p-2.5 rounded-xl flex flex-col items-center justify-center gap-1.5 hover:border-[#A69B97] transition cursor-pointer shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#EFEAE4] flex items-center justify-center text-[#943E48]">
                  <topic.icon className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <span className="text-[10px] font-bold text-[#4A3E3D] truncate w-full">{topic.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Community Callout Banner */}
        <section className="mx-4 my-6 p-5 bg-[#802234] border border-[#661A29] rounded-2xl text-center shadow-md">
          <h2 className="text-sm font-bold text-white mb-1">Be part of a thriving community.</h2>
          <p className="text-[11px] text-white/80 font-normal mb-4">Share your story, ask questions, and connect with other real people.</p>
          <button className="w-full bg-white hover:bg-[#F3ECE4] text-[#802234] py-2.5 px-4 rounded-xl text-xs font-bold transition shadow-sm">
            Join Our Community
          </button>
        </section>

      </main>

      {/* Fixed Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#EFEAE4] py-2.5 px-6 flex justify-between items-center shadow-xl">
        {[
          { label: "Home", icon: Home, active: true },
          { label: "Stories", icon: BookOpen },
          { label: "Search", icon: Search },
          { label: "Podcast", icon: Radio },
          { label: "Community", icon: Users }
        ].map((item, idx) => (
          <button key={idx} className={`flex flex-col items-center gap-1 transition ${item.active ? 'text-[#802234]' : 'text-[#A69B97] hover:text-[#4A3E3D]'}`}>
            <item.icon className="w-5 h-5 stroke-[2]" />
            <span className="text-[9px] font-bold tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}
