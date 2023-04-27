import React from 'react'

export default function ActionButton({
  children,
  disabled,
  className,
  onClick
}: {
  children: React.ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` text-xl font-semibold tracking-wide px-12 py-4
      ${disabled ? 'bg-gray-300' : 'bg-cyan-200 hover:bg-cyan-300'}
      ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      ${className}`}
    >
      {children}
    </button>
  )
}

ActionButton.defaultProps = {
  className: '',
  disabled: false
}
