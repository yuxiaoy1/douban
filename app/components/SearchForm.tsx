'use client'

import { useRouter } from 'next/navigation'
import { FaSearch } from '../lib/icons'

export default function SearchForm() {
  let router = useRouter()

  function submitForm(e: React.FormEvent) {
    e.preventDefault()

    let formData = new FormData(e.currentTarget as HTMLFormElement)
    let q = formData.get('q') as string

    if (!q) return

    let params = new URLSearchParams({ q })

    router.push('/search?' + params)
  }

  return (
    <form onSubmit={submitForm} className='flex'>
      <input
        className='w-44 text-xs py-1 px-3 border border-gray-400 rounded-full'
        placeholder='搜索电影、电视、综艺等'
        name='q'
      />
      <button className='px-2' type='submit'>
        <FaSearch />
      </button>
    </form>
  )
}
