import Image from 'next/image'
import Link from 'next/link'

export default function SimpleMovieCard({ movie }) {
  let { rating, title, id, images } = movie

  return (
    <div className='flex flex-col w-28 gap text-sm items-center'>
      <div className='h-24'>
        <Link href={'/movie/' + id}>
          <Image src={images.small} height={40} width={60} alt={title} />
        </Link>
      </div>
      <Link className='truncate w-28 text-center' href={'/movie/' + id}>{title}</Link>
      <div className='text-yellow-500'>{rating.average}分</div>
    </div>
  )
}
