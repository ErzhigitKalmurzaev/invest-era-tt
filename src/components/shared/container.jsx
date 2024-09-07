import React from 'react'
import { cn } from '../../utils/cn'

const Container = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-[1180px]', className)}>
      {children}
    </div>
  )
}

export default Container
