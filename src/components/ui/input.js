// src/components/ui/input.js

import React from 'react'
import classNames from 'classnames'

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  ...props
}) {
  const baseClasses =
    'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classNames(baseClasses, className)}
      {...props}
    />
  )
}
