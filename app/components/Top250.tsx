import { getMoviesTop250 } from '../lib/douban'
import { MoviesType } from '../lib/types'
import SimpleMovieCard from './SimpleMovieCard'

export default async function Top250() {
  let movies: MoviesType = await getMoviesTop250({ start: 0, count: 10 })

  return (
    <div className='flex flex-col gap-2'>
      <div className='text-lg'>热门电影250</div>
      <hr />
      <div className='flex flex-wrap gap-5 px-4'>
        {movies?.subjects?.map(movie => (
          <SimpleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
