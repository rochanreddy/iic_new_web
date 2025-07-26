export function CircuitPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10 10h20v20h20v20h20v20h-20v20h-20v-20h-20v-20h-20v-20z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="30" r="2" fill="currentColor" />
            <circle cx="70" cy="70" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}

export function GeometricGrid() {
  return (
    <div className="absolute inset-0 opacity-[0.02]">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%)] bg-[length:60px_60px]" />
    </div>
  );
}