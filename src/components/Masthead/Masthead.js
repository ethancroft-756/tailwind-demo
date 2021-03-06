import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import useWindowDimensions from "../../hooks/WindowDimensions";
import "./Masthead.css";
import MastheadBurger from "./MastheadBurger";

const Masthead = () => {
    const [menuActive, setMenuActive] = useState(false);
    const { width: windowWidth } = useWindowDimensions();

    const menuTriggerHandler = () => {
        menuActive ? setMenuActive(false) : setMenuActive(true);
    };

    useEffect(() => {
        windowWidth >= 768 && setMenuActive(false);
    }, [windowWidth]);

    return (
        <div className="">
            <div className="flex py-3 px-4 md:px-6 md:py-6 items-center justify-between md:flex-start md:justify-normal bg-grey-900">
                {/* Stop burger icon issue from resizing */}
                <MastheadBurger
                    menuIsActive={menuActive}
                    burgerIsActive={menuTriggerHandler}
                ></MastheadBurger>
                <a className="ml-4 md:ml-0 md:mr-8" href="/">
                    <img
                        src="https://via.placeholder.com/128x32/00bcd4/000"
                        alt="Logo"
                    />
                </a>
                <nav
                    role="mobile-navigation"
                    className="text-grey-100 hidden md:gap-4 lg:gap-12 md:mr-auto"
                >
                    <ul className="md:flex">
                        <li className="">
                            <a
                                className="group hover:text-cyan-500 transition duration-300 focus:text-cyan-500"
                                href="/"
                            >
                                Who we are
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="group hover:text-cyan-500 transition duration-300 focus:text-cyan-500"
                                href="/"
                            >
                                What we build
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="group hover:text-cyan-500 transition duration-300 focus:text-cyan-500"
                                href="/"
                            >
                                How we do it
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="group hover:text-cyan-500 transition duration-300 focus:text-cyan-500"
                                href="/"
                            >
                                Work
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="group hover:text-cyan-500 transition duration-300 focus:text-cyan-500"
                                href="/"
                            >
                                Careers
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="/contact"
                    className="text-sm text-grey-50 md:ml-auto md:text-base md:px-4 lg:px-8 md:py-2 hover:text-cyan-500 md:hover:bg-grey-100 md:hover:text-grey-900 transition duration-300 font-semibold cursor-pointer md:border"
                >
                    Contact
                </a>
            </div>
            <div
                className={`${
                    menuActive ? "opacity-100" : "opacity-0"
                } mobile-nav md:hidden px-4 bg-grey-100 pt-5 font-semibold transition-opacity duration-300`}
            >
                <nav role="desktop-navigation" className="text-grey-900">
                    <ul>
                        <li className="border-b border-black hover:border-cyan-500 transition transition-duration-300">
                            <a
                                className="group py-3 flex items-center justify-between"
                                href="/"
                            >
                                Who we are
                                <FaArrowRight className="mr-4 group-hover:mr-2 group-focus:mr-2 transition-all duration-300" />
                            </a>
                        </li>
                        <li className="border-b border-black hover:border-cyan-500 transition transition-duration-300">
                            <a
                                className="group py-3 flex items-center justify-between"
                                href="/"
                            >
                                What we build
                                <FaArrowRight className="mr-4 group-hover:mr-2 group-focus:mr-2 transition-all duration-300" />
                            </a>
                        </li>
                        <li className="border-b border-black hover:border-cyan-500 transition transition-duration-300">
                            <a
                                className="group py-3 flex items-center justify-between"
                                href="/"
                            >
                                How we do it
                                <FaArrowRight className="mr-4 group-hover:mr-2 group-focus:mr-2 transition-all duration-300" />
                            </a>
                        </li>
                        <li className="border-b border-black hover:border-cyan-500 transition transition-duration-300">
                            <a
                                className="group py-3 flex items-center justify-between"
                                href="/"
                            >
                                Work
                                <FaArrowRight className="mr-4 group-hover:mr-2 group-focus:mr-2 transition-all duration-300" />
                            </a>
                        </li>
                        <li className="border-b border-black hover:border-cyan-500 transition transition-duration-300">
                            <a
                                className="group py-3 flex items-center justify-between"
                                href="/"
                            >
                                Careers
                                <FaArrowRight className="mr-4 group-hover:mr-2 group-focus:mr-2 transition-all duration-300" />
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    className="block border transition ease-out duration-300 mx-auto max-w-sm border-black mt-8 py-3 px-4 hover:bg-cyan-500 hover:text-grey-50 hover:text-cyan-500 hover:border-cyan-500 text-center"
                    href="/contact"
                >
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Masthead;
