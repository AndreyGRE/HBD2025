import { useState } from "react";
import logoUrl from "../svg/Logo.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Бургер-меню (видно только на мобильных) */}
            <div className="md:hidden flex justify-between items-center pt-[14px] pl-[24px] pr-[21px] pb-[15px] sticky top-0 z-40 bg-[#000023]/70 ">
                {/* иконка и сайта а также бургер меню */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg width="34" height="58" viewBox="0 0 34 58" fill="none">
                        <g clip-path="url(#clip0_3635_1244)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0 39H34V16.9653L16.9979 0L0 16.9653V39Z"
                                fill="url(#paint0_linear_3635_1244)"
                            />
                        </g>
                        <rect
                            y="42.7588"
                            width="34"
                            height="3"
                            rx="1.5"
                            fill="url(#paint1_linear_3635_1244)"
                        />
                        <rect
                            y="48.7656"
                            width="24"
                            height="3"
                            rx="1.5"
                            fill="url(#paint2_linear_3635_1244)"
                        />
                        <rect
                            y="54.7725"
                            width="34"
                            height="3"
                            rx="1.5"
                            fill="url(#paint3_linear_3635_1244)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_3635_1244"
                                x1="36.0829"
                                y1="35.3949"
                                x2="1.05863"
                                y2="15.1334"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_3635_1244"
                                x1="36.0829"
                                y1="45.4815"
                                x2="35.2708"
                                y2="39.3737"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_3635_1244"
                                x1="25.4703"
                                y1="51.4883"
                                x2="24.3395"
                                y2="45.4856"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_3635_1244"
                                x1="36.0829"
                                y1="57.4951"
                                x2="35.2708"
                                y2="51.3874"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                            <clipPath id="clip0_3635_1244">
                                <rect width="34" height="39" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

                {/* Купить билет в мобилке*/}
                {isMenuOpen ? (
                    <svg
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                    >
                        <path
                            d="M2.69557 0.0117188L0.574248 2.13304L7.64542 9.20421L0.574219 16.2754L2.69554 18.3967L9.76674 11.3255L16.8377 18.3965L18.959 16.2752L11.8881 9.20421L18.959 2.13327L16.8377 0.011945L9.76674 7.08289L2.69557 0.0117188Z"
                            fill="white"
                        />
                    </svg>
                ) : (
                    <a
                        href="#ByTicket"
                        className="svgBtn flex items-center cursor-pointer -skew-x-20 rounded-[8px] border-2 border-white text-white text-[19px] py-[8px] px-[24px] gap-1 font-[400] transition hover:bg-white hover:text-black"
                    >
                        <div className="skew-x-20">КУПИТЬ БИЛЕТ</div>
                    </a>
                )}
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col bg-[#000023] bg-opacity-90 
                            bg-lightgray 
                            bg-[-0.263px_0px] 
                            bg-[100.027%_102.383%] 
                            bg-no-repeat 
                            bg-top"
                >
                    <div className="flex justify-between items-center p-4 ">
                        <button className="flex text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 px-4">
                        <nav className="flex flex-col gap-[56px] items-center">
                            <div className="flex flex-col gap-6 mt-15 w-2/3">
                                <img
                                    src={logoUrl}
                                    alt="Logo"
                                    className="w-full"
                                />
                                <div className="text-[15px] font-[300] text-white text-center">
                                    <p>VII Бизнес-концерт </p>
                                    <p>отрасли малоэтажного строительства</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 text-white text-[16px] font-[500] text-center items-center">
                                <a
                                    href="#AboutEvent"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    О СОБЫТИИ
                                </a>
                                <a
                                    href="#Speakers"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    СПИКЕРЫ
                                </a>
                                <a
                                    href="#TicketPrices"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    СТОИМОСТЬ
                                </a>
                                <a
                                    href="#Questions"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    ВОПРОСЫ
                                </a>
                                <a
                                    href="#AfterParty"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    AFTERPARTY
                                </a>
                            </div>
                            <a
                                href="#ByTicket"
                                className="cursor-pointer flex gap-2 bg-[#E95521] -skew-x-17 rounded-lg  w-full  py-[10px] items-center justify-center text-white text-[20px]  font-[300] hover:opacity-80"
                            >
                                <div className="skew-x-20">КУПИТЬ БИЛЕТ</div>
                            </a>
                        </nav>
                    </div>
                </div>
            )}

            {/* Навигация для десктопа */}

            <div className="hidden bg-[#000023]/70 z-40  md:flex justify-between items-end lg:pl-[54px] lg:pr-[56px] xl:pl-[104px] xl:pr-[106px] 2xl:pl-[164px] 2xl:pr-[156px] pt-[22px] xl:pt-[32px] sticky top-0 pb-3 ">
                <a href="https://housebusinessday.ru/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="52"
                        viewBox="0 0 44 52"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 52H45V22.6204L22.4973 0L0 22.6204V52Z"
                            fill="url(#paint0_linear_3609_1121)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_3609_1121"
                                x1="47.7568"
                                y1="47.1932"
                                x2="1.23019"
                                y2="20.4755"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>

                <div className="flex gap-[46px] items-end ">
                    <div className="text-white font-[400] lg:text-[15px]  xl:text-[17px] flex gap-[29px] leading-[160%] pb-[12px]">
                        <a
                            href="#AboutEvent"
                            className="cursor-pointer border-b-3 border-transparent hover:text-[#F28812] hover:border-b-3 hover:border-[#F28812]"
                        >
                            О СОБЫТИИ
                        </a>
                        <a
                            href="#Speakers"
                            className="cursor-pointer border-b-3 border-transparent hover:text-[#F28812] hover:border-b-3 hover:border-[#F28812]"
                        >
                            СПИКЕРЫ
                        </a>
                        <a
                            href="#TicketPrices"
                            className="cursor-pointer border-b-3 border-transparent hover:text-[#F28812] hover:border-b-3 hover:border-[#F28812]"
                        >
                            СТОИМОСТЬ
                        </a>
                        <a
                            href="#Questions"
                            className="cursor-pointer border-b-3 border-transparent hover:text-[#F28812] hover:border-b-3 hover:border-[#F28812]"
                        >
                            ВОПРОСЫ
                        </a>
                        <a
                            href="#AfterParty"
                            className="cursor-pointer border-b-3 border-transparent hover:text-[#F28812] hover:border-b-3 hover:border-[#F28812]"
                        >
                            AFTERPARTY
                        </a>
                    </div>

                    <a
                        href="#ByTicket"
                        className="svgBtn flex items-center cursor-pointer -skew-x-20 rounded-[8px] border-2 border-white text-white lg:text-[16px] xl:text-[19px] py-[8px] px-[24px] gap-1 font-[400] transition hover:bg-white hover:text-black"
                    >
                        <div className="skew-x-20">КУПИТЬ БИЛЕТ</div>
                    </a>
                </div>
            </div>
        </>
    );
}
