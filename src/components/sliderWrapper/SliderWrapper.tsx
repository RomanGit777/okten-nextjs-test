'use client';
import {useRef, useState} from "react";
import style from './sliderWrapper.module.css';

interface SliderWrapperProps {
    children: React.ReactNode;
    Arrows: React.ComponentType<{
        scrollRight: () => void;
        scrollLeft: () => void;
        canGoBack: boolean;
    }>;
}

export const SliderWrapper = ({Arrows, children}: SliderWrapperProps) => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [canGoBack, setCanGoBack] = useState(false);
    const [show, setShow] = useState(false);


    const scrollRight = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.scrollBy({left: 1100, behavior: "smooth"});
        setCanGoBack(true);
    }

    const scrollLeft = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.scrollBy({left: -1100, behavior: "smooth"});
        if (slider.scrollLeft - 1100 <= 0) {
            setCanGoBack(false);
        }
    }

    return (
        <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
            {show && ( <Arrows
                scrollRight={scrollRight}
                scrollLeft={scrollLeft}
                canGoBack={canGoBack} /> )}
            <div ref={sliderRef} className={style.slider}>
                {children}
            </div>
        </div>
    );
};