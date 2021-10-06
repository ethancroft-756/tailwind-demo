import React, { useEffect, useState } from "react";

const MastheadBurger = (props) => {
    const [burgerIsActive, setBurgerIsActive] = useState(false);

    const clickHandler = () => {
        burgerIsActive ? setBurgerIsActive(false) : setBurgerIsActive(true);

        props.burgerIsActive(burgerIsActive);
    };

    useEffect(() => {
        !props.menuIsActive && setBurgerIsActive(false);
    }, [props.menuIsActive]);

    return (
        <button
            className="w-6 md:hidden cursor-pointer"
            onClick={clickHandler}
            type="button"
        >
            <div
                className={`${
                    burgerIsActive && `transform translate-y-2 rotate-45`
                } h-0.5 bg-grey-100 mb-1.5 transition`}
            ></div>
            <div
                className={`${
                    burgerIsActive ? `opacity-0` : `opacity-100`
                } h-0.5 bg-grey-100 mb-1.5 transition`}
            ></div>
            <div
                className={`${
                    burgerIsActive && `transform -translate-y-2 -rotate-45`
                } h-0.5 bg-grey-100 transition`}
            ></div>
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
