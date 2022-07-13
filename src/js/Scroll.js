import React, {useState, useEffect} from 'react';



const ScrollHandle = () => {
    
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 500
            if (scrollCheck !== scroll) {
            setScroll(scrollCheck );
            }
        })
    })
}

export default ScrollHandle;