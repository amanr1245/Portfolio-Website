import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background font-sans text-foreground flex flex-col px-8 lg:px-12 py-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Main content row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 pt-9">
          {/* Left Column - Main Content */}
          <div className="flex flex-col">
            {/* Header */}
            <header className="flex justify-between items-baseline mb-5">
              <h1 className="font-serif text-[48px] leading-[48px] font-light text-black">Aman Rana</h1>
              <span className="font-serif text-[48px] leading-[48px] font-light text-[#f5c0c0]">Projects</span>
            </header>

            {/* Main Content */}
            <main className="space-y-1 text-[20px] leading-[28px] font-light text-black">
              <ul className="space-y-0.5 list-none">
                <li className="flex items-center gap-2 group cursor-pointer">
                  <span className="group-hover:text-[#f5c0c0] transition-colors duration-300">◆</span>
                  <span>Computer Science @ Wilfrid Laurier University</span>
                </li>
                <li className="flex items-center gap-2 group cursor-pointer">
                  <span className="group-hover:text-[#f5c0c0] transition-colors duration-300">◆</span>
                  <span>Previously interned at SCI Group Inc.</span>
                </li>
                <li className="flex items-center gap-2 group cursor-pointer">
                  <span className="group-hover:text-[#f5c0c0] transition-colors duration-300">◆</span>
                  <span className="font-medium">Recent!</span>
                </li>
              </ul>
              <ul className="pl-7 space-y-0.5 text-black font-light">
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Released Query, a search and recommendation engine
                </li>
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Won 🥈 @ AI ATL PrizePicks category
                </li>
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Working on a Personal AI Knowledge Assistant
                </li>
                <li className="pt-0.5 group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">✦</span>
                  Wanna know more? Check out my resume <span className="inline">↗</span>
                </li>
              </ul>
              <ul className="space-y-0.5 list-none">
                <li className="flex items-center gap-2 group cursor-pointer">
                  <span className="group-hover:text-[#f5c0c0] transition-colors duration-300">◆</span>
                  <span className="font-medium">Other...</span>
                </li>
              </ul>
              <ul className="pl-7 text-black font-light">
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Avid bodybuilder ↓
                </li>
              </ul>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {/* Weight Card */}
                <div className="bg-[#f5c0c0] rounded-xl p-6 relative overflow-hidden group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[24px] leading-[32px] font-light">Weight</h3>
                    <span className="text-[20px]">↗</span>
                  </div>
                  <div className="h-10 w-full flex items-center">
                    <div className="w-full h-[2px] bg-black"></div>
                  </div>
                </div>

                {/* Workouts Card */}
                <div className="bg-[#f5c0c0] rounded-xl p-6 relative overflow-hidden group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[24px] leading-[32px] font-light">Workouts</h3>
                    <span className="text-[20px]">↗</span>
                  </div>
                  <div className="h-10 w-full flex items-center">
                    <div className="w-full h-[2px] bg-black"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* Right Column: Pink Panel - stretches to match left content height */}
          <div className="w-full bg-[#f5c0c0] rounded-xl overflow-hidden self-stretch">
          </div>
        </div>

        {/* Footer - separate from grid */}
        <div className="pt-3">
          <div className="flex gap-4 text-black">
            <Github className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
            <Linkedin className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
            <Mail className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
          </div>
          <div className="text-[16px] leading-[24px] font-light text-black mt-1">
            Aman Rana © 2025
          </div>
        </div>
      </div>
    </div>
  );
}
