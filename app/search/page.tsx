import SearchTitle from '../components/SearchTitle'
import MovieCards from '../components/MovieCards'

export default function SearchPage({ searchParams }) {
  let { q } = searchParams

  return (
    <div className='flex flex-col gap-6 py-6'>
      <SearchTitle q={q} />
      {q && <MovieCards q={q} />}
    </div>
  )
}
