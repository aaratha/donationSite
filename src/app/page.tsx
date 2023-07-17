import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <div className='bg-bg dark:bg-darkbg text-text dark:text-darktext flex flex-col items-center h-screen'>
      <Header/>
      <div className='flex flex-col items-center justify-center align-middle m-auto border border-slate-300 p-6 rounded-lg border-opacity-40 -translate-y-8'>
        <h1 className='text-center text-5xl m-2'>Ad Funder</h1>
        <p className='text-center m-2'>Turn crowd-funded time into donations.</p>
        <button className='btn-14 custom-btn m-5 p-5'>Sign Up</button>
      </div>
    </div>
  )
}
