export type Profile = {
  display_name: string;
  email: string;
  country: string;
  followers: {
    total: number;
  };
  images: { url: string }[];
  external_urls: {
    spotify: string;
  };
  product: string;
};

export type Tracks = {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  artists: {
    name: string;
    id: string;
    external_urls: { spotify: string };
  }[];
  album: {
    images: {
      url: string;
    }[];
    name: string;
    external_urls: {
      spotify: string;
    };
    release_date: string;
  };
};

export type Artists = {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    total: number;
  };
  images: {
    url: string;
  }[];
};
