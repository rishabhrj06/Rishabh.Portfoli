import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@/Components/Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cmd = "px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface";
  const mobCmd = "text-lg text-muted-foreground hover:text-foreground py-2";

  return (

    <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50 backdrop-blur-sm  [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]'>
      <nav className=' container mx-auto px-6 flex items-center justify-between'>

        <NavLink to='/' className="text-xl pl-5 font-bold tracking-tight hover:text-primary">
          Portfolio<span className='text-primary'>.</span>Rishabh
        </NavLink>

        <div className='glass hidden md:flex items-center gap-2 rounded-full py-1 px-2 '>
          <NavLink to='/' className={mobCmd}>
            About
          </NavLink>
          <NavLink to='' className={mobCmd}>
            Projects
          </NavLink>
          <NavLink to='' className={mobCmd}>
            Experience
          </NavLink>
          <NavLink to='' className={mobCmd}>
            Testimonials
          </NavLink>
        </div>

        <Button size="sm" className='hidden md:block '>Contact Me</Button>
         
         {/* Mobile Menu */}
         <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
         </button>  
      </nav>
        { isMobileMenuOpen && (<div className='md:hidden animate-fade-in glass-strong container mx-auto px-6 py-6 flex flex-col gap-4'>
          <NavLink to='/' className={cmd}>
            About
          </NavLink>
          <NavLink to='' className={cmd}>
            Projects
          </NavLink>
          <NavLink to='' className={cmd}>
            Experience
          </NavLink>
          <NavLink to='' className={cmd}>
            Testimonials
          </NavLink>
          <Button size="sm" className='md:hidden cursor-pointer'>Contact Me</Button>
        </div> )} 
    </header>
    
  )
}

export default Navbar