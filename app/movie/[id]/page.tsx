import { getMovieById } from '@/app/lib/douban'
import Image from 'next/image'

type MoviePageType = {
  params: {
    id: number
  }
}

let movie = {
  rating: { max: 10, average: 8.5, stars: '45', min: 0 },
  reviews_count: 141,
  wish_count: 19023,
  douban_site: '',
  year: '1984',
  images: {
    small:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2637656503.jpg',
    large:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2637656503.jpg',
    medium:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2637656503.jpg',
  },
  alt: 'https://movie.douban.com/subject/1299042/',
  id: '1299042',
  mobile_url: 'https://movie.douban.com/subject/1299042/mobile',
  title: '人生',
  do_count: null,
  share_url: 'https://m.douban.com/movie/subject/1299042',
  seasons_count: null,
  schedule_url: '',
  episodes_count: null,
  countries: ['中国大陆'],
  genres: ['剧情', '爱情'],
  collect_count: 15909,
  casts: [
    {
      alt: 'https://movie.douban.com/celebrity/1040092/',
      avatars: [Object],
      name: '周里京',
      id: '1040092',
    },
    {
      alt: 'https://movie.douban.com/celebrity/1301329/',
      avatars: [Object],
      name: '吴玉芳',
      id: '1301329',
    },
    {
      alt: 'https://movie.douban.com/celebrity/1322647/',
      avatars: [Object],
      name: '高保成',
      id: '1322647',
    },
    {
      alt: 'https://movie.douban.com/celebrity/1488450/',
      avatars: [Object],
      name: '乔建华',
      id: '1488450',
    },
  ],
  current_season: null,
  original_title: '人生',
  summary:
    '大西北粗粝广袤的土地上，仪表堂堂的高加林（周里京 饰）是这片黄土地上极其惹眼而又独树一帜的存在。他是镇上的老师，虽然兢兢业业教了三年书，但大队书记的儿子高中刚毕业就顶了他的位置，让加林愤愤不平。自古民不与官斗，在爹娘苦苦哀求之下，加林打消了告状的念头，心怀抑郁和愤懑的青年无奈回到田里耕作。在此期间，多亏了纯朴而美丽的姑娘刘巧珍（吴玉芳 饰）给了他安慰。爱情的滋润让加林重新找到前进的方向，他打理田间地头，业余时间从事写作。而就在此时，加林却意外得到了一个可以去县里工作的机会。人生和爱情面前，青年不得不做出抉择……\n' +
    '本片根据路遥的同名小说改编。©豆瓣',
  subtype: 'movie',
  directors: [
    {
      alt: 'https://movie.douban.com/celebrity/1168676/',
      avatars: [Object],
      name: '吴天明',
      id: '1168676',
    },
  ],
  comments_count: 4202,
  ratings_count: 11019,
  aka: ['Life'],
}

export default async function MoviePage({ params }: MoviePageType) {
  let { id } = params
  let {
    rating,
    year,
    images,
    title,
    countries,
    genres,
    casts,
    summary,
    directors,
    aka,
    ratings_count,
  } = await getMovieById(id)

  return (
    <div className='flex flex-col gap-4 py-4'>
      <div className='text-2xl font-bold'>
        <span>{title}</span> <span className='text-gray-500'>({year})</span>
      </div>
      <div className='flex items-start gap-4'>
        <Image
          className='object-contain'
          src={images.small}
          width={150}
          height={200}
          alt={title}
        />
        <div className='flex flex-col gap-2 md:gap-3 text-sm'>
          <div>
            <span>导演：</span>
            <span>{directors.map(d => d.name).join(' / ')}</span>
          </div>
          <div>
            <span>主演：</span>
            <span>{casts.map(c => c.name).join(' / ')}</span>
          </div>
          <div>
            <span>类型：</span>
            <span>{genres.join(' / ')}</span>
          </div>
          <div>
            <span>制片国家/地区：</span>
            <span>{countries.join(' / ')}</span>
          </div>
          <div>
            <span>上映日期：</span>
            <span>{year}</span>
          </div>
          <div>
            <span>又名：</span>
            <span>{aka.join(' / ')}</span>
          </div>
          <div>
            <span>豆瓣评分：</span>
            <span className='text-yellow-500'>{rating.average}分</span>{' '}
            <span>{ratings_count}人评价</span>
          </div>
        </div>
      </div>
      <div>
        <span className='text-green-800'>剧情简介：</span>
        <span>{summary}</span>
      </div>
    </div>
  )
}
