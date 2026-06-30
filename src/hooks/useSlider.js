import { useEffect, useState } from "react";

export function useSlider(movingSlider) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            //Check if the current index is equal to the last index of the element in the array, if it is TRUE
            const lastSlide = currentIndex === movingSlider.length - 1;
            //If we are at the last slide, then set the state to the first element of the array
            const next = lastSlide ? 0 : currentIndex + 1;
            //Update the state with current index
            setCurrentIndex(next);
        }, 3000); //Moves every 3 seconds

        //Clear the interval when the component unmounts or when the currentIndex changes to prevent memory leaks
        return () => clearInterval(interval);
    }, []);


    const prevSlide = () => {
        // Check if we are at the first slide, if so, wrap around to the last slide
        const firstSlide = currentIndex === 0;
        //If we are at the first slide, then set the state to the last element of the array
        const prev = firstSlide ? movingSlider.length - 1 : currentIndex - 1;
        //Update the state with the new index or value
        setCurrentIndex(prev);
    };

    const nextSlide = () => {
        // Check if we are at the last slide, if so, wrap around to the first slide
        const lastSlide = currentIndex === movingSlider.length - 1;
        //If we are at the last slide, then set the state to the first element of the array
        const next = lastSlide ? 0 : currentIndex + 1;
        //Update the state with the new index or value
        setCurrentIndex(next);
    };

    return { prevSlide, nextSlide, currentIndex };
};