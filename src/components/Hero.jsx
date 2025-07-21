import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero = () => {

const buttonRef = useRef(null);
const videoRef = useRef()
const isMobile = useMediaQuery({maxWidth:767})

useGSAP(()=>{
    const heroSplit = new SplitText('.title',{type:'chars,words'})
    const paragraphSplit = new SplitText('.subtitle',{type: 'lines'})
    heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'))
    gsap.from(heroSplit.chars,{
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.05

    })
    gsap.from(paragraphSplit.lines,{
        opacity:0,
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.06,
        delay:1
    })
    
    if (buttonRef.current) {
      const btnSplit = new SplitText(buttonRef.current, { type: 'chars' });
      gsap.from(btnSplit.chars, {
        opacity: 0,
        y: 40,
        rotate: 10,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.05,
        delay: 1.5
      });
    }
   gsap.timeline({
    scrollTrigger:{
        trigger:"#hero",
        start:'top top',
        end:'bottom top',
        scrub:true,
        scroller: '[data-scroll-container]'
    }
   })
   .to('.right-leaf',{y:200},0)
   .to('.left-leaf',{y:-200},0)


   const startValue = isMobile? 'top 50%' : 'center 60%'
   const endValue = isMobile? '120% top' : 'bottom top' 

   const tl = gsap.timeline({
    scrollTrigger: {
       trigger: "video",
       start: startValue,
       end: endValue,
       scrub: true,
       pin: true,
       scroller: '[data-scroll-container]'
    },
   });
   
   videoRef.current.onloadedmetadata = () => {
    tl.to(videoRef.current, {
       currentTime: videoRef.current.duration,
    });
   };

    return () => {
      // Kill all triggers for this component on unmount
      gsap.utils.toArray(ScrollTrigger.getAll()).forEach(trigger => trigger.kill());
    };
},[])
  return (
    <>
    <section id="hero" className="noisy">
        <h1 className='title text-3d'>
          <span className="g-letter">
            <span className="the-hanging">THE</span>
            G
          </span>
          LENWALK
        </h1>
        <img src="/images/hero-left-leaf.png" 
            alt="left-leaf " 
            className='left-leaf'
        />
        <img src="/images/hero-right-leaf.png" 
            alt="right-leaf " 
            className='right-leaf'
        />
        <div className='body'>
        <div className='content'>
            <div className='space-y-5 hidden md:block'>
                <p>Cool. Crisp. Classic</p>
                <p className='subtitle'>
                    Sip the Spirit <br /> of summer
                </p>
            </div>

            <div className='view-cocktails'>
             <p className='subtitle'>
             Every cocktail on our menu is a blend of premium 
             ingredients, creative flair, and timeless recipes — designed to delight your senses. 
             </p>
             <a
               href="#cocktails"
               ref={buttonRef}
             >
               View Cocktails
             </a>
            </div>
        </div>
        </div>
    </section>

    <div className='video absolute inset-0'>
    <video
    ref={videoRef}
    src='/videos/output.mp4'
    muted
    playsInline
    preload='auto'
    />
    </div>
    </>
  )
}

export default Hero
