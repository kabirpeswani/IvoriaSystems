import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ivoria Systems';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'hsl(224, 71%, 4%)',
          color: 'hsl(210, 40%, 98%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
           <path
            d="M12 22V12"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1
          style={{
            fontSize: '72px',
            fontWeight: 700,
            marginTop: '20px',
            letterSpacing: '-0.02em'
          }}
        >
          Ivoria Systems
        </h1>
        <p
          style={{
            fontSize: '28px',
            color: 'hsl(215, 28%, 65%)',
            marginTop: '0px',
            textAlign: 'center',
            maxWidth: '800px'
          }}
        >
          Forging the Future of Defense Technology. Resilient, Secure, and Mission-Ready.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
