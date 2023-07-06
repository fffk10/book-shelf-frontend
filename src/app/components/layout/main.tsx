import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className='min-h-screen py-4 px-8'>{children}</main>
}

export default Main
