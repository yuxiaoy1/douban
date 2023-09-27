import { MoviesType } from '../lib/types'
import MovieCard from './MovieCard'

export default async function MovieCards({ movies }: { movies: MoviesType }) {
  return (
    <div className='flex flex-col gap-6'>
      {movies?.subjects?.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
