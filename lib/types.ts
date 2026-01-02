export interface Match {
  id: number;
  team1: string;
  team2: string;
  team1Score: string;
  team2Score: string;
  status: "Live" | "Completed" | "Scheduled";
  result: string;
  venue: string;
}

export interface Player {
  name: string;
  team: string;
  runs?: number;
  wickets?: number;
  innings: number;
  sr?: number; // Strike Rate
  eco?: number; // Economy
  image: string;
}

export interface TableRow {
  rank: number;
  team: string;
  played: number;
  won: number;
  lost: number;
  nrr: string;
  pts: number;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
}