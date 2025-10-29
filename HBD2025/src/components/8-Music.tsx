import ImgMusicDes from "../images/Music/musicDes.png";
import ImgMusicMob from "../images/Music/musicMob.png";
function App() {
    return (
        <div className="mt-[100px] xl:mt-[150px] lg:px-[100px] px-[27px]  relative ">
            {/* Мобильная версия */}
            <div className="block lg:hidden min-h-[184px]">
                <svg
                    className="inset-0 w-full h-full absolute"
                    xmlns="http://www.w3.org/2000/svg"
                    width="347"
                    height="184"
                    viewBox="0 0 347 184"
                    fill="none"
                >
                    <path
                        d="M43.1667 6.16237L0.262611 173.258C-1.06982 178.447 2.84945 183.5 8.20712 183.5H296.575C300.346 183.5 303.631 180.929 304.537 177.268L345.885 10.1725C347.165 5.00044 343.251 0 337.923 0H51.1112C47.3669 0 44.0979 2.5357 43.1667 6.16237Z"
                        fill="url(#paint0_linear_4276_1153)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_4276_1153"
                            x1="-42.8657"
                            y1="114.94"
                            x2="371.666"
                            y2="108.242"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.129078" stop-color="#E95521" />
                            <stop
                                offset="0.478589"
                                stop-color="#7E82D7"
                                stop-opacity="0.9"
                            />
                            <stop
                                offset="0.871444"
                                stop-color="#000023"
                                stop-opacity="0.38"
                            />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative z-10  grid-cols-10 items-center h-full grid ">
                    <div className="text-white col-span-5 pl-12">
                        <h1 className="text-[12px] font-bold uppercase mb-[5px] leading-[120%]">
                            Концертное выступление
                        </h1>
                        <p className="text-[9px] leading-[120%] max-w-2xl ">
                            House Business Day — это не только про бизнес, но и
                            про вдохновение. Вас ждёт музыкальное шоу от The
                            BeatLove, официального трибьюта The Beatles.
                            Атмосфера ливерпульских 60-х, живой звук и энергия
                            легендарной четвёрки.
                        </p>
                    </div>
                    <img
                        src={ImgMusicMob}
                        alt="Концерт"
                        className="col-span-5"
                    />
                </div>
            </div>

            {/* десктопная версия */}
            <div className="hidden lg:block">
                <svg
                    className="inset-0 w-full h-full absolute "
                    xmlns="http://www.w3.org/2000/svg"
                    width="1728"
                    height="612"
                    viewBox="0 0 1728 612"
                    fill="none"
                >
                    <path
                        d="M175.64 28.9272L2.14138 556.228C-6.81397 583.445 13.4594 611.459 42.1121 611.459H1519.66C1538.03 611.459 1554.28 599.537 1559.8 582.011L1725.74 54.7102C1734.27 27.5977 1714.02 0 1685.6 0H215.611C197.439 0 181.32 11.6655 175.64 28.9272Z"
                        fill="url(#paint0_linear_4276_1103)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_4276_1103"
                            x1="-223.796"
                            y1="438.322"
                            x2="1902.82"
                            y2="403.963"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.129078" stop-color="#E95521" />
                            <stop
                                offset="0.478589"
                                stop-color="#7E82D7"
                                stop-opacity="0.9"
                            />
                            <stop
                                offset="0.871444"
                                stop-color="#000023"
                                stop-opacity="0.01"
                            />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative z-10  grid-cols-10 items-center h-full pl-20 grid">
                    <div className="text-white lg:col-span-5 xl:col-span-4">
                        <h1 className="lg:text-[45px] xl:text-[55px] 2xl:text-[65px] font-bold uppercase mb-[32px] leading-[120%]">
                            Концертное выступление
                        </h1>
                        <p className="text-xl leading-relaxed max-w-2xl">
                            House Business Day — это не только про бизнес, но и
                            про вдохновение. Вас ждёт музыкальное шоу от The
                            BeatLove, официального трибьюта The Beatles.
                            Атмосфера ливерпульских 60-х, живой звук и энергия
                            легендарной четвёрки.
                        </p>
                    </div>
                    <img
                        src={ImgMusicDes}
                        alt="Концерт"
                        className="lg:col-span-5 xl:col-span-6"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
