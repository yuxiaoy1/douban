import Link from 'next/link'
import { searchMovies } from '../lib/douban'
import SearchForm from './SearchForm'

export default function Heading() {
  async function submit(formData: FormData) {
    'use server'
    let q = (formData.get('q') as string).trim()
    let movies = await searchMovies(q)

    return { movies }
  }

  return (
    <div className='flex justify-between border-b border-gray-300 px-4 py-3'>
      <Link href={'/'}>
        <h3 className='font-medium text-xl text-gray-900'>豆瓣</h3>
      </Link>
      <SearchForm action={submit} />
    </div>
  )
}
