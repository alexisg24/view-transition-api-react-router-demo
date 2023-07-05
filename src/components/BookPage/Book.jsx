import { Navigate, useParams } from 'react-router-dom'
import { books } from '../../data/books'

const Book = () => {
  const { bookID } = useParams()
  const book = books.find(book => book.id === bookID)
  if (!book) {
    return (<Navigate to='/' />)
  }
  const { title, author, link } = book
  return (
    <section>
      <h1 className='font-black uppercase text-2xl sm:text-4xl text-center md:mb-20'>Programming <span className='block text-[50px] sm:text-[80px]'>Books</span></h1>
      <section className='max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <img
          className='object-contain max-w-2xl mx-auto md:w-full md:h-full md:max-w-full rounded p-20 md:p-0'
          src={link}
          alt={`${title} Book Cover`}
        />
        <article className='flex flex-col md:justify-center gap-4 text-center md:text-start'>
          <h1 className='text-2xl font-bold uppercase'>{title}</h1>
          <p><strong>Author:</strong> {author}</p>
        </article>
      </section>
    </section>
  )
}

export { Book }
