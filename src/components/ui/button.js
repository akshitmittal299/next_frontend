// src/components/ui/button.js

import React from 'react'
import classNames from 'classnames'

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const finalClass = classNames(baseClasses, variants[variant], className)

  return (
    <button type={type} className={finalClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
