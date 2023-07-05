import { books } from '../../data/books'
import { BookItem } from './BookItem'

const BooksContainer = () => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-3 gap-3'>
      {
      books.map(({ id, title, link }) => (<BookItem key={id} id={id} title={title} link={link} />))
      }
    </ul>
  )
}

export { BooksContainer }
