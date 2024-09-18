import Image from "next/image";

import Container from "../shared/Container";

export default function Tasks() {
  return (
    <Container name="Your Tasks" className="text-white" isEmpty>
      <div className="mt-16 flex h-full flex-col items-center justify-center gap-2 text-center font-mulish">
        <Image
          src="/assets/png/empty.png"
          alt="empty-img"
          width={150}
          height={150}
        />
        <span className="font-recoletaAlt text-xl">Coming Soon!</span>

        <div className="mt-2 text-sm flex flex-col gap-1">
          <span>The task management feature will be available soon.</span>
          <span>Stay tuned for updates!</span>
        </div>
      </div>
    </Container>
  );
}
