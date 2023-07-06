'use client'

import { useCloseModal } from '@/lib/useCloseModal'
import { Book } from '@/page'
import { MouseEvent, useEffect } from 'react'
import { BsHeart } from 'react-icons/bs'
import Overlay from '../layout/overlay'

type CommentModalProps = {
  book: Book
  closeModal: () => void
}

type Comment = {
  subject: string
  author: string
  content: string
  timestamp: string
}

const dummyComment: Comment[] = [
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },

  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject1',
    author: 'author1',
    content: 'content1',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject2',
    author: 'author2',
    content: 'content3',
    timestamp: '20230530160000',
  },
  {
    subject: 'subject3',
    author: 'author3',
    content: 'content3',
    timestamp: '20230530160000',
  },
]

type CommentProps = {
  comment: Comment
}

/**
 * コメント1件分
 * @param comment コメント
 * @returns コメント
 */
const Comment = ({ comment }: CommentProps) => {
  return (
    <div>
      <h5>{comment.subject}</h5>
      <p>{comment.content}</p>
    </div>
  )
}

/**
 * 選択した書籍のコメントリストモーダル
 * @returns コメントリストモーダル
 */
const CommentModal = ({ book, closeModal }: CommentModalProps) => {
  /** モーダル表示時は背景のスクロールをさせない */
  const stopScrollingBackContent = () => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(stopScrollingBackContent, [])

  const closeHandler = () => {
    closeModal()
  }

  const { elementRef, handleCloseModal } = useCloseModal(closeHandler)

  return (
    <>
      <Overlay onClose={handleCloseModal}>
        {/** modal */}
        <div
          id='commentModal'
          ref={elementRef}
          className='fixed border w-1/2 h-auto bg-white rounded-md p-2'
        >
          {/** modal header */}
          <div className='border-b border-b-black px-4 py-2 flex justify-between'>
            <h5>{book.title}</h5>
            <div className='flex'>
              <BsHeart className='h-full text-center' />
              {book.favorites}
            </div>
          </div>

          {/** modal body */}
          <div className='px-4 py-2 relative h-72 overflow-y-auto'>
            {dummyComment.map((it, index) => {
              return (
                <span key={index} className='flex'>
                  <p>{it.author}</p>
                  &nbsp;&nbsp;&nbsp;
                  <p>{it.content}</p>
                </span>
              )
            })}
          </div>

          {/** modal footer */}
          <div className='border-t border-t-black px-4 py-2 flex justify-end'>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </Overlay>
    </>
  )
}

export default CommentModal
