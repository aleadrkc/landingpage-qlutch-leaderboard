"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  MapPin,
  Calendar,
  Clock,
  Users,
  Trophy,
  Menu,
  X,
} from "lucide-react";

// All ranks changed to "1" per user request
const players = [
  { team: "adrian + yus", games: 7, bonus: 4, points: 26, wlt: "5/0/2", diff: "+20", top3: 0 },
  { team: "lukman + wulan", games: 7, bonus: 4, points: 24, wlt: "5/0/2", diff: "+16", top3: 1 },
  { team: "aldian + febli", games: 7, bonus: 4, points: 21, wlt: "4/2/1", diff: "+10", top3: 2 },
  { team: "ahau + audrey", games: 7, bonus: 4, points: 20, wlt: "2/0/5", diff: "+8", top3: -1 },
  { team: "danny + santika", games: 8, bonus: 2, points: 20, wlt: "4/2/2", diff: "+6", top3: -1 },
  { team: "mario + ros", games: 6, bonus: 6, points: 18, wlt: "2/2/2", diff: "+6", top3: -1 },
  { team: "nata + yani", games: 6, bonus: 6, points: 18, wlt: "1/1/4", diff: "+6", top3: -1 },
  { team: "axiang + selvy", games: 7, bonus: 4, points: 18, wlt: "2/2/3", diff: "+4", top3: -1 },
  { team: "benny + novi", games: 8, bonus: 2, points: 18, wlt: "3/2/3", diff: "+2", top3: -1 },
  { team: "irwan + tania", games: 6, bonus: 6, points: 16, wlt: "1/3/2", diff: "+2", top3: -1 },
  { team: "deni + jo", games: 7, bonus: 4, points: 16, wlt: "3/4/0", diff: "0", top3: -1 },
  { team: "andre + yuli", games: 8, bonus: 2, points: 16, wlt: "3/4/1", diff: "-2", top3: -1 },
  { team: "yosua + lasya", games: 9, bonus: 0, points: 16, wlt: "1/3/5", diff: "-4", top3: -1 },
  { team: "anton + fmei", games: 6, bonus: 6, points: 15, wlt: "0/3/3", diff: "0", top3: -1 },
  { team: "andy + hennie", games: 7, bonus: 4, points: 14, wlt: "1/5/1", diff: "-4", top3: -1 },
  { team: "alex + shandy", games: 8, bonus: 2, points: 12, wlt: "0/4/4", diff: "-10", top3: -1 },
];

const top3Colors = ["bg-[#e6c84c] text-[#3d3d3d]", "bg-[#003366] text-white", "bg-[#3d3d3d] text-white"];

function RankCircle({ top3 }) {
  if (top3 >= 0 && top3 < 3) {
    return (
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold sm:h-12 sm:w-12 sm:text-xl ${top3Colors[top3]}`}
      >
        1
      </div>
    );
  }
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold sm:h-12 sm:w-12 sm:text-xl bg-gray-100 text-gray-500">
      1
    </div>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [standingsOpen, setStandingsOpen] = useState(true);
  const [resultsOpen, setResultsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = players.filter((p) =>
    p.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mt-4">
        <div className="mx-auto flex items-center justify-between container py-2 px-4">
          <a href="/" className="flex items-center">
            <img
              alt="Qlutch Logo"
              src="/images/qlutch-logo-black.png"
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden md:flex gap-8">
            <button className="font-medium text-black hover:text-[#e6c84c] hover:scale-110 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer">
              Features
            </button>
            <button className="font-medium text-black hover:text-[#e6c84c] hover:scale-110 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer">
              Pricing
            </button>
            <button className="font-medium text-black hover:text-[#e6c84c] hover:scale-110 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer">
              FAQ
            </button>
          </nav>
          <div className="hidden md:block">
            <a
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-[#e6c84c] text-[#3d3d3d] hover:bg-[#d4b83a] h-9 px-4 py-2 transition-all duration-300"
            >
              Download Apps
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg text-black hover:bg-black/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg mx-4 rounded-lg mt-2 p-4 flex flex-col gap-3">
            <button className="font-medium text-black text-left bg-transparent border-none p-0 cursor-pointer">Features</button>
            <button className="font-medium text-black text-left bg-transparent border-none p-0 cursor-pointer">Pricing</button>
            <button className="font-medium text-black text-left bg-transparent border-none p-0 cursor-pointer">FAQ</button>
            <a href="/download" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-[#e6c84c] text-[#3d3d3d] hover:bg-[#d4b83a] h-9 px-4 py-2 transition-all duration-300 w-fit">
              Download Apps
            </a>
          </div>
        )}
      </header>

      {/* Main content */}
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-4xl">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pair Padel 3 Leaderboard
            </h1>
            <p className="mt-2 text-lg text-gray-500 sm:text-xl">Team Americano</p>
          </div>

          {/* Match Information Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between">
                <h2 className="font-semibold text-lg sm:text-xl">Match Information</h2>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-amber-500/20 bg-amber-50 text-amber-600">
                  In Progress
                </span>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-500">Pada Padel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-gray-500">July 18, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-gray-500">19:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Total Players</p>
                    <p className="text-sm text-gray-500">32 players</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-gray-400 mt-0.5 shrink-0 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Number of Courts</p>
                    <p className="text-sm text-gray-500">5 courts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Points per Game</p>
                    <p className="text-sm text-gray-500">4 points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Standings */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
            <button
              onClick={() => setStandingsOpen(!standingsOpen)}
              className="w-full cursor-pointer hover:bg-gray-50 p-6 pb-2 rounded-t-xl text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <span className="leading-none font-semibold">Standings</span>
                  <span className="text-gray-500 text-sm">Rankings and participant performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-500 sm:text-xs">Updated: 15:26</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${standingsOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
            </button>
            {/* Search + Sort */}
            <div className="px-6 pb-4 pt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search player..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 h-9 rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#e6c84c]"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 justify-end w-full sm:w-auto">
                <span className="text-sm text-gray-500">Sort By</span>
                <button className="flex items-center justify-between gap-2 rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm w-[120px] sm:w-[150px] h-9">
                  <span>Points</span>
                  <ChevronDown className="size-4 opacity-50" />
                </button>
              </div>
            </div>
            {standingsOpen && (
              <div className="px-6 pb-6">
                <div className="space-y-3">
                  {filtered.map((p, i) => (
                    <div
                      key={p.team}
                      className={`flex items-center gap-4 rounded-lg border p-4 transition-all hover:shadow-md sm:gap-6 sm:p-5 ${i < 3 ? "border-[#e6c84c]/10 bg-[#e6c84c]/5" : "bg-white"}`}
                    >
                      <RankCircle top3={p.top3} />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold truncate sm:text-lg">{p.team}</h3>
                        {/* Mobile stats */}
                        <div className="mt-1 space-y-1 sm:hidden">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 min-w-[120px]">{p.games} games played</span>
                            {p.bonus > 0 && (
                              <>
                                <span className="text-gray-400">•</span>
                                <span className="text-xs text-amber-600">+{p.bonus} bonus</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 min-w-[120px]">
                              W/L/T: <span className="font-semibold text-gray-800">{p.wlt}</span>
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              Diff:{" "}
                              <span className={`font-semibold ${p.diff.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                                {p.diff}
                              </span>
                            </span>
                          </div>
                        </div>
                        {/* Desktop */}
                        <div className="hidden sm:flex sm:items-center sm:gap-2 sm:mt-1">
                          <span className="text-sm text-gray-500">{p.games} games played</span>
                          {p.bonus > 0 && (
                            <>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-amber-600">+{p.bonus} bonus</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-4">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 sm:text-sm">Points</div>
                          <div className="text-lg font-bold sm:text-xl">{p.points}</div>
                        </div>
                        <div className="text-center hidden sm:block">
                          <div className="text-sm text-gray-500">W/L/T</div>
                          <div className="text-lg font-semibold">{p.wlt}</div>
                        </div>
                        <div className="text-center hidden sm:block">
                          <div className="text-sm text-gray-500">Diff</div>
                          <div className={`text-lg font-semibold ${p.diff.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                            {p.diff}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Match Results */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-6">
            <button
              onClick={() => setResultsOpen(!resultsOpen)}
              className="w-full cursor-pointer hover:bg-gray-50 p-6 rounded-t-xl text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <span className="leading-none font-semibold">Match Results</span>
                  <span className="text-gray-500 text-sm">Round by round game results and scores</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${resultsOpen ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            {resultsOpen && (
              <div className="px-6 pb-6">
                <Rounds />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-3">Qlutch</h2>
              <p className="text-sm text-gray-500 max-w-xs">
                Your ultimate padel scoring partner. Track matches, analyze performance, and improve your game with comprehensive statistics and insights.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#e6c84c] transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e6c84c] transition-colors" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e6c84c] transition-colors" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e6c84c] transition-colors" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">AI Context (llms.txt)</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Pricing (Markdown)</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#e6c84c] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <p>© 2026 Qlutch. All rights reserved. • Last Updated: June 2026</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#e6c84c] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#e6c84c] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Match rounds data
const rounds = [
  {
    round: 1,
    matches: [
      { court: 1, score1: "02", score2: "02", team1a: "alex", team1b: "shandy", team2a: "yosua", team2b: "lasya", winner: null },
      { court: 2, score1: "00", score2: "00", team1a: "lukman", team1b: "wulan", team2a: "mario", team2b: "ros", winner: null },
      { court: 3, score1: "00", score2: "00", team1a: "deni", team1b: "jo", team2a: "danny", team2b: "santika", winner: null },
      { court: 4, score1: "00", score2: "00", team1a: "andy", team1b: "hennie", team2a: "benny", team2b: "novi", winner: null },
      { court: 5, score1: "00", score2: "00", team1a: "aldian", team1b: "febli", team2a: "nata", team2b: "yani", winner: null },
    ],
  },
  {
    round: 2,
    matches: [
      { court: 1, score1: "01", score2: "03", team1a: "andre", team1b: "yuli", team2a: "lukman", team2b: "wulan", winner: 2 },
      { court: 2, score1: "03", score2: "01", team1a: "ahau", team1b: "audrey", team2a: "anton", team2b: "fmei", winner: 1 },
      { court: 3, score1: "02", score2: "02", team1a: "aldian", team1b: "febli", team2a: "alex", team2b: "shandy", winner: null },
      { court: 4, score1: "00", score2: "04", team1a: "axiang", team1b: "selvy", team2a: "adrian", team2b: "yus", winner: 2 },
      { court: 5, score1: "01", score2: "03", team1a: "deni", team1b: "jo", team2a: "benny", team2b: "novi", winner: 2 },
    ],
  },
  {
    round: 3,
    matches: [
      { court: 1, score1: "00", score2: "00", team1a: "irwan", team1b: "tania", team2a: "mario", team2b: "ros", winner: null },
      { court: 2, score1: "01", score2: "03", team1a: "yosua", team1b: "lasya", team2a: "danny", team2b: "santika", winner: 2 },
      { court: 3, score1: "00", score2: "00", team1a: "adrian", team1b: "yus", team2a: "anton", team2b: "fmei", winner: null },
      { court: 4, score1: "00", score2: "00", team1a: "ahau", team1b: "audrey", team2a: "andre", team2b: "yuli", winner: null },
      { court: 5, score1: "00", score2: "00", team1a: "axiang", team1b: "selvy", team2a: "nata", team2b: "yani", winner: null },
    ],
  },
  {
    round: 4,
    matches: [
      { court: 1, score1: "00", score2: "04", team1a: "alex", team1b: "shandy", team2a: "mario", team2b: "ros", winner: 2 },
      { court: 2, score1: "01", score2: "03", team1a: "irwan", team1b: "tania", team2a: "danny", team2b: "santika", winner: 2 },
      { court: 3, score1: "02", score2: "02", team1a: "benny", team1b: "novi", team2a: "nata", team2b: "yani", winner: null },
      { court: 4, score1: "03", score2: "01", team1a: "deni", team1b: "jo", team2a: "yosua", team2b: "lasya", winner: 1 },
      { court: 5, score1: "03", score2: "01", team1a: "aldian", team1b: "febli", team2a: "andy", team2b: "hennie", winner: 1 },
    ],
  },
  {
    round: 5,
    matches: [
      { court: 1, score1: "01", score2: "03", team1a: "andy", team1b: "hennie", team2a: "deni", team2b: "jo", winner: 2 },
      { court: 2, score1: "01", score2: "03", team1a: "aldian", team1b: "febli", team2a: "benny", team2b: "novi", winner: 2 },
      { court: 3, score1: "01", score2: "03", team1a: "axiang", team1b: "selvy", team2a: "lukman", team2b: "wulan", winner: 2 },
      { court: 4, score1: "02", score2: "02", team1a: "ahau", team1b: "audrey", team2a: "adrian", team2b: "yus", winner: null },
      { court: 5, score1: "02", score2: "02", team1a: "alex", team1b: "shandy", team2a: "andre", team2b: "yuli", winner: null },
    ],
  },
  {
    round: 6,
    matches: [
      { court: 1, score1: "02", score2: "02", team1a: "danny", team1b: "santika", team2a: "adrian", team2b: "yus", winner: null },
      { court: 2, score1: "02", score2: "02", team1a: "yosua", team1b: "lasya", team2a: "mario", team2b: "ros", winner: null },
      { court: 3, score1: "02", score2: "02", team1a: "axiang", team1b: "selvy", team2a: "anton", team2b: "fmei", winner: null },
      { court: 4, score1: "02", score2: "02", team1a: "ahau", team1b: "audrey", team2a: "nata", team2b: "yani", winner: null },
      { court: 5, score1: "01", score2: "03", team1a: "irwan", team1b: "tania", team2a: "andre", team2b: "yuli", winner: 2 },
    ],
  },
  {
    round: 7,
    matches: [
      { court: 1, score1: "03", score2: "01", team1a: "aldian", team1b: "febli", team2a: "anton", team2b: "fmei", winner: 1 },
      { court: 2, score1: "01", score2: "03", team1a: "benny", team1b: "novi", team2a: "mario", team2b: "ros", winner: 2 },
      { court: 3, score1: "02", score2: "02", team1a: "irwan", team1b: "tania", team2a: "yosua", team2b: "lasya", winner: null },
      { court: 4, score1: "00", score2: "04", team1a: "andy", team1b: "hennie", team2a: "lukman", team2b: "wulan", winner: 2 },
      { court: 5, score1: "02", score2: "02", team1a: "danny", team1b: "santika", team2a: "nata", team2b: "yani", winner: null },
    ],
  },
  {
    round: 8,
    matches: [
      { court: 1, score1: "01", score2: "03", team1a: "andy", team1b: "hennie", team2a: "adrian", team2b: "yus", winner: 2 },
      { court: 2, score1: "02", score2: "02", team1a: "benny", team1b: "novi", team2a: "lukman", team2b: "wulan", winner: null },
      { court: 3, score1: "03", score2: "01", team1a: "ahau", team1b: "audrey", team2a: "deni", team2b: "jo", winner: 1 },
      { court: 4, score1: "02", score2: "02", team1a: "alex", team1b: "shandy", team2a: "axiang", team2b: "selvy", winner: null },
      { court: 5, score1: "04", score2: "00", team1a: "aldian", team1b: "febli", team2a: "andre", team2b: "yuli", winner: 1 },
    ],
  },
  {
    round: 9,
    matches: [
      { court: 1, score1: "00", score2: "04", team1a: "alex", team1b: "shandy", team2a: "irwan", team2b: "tania", winner: 2 },
      { court: 2, score1: "03", score2: "01", team1a: "andre", team1b: "yuli", team2a: "danny", team2b: "santika", winner: 1 },
      { court: 3, score1: "00", score2: "04", team1a: "deni", team1b: "jo", team2a: "adrian", team2b: "yus", winner: 2 },
      { court: 4, score1: "02", score2: "02", team1a: "yosua", team1b: "lasya", team2a: "nata", team2b: "yani", winner: null },
      { court: 5, score1: "02", score2: "02", team1a: "ahau", team1b: "audrey", team2a: "axiang", team2b: "selvy", winner: null },
    ],
  },
  {
    round: 10,
    matches: [
      { court: 1, score1: "00", score2: "00", team1a: "mario", team1b: "ros", team2a: "nata", team2b: "yani", winner: null },
      { court: 2, score1: "00", score2: "00", team1a: "lukman", team1b: "wulan", team2a: "anton", team2b: "fmei", winner: null },
      { court: 3, score1: "00", score2: "00", team1a: "adrian", team1b: "yus", team2a: "andre", team2b: "yuli", winner: null },
      { court: 4, score1: "00", score2: "00", team1a: "danny", team1b: "santika", team2a: "andy", team2b: "hennie", winner: null },
      { court: 5, score1: "00", score2: "00", team1a: "deni", team1b: "jo", team2a: "axiang", team2b: "selvy", winner: null },
    ],
  },
];

function Rounds() {
  return (
    <div className="space-y-12">
      {rounds.map((r) => (
        <div key={r.round} className="space-y-3">
          <h3 className="text-lg font-semibold">Round {r.round}</h3>
          <div className="space-y-3">
            {r.matches.map((m, mi) => (
              <div key={mi} className="rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-md sm:p-5">
                <span className="text-sm text-gray-500 font-semibold">Court {m.court}</span>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <ScoreBox score={m.score1} isWinner={m.winner === 1} />
                  <span className="text-gray-400 text-xl">-</span>
                  <ScoreBox score={m.score2} isWinner={m.winner === 2} />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="space-y-0.5">
                    <p className={`text-md ${m.winner === 1 ? "font-semibold text-gray-800" : ""}`}>{m.team1a}</p>
                    <p className={m.winner === 1 ? "font-semibold text-gray-800" : ""}>{m.team1b}</p>
                  </div>
                  <div className="space-y-0.5 text-right">
                    <p className={`text-md ${m.winner === 2 ? "font-semibold text-gray-800" : ""}`}>{m.team2a}</p>
                    <p className={`text-md ${m.winner === 2 ? "font-semibold text-gray-800" : ""}`}>{m.team2b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScoreBox({ score, isWinner }) {
  if (isWinner) {
    return (
      <div className="flex h-12 w-12 items-center justify-center text-2xl sm:h-14 sm:w-14 sm:text-3xl text-gray-800 font-extrabold underline decoration-[#e6c84c] decoration-4 underline-offset-4">
        {score}
      </div>
    );
  }
  const isGray = score !== "00" && !isWinner;
  return (
    <div className={`flex h-12 w-12 items-center justify-center text-2xl sm:h-14 sm:w-14 sm:text-3xl font-medium ${score === "00" ? "text-gray-800 font-bold" : "text-gray-400/60"}`}>
      {score}
    </div>
  );
}
