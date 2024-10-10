
import { useState } from 'react';
export default function LoadingButton({ color, value, onClick }) {
    let [isLoading, setIsLoading] = useState(false);
    let handleClick = (e) => {
        setIsLoading(true);
        onClick(e).finally(() => setIsLoading(false));
    }
    return (
        <button
            className={`rounded-lg ${color}  focus:bg-green-800 px-6 pb-2 pt-2.5 w-24 transition duration-150 ease-in-out focus:outline-none focus:ring-0`}
            value={value}
            onClick={handleClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <div role="status" className="inline-block ml-2 h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            ) : (
                <div className='ml-1'>{value}</div>
            )}
        </button>
    );
}