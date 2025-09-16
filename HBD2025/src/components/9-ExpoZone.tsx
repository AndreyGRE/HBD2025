import { useEffect, useState } from "react";
import Exp1 from "../images/ExpoZone/Exp_1.png";
import Exp2 from "../images/ExpoZone/Exp_2.png";
import Exp3 from "../images/ExpoZone/Exp_3.png";
import Exp4 from "../images/ExpoZone/Exp_4.png";

function ExpoZone() {
    interface originalImages {
        imageUrls: string;
    }
    interface duplicatedImages {
        imageUrls: string;
    }
    const originalImages = [Exp1, Exp2, Exp3, Exp4];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Дублируем изображения для бесконечного скролла
    const duplicatedImages = [...originalImages, ...originalImages];
    // количество картинок в зависимости от экрана
    const [imagesPerView, setImagesPerView] = useState(4);
    useEffect(() => {
        const updateImagesPerView = () => {
            if (window.innerWidth < 640) {
                setImagesPerView(1); // мобилки
            } else if (window.innerWidth < 1024) {
                setImagesPerView(2); // планшеты
            } else if (window.innerWidth < 1440) {
                setImagesPerView(3); // десктоп
            } else {
                setImagesPerView(3); // большие экраны
            }
        };

        updateImagesPerView();
        window.addEventListener("resize", updateImagesPerView);
        return () => window.removeEventListener("resize", updateImagesPerView);
    }, []);

    // автопрокрутка
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = prev + 1;
                if (nextIndex >= originalImages.length) {
                    return 0;
                }
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [originalImages.length]);

    return (
        <div className="mt-[100px] xl:mt-[250px] relative ">
            <div className="flex flex-col  justify-center ">
                <div className="ml-[27px] mb-5 xl:mb-[76px] xl:ml-[207px] flex gradient flex-col xl:flex-row xl:gap-[264px] xl:items-center items-start">
                    <div className="gradient text-[32px] xl:text-[74px] font-[750] xl:text-center text-left">
                        ЭКСПОЗОНА
                    </div>
                    <div className="  text-[18px] xl:text-[20px] font-[450] max-w-[540px] text-left uppercase ">
                        Новинки материалов и технологий от ключевых игроков
                        строительного рынка
                    </div>
                </div>
                <div>
                    <div className="max-w-full overflow-hidden ">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / imagesPerView)
                                }%)`,
                            }}
                        >
                            {duplicatedImages.map((src, index) => (
                                <div
                                    key={index}
                                    style={{
                                        flex: `0 0 ${100 / imagesPerView}%`,
                                    }}
                                    className=" px-[5px] flex-shrink-0 "
                                >
                                    {/* <div className="aspect-[2/1] overflow-hidden ">
                                        <img
                                            src={src}
                                            alt={`slide-${index}`}
                                            className="h-full w-full object-cover [mask-image:url(#parallelogramMask)] [mask-repeat:no-repeat] [mask-size:100%_100%] "
                                        />
                                    </div> */}
                                    <div className="relative w-[400px] h-[250px] overflow-hidden ">
                                        <img
                                           src={src}
                                            alt={`slide-${index}`}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpoZone;
