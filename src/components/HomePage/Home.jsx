import { BooksContainer } from './BooksContainer'

const Home = () => {
  return (
    <section className='m-auto max-w-2xl px-4'>
      <h1 className='font-black uppercase text-2xl sm:text-4xl text-center mb-10 sm:mb-20'>Programming <span className='block text-[50px] sm:text-[80px]'>Books</span></h1>      <BooksContainer />
    </section>
  )
}

export { Home }
