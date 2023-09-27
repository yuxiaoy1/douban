import Link from 'next/link'
import SearchForm from './SearchForm'

export default function Heading() {
  return (
    <div className='flex justify-between border-b border-gray-300 px-6 py-3'>
      <Link href={'/'}>
        <h3 className='font-medium text-xl text-gray-900'>豆瓣</h3>
      </Link>
      <SearchForm />
    </div>
  )
}
