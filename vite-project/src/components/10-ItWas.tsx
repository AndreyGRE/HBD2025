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
import imageGal11 from "../images/SponsorGallery/11_ColorLogo.png";

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
        imageGal11,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    // Дублируем изображения для бесконечного скролла
    const duplicatedImages = [...originalImages, ...originalImages];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = prev + 1;
                // Когда доходим до конца оригинальных изображений — начинаем сначала
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
            <div className="mt-[64px] xl:mt-[176px] relative ">
                <div className="flex flex-col  justify-center gap-10">
                    <div className="flex flex-col items-center">
                        <div className="text-white text-[32px] xl:text-[120px] font-[750] ">
                            БУДЬ В КУРСЕ!
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-10">
                        <div className=" text-white text-[12px] xl:text-[20px] font-[700] uppercase text-center max-w-[760px]">
                            Приходите, и вы сможете лично пообщаться с ведущими
                            специалистами российских и международных компаний:
                        </div>

                        <div>
                            <div className="max-w-[858px] overflow-hidden ">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${
                                            currentIndex * 25
                                        }%)`,
                                    }}
                                >
                                    {duplicatedImages.map((src, index) => (
                                        <div
                                            key={index}
                                            className="w-1/4 px-2 flex-shrink-0"
                                        >
                                            <div className="aspect-[2/1] overflow-hidden bg-gray-200">
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

                        <div className=" text-white text-[12px] xl:text-[20px] font-[700] uppercase text-center max-w-[750px]">
                            Именно лидеры рынка задают вектор и тренды развития
                            строительной отрасли.
                        </div>
                        
                        <Modal></Modal>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default ItWas;
