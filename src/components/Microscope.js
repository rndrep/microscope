import React from "react";

import "./Microscope.css";

const Microscope = ({ images = [], rotation = 0 }) => {
    /**
     * ! Important
     * On the images taken here, the set of images make a circle of 360deg, if the images only make 180deg of the circle
     * you will need to map through the images another time to make the last 180deg.
     *
     * Changes to make on this circumstances
     *   - The circle will be splitted in two, so the sectionDeg is not 360deg divided by the array length by 180deg.
     *   - An offset of 180deg on the second section should be added otherwise it will overlap.
     */

    return (
        <div className="microscope">
            {images.map((image, i, arr) => {
                const sectionDeg = 360 / arr.length;

                const sectionPercent = (rotation / sectionDeg) % 1;
                const index = Math.floor(rotation / sectionDeg);

                const curr = i === index;

                const getVisibility = () => {
                    return curr ? "visible" : "hidden";
                };

                const getRotation = () => {
                    return curr
                        ? `rotate(${sectionPercent * sectionDeg}deg)`
                        : "";
                };

                const style = {
                    zIndex: 10 + i,
                    visibility: getVisibility(),
                    transform: getRotation(),
                    opacity: 1,
                };

                return (
                    <img
                        className={`img ${curr ? "yes" : ""}`}
                        style={{ ...style }}
                        src={image}
                        key={i}
                        alt=""
                    />
                );
            })}
        </div>
    );
};

export default Microscope;
