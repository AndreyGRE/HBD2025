import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="rounded-md overflow-hidden">
                <button
                    className=" p-5 bg-[rgba(255,255,255,0.15)] flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="text-white text-[16px]  xl:text-[24px] font-[400]">
                        {question}
                    </span>
                    <span
                        className={`transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                opacity="0.7"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.14751 9.13761C5.34418 8.95413 5.66305 8.95413 5.85972 9.13761L12 14.8658L18.1403 9.13761C18.3369 8.95413 18.6558 8.95413 18.8525 9.13761C19.0492 9.32108 19.0492 9.61855 18.8525 9.80202L12.3561 15.8624C12.1594 16.0459 11.8406 16.0459 11.6439 15.8624L5.14751 9.80202C4.95083 9.61855 4.95083 9.32108 5.14751 9.13761Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </button>
                <div className="bg-[rgba(249,249,249,0.10)]">
                    <div
                        className={`overflow-hidden transition-all  duration-400 ease-in-out ${
                            isOpen
                                ? "max-h-96 opacity-100 xl:p-[30px] p-5  "
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="text-[16px] xl:text-[20px] font-[400] text-white">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQItem;
