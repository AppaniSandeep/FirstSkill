import Image from 'next/image';
import { fetchMovieById } from '../../../../lib/tmbd';


export default async function MoviePage({ params }: {params: Promise<{id: string}>}) {
    const { id } = await params;
  const movie = await fetchMovieById(id);

  return (
    <main className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        {movie.poster_path && (
          <div className="flex-shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={350}
              height={525}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-2">
            {movie.release_date} ・ {movie.vote_average?.toFixed(1)}
          </p>
          <p className="mt-6">{movie.overview}</p>
          {movie.genres && (
            <ul className="flex flex-wrap gap-2">
              {movie.genres.map((g: any) => (
                <li
                  key={g.id}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {g.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
