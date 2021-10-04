import React from "react";
import { FaBars, FaArrowRight } from "react-icons/fa";
import "./Masthead.css";

const Masthead = () => {
    return (
        <div className="">
            <div className="flex py-3 px-4 md:px-6 md:py-6 items-center justify-between md:flex-start md:justify-normal bg-grey-900">
                <FaBars className="md:hidden text-grey-50 text-2xl font-light cursor-pointer hover:text-cyan-500 transition duration-300"></FaBars>
                <a className="ml-4 md:ml-0 md:mr-8" href="/">
                    <img
                        src="https://via.placeholder.com/128x32/00bcd4/000"
                        alt="Logo"
                    />
                </a>
                <ul className="text-grey-100 hidden md:gap-4 lg:gap-12 md:flex md:mr-auto">
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
                <a
                    href="/contact"
                    className="text-sm text-grey-50 md:ml-auto md:text-base md:px-4 lg:px-8 md:py-2 hover:text-cyan-500 md:hover:bg-grey-100 md:hover:text-grey-900 transition duration-300 font-semibold cursor-pointer md:border"
                >
                    Contact
                </a>
            </div>
            <div className="mobile-nav md:hidden px-4 bg-grey-100 pt-5 font-semibold">
                <ul className="text-grey-900">
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
