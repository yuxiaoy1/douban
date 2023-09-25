import { searchMovies } from '../lib/douban'
import MovieCard from './MovieCard'

export default async function MovieCards({ q }) {
  let movies = await searchMovies(q)

  return (
    <div className='flex flex-col gap-6'>
      {movies?.subjects?.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
