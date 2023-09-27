import Image from 'next/image'
import Link from 'next/link'
import { MovieType } from '../lib/types'

export default function SimpleMovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className='flex flex-col w-28 gap text-sm items-center'>
      <div className='h-24'>
        <Link href={'/movie/' + movie.id}>
          <Image
            src={movie.images.small}
            height={40}
            width={60}
            alt={movie.title}
          />
        </Link>
      </div>
      <Link className='truncate w-28 text-center' href={'/movie/' + movie.id}>
        {movie.title}
      </Link>
      <div className='text-yellow-500'>{movie.rating.average}分</div>
    </div>
  )
}
