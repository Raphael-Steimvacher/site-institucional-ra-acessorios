import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(180deg, #111111 0%, #000000 100%)",
          border: "1px solid rgba(245, 158, 11, 0.35)",
          borderRadius: "8px",
          boxShadow: "inset 0 1px 8px rgba(255,255,255,0.08)",
          color: "#facc15",
          display: "flex",
          fontSize: "18px",
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.08em",
          lineHeight: 1,
          width: "100%",
        }}
      >
        RA
      </div>
    ),
    {
      ...size,
    },
  );
}
