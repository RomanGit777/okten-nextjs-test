'use client';
import {useEffect, useRef, useState} from "react";
import style from './sliderWrapper.module.css';

interface SliderWrapperProps {
    children: React.ReactNode;
    Arrows: React.ComponentType<{
        scroll: (direction: "right" | "left") => void;
        canGoBack: boolean;
        canGoForward: boolean;
    }>;
}

export const SliderWrapper = ({Arrows, children}: SliderWrapperProps) => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(true)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            setCanGoBack(slider.scrollLeft > 0);
            setCanGoForward(slider.scrollLeft + 5 < maxScroll);
        };

        slider.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => slider.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollByStep = (direction: "right" | "left") => {
        const slider = sliderRef.current;
        if (!slider) return;

        const step = 1100;
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        const nextScrollLeft =
            direction === "right"
        ? Math.min(slider.scrollLeft + step, maxScroll)
        : Math.max(slider.scrollLeft - step, 0);

        slider.scrollTo({
            left: nextScrollLeft,
            behavior: "smooth",
        })
    }

    return (
        <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
            {show && ( <Arrows
                scroll={scrollByStep}
                canGoBack={canGoBack}
                canGoForward={canGoForward}
            /> )}
            <div ref={sliderRef} className={style.slider}>
                {children}
            </div>
        </div>
    );
};