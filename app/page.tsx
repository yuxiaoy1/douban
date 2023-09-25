import InTheaters from './components/InTheaters'
import Top250 from './components/Top250'

export default async function Home() {
  return (
    <div className='my-6 flex flex-col gap-2'>
      <InTheaters />
      <Top250 />
    </div>
  )
}
