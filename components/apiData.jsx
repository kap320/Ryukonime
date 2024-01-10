export async function fetchHome() {
  const res = await fetch(`https://komi.katowproject.app/api/otakudesu/home`);
  const data = res.json();
  return data;
}

export async function fetchSearch(query) {
  const res = await fetch(
    `https://otakudesu-anime-api.vercel.app/api/v1/search/${query}`
  );
  const data = res.json();
  return data;
}

export async function fetchDetail(endpoint) {
  const res = await fetch(
    `https://otakudesu-anime-api.vercel.app/api/v1/detail${endpoint}`
  );
  const data = res.json();
  return data;
}

export async function fetchDaftar() {
  const res = await fetch(
    "https://otakudesu-anime-api.vercel.app/api/v1/anime-list"
  );
  const data = res.json();
  return data;
}

export async function fetchJadwal() {
  const res = await fetch(
    "https://otakudesu-anime-api.vercel.app/api/v1/ongoing"
  );
  const data = res.json();
  return data;
}

export async function fetchEpisode(episode, id) {
  const url = id
    ? `https://otakudesu-anime-api.vercel.app/api/v1/episode/${episode}/?id=${id}`
    : `https://otakudesu-anime-api.vercel.app/api/v1/episode/${episode}`;
  const res = await fetch(url);
  const data = res.json();
  return data;
}
