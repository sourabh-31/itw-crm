// Noise overlay component
const NoiseOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 min-h-screen opacity-20">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="2.4" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default NoiseOverlay;
