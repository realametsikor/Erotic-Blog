import React from 'react';
import { Menu, Search, Heart, Play, Radio, ChevronRight, Image as ImageIcon, BookOpen, Users, Home, Smile, Compass, Send, HeartCrack, MessageSquare } from 'lucide-react';

export default function LoveLinesHome() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2426] font-sans selection:bg-[#802234] selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7] px-4 py-4 flex items-center justify-between border-b border-[#EDE6E1]">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-[#2D2426]" />
          <span className="text-xl font-serif font-bold text-[#802234]">LoveLines <Heart className="w-4 h-4 inline fill-[#802234]" /></span>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-[#2D2426]" />
          <Heart className="w-5 h-5 text-[#2D2426]" />
        </div>
      </header>

      <main className="pb-24 max-w-md mx-auto px-4 pt-6">
        
        {/* Hero Section */}
        <section className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#802234] mb-2">Your True Love Story Starts Here.</p>
          <h1 className="text-3xl font-serif font-bold text-[#2D2426] leading-tight mb-3">Rediscover Connection and Joy.</h1>
          <p className="text-sm text-[#5A5050] mb-6 leading-relaxed">Heartfelt stories, expert advice, and a community of real people nurturing lasting connection.</p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-[#802234] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">Read Stories <Heart className="w-4 h-4 fill-white" /></button>
            <button className="w-full bg-transparent border border-[#2D2426] text-[#2D2426] py-3 rounded-lg font-semibold flex items-center justify-center gap-2">Listen to Podcasts <Radio className="w-4 h-4" /></button>
          </div>
        </section>

        {/* Latest Real Stories Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold flex items-center gap-2"><Heart className="w-4 h-4 fill-[#802234] text-[#802234]" /> Latest Real Stories</h2>
            <a href="#" className="text-xs font-bold text-[#802234] flex items-center">View real stories <ChevronRight className="w-3 h-3" /></a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E6E3DF] rounded-2xl aspect-[3/4] flex items-center justify-center">
              <Play className="w-10 h-10 text-[#802234] fill-[#802234]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold">Featured Love Snippets</h3>
                <a href="#" className="text-[10px] font-bold text-[#802234]">View all</a>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4].map(i => <div key={i} className="bg-[#E6E3DF] aspect-square rounded-lg" />)}
              </div>
              <div className="bg-[#EFEAE4] p-3 rounded-xl mt-1">
                <div className="flex justify-between text-[10px] mb-1 font-bold"><span>YOUR READING STREAK</span> <span>❤️ 4 days</span></div>
                <div className="flex gap-1 mb-2"><div className="h-1 bg-[#802234] flex-1 rounded-full" /></div>
                <p className="text-[9px] text-[#5A5050]">Read one story a day to keep your streak...</p>
              </div>
            </div>
          </div>
          <p className="text-xs font-semibold mt-2">A Chance Meeting (TRUE STORY)</p>
        </section>

        {/* ... [Insert remaining sections for Tips and Topics here to complete layout] ... */}
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#FDFBF7] border-t border-[#EDE6E1] flex justify-around py-3 px-2">
        <Home className="w-6 h-6 text-[#802234]" />
        <BookOpen className="w-6 h-6 text-[#A69B97]" />
        <Search className="w-6 h-6 text-[#A69B97]" />
        <Radio className="w-6 h-6 text-[#A69B97]" />
        <Users className="w-6 h-6 text-[#A69B97]" />
      </nav>
    </div>
  );
}
