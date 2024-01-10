export async function fetchHome() {
  const res = await fetch(`https://rizaapi.vercel.app/zoronime/home`);
  const data = res.json();
  return data;
}

export async function fetchSearch(query) {
  const res = await fetch(
    `https://rizaapi.vercel.app/api/zoronime/search/${query}`
  );
  const data = res.json();
  return data;
}

export async function fetchDetail(endpoint) {
  const res = await fetch(
    `https://rizaapi.vercel.app/zoronime/anime/${endpoint}`
  );
  const data = res.json();
  return data;
}

export async function fetchDaftar() {
  const res = await fetch(
    "https://rizaapi.vercel.app/zoronime/genre"
  );
  const data = res.json();
  return data;
}

export async function fetchJadwal() {
  const res = await fetch(
    "https://rizaapi.vercel.app/zoronime/ongoing"
  );
  const data = res.json();
  return data;
}

export async function fetchEpisode(episode, id) {
  const url = id
    ? `https://rizaapi.vercel.app/anime/:slug/:episode/${episode}/?id=${id}`
    : `https://rizaapi.vercel.app/anime/:slug/:episode/${episode}`;
  const res = await fetch(url);
  const data = res.json();
  return data;
}
