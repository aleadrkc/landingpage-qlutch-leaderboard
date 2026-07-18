"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

const top3Colors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-white",
  "bg-zinc-700 text-white",
];

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
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold bg-gray-100 text-muted-foreground sm:h-12 sm:w-12 sm:text-xl">
      1
    </div>
  );
}

function ScoreBox({ label, value }) {
  return (
    <div className="text-center space-y-1">
      <div className="text-[10px] text-muted-foreground sm:text-xs">{label}</div>
      <div className="text-base font-bold tabular-nums sm:text-lg">{value}</div>
    </div>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [standingsOpen, setStandingsOpen] = useState(true);
  const [resultsOpen, setResultsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = players.filter((p) =>
    p.team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-4">
        <div className="mobile-menu-container">
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "max-w-5xl bg-white dark:bg-zinc-900 rounded-full shadow-lg border border-transparent dark:border-zinc-800 px-4 sm:px-6 py-4"
                : "container py-2 px-4"
            }`}
          >
            <a href="/" className="transition-all duration-300 flex items-center">
              <Image
                alt="Qlutch Logo"
                src="./images/qlutch-logo-black.png"
                width={120}
                height={40}
                className="h-10 w-auto transition-all duration-300 dark:hidden"
                style={{ width: "auto", height: "auto" }}
                unoptimized
              />
              <Image
                alt="Qlutch Logo"
                src="./images/qlutch-logo-white.png"
                width={120}
                height={40}
                className="h-10 w-auto transition-all duration-300 hidden dark:block"
                style={{ width: "auto", height: "auto" }}
                unoptimized
              />
            </a>
            <nav className="hidden md:flex gap-8">
              <button className="font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer bg-transparent border-none p-0 text-black dark:text-white">
                Features
              </button>
              <button className="font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer bg-transparent border-none p-0 text-black dark:text-white">
                Pricing
              </button>
              <button className="font-medium transition-all duration-300 hover:text-primary hover:scale-110 cursor-pointer bg-transparent border-none p-0 text-black dark:text-white">
                FAQ
              </button>
            </nav>
            <div className="hidden md:block">
              <a
                href="/download"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 transition-all duration-300"
              >
                Download Apps
              </a>
            </div>
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-300 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 shadow-lg mx-4 rounded-lg mt-2 p-4 flex flex-col gap-3">
            <button className="font-medium text-black dark:text-white text-left bg-transparent border-none p-0 cursor-pointer">Features</button>
            <button className="font-medium text-black dark:text-white text-left bg-transparent border-none p-0 cursor-pointer">Pricing</button>
            <button className="font-medium text-black dark:text-white text-left bg-transparent border-none p-0 cursor-pointer">FAQ</button>
            <a href="/download" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 transition-all duration-300 w-fit">
              Download Apps
            </a>
          </div>
        )}
      </header>

      {/* Main content */}
      <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-4xl">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pair Padel 3 Leaderboard
            </h1>
            <p className="mt-2 text-lg text-muted-foreground sm:text-xl">Team Americano</p>
          </div>

          {/* Match Information Card */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm mb-6 border-none">
            <div className="px-6">
              <div className="flex items-start justify-between">
                <h2 className="font-semibold text-lg sm:text-xl">Match Information</h2>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-amber-500/20 bg-amber-500/10 text-amber-600">
                  In Progress
                </span>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Pada Padel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-sm text-muted-foreground">July 18, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Time</p>
                    <p className="text-sm text-muted-foreground">19:00 - 21:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Total Players</p>
                    <p className="text-sm text-muted-foreground">32 players</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 3v18" /><path d="M15 3v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Number of Courts</p>
                    <p className="text-sm text-muted-foreground">5 courts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Points per Game</p>
                    <p className="text-sm text-muted-foreground">4 points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Standings Card */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-none mt-6">
            <button
              onClick={() => setStandingsOpen(!standingsOpen)}
              className="w-full cursor-pointer hover:bg-muted/50 p-6 pb-2 rounded-t-xl text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <h2 className="font-semibold text-lg sm:text-xl">Standings</h2>
                  <p className="text-sm text-muted-foreground">Rankings and participant performance</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground sm:text-xs">Updated: 15:26</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${standingsOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
            </button>
            <div className="px-6 pb-4 pt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search player..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 justify-end w-full sm:w-auto">
                <span className="text-sm text-muted-foreground">Sort By</span>
                <select className="rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-[color,box-shadow] w-[120px] sm:w-[150px] h-9">
                  <option value="points">Points</option>
                  <option value="games">Games</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
            {standingsOpen && (
              <div className="px-6">
                <div className="space-y-3">
                  {filtered.map((p, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-lg border p-4 transition-all hover:shadow-md sm:gap-6 sm:p-5 ${i < 3 ? "border-primary/10 bg-primary/5" : "bg-card"}`}
                    >
                      <RankCircle top3={p.top3} />
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="truncate text-base font-semibold sm:text-lg">{p.team}</div>
                        <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-2">
                          <span className="text-xs text-muted-foreground min-w-[120px]">{p.games} games played</span>
                          {p.bonus > 0 && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-xs text-amber-600">+{p.bonus} bonus</span>
                            </>
                          )}
                          <span className="text-xs text-muted-foreground min-w-[120px]">
                            W/L/T: <span className="font-semibold text-foreground">{p.wlt}</span>
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">
                            Diff:{" "}
                            <span className={`font-semibold ${p.diff.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                              {p.diff}
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:hidden">
                          <span className="text-sm text-muted-foreground">{p.games} games played</span>
                          {p.bonus > 0 && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-sm text-amber-600">+{p.bonus} bonus</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-4">
                        <ScoreBox label="Points" value={p.points} />
                        <ScoreBox label="W" value={p.wlt.split("/")[0]} />
                        <ScoreBox label="Diff" value={p.diff} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Match Results Card */}
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-none mt-6">
            <button
              onClick={() => setResultsOpen(!resultsOpen)}
              className="w-full cursor-pointer hover:bg-muted/50 p-6 rounded-t-xl text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <h2 className="font-semibold text-lg sm:text-xl">Match Results</h2>
                  <span className="text-muted-foreground text-sm">Round by round game results and scores</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${resultsOpen ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            {resultsOpen && (
              <div className="px-6">
                <div className="space-y-3">
                  {[
                    { round: "Round 1", matches: ["adrian + yus 6-2 lukman + wulan", "aldian + febli 4-6 ahau + audrey", "danny + santika 5-3 mario + ros"] },
                    { round: "Round 2", matches: ["lukman + wulan 6-4 aldian + febli", "adrian + yus 5-1 ahau + audrey", "mario + ros 2-6 nata + yani"] },
                    { round: "Round 3", matches: ["adrian + yus 6-0 aldian + febli", "lukman + wulan 6-2 danny + santika", "ahau + audrey 4-6 nata + yani"] },
                    { round: "Round 4", matches: ["adrian + yus 4-6 mario + ros", "lukman + wulan 6-3 ahau + audrey", "aldian + febli 5-5 nata + yani"] },
                    { round: "Round 5", matches: ["adrian + yus 6-4 nata + yani", "lukman + wulan 5-3 mario + ros", "aldian + febli 6-2 danny + santika"] },
                    { round: "Round 6", matches: ["adrian + yus 5-5 axiang + selvy", "lukman + wulan 6-2 benny + novi", "aldian + febli 4-6 irwan + tania"] },
                    { round: "Round 7", matches: ["adrian + yus 6-1 deni + jo", "lukman + wulan 6-3 andre + yuli", "aldian + febli 5-5 yosua + lasya"] },
                  ].map((r, idx) => (
                    <div key={idx} className="rounded-lg border bg-card p-4 transition-all hover:shadow-md sm:p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-semibold">{r.round}</span>
                      </div>
                      <ul className="space-y-1">
                        {r.matches.map((m, j) => (
                          <li key={j} className="text-sm text-muted-foreground">
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-12">
            <div className="col-span-2 lg:col-span-2 space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Qlutch</h2>
              <p className="text-sm md:text-base text-gray-400 max-w-md">
                Your ultimate padel scoring partner. Track matches, analyze performance, and improve your game with comprehensive statistics and insights.
              </p>
              <div className="flex gap-3 md:gap-4 pt-1 md:pt-2">
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-primary-foreground flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-primary-foreground flex items-center justify-center transition-colors duration-300" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-primary-foreground flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-primary-foreground flex items-center justify-center transition-colors duration-300" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <p>© 2026 Qlutch. All rights reserved. • Last Updated: June 2026</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
