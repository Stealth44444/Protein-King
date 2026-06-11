export default function RedX({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#E02020" />
      <path d="M7 7l8 8M15 7l-8 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
