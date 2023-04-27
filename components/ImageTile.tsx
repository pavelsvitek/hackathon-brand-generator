import Image from 'next/image'
import React from 'react'

export default function ImageTile({
  children,
  disabled,
  selected,
  src,
  onClick
}: {
  children?: React.ReactNode
  disabled?: boolean
  selected?: boolean
  src: string
  onClick?: () => void
}) {
  const [isSelected_, setIsSelected] = React.useState(false)

  const isSelected = selected !== undefined ? selected : isSelected_
  // const isSelected = selected || isSelected_

  return (
    <div
      className={`rounded-xl border-4 border-transparent  my-3 relative ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }

      ${isSelected && 'border-cyan-600'}`}
      onClick={() => {
        if (disabled) {
          return
        }

        setIsSelected(!isSelected_)

        if (onClick) {
          onClick()
        }
      }}
    >
      {/*  */}
      <Image src={src} alt='activity' width={260} height={160} />
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 ${
          disabled ? 'backdrop-grayscale ' : ''
        }`}
      ></div>
    </div>
  )
}

ImageTile.defaultProps = {
  disabled: false
  // selected: unf
}
