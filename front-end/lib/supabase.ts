import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
};

export type BrokerConnection = {
  id: string;
  user_id: string;
  broker_name: 'dhan' | 'zerodha' | 'upstox' | 'angel_one';
  api_key: string;
  api_secret: string;
  access_token: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type TradingRule = {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  symbol: string;
  timeframe: string;
  indicators: unknown;
  entry_conditions: unknown;
  exit_conditions: unknown;
  risk_settings: unknown;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type Trade = {
  id: string;
  user_id: string;
  rule_id: string | null;
  broker_connection_id: string | null;
  symbol: string;
  trade_type: 'buy' | 'sell';
  entry_price: number;
  exit_price: number | null;
  quantity: number;
  status: 'open' | 'closed' | 'cancelled';
  is_simulated: boolean;
  pnl: number;
  entry_time: string;
  exit_time: string | null;
  metadata: unknown;
};

export type PerformanceMetrics = {
  id: string;
  user_id: string;
  date: string;
  total_trades: number;
  winning_trades: number;
  losing_trades: number;
  total_pnl: number;
  win_rate: number;
  created_at: string;
};
