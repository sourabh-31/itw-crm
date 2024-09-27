"use client";

import { useEffect } from "react";

// Noise overlay component
const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 min-h-screen opacity-20">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="2.4" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black">
      <p className="font-recoletaAlt text-2xl text-white">
        Something went wrong!
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 flex items-center gap-1 rounded bg-primary-100 px-4 py-2 font-mulish font-medium text-white"
      >
        Try Again
      </button>
      <NoiseOverlay />
    </section>
  );
}
