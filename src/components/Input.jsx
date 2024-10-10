import { forwardRef } from "react";

const Input = forwardRef(({ placeholder, value, onChange }, ref) => {
    return (
        <input
            type="text"
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                px-4 py-2 rounded-xl w-full transition-all
                sm:w-3/4 md:w-1/2 lg:w-1/3 
                md:text-lg
                p-2.5                 
                border-2 border-gray-300 
                text-gray-600          
                outline-none           
                focus:border-blue-500   
                focus:shadow-outline-blue
        "
        />
    );
});

export default Input;
