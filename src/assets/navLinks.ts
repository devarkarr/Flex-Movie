interface NavType {
  title: string;
  subNavs: NavLinkType[];
}

interface NavLinkType {
  name: string;
  slug: string;
}

export const navLinks: NavType[] = [
  {
    title: "Movies",
    subNavs: <NavLinkType[]>[
      {
        name: "Popular",
        slug: "/movie",
      },
      {
        name: "Now Playing",
        slug: "/movie/now-playing",
      },
      {
        name: "Upcoming",
        slug: "/movie/upcoming",
      },
      {
        name: "Top Rated",
        slug: "/movie/top-rated",
      },
    ],
  },
  {
    title: "TV Shows",
    subNavs: <NavLinkType[]>[
      {
        name: "Popular",
        slug: "/tv",
      },
      {
        name: "Airing Today",
        slug: "/tv/airing-today",
      },
      {
        name: "On TV",
        slug: "/tv/on-the-air",
      },
      {
        name: "Top Rated",
        slug: "/tv/top-rated",
      },
    ],
  },
  {
    title: "People",
    subNavs: <NavLinkType[]>[
      {
        name: "Popular People",
        slug: "/person",
      },
    ],
  },
  {
    title: "More",
    subNavs: <NavLinkType[]>[
      {
        name: "Discussions",
        slug: "/discuss",
      },
      {
        name: "Leaderboard",
        slug: "/leaderboard",
      },
      {
        name: "Support",
        slug: "/talk",
      },
    ],
  },
];
