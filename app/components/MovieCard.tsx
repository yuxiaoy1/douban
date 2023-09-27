import { MovieType } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({ movie }: { movie: MovieType }) {
  return (
    <div className='flex gap-3 max-w-full'>
      <Link className='shrink-0' href={'/movie/' + movie.id}>
        <Image
          src={movie.images.small}
          height={40}
          width={60}
          alt={movie.title}
        />
      </Link>
      <div className='flex flex-col text-sm w-full'>
        <div>
          <Link
            className='font-medium text-blue-800 hover:bg-gray-700 hover:text-white'
            href={'/movie/' + movie.id}
            scroll={false}
          >
            {movie.title}
            {movie.year && '(' + movie.year + ')'}
          </Link>
          {movie.subtype === 'tv' && (
            <span className='text-green-700'>[剧集]</span>
          )}
        </div>
        <div>
          <span className='font-medium text-yellow-500'>
            {movie.rating.average}分
          </span>{' '}
          / <span>{movie.genres.join(' / ')}</span>
        </div>
        <div className='truncate w-5/6 md:w-11/12 lg:w-full'>
          导演：{movie.directors.map(director => director.name).join(' / ')}
        </div>
        <div className='truncate w-5/6 md:w-11/12 lg:w-full'>
          主演：{movie.casts.map(cast => cast.name).join(' / ')}
        </div>
      </div>
    </div>
  )
}
