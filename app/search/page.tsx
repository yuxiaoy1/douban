import MovieCards from '../components/MovieCards'
import SearchTitle from '../components/SearchTitle'
import { searchMovies } from '../lib/douban'
import { MovieSearchPageParamsType } from '../lib/types'

export default async function SearchPage({
  searchParams,
}: MovieSearchPageParamsType) {
  let { q } = searchParams
  let movies = await searchMovies(q)

  return (
    <div className='flex flex-col gap-6 py-6'>
      <SearchTitle q={q} />
      {movies?.subjects?.length ? (
        <MovieCards movies={movies} />
      ) : (
        '没有搜索到结果，请更换搜索关键词后重试。'
      )}
    </div>
  )
}
