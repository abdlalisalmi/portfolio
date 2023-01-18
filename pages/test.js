export default function Test({ width = 443, height = 646 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 443 646"
    >
      <path
        stroke="url(#paint0_linear_120_10502)"
        strokeLinecap="round"
        strokeWidth="3"
        d="M13.536 644.5L13.536 221.5"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_120_10502"
          x1="15.036"
          x2="15.036"
          y1="646"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7ffa8a"></stop>
          <stop offset="0.4" stopColor="#7ee787"></stop>
          <stop offset="0.599" stopColor="#6639BA"></stop>
          <stop offset="0.902" stopColor="#6639BA"></stop>
          <stop offset="1" stopColor="#D2A8FF" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
