import { ArrowCircleLeft2 } from "iconsax-react";
import Link from "next/link";

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

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black">
      <p className="font-recoletaAlt text-2xl text-white">
        OOPS!! The page you are looking for could not be found!
      </p>
      <Link
        href="/"
        className="mt-4 flex items-center gap-1 font-mulish text-white"
      >
        <ArrowCircleLeft2 size="28" />
        <span className="text-lg">Go Back</span>
      </Link>
      <NoiseOverlay />
    </section>
  );
}
