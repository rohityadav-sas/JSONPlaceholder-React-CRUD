import { useEffect, useState } from 'react';

export default function useHandleScroll() {
    let [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isVisible;
}
