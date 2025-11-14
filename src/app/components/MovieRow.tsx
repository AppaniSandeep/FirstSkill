'use client';

import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/app/interfaces/movie"; 

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-3">{categoryTitle}</h3>

      <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="min-w-[150px] block hover:scale-105 transition-transform"
          >
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-md"
              />
            ) : (
              <div className="w-[200px] h-[300px] bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
