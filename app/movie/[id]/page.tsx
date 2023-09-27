import { getMovieById } from '@/app/lib/douban'
import { DetailedMovieType, MoviePageParamsType } from '@/app/lib/types'
import Image from 'next/image'

export default async function MoviePage({ params }: MoviePageParamsType) {
  let movie: DetailedMovieType = await getMovieById(params.id)

  return (
    <div className='flex flex-col gap-4 py-4'>
      <div className='text-2xl font-bold'>
        <span>{movie.title}</span>{' '}
        <span className='text-gray-500'>({movie.year})</span>
      </div>
      <div className='flex items-start gap-4'>
        <Image
          className='object-contain'
          src={movie.images.small}
          width={150}
          height={200}
          alt={movie.title}
        />
        <div className='flex flex-col gap-2 md:gap-3 text-sm'>
          <div>
            <span>导演：</span>
            <span>
              {movie.directors.map(director => director.name).join(' / ')}
            </span>
          </div>
          <div>
            <span>主演：</span>
            <span>{movie.casts.map(cast => cast.name).join(' / ')}</span>
          </div>
          <div>
            <span>类型：</span>
            <span>{movie.genres.join(' / ')}</span>
          </div>
          <div>
            <span>制片国家/地区：</span>
            <span>{movie.countries.join(' / ')}</span>
          </div>
          <div>
            <span>上映日期：</span>
            <span>{movie.year}</span>
          </div>
          {!!movie.aka && (
            <div>
              <span>又名：</span>
              <span>{movie.aka.join(' / ')}</span>
            </div>
          )}
          <div>
            <span>豆瓣评分：</span>
            <span className='text-yellow-500'>
              {movie.rating.average}分
            </span>{' '}
            <span>{movie.ratings_count}人评价</span>
          </div>
        </div>
      </div>
      <div>
        <span className='text-green-800'>剧情简介：</span>
        <span>{movie.summary}</span>
      </div>
    </div>
  )
}
