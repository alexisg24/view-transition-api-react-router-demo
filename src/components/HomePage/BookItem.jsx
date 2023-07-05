import { useNavigate } from 'react-router-dom'
import { useRedirect } from '../../Hooks/useRedirect'

const BookItem = ({ id, title, link }) => {
  const navigate = useNavigate()
  const handleClick = (path) => useRedirect(navigate, path)
  return (
    <li>
      <a onClick={() => handleClick(`/book/${id}`)} className='hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl'>
        <img
          className='aspect-[389/500] object-cover w-full h-full max-w-full rounded'
          src={link}
          alt={`${title} Book Cover`}
        />
      </a>
    </li>

  )
}

export { BookItem }
