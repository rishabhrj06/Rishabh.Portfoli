import React from 'react'

const Button = ({size = "default", className, children}) => {
  const baseClass = "relative rounded-full overflow-hidden font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90";
  
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    default : "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = `${baseClass} ${className} ${sizeClass[size]}`

  return (
    <button className={classes}>
      <span className='relative flex items-center justify-center gap-2'>
        {children}
      </span>
    </button>
  )
}

export default Button