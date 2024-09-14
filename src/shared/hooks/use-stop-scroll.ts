import { useEffect } from "react";

export function useStopScroll(callback:()=>void, delay = 200) {
  useEffect(() => {
    // @ts-ignore
    let timer = null;

    const handleScroll = () => {
      // @ts-ignore
      if (timer !== null) {
      // @ts-ignore
        clearTimeout(timer); // Если скроллинг продолжается, сбрасываем таймер
      }

      timer = setTimeout(() => {
        callback(); // Вызываем callback после того, как скроллинг остановился
      }, delay);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // @ts-ignore
      if (timer !== null) {
      // @ts-ignore
        clearTimeout(timer);
      }
    };
  }, [callback, delay]);
}
