import { Match, TableRow, Player, NewsItem } from './types';

// Updated: Jan 02, 2026

export const activeMatch: Match = {
  id: 112,
  team1: "Sylhet Titans",
  team2: "Rangpur Riders",
  team1Score: "145/6 (18.4)",
  team2Score: "142/8 (20.0)",
  status: "Live",
  result: "Sylhet needs 8 runs in 8 balls",
  venue: "Sylhet International Cricket Stadium"
};

export const pointsTableData: TableRow[] = [
  { rank: 1, team: "Rajshahi Warriors", played: 4, won: 3, lost: 1, nrr: "+0.145", pts: 6 },
  { rank: 2, team: "Sylhet Titans", played: 3, won: 2, lost: 1, nrr: "+0.037", pts: 4 },
  { rank: 3, team: "Chattogram Royals", played: 3, won: 1, lost: 2, nrr: "-0.450", pts: 2 },
  { rank: 4, team: "Dhaka Capitals", played: 3, won: 1, lost: 2, nrr: "-0.937", pts: 2 },
  { rank: 5, team: "Rangpur Riders", played: 2, won: 1, lost: 1, nrr: "+1.075", pts: 2 },
  { rank: 6, team: "Noakhali Express", played: 3, won: 0, lost: 3, nrr: "-1.393", pts: 0 },
];

export const topPerformers: { batsmen: Player[]; bowlers: Player[] } = {
  batsmen: [
    { name: "Parvez Hossain Emon", team: "Sylhet Titans", runs: 169, innings: 3, sr: 159.43, image: "/players/emon.jpg" },
    { name: "Najmul Hossain Shanto", team: "Rajshahi Warriors", runs: 162, innings: 4, sr: 150.00, image: "/players/shanto.jpg" },
    { name: "Mohammad Naim", team: "Chattogram Royals", runs: 145, innings: 3, sr: 135.20, image: "/players/naim.jpg" },
    { name: "Towhid Hridoy", team: "Dhaka Capitals", runs: 132, innings: 3, sr: 142.10, image: "/players/hridoy.jpg" },
    { name: "Litton Das", team: "Comilla Victorians", runs: 120, innings: 3, sr: 128.50, image: "/players/litton.jpg" },
  ],
  bowlers: [
    { name: "Shoriful Islam", team: "Chattogram Royals", wickets: 9, innings: 3, eco: 7.50, image: "/players/shoriful.jpg" },
    { name: "Salman Mirza", team: "Dhaka Capitals", wickets: 7, innings: 3, eco: 7.85, image: "/players/salman.jpg" },
    { name: "Faheem Ashraf", team: "Rangpur Riders", wickets: 6, innings: 2, eco: 6.20, image: "/players/faheem.jpg" },
    { name: "Tanvir Islam", team: "Comilla Victorians", wickets: 5, innings: 3, eco: 5.90, image: "/players/tanvir.jpg" },
    { name: "Mustafizur Rahman", team: "Comilla Victorians", wickets: 5, innings: 3, eco: 8.10, image: "/players/fizz.jpg" },
  ]
};

export const newsUpdates: NewsItem[] = [
  { id: 1, title: "Chattogram Royals ownership drama: BCB takes temporary charge", date: "01 Jan 2026", category: "Management" },
  { id: 2, title: "Dhaka Capitals secure first win against Rajshahi in thriller", date: "31 Dec 2025", category: "Match Report" },
  { id: 3, title: "Playoff format confirmed: Eliminator set for Jan 19", date: "29 Dec 2025", category: "Schedule" }
];