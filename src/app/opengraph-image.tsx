import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { identity } from "@/lib/site";

export const alt = `${identity.name}, ${identity.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same variable-font files the site itself would use if next/font/google
// exposed raw bytes — read once at module scope since they don't depend on
// request data (Next.js statically optimizes this route at build time).
const interTight = readFile(
  join(process.cwd(), "src/app/og-assets/InterTight-SemiBold.ttf")
);
const inter = readFile(join(process.cwd(), "src/app/og-assets/Inter-Medium.ttf"));

export default async function Image() {
  const [interTightData, interData] = await Promise.all([interTight, inter]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#f4f1ea",
          padding: "0 96px",
          border: "3px solid rgba(20, 18, 15, 0.4)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Inter Tight",
            fontWeight: 600,
            fontSize: 108,
            color: "#14120f",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {identity.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 30,
            color: "#4c4a46",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {identity.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: interTightData, style: "normal", weight: 600 },
        { name: "Inter", data: interData, style: "normal", weight: 500 },
      ],
    }
  );
}
