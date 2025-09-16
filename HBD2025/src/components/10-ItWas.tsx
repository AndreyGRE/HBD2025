import { useEffect, useState } from "react";
import Modal from "./ModalForm";
import imageGal1 from "../images/SponsorGallery/01_ColorLogo.png";
import imageGal2 from "../images/SponsorGallery/02_ColorLogo.png";
import imageGal3 from "../images/SponsorGallery/03_ColorLogo.png";
import imageGal4 from "../images/SponsorGallery/04_ColorLogo.png";
import imageGal5 from "../images/SponsorGallery/05_ColorLogo.png";
import imageGal6 from "../images/SponsorGallery/06_ColorLogo.png";
import imageGal7 from "../images/SponsorGallery/07_ColorLogo.png";
import imageGal8 from "../images/SponsorGallery/08_ColorLogo.png";
import imageGal9 from "../images/SponsorGallery/09_ColorLogo.png";
import imageGal10 from "../images/SponsorGallery/10_ColorLogo.png";

function ItWas() {
    interface originalImages {
        imageUrls: string;
    }
    interface duplicatedImages {
        imageUrls: string;
    }
    const originalImages = [
        imageGal1,
        imageGal2,
        imageGal3,
        imageGal4,
        imageGal5,
        imageGal6,
        imageGal7,
        imageGal8,
        imageGal9,
        imageGal10,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Дублируем изображения для бесконечного скролла
    const duplicatedImages = [...originalImages, ...originalImages];
    // количество картинок в зависимости от экрана
    const [imagesPerView, setImagesPerView] = useState(4);
    useEffect(() => {
        const updateImagesPerView = () => {
            if (window.innerWidth < 640) {
                setImagesPerView(3); // мобилки
            } else if (window.innerWidth < 1024) {
                setImagesPerView(6); // планшеты
            } else if (window.innerWidth < 1440) { 
                setImagesPerView(8); // десктоп
            } else {
                setImagesPerView(8); // большие экраны
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
        <>
            <div className="mt-[100px] xl:mt-[250px] relative ">
                <div className="flex flex-col  justify-center xl:gap-[32px] gap-[14px]">
                    <div className="flex flex-col items-center">
                        <div className="gradient text-[32px] xl:text-[74px] font-[750] ">
                            БУДЬ В КУРСЕ
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-10">
                        <div className=" gradient text-[12px] xl:text-[20px] xl:font-[500] font-[700] uppercase text-center max-w-[890px] pl-[42px] pr-[41px]">
                            Приходите, и вы сможете лично пообщаться с ведущими
                            специалистами
                            <br className="unvisible xl:visible"></br>
                            российских и международных компаний:
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
                                            style={{ flex: `0 0 ${100 / imagesPerView}%` }}
                                            className=" px-[5px] flex-shrink-0"
                                        >
                                            <div className="aspect-[2/1] overflow-hidden ">
                                                <img
                                                    src={src}
                                                    alt={`slide-${index}`}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Modal></Modal>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItWas;
