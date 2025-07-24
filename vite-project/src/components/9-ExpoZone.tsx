import expoImage from "../images/Expo.png";

function ExpoZone() {
    return (
        <div className="mt-20 xl:mt-[176px] relative ">
            <div className="flex flex-col  justify-center gap-28">
                <div className="flex flex-col items-center">
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400] text-center">
                        ОБШИРНАЯ
                    </div>
                    <div className=" text-white text-[32px] xl:text-[120px] font-[750] text-center">
                        ЭКСПОЗОНА
                    </div>
                    <div className=" text-white text-[12px] xl:text-[20px] font-[450] text-center uppercase max-w-[618px] relative" >
                        Новинки материалов и технологий от ключевых игроков
                        строительного рынка
                        <svg
                            className="absolute xl:right-[-20px]  left-1/2 xl:w-10 xl:h-10 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <path
                                d="M2.1123 38.2427L2.1123 4.36032L8.04172 4.36032L8.04172 28.078L33.877 2.24268L38.1123 6.47797L12.277 32.3133L35.9947 32.3133L35.9947 38.2427L2.1123 38.2427Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={expoImage}></img>
                </div>
            </div>
        </div>
    );
}

export default ExpoZone;
