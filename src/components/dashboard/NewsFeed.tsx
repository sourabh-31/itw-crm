import Container from "../shared/Container";
import Feed from "../shared/Feed";

export default function NewsFeed() {
  return (
    <Container name="News Feed" className="bg-transparent p-0 text-white">
      <div className="flex flex-wrap gap-12 w-full">
        <Feed
          topic="📃Sep'24 Events List"
          description="Hey team, here is the new events list for September..."
          lottieSrc="/assets/lottie/check-badge.json"
          isActionBtn
        />

        <Feed
          topic="Top Performers"
          description="Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable."
          lottieSrc="/assets/lottie/medal-gold.json"
          isBtnText
        />

        <Feed
          topic="Top Performers"
          description="Congratulations to Maya, our outstanding top performer this month! Your dedication is truly remarkable."
          lottieSrc="/assets/lottie/medal-gold.json"
          isBtnText
        />
      </div>
    </Container>
  );
}
