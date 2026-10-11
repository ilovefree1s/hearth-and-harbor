-- Hearth & Harbor: run this once in Supabase → SQL Editor → New query → Run
-- Uses its own table (hh_games), so it can share a project with another app without touching that app's tables.

create table if not exists public.hh_games (
  id         text primary key,          -- the 5-letter game code
  state      jsonb not null,            -- the whole game
  v          integer not null default 1, -- version number, stops two players overwriting each other
  updated_at timestamptz not null default now()
);

-- keep updated_at fresh (handy for cleaning out old games later)
create or replace function public.hh_games_touch() returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;
drop trigger if exists hh_games_touch on public.hh_games;
create trigger hh_games_touch before update on public.hh_games
  for each row execute function public.hh_games_touch();

-- Anyone with the page can create, read and update games (no logins).
-- Fine for playing with friends; anyone who knows a game code could also edit that game.
alter table public.hh_games enable row level security;
drop policy if exists "hh_games read"   on public.hh_games;
drop policy if exists "hh_games create" on public.hh_games;
drop policy if exists "hh_games update" on public.hh_games;
create policy "hh_games read"   on public.hh_games for select using (true);
create policy "hh_games create" on public.hh_games for insert with check (true);
create policy "hh_games update" on public.hh_games for update using (true) with check (true);

-- Send live updates to everyone in a game
do $$ begin
  alter publication supabase_realtime add table public.hh_games;
exception when duplicate_object then null; end $$;

-- Optional: clear out games nobody has touched in a week
-- delete from public.hh_games where updated_at < now() - interval '7 days';
