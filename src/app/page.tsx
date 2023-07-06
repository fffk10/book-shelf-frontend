'use client'
import { useState } from 'react'
import Card from '@/components/page/card'
import CommentModal from './components/page/commentModal'

export type Book = {
  title: string
  author: string
  favorites: number
  commentCount: number
}

const dummyData: Book[] = [
  {
    title: '人間失格',
    author: '太宰治',
    favorites: 100000,
    commentCount: 1000,
  },
  {
    title: 'こころ',
    author: '夏目漱石',
    favorites: 200000,
    commentCount: 2000,
  },
  {
    title: '吾輩は猫である',
    author: '夏目漱石',
    favorites: 90000,
    commentCount: 3000,
  },
]

const Home: React.FC = () => {
  const [targetBookComment, setTargetBookComment] = useState<Book | null>(null)

  const openCommentModal = (book: Book) => {
    setTargetBookComment(book)
  }

  const closeCommentModal = () => {
    setTargetBookComment(null)
  }

  return (
    <div>
      <h2>人気のコンテンツ</h2>
      <div className='md:flex'>
        {dummyData.map((it) => {
          return (
            <Card
              key={it.title}
              book={it}
              openCommentModal={openCommentModal}
            />
          )
        })}
      </div>

      {/* コメントモーダル */}
      {targetBookComment && (
        <CommentModal book={targetBookComment} closeModal={closeCommentModal} />
      )}
    </div>
  )
}

export default Home
