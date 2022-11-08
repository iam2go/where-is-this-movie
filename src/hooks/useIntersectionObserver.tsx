import { useEffect, useRef } from "react";

function useIntersectionObserver(
    callback : IntersectionObserverCallback,
    options?: IntersectionObserverInit,
) {
    const target = useRef<HTMLDivElement>(null)
      
      useEffect(() => { 
        if(!target || !target.current) return;

          let observer = new IntersectionObserver(callback, options);
          observer.observe(target.current);
          return () => observer.disconnect();
      },[callback, options])

    return target;
}

export default useIntersectionObserver;