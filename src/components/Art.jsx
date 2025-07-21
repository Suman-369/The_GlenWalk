import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import { featureLists, goodLists } from '../../constants/index.js'
import React from 'react';
import { ScrollTrigger } from 'gsap/all';

const Art = () => {
 const isMobile = useMediaQuery({ maxWidth: 767 });

 useGSAP(() => {
	const start = isMobile ? 'top 20%' : 'top top';
	
	const maskTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#art',
		start,
		end: 'bottom center',
		scrub: 1.5,
		pin: !isMobile,
		scroller: '[data-scroll-container]'
	 }
	})
	
	maskTimeline
	 .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
	 .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
	 .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'});

	return () => {
		if (maskTimeline.scrollTrigger) {
			maskTimeline.scrollTrigger.kill();
		}
		maskTimeline.kill();
	}
 }, [isMobile]);
 
 return (
	<div id="art">
	 <div className="container mx-auto h-full">
		<h2 className="will-fade">The ART</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src="/images/check.png" alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
			
		 <div className="cocktail-img">
			<img
				src="/images/under-img.jpg"
				alt="cocktail"
				className="abs-center masked-img size-full object-contain"
			/>
		 </div>
			
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src="/images/check.png" alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		</div>
		
		<div className="masked-container">
		 <h2 className="will-fade text-3d text-border">Sip-Worthy Perfection</h2>
		 <div id="masked-content">
			<h3 className="text-3d"><span className='text-black'>Made with Craft, Poured with </span>Passion</h3>
			<p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
		 </div>
		</div>
	 </div>
	</div>
 )
}
export default Art