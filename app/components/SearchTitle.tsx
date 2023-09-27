export default function SearchTitle({ q }: { q: string }) {
  return (
    <div className='text-2xl font-bold'>
      {q ? '搜索 ' + q : '请输入搜索关键词'}
    </div>
  )
}
