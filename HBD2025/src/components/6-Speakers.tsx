import Spiker from "./61-Spiker";
import SpikerTopElem from "./62-SpikerTop";
import { useEffect, useState } from "react";

interface speakerTop {
    image_url?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    url?: string;
    sort_order?: number;
    index?: number;
}

interface speaker {
    image_url: string;
    text1?: string;
    text2?: string;
    text3?: string;
    url?: string;
    sort_order?: number;
    index?: number;
}
function Speakers() {
    const [speakers, setSpeakers] = useState<speaker[]>([]);
    useEffect(() => {
        fetch("https://devnewlk2.gwd.ru:5000/api/speakers")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setSpeakers(data);
                } else {
                    console.error("Данные не являются массивом:", data);
                }
            })
            .catch((err) => {
                console.error("Ошибка при получении гостей:", err);
            });
    }, []);

    const [speakersTop, setSpeakersTop] = useState<speakerTop[]>([]);
    useEffect(() => {
        fetch("https://devnewlk2.gwd.ru:5000/api/invited_speakers")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setSpeakersTop(data);
                } else {
                    console.error("Данные не являются массивом:", data);
                }
            })
            .catch((err) => {
                console.error("Ошибка при получении гостей:", err);
            });
    }, []);

    return (
        <div id="Speakers" className="mt-[100px] xl:mt-[251px] relative ">
            <div className="flex flex-col gap-0 xl:gap-17 pl-[28] pr-[25px] xl:pr-[60px] xl:pl-[201px]">
                <div className="flex flex-col ">
                    <div className="gradient text-[32px] xl:text-[74px] font-[750] ">
                        СПИКЕРЫ
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-0 xl:gap-y-15 gap-y-0 justify-center xl:justify-start xl:items-start">
                    <>
                        {speakersTop
                            .sort(
                                (a, b) =>
                                    (a.sort_order ?? 0) - (b.sort_order ?? 0)
                            )
                            .map((speakersTop1, i) => {
                                return (
                                    <SpikerTopElem
                                        key={i}
                                        index={i}
                                        srcImg={speakersTop1.image_url}
                                        text1={speakersTop1.text1}
                                        text2={speakersTop1.text2}
                                        text3={speakersTop1.text3}
                                        url={speakersTop1.url}
                                    />
                                );
                            })}
                    </>
                    <>
                        {speakers
                            .sort(
                                (a, b) =>
                                    (a.sort_order ?? 0) - (b.sort_order ?? 0)
                            )
                            .map((speakerObj, index) => {
                                return (
                                    <Spiker
                                        key={index}
                                        index={index}
                                        srcImg={speakerObj.image_url}
                                        text1={speakerObj.text1}
                                        text2={speakerObj.text2}
                                        text3={speakerObj.text3}
                                        url={speakerObj.url}
                                    />
                                );
                            })}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Speakers;
