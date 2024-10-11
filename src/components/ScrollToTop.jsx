import { useContext } from 'react';
import ScrollToTopImage from '../assets/scroll.png';
import { Crud } from '../context/CrudProvider';
import { useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import useHandleScroll from '../hooks/useHandleScroll';


export default function ScrollToTop() {
    let { scrollMode, setScrollMode } = useContext(Crud);
    let [isLoading, setIsLoading] = useState(false);
    let isVisible = useHandleScroll();

    useScrollToTop(scrollMode, setScrollMode);

    const handleClick = () => {
        setScrollMode(true);
        setIsLoading(true);
        setTimeout(() => { setIsLoading(false) }, 1000);
    }

    return (
        <button
            disabled={isLoading}
            onClick={handleClick}
            className={`fixed right-5 bottom-5 transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <img
                src={ScrollToTopImage}
                className="h-12 w-auto md:h-14 lg:h-16"
                alt="Scroll to Top"
            />
        </button>
    )
}