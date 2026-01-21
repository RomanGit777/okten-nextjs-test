'use client';
import {useRef, useState} from "react";

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

        slider.scrollBy({left: 300, behavior: "smooth"});
        setCanGoBack(true);
    }

    const scrollLeft = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.scrollBy({left: -300, behavior: "smooth"});
        if (slider.scrollLeft - 300 <= 0) {
            setCanGoBack(false);
        }
    }

    return (
        <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
            {show && ( <Arrows
                scrollRight={scrollRight}
                scrollLeft={scrollLeft} canGoBack={canGoBack} /> )}
            <div ref={sliderRef}>
                {children}
            </div>
        </div>
    );
};