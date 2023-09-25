import Image from 'next/image'
import Link from 'next/link'

let movie = {
  rating: {
    max: 10,
    average: 5.9,
    stars: '30',
    min: 0,
  },
  genres: ['爱情'],
  title: '嘉人本色',
  casts: [
    {
      alt: 'https://movie.douban.com/celebrity/1339588/',
      avatars: {
        small:
          'https://img9.doubanio.com/view/celebrity/raw/public/p1574161764.46.jpg',
        large:
          'https://img9.doubanio.com/view/celebrity/raw/public/p1574161764.46.jpg',
        medium:
          'https://img9.doubanio.com/view/celebrity/raw/public/p1574161764.46.jpg',
      },
      name: '刘芮麟',
      id: '1339588',
    },
    {
      alt: 'https://movie.douban.com/celebrity/1381038/',
      avatars: {
        small:
          'https://img1.doubanio.com/view/celebrity/raw/public/pffP1I0v_NJwcel_avatar_uploaded1505040381.97.jpg',
        large:
          'https://img1.doubanio.com/view/celebrity/raw/public/pffP1I0v_NJwcel_avatar_uploaded1505040381.97.jpg',
        medium:
          'https://img1.doubanio.com/view/celebrity/raw/public/pffP1I0v_NJwcel_avatar_uploaded1505040381.97.jpg',
      },
      name: '李婷婷',
      id: '1381038',
    },
    {
      alt: 'https://movie.douban.com/celebrity/1385341/',
      avatars: {
        small:
          'https://img2.doubanio.com/view/celebrity/raw/public/p1522141844.61.jpg',
        large:
          'https://img2.doubanio.com/view/celebrity/raw/public/p1522141844.61.jpg',
        medium:
          'https://img2.doubanio.com/view/celebrity/raw/public/p1522141844.61.jpg',
      },
      name: '朱然',
      id: '1385341',
    },
  ],
  collect_count: 3012,
  original_title: '嘉人本色',
  subtype: 'tv',
  directors: [
    {
      alt: 'https://movie.douban.com/celebrity/1373253/',
      avatars: {
        small:
          'https://img1.doubanio.com/view/celebrity/raw/public/p1567866623.38.jpg',
        large:
          'https://img1.doubanio.com/view/celebrity/raw/public/p1567866623.38.jpg',
        medium:
          'https://img1.doubanio.com/view/celebrity/raw/public/p1567866623.38.jpg',
      },
      name: '韩洋',
      id: '1373253',
    },
  ],
  year: '2020',
  images: {
    small:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2606842105.jpg',
    large:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2606842105.jpg',
    medium:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2606842105.jpg',
  },
  alt: 'https://movie.douban.com/subject/34863326/',
  id: '34863326',
}

export default function MovieCard({ movie }) {
  let {
    rating,
    title,
    subtype,
    year,
    alt,
    casts,
    collect_count,
    directors,
    genres,
    id,
    images,
    original_title,
  } = movie

  return (
    <div className='flex gap-3 max-w-full'>
      <Link className='shrink-0' href={'/movie/' + id}>
        <Image src={images.small} height={40} width={60} alt={title} />
      </Link>
      <div className='flex flex-col text-sm w-full'>
        <div>
          <Link
            className='font-medium text-blue-800 hover:bg-gray-700 hover:text-white'
            href={'/movie/' + movie.id}
            scroll={false}
          >
            {title}
            {year && '(' + year + ')'}
          </Link>
          {subtype === 'tv' && <span className='text-green-700'>[剧集]</span>}
        </div>
        <div>
          <span className='font-medium text-yellow-500'>
            {rating.average}分
          </span>{' '}
          / <span>{genres.join(' / ')}</span>
        </div>
        <div className='truncate w-5/6 md:w-11/12 lg:w-full'>导演：{directors.map(d => d.name).join(' / ')}</div>
        <div className='truncate w-5/6 md:w-11/12 lg:w-full'>主演：{casts.map(c => c.name).join(' / ')}</div>
      </div>
    </div>
  )
}
