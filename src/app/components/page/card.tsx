'use client'
import { useState } from 'react'
import { FaRegCommentDots } from 'react-icons/fa'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Book } from '@/page'

type Props = {
  book: Book
  openCommentModal: (book: Book) => void
}

const Card = ({ book, openCommentModal }: Props) => {
  const [favorited, setFavorited] = useState<boolean>(false)

  return (
    <div className='w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4'>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {book.title}
          </h5>
        </a>
        <div className='flex justify-between'>
          <div>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {book.author}
            </p>
          </div>
          <div>
            <div className='text-gray-500 text-sm'>
              <button className='flex' onClick={() => setFavorited(!favorited)}>
                {favorited ? (
                  <BsHeartFill className='h-full text-center' />
                ) : (
                  <BsHeart className='h-full text-center' />
                )}
                {book.favorites}
              </button>
            </div>
            <div className='flex text-gray-500 text-sm'>
              <button className='flex' onClick={() => openCommentModal(book)}>
                <FaRegCommentDots className='h-full text-center' />
                {book.commentCount}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
