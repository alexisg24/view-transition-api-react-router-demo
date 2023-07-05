import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components'
import { Book } from '../components/BookPage/Book'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/book/:bookID' element={<Book />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export { AppRouter }
