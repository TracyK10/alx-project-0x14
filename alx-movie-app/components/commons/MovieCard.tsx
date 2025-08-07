import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Movie {
  id: string;
  title: string;
  releaseDate?: string;
  posterPath?: string;
  voteAverage?: number;
  overview?: string;
}

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, className = '' }) => {
  const { id, title, releaseDate, posterPath, voteAverage } = movie;
  
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : '';
  
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl ${className}`}>
      <Link href={`/movies/${id}`}>
        <div className="relative aspect-[2/3] w-full overflow-hidden">
          {posterPath ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={false}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200 text-gray-400">
              No Image
            </div>
          )}
          {voteAverage !== undefined && (
            <div className="absolute right-2 top-2 rounded-full bg-black bg-opacity-70 px-2 py-1 text-sm font-semibold text-white">
              {voteAverage.toFixed(1)}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
          {releaseYear && (
            <p className="text-sm text-gray-600">{releaseYear}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;