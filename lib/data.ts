import { Match, TableRow, Player, NewsItem } from './types';

// Updated: Jan 02, 2026 (12:50 PM BST)
// Context: Afternoon match (Dhaka vs Chattogram) concluded; Evening match (Sylhet vs Rangpur) is about to start.

export const activeMatch: Match = {
  id: 112,
  team1: "Sylhet Titans",
  team2: "Rangpur Riders",
  team1Score: "0/0",
  team2Score: "Yet to Bat",
  status: "Scheduled", // Match starts at 7:00 PM BST (BD Time) / 1:00 PM London Time
  result: "Toss scheduled for 6:30 PM",
  venue: "Sylhet International Cricket Stadium, Sylhet"
};

export const pointsTableData: TableRow[] = [
  { rank: 1, team: "Rajshahi Warriors", played: 4, won: 3, lost: 1, nrr: "+0.145", pts: 6 },
  { rank: 2, team: "Chattogram Royals", played: 3, won: 2, lost: 1, nrr: "+1.430", pts: 4 },
  { rank: 3, team: "Sylhet Titans", played: 3, won: 2, lost: 1, nrr: "+0.037", pts: 4 },
  { rank: 4, team: "Rangpur Riders", played: 2, won: 1, lost: 1, nrr: "+1.075", pts: 2 },
  { rank: 5, team: "Dhaka Capitals", played: 3, won: 1, lost: 2, nrr: "-0.937", pts: 2 },
  { rank: 6, team: "Noakhali Express", played: 3, won: 0, lost: 3, nrr: "-1.393", pts: 0 },
];

export const topPerformers: { batsmen: Player[]; bowlers: Player[] } = {
  batsmen: [
    { name: "Parvez Hossain Emon", team: "Sylhet Titans", runs: 169, innings: 3, sr: 159.43, image: "/players/emon.jpg" },
    { name: "Najmul Hossain Shanto", team: "Rajshahi Warriors", runs: 162, innings: 4, sr: 150.00, image: "/players/shanto.jpg" },
  ],
  bowlers: [
    { name: "Shoriful Islam", team: "Chattogram Royals", wickets: 6, innings: 3, eco: 7.50, image: "/players/shoriful.jpg" },
    { name: "Faheem Ashraf", team: "Rangpur Riders", wickets: 5, innings: 2, eco: 6.20, image: "/players/faheem.jpg" },
  ]
};

export const newsUpdates: NewsItem[] = [
  { id: 1, title: "Super Over Thriller: Rajshahi Warriors edge past Rangpur Riders", date: "01 Jan 2026", category: "Match Report" },
  { id: 2, title: "Noakhali Express coach under BCB investigation over identity issue", date: "02 Jan 2026", category: "Management" },
  { id: 3, title: "Playoff Venues Confirmed: Dhaka to host Final on Jan 23", date: "30 Dec 2025", category: "Schedule" }
];