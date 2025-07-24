import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Бургер-меню (видно только на мобильных) */}
            <div className="md:hidden flex justify-between items-center p-4 ">
                <a href="https://housebusinessday.ru/ ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="83"
                        viewBox="0 0 38 83"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 64H38V39.1403L18.9977 20L0 39.1403V64Z"
                            fill="url(#paint0_linear_56_1730)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_56_1730"
                                x1="40.3279"
                                y1="59.9327"
                                x2="0.999466"
                                y2="37.3941"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#E64123" />
                                <stop offset="1" stopColor="#EB6420" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>

                {/* Бургер-иконка */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                    >
                        {isMenuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col bg-[#000023] bg-opacity-90 bg-[url('./images/image1.png')] 
                            bg-lightgray 
                            bg-[-0.263px_0px] 
                            bg-[100.027%_102.383%] 
                            bg-no-repeat 
                            bg-top"
                >
                    <div className="flex justify-between items-center p-4 ">
                        <a href="https://housebusinessday.ru/ ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="83"
                                viewBox="0 0 38 83"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 64H38V39.1403L18.9977 20L0 39.1403V64Z"
                                    fill="url(#paint0_linear_56_1730)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_56_1730"
                                        x1="40.3279"
                                        y1="59.9327"
                                        x2="0.999466"
                                        y2="37.3941"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#E64123" />
                                        <stop offset="1" stopColor="#EB6420" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
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

                    <div className="flex flex-col    flex-1 px-4">
                        <nav className="flex flex-col gap-8 text-white text-2xl font-[500] text-center">
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
                        </nav>
                    </div>
                </div>
            )}

            {/* Навигация для десктопа (остаётся как есть) */}

            <div className="hidden md:flex justify-between items-end">
                <a href="https://housebusinessday.ru/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="83"
                        viewBox="0 0 38 83"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 64H38V39.1403L18.9977 20L0 39.1403V64Z"
                            fill="url(#paint0_linear_3001_1191)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_3001_1191"
                                x1="40.3279"
                                y1="59.9327"
                                x2="0.999466"
                                y2="37.3941"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#E64123" />
                                <stop offset="1" stop-color="#EB6420" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>

                <div className="flex gap-[46px] items-end">
                    <div className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="83"
                            viewBox="0 0 38 83"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 64H38V39.1403L18.9977 20L0 39.1403V64Z"
                                fill="url(#paint0_linear_56_1730)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_56_1730"
                                    x1="40.3279"
                                    y1="59.9327"
                                    x2="0.999466"
                                    y2="37.3941"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#E64123" />
                                    <stop offset="1" stopColor="#EB6420" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="text-white font-[400] text-[17px] flex gap-[29px] leading-[160%] pb-[12px]">
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
                        className="svgBtn flex items-center cursor-pointer rounded-2xl border-2 border-white text-white text-[19px] py-[8px] px-[24px] gap-1 font-[400] transition hover:bg-white hover:text-black"
                    >
                        <div>КУПИТЬ БИЛЕТ</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path d="M24.5269 8.26367H9.46803V10.899L20.0092 10.899L8.52686 22.3813L10.4092 24.2637L21.8916 12.7813L21.8916 23.3225H24.5269V8.26367Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
