import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


if (typeof window !== 'undefined' && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const Coctails = () => {

useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#cocktails", 
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
            scroller: '[data-scroll-container]'
        }
    });

    parallaxTimeline
        .from("#c-left-leaf", {
            x: -100, y: 100
        })
        .from("#c-right-leaf", {
            x: 100, y: -100
        });


    gsap.from(".cocktail-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".popular ul",
            start: "top 80%",
            toggleActions: "play none none none",
            scroller: '[data-scroll-container]'
        }
    });

 
    gsap.from(".mocktail-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".loved ul",
            start: "top 80%",
            toggleActions: "play none none none",
            scroller: '[data-scroll-container]'
        }
    });

    return () => {
        parallaxTimeline.scrollTrigger && parallaxTimeline.scrollTrigger.kill();
        parallaxTimeline.kill();
    };
});


  return (
    <div>
      <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />

        <div className='list'>
            <div className='popular'>
                <h2>Popular Cocktails: </h2>

                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.name} className="cocktail-item">
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
                <h2>Loved Mocktails: </h2>

                <ul>
                    {mockTailLists.map((drink)=>(
                        <li key={drink.name} className="mocktail-item">
                            <div className='me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

      </section>
    </div>
  )
}

export default Coctails
