import { fetchDetails} from "../../lib/tmbd";
import MovieRow from "@/app/components/MovieRow";
import HeroBanner from "./components/HeroBanner";

export default async function HomePage() {
  // Fetching movies data (server-side)
  const movies = await fetchDetails();

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-10">
      <h1 className="text-3xl font-bold">🎬 Streaming Dashboard</h1>
      <HeroBanner movie={movies.results[0]} />
      <MovieRow movies={movies.results} categoryTitle="🔥 Popular Movies" />
    </main>
  );
}
