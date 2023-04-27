import React from 'react'

export default function ActionButton({
  children,
  className,
  onClick
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-200 text-xl font-semibold tracking-wide px-12 py-4 ${className}`}
    >
      {children}
    </button>
  )
}

ActionButton.defaultProps = {
  className: ''
}
