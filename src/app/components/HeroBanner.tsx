import Image from 'next/image';
import { Movie } from '../interfaces/movie';

export default function HeroBanner({movie}: {movie: Movie}) {
    return (
        <section className='relative h-[60vh] w-full mb-10'>
            <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} fill priority className='object-cover' />
            <div className='absolute bottom-4 left-4'>
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className='max-w-lg text-sm md:text-base text-gray-200 mt-2'>{movie.overview}</p>
            </div>
        </section>
    )
}