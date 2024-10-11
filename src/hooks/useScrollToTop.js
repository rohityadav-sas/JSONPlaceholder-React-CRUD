import { useEffect } from 'react';

export default function useScrollToTop(scrollMode, setScrollMode) {
    useEffect(() => {
        if (scrollMode) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setScrollMode(false);
        }
    }, [scrollMode, setScrollMode]);
}
