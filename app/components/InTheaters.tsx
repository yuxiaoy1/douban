import { getMoviesInTheaters } from '@/app/lib/douban'
import { MovieType, MoviesType } from '@/app/lib/types'
import SimpleMovieCard from './SimpleMovieCard'

export default async function InTheaters() {
  let movies: MoviesType = await getMoviesInTheaters({
    start: 0,
    count: 10,
    city: '',
  })

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-lg'>正在热映</div>
      <hr />
      <div className='flex flex-wrap gap-5 px-4'>
        {movies?.subjects?.map(movie => (
          <SimpleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
