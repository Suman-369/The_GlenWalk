import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

useGSAP(()=>{
    const navTween = gsap.timeline({
        scrollTrigger:{
            trigger:"nav",
            start:"bottom top",
        }
    })

    navTween.fromTo('nav',{backgroundColor: 'transparent'},{backgroundColor:'#00000050',
        backgroundFilter:'blur(20px)',
        duration:1,
        ease:'power1.inOut'
    })
})

  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.avif" alt="logo" className="w-40 h-15" />
               
            </a>

            <ul>
               {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
               ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
