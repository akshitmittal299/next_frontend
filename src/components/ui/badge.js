// src/components/ui/badge.js

import React from 'react'
import classNames from 'classnames'

export default function Badge({ children, variant = 'default', className = '' }) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  }

  const finalClass = classNames(baseClasses, variants[variant] || variants.default, className)

  return <span className={finalClass}>{children}</span>
}
