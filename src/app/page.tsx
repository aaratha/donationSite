import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <div className='bg-bg dark:bg-darkbg text-text dark:text-darktext flex flex-col items-center h-screen'>
      <Header/>
      <div className='flex flex-col items-center justify-center align-middle m-auto'>
        <h1 className='text-center text-5xl m-2'>Donation Site</h1>
        <p className='text-center m-2'>Sign up to receive crowd-funded donations.</p>
        <button className='bg-primary p-2 rounded-md w-24 text-text m-2 hover:scale-105 transition-all'>Sign Up</button>
      </div>
    </div>
  )
}
