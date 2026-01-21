'use client';
import {useState} from "react";

interface SliderWrapperProps {
    children: React.ReactNode;
    arrows: React.ReactNode;
}

export const SliderWrapper = ({arrows, children}: SliderWrapperProps) => {
    const [show, setShow] = useState(false);
    return (
        <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}>
            {show && arrows}
            {children}
        </div>
    );
};