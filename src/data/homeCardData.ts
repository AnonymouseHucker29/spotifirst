type ArtistsHomeCard = {
  id: number;
  artistName: string;
  imageUrl?: string;
};

type TracksHomeCard = {
  id: number;
  songTitle: string;
  artist: string;
  album: {
    imageUrl?: string;
    date: number;
  };
};

//Tracks

const DataTracksHomeCard: TracksHomeCard[] = [
  {
    id: 1,
    songTitle: "Californication",
    artist: "Red Hot Chili Peppers",
    album: {
      imageUrl:
        "https://a1.mzstatic.com/r40/Music124/v4/4c/86/1d/4c861dab-5428-f3b7-8068-82bb69db5e89/093624932130.jpg",
      date: 1999,
    },
  },
  {
    id: 2,
    songTitle: "Blank Space (Taylor's Version)",
    artist: "Taylor Swift",
    album: {
      imageUrl:
        "https://a1.mzstatic.com/r40/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg",
      date: 2023,
    },
  },
  {
    id: 3,
    songTitle: "Far Away",
    artist: "Nickelback",
    album: {
      imageUrl:
        "https://a1.mzstatic.com/r40/Music114/v4/f8/e0/db/f8e0db52-f6e5-5d85-6e0a-ae73e5caab11/mzi.qohxegpg.jpg",
      date: 2005,
    },
  },
  {
    id: 4,
    songTitle: "Minsan",
    artist: "Eraserheads",
    album: {
      imageUrl:
        "https://a1.mzstatic.com/r40/Music114/v4/89/fe/3a/89fe3a63-b2e4-6754-088f-6bf8ca082e66/mzi.usmznyqj.jpg",
      date: 1994,
    },
  },
  {
    id: 5,
    songTitle: "ICON",
    artist: "TWICE",
    album: {
      imageUrl:
        "https://a1.mzstatic.com/r40/Music126/v4/87/f5/e0/87f5e0de-c909-f4e6-9621-123565dfbc80/738676858440_Cover.jpg",
      date: 2021,
    },
  },
];

//Artists
const DataArtistsHomeCard: ArtistsHomeCard[] = [
  {
    id: 1,
    artistName: "Red Hot Chili Peppers",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/5630cc5f05e9ea9d84bdfbd9f54497ce.jpg#5630cc5f05e9ea9d84bdfbd9f54497ce",
  },
  {
    id: 2,
    artistName: "Taylor Swift",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/2f3621786e7e820c77e9bac66abf4089.jpg#2f3621786e7e820c77e9bac66abf4089",
  },
  {
    id: 3,
    artistName: "Nickelback",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/f9ce8be2d5ddd1a046227d4b3df9b510.jpg#f9ce8be2d5ddd1a046227d4b3df9b510",
  },
  {
    id: 4,
    artistName: "Eraserheads",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/74d06babb702072b5742b34fda9acb09.jpg#74d06babb702072b5742b34fda9acb09",
  },
  {
    id: 5,
    artistName: "TWICE",
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/554ad4bd4f793a16997100482d280e8a.jpg#554ad4bd4f793a16997100482d280e8a",
  },
];

export { DataTracksHomeCard, DataArtistsHomeCard };
