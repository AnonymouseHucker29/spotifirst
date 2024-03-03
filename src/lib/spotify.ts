import { getSession } from "next-auth/react";

export const getAccessToken = async () => {
  const session = await getSession();
  if (!session?.accessToken) {
    throw new Error("Access token not found in session");
  }
  return session?.accessToken;
};

export const getMyProfile = async () => {
  const access_token = await getAccessToken();
  const MY_PROFILE_ENDPOINT = `https://api.spotify.com/v1/me`;

  const response = await fetch(MY_PROFILE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};

export const getTopArtists = async () => {
  const access_token = await getAccessToken();
  const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?limit=10`;

  const response = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};

export const getTopTracks = async () => {
  const access_token = await getAccessToken();
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=10`;

  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};

export const searchTracks = async (search: string) => {
  const access_token = await getAccessToken();
  const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`;

  const response = await fetch(SEARCH_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};
