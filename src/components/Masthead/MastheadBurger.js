import React from "react";
import { FaBars } from "react-icons/fa";

const MastheadBurger = (props) => {
    return (
        <button
            className="w-6 md:hidden cursor-pointer"
            onClick={props.onClick}
            type="button"
        >
            <div className="h-0.5 bg-grey-100 mb-1.5"></div>
            <div className="h-0.5 bg-grey-100 mb-1.5"></div>
            <div className="h-0.5 bg-grey-100"></div>
        </button>
    );
};

export default MastheadBurger;

// <FaBars
//     onClick={props.onClick}
//     className="md:hidden text-grey-50 text-2xl font-light cursor-pointer"
// ></FaBars>;

/*

translateY(4px) rotate(45deg);
translateY(-4px) rotate(-45deg);

*/
