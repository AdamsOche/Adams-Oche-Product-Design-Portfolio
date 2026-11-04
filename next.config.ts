import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Next serves public/ files only by exact path, so map the folder URL
      // to the static prototype's index.html. Only this prototype.
      {
        source: "/projects/plaza-board",
        destination: "/projects/plaza-board/index.html",
      },
    ];
  },
};

export default nextConfig;
