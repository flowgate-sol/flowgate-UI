import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.7001 75.8006C59.466 75.8006 76.3001 58.9665 76.3001 38.2006C76.3001 17.4347 59.466 0.600586 38.7001 0.600586C17.9342 0.600586 1.1001 17.4347 1.1001 38.2006C1.1001 58.9665 17.9342 75.8006 38.7001 75.8006Z"
            fill="#09090A"
            stroke="#171D24"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.3999 31.7002C26.0999 34.9002 25.3999 38.4002 25.3999 41.9002H33.5999C33.4999 42.0002 33.2999 42.2002 33.1999 42.3002C30.6999 44.8002 28.7999 47.7002 27.3999 50.9002C26.0999 54.1002 25.3999 57.6002 25.3999 61.1002H33.8999C33.8999 58.7002 34.3999 56.4002 35.2999 54.2002C36.1999 52.0002 37.4999 50.0002 39.1999 48.3002C40.8999 46.6002 42.8999 45.3002 45.0999 44.4002C47.2999 43.5002 49.6999 43.0002 51.9999 43.0002V34.5002C48.4999 34.5002 44.9999 35.2002 41.7999 36.5002C38.8999 37.7002 36.1999 39.4002 33.8999 41.6002C33.8999 39.3002 34.3999 37.1002 35.2999 34.9002C36.1999 32.7002 37.4999 30.7002 39.1999 29.0002C40.8999 27.3002 42.8999 26.0002 45.0999 25.1002C47.2999 24.2002 49.6999 23.7002 51.9999 23.7002V15.2002C48.4999 15.2002 44.9999 15.9002 41.7999 17.2002C38.5999 18.5002 35.5999 20.5002 33.1999 23.0002C30.6999 25.6002 28.6999 28.5002 27.3999 31.7002Z"
            fill="#D6D6D6"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
