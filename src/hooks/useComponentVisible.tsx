import { useState, useEffect, useRef } from 'react';
import { useScrollBlock } from './useScrollBlock';

export default function useComponentVisible(onClose) {
    const ref = useRef(null);
    //   const [blockScroll, allowScroll] = useScrollBlock();


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClose();
            // allowScroll();
        }
    };

    useEffect(() => {
        // blockScroll();
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref };
}