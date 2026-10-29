export type Book = {
  title: string;
  author: string;
  /** Path under /public. When missing, a typed placeholder tile is shown. */
  cover?: string;
  /** Placeholder tile colours, used only when there is no cover. */
  bg?: string;
  fg?: string;
};

export const books: Book[] = [
  { title: "Red Rising", author: "Pierce Brown", cover: "/books/red-rising.jpg" },
  { title: "Golden Son", author: "Pierce Brown", cover: "/books/golden-son.jpg" },
  { title: "Morning Star", author: "Pierce Brown", cover: "/books/morning-star.jpg" },
  { title: "Iron Gold", author: "Pierce Brown", cover: "/books/iron-gold.jpg" },
  { title: "Dark Age", author: "Pierce Brown", cover: "/books/dark-age.jpg" },
  { title: "Light Bringer", author: "Pierce Brown", cover: "/books/light-bringer.jpg" },
  { title: "Th1rt3een", author: "Steve Cavanagh", cover: "/books/thirteen.jpg" },
  { title: "The Carnivorous City", author: "Toni Kan", cover: "/books/carnivorous-city.jpg" },
  { title: "100 Days in the Deadland", author: "Rachel Aukes", bg: "#5a2a1a", fg: "#f0e0c0" },
  { title: "Deadland's Harvest", author: "Rachel Aukes", cover: "/books/deadlands-harvest.jpg" },
  { title: "Deadland Rising", author: "Rachel Aukes", cover: "/books/deadland-rising.jpg" },
  { title: "The Death of Vivek Oji", author: "Akwaeke Emezi", cover: "/books/vivek-oji.jpg" },
  { title: "A Broken People's Playlist", author: "Chimeka Garricks", cover: "/books/broken-playlist.jpg" },
];
