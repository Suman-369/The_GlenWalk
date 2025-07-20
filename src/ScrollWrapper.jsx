import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Init Locomotive Scroll
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // GSAP ScrollTrigger scrollerProxy
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollInstance.current.scrollTo(value, 0, 0);
        }
        return scrollInstance.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Update GSAP on Locomotive scroll
    scrollInstance.current.on("scroll", ScrollTrigger.update);

    // Refresh both after initial load and on resize
    const refresh = () => {
      scrollInstance.current && scrollInstance.current.update();
      ScrollTrigger.refresh();
    };

    setTimeout(refresh, 1000); // Initial refresh after mount
    window.addEventListener("resize", refresh);

    // Clean up
    return () => {
      window.removeEventListener("resize", refresh);
      scrollInstance.current && scrollInstance.current.destroy();
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollRef}
      style={{ overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export default ScrollWrapper; 