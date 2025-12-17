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
              <h1 className="font-serif text-[48px] leading-[48px] font-light text-black relative inline-block group/name cursor-pointer">
                Aman Rana
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover/name:w-full"></span>
              </h1>
              <span className="font-serif text-[48px] leading-[48px] font-light text-[#f5c0c0] relative inline-block group/projects cursor-pointer">
                Projects
                <span className="absolute left-0 -bottom-3 w-0 h-[2px] bg-black transition-all duration-300 group-hover/projects:w-full"></span>
              </span>
            </header>

            {/* Main Content */}
            <main className="space-y-1 text-[20px] leading-[28px] font-light text-black">
              <ul className="space-y-0.5 list-none">
                <li>
                  Computer Science @{" "}
                  <a href="https://www.wlu.ca/programs/science/undergraduate/computer-science-ba-or-bsc-waterloo/index.html" target="_blank" rel="noopener noreferrer" className="relative inline-block group/wlu">
                    Wilfrid Laurier University
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/wlu:w-full"></span>
                  </a>
                </li>
                <li>
                  Recently worked part-time @{" "}
                  <a href="https://www.metroscg.com/" target="_blank" rel="noopener noreferrer" className="relative inline-block group/sci">
                    SCI Logistics
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/sci:w-full"></span>
                  </a>
                </li>
                <li className="font-medium">Recent!</li>
              </ul>
              <ul className="pl-7 space-y-0.5 text-black font-light">
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Released{" "}
                  <a href="https://github.com/amanr1245/Query" target="_blank" rel="noopener noreferrer" className="relative inline-block group/query">
                    Query
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/query:w-full"></span>
                  </a>
                  , a search and recommendation engine
                </li>
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Placed 🥈 @{" "}
                  <a href="https://www.aiatl.io/" target="_blank" rel="noopener noreferrer" className="relative inline-block group/aiatl">
                    AI ATL
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/aiatl:w-full"></span>
                  </a>
                  {" "}PrizePicks category
                </li>
                <li className="group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">↳</span>
                  Working on a{" "}
                  <a href="https://github.com/amanr1245/Personal-Knowledge-AI-Assistant" target="_blank" rel="noopener noreferrer" className="relative inline-block group/pkai">
                    Personal AI Knowledge Assistant
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/pkai:w-full"></span>
                  </a>
                </li>
                <li className="pt-0.5 group cursor-pointer">
                  <span className="mr-1 group-hover:text-[#f5c0c0] transition-colors duration-300">✦</span>
                  Wanna know more? Check out my{" "}
                  <a href="#" className="relative inline-block group/resume">
                    resume ↗
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover/resume:w-full"></span>
                  </a>
                </li>
              </ul>
              <ul className="space-y-0.5 list-none">
                <li className="font-medium">Other...</li>
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
                    <h3 className="text-[24px] leading-[32px] font-light hover:text-white transition-colors duration-300 cursor-pointer">Weight ↗</h3>
                  </div>
                  <div className="h-10 w-full flex items-center">
                    <div className="w-full h-[2px] bg-black"></div>
                  </div>
                </div>

                {/* Workouts Card */}
                <div className="bg-[#f5c0c0] rounded-xl p-6 relative overflow-hidden group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[24px] leading-[32px] font-light hover:text-white transition-colors duration-300 cursor-pointer">Workouts ↗</h3>
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
        <div className="pt-4">
          <div className="flex gap-4 text-black">
            <a href="https://github.com/amanr1245" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/amanrana05/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
            </a>
            <a href="mailto:ranaaman678@gmail.com">
              <Mail className="w-6 h-6 hover:text-[#f5c0c0] cursor-pointer transition-colors duration-300" />
            </a>
          </div>
          <div className="text-[16px] leading-[24px] font-light text-black mt-1">
            Aman Rana © 2025
          </div>
        </div>
      </div>
    </div>
  );
}
