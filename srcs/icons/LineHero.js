export default function LineHero({ width = 443, height = 500 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox={"0 0 " + width + " " + height}
      style={{ marginTop: "-220px" }}
    >
      <path
        stroke="url(#line_hero)"
        strokeLinecap="round"
        strokeWidth="3"
        d="M13.536 644.5L13.536 221.5"
      ></path>
      <defs>
        <linearGradient
          id="line_hero"
          x1="15.036"
          x2="15.036"
          y1="646"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#97ff9f"></stop>
          <stop offset="0.4" stopColor="#7ee787"></stop>
          <stop offset="0.599" stopColor="#7ee787"></stop>
          <stop offset="0.902" stopColor="#6639BA"></stop>
          <stop offset="1" stopColor="#D2A8FF" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
