import React, { ReactNode } from 'react'

type OverlayProps = {
  onClose: (element: HTMLDivElement) => void
  children: ReactNode
}

const Overlay = ({ onClose, children }: OverlayProps) => {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (onClose && event.target instanceof HTMLDivElement) {
      onClose(event.target)
    }
  }

  return (
    <div
      id='overlay'
      className='fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-60 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none'
      onClick={onClickHandler}
    >
      {children}
    </div>
  )
}

export default Overlay
