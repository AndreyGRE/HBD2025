import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div id='Questions' className=" overflow-hidden border-b border-white">
                <button
                    className="py-5 flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="text-white text-[16px]  lg:text-[24px] font-[300]">
                        {question}
                    </span>
                    
                        <div className="bg-[#1E195D] p-5 rounded-xl -skew-x-8 mr-4">
                            <svg
                                className={`skew-x-8 transform transition-transform duration-300 ${
                                    isOpen ? "rotate-135" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_3594_1648)">
                                    <line
                                        x1="8.5"
                                        y1="2.18557e-08"
                                        x2="8.5"
                                        y2="17"
                                        stroke="white"
                                    />
                                    <line
                                        x1="4.37114e-08"
                                        y1="8.5"
                                        x2="17"
                                        y2="8.5"
                                        stroke="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3594_1648">
                                        <rect
                                            width="17"
                                            height="17"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    
                </button>
                <div className="">
                    <div
                        className={`overflow-hidden transition-all  duration-400 ease-in-out ${
                            isOpen
                                ? "max-h-96 opacity-100 lg:py-[30px] py-5  "
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="text-[16px] lg:text-[20px] font-[300] text-white">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQItem;
