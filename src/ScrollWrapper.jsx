import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    setTimeout(() => {
      scrollInstance.current?.update();
    }, 1000);

    return () => {
      scrollInstance.current?.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default ScrollWrapper; 