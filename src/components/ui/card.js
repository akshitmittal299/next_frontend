// src/components/ui/card.js

import React from 'react'
import classNames from 'classnames'

export function Card({ children, className = '' }) {
  const baseClasses = 'bg-white rounded-lg shadow-md p-4'

  return <div className={classNames(baseClasses, className)}>{children}</div>
}

export function CardContent({ children, className = '' }) {
  const baseClasses = 'text-gray-700'

  return <div className={classNames(baseClasses, className)}>{children}</div>
}
