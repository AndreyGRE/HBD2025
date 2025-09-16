import { useState } from "react";
import StayInformed_1 from "../images/StayInformed/StayInformed_1.png";
import StayInformed_2 from "../images/StayInformed/StayInformed_2.png";
import StayInformed_3 from "../images/StayInformed/StayInformed_3.png";
import StayInformed_4 from "../images/StayInformed/StayInformed_4.png";
import StayInformed_5 from "../images/StayInformed/StayInformed_5.png";
import StayInformed_6 from "../images/StayInformed/StayInformed_6.png";
import StayInformed_7 from "../images/StayInformed/StayInformed_7.png";
import StayInformed_8 from "../images/StayInformed/StayInformed_8.png";
import StayInformed_9 from "../images/StayInformed/StayInformed_9.png";
import StayInformed_10 from "../images/StayInformed/StayInformed_91.png";

const images = [
    StayInformed_1,
    StayInformed_2,
    StayInformed_3,
    StayInformed_4,
    StayInformed_5,
    StayInformed_6,
    StayInformed_7,
    StayInformed_8,
    StayInformed_9,
    StayInformed_10,
];
function StayInformed() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const changeImage = (newIndex: number) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setFade(false);
        }, 300); // время совпадает с transition
    };

    const prevImage = () => {
        changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const nextImage = () => {
        changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="mt-[78px] xl:mt-[236px] relative ">
            <div className="flex flex-col  justify-center gap-10">
                <div className="flex flex-col ">
                    <div className="my-gradient text-[32px] xl:text-[74px] font-[750] text-left xl:ml-[207px] ml-[27px]">
                        КАК ЭТО БЫЛО
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 relative w-full max-w-8/10 mx-auto">
                    <button
                        onClick={prevImage}
                        className="absolute -left-5 xl:left-0 z-10 w-[40px] h-[40px] xl:w-[70px] xl:h-[38px]  bg-opacity-50  px-2 py-1 rounded hover:bg-opacity-70 cursor-pointer active:-translate-x-1"
                    >
                        <svg

                            viewBox="0 0 49 28"
                            fill="none"
                        >
                            <path
                                d="M3 14H46M3 14L14.1294 3M3 14L14.1294 25"
                                stroke="#F05C14"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="w-full overflow-hidden rounded">
                        <img
                            src={images[currentIndex]}
                            alt={`Gallery Image ${currentIndex + 1}`}
                            className={`xl:max-w-[1400px] xl:max-h-[700px] mx-auto object-contain transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
                        />
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute -right-5 xl:right-0 z-10 w-[40px] h-[40px] xl:w-[70px] xl:h-[38px]  bg-opacity-50  px-2 py-1 rounded hover:bg-opacity-70 cursor-pointer active:translate-x-1"
                    >
                        <svg

                            viewBox="0 0 49 28"
                            fill="none"
                        >
                            <path
                                d="M46 14H3M46 14L34.8706 3M46 14L34.8706 25"
                                stroke="#F05C14"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StayInformed;
