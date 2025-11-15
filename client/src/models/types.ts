export interface UserProfile {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    role: string;
    balance: number;
}

export interface UpcomingFight {
    red_fighter_name: string;
    red_fighter_record: string;
    event_date: string;
    blue_fighter_name: string;
    blue_fighter_record: string;
    id: number;
    red_fighter_id: number;
    blue_fighter_id: number;
    red_vote: number;
    blue_vote: number;
    draw_vote: number;
}

export interface fightPageData {
    id: number;
    red_fighter_id: string;
    blue_fighter_id: string;
    event_date: string;
    completed: boolean;
}

export interface Fighter {
  id: number;
  name: string;
  nickname: string;
  height: string;
  weight: string;
  reach: string;
  stance: string;
  record: string;
  dob: string;
  profile_url: string;
  elo_rating: number;
  rating_deviation: number;
  rating_volatility: number;
  quality_score: number;
}

export interface PreFightFeatures {
  red_height: number | null;
  blue_height: number | null;
  height_diff_cm: number | null;
  red_reach: number | null;
  blue_reach: number | null;
  reach_diff_cm: number | null;
  red_age: number | null;
  blue_age: number | null;
  age_diff: number | null;
  red_prime_score: number | null;
  blue_prime_score: number | null;
  prime_score_diff: number | null;
  red_fighter_elo: number | null;
  blue_fighter_elo: number | null;
  rivalry_dominance: number | null;
  red_fighter_quality_score: number | null;
  blue_fighter_quality_score: number | null;
  style_diff: number | null;
  red_style_score: number | null;
  blue_style_score: number | null;
  red_finish_score: number | null;
  blue_finish_score: number | null;
}

export interface PreFightData {
  features: PreFightFeatures;
  prediction: number;
  red_fighter: Fighter;
  blue_fighter: Fighter;
}

export type PastFight = {
    fight_id: number;
    red_fighter_id: number;
    blue_fighter_id: number;
    winner_id: number;
    event_date: string;
    win_method: string;
    final_round: number;
    red_knockdowns: number;
    red_sig_strikes: number;
    red_takedowns: number;
    blue_knockdowns: number;
    blue_sig_strikes: number;
    blue_takedowns: number;
    is_completed: number;
    event_url: string;
    red_sub_attempts: number;
    blue_sub_attempts: number;
    final_time_seconds: number;
    red_fighter_elo_before: number;
    blue_fighter_elo_before: number;
    red_fighter_elo_after: number;
    blue_fighter_elo_after: number;
};