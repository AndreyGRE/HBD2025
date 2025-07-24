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
}

interface speaker {
    image_url: string;
    text1?: string;
    text2?: string;
    text3?: string;
    url?: string;
    sort_order?: number;
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
        <div id="Speakers" className="mt-[56px] xl:mt-[176px] relative ">
            <div className="flex flex-col gap-0 xl:gap-17">
                <div className="flex  flex-col items-center">
                    <div className="text-white text-[32px] xl:text-[120px] font-[750] ">
                        СПИКЕРЫ
                    </div>
                    <div className="text-[#FFA100] text-[14px] xl:text-[25px] font-[400] text-center">
                        СТРОИТЕЛИ, ДЕВЕЛОПЕРЫ, УПРАВЛЕНЦЫ<br></br>
                        СТРОИТЕЛЬНЫХ КОММПАНИЙ, АНАЛИТИКИ, НЕЗАВИСИМЫЕ ЭКСПЕРТЫ
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {speakersTop
                        .sort(
                            (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
                        )
                        .map((speakersTop1, index) => {
                            return (
                                <SpikerTopElem
                                    key={index}
                                    srcImg={speakersTop1.image_url}
                                    text1={speakersTop1.text1}
                                    text2={speakersTop1.text2}
                                    text3={speakersTop1.text3}
                                    url={speakersTop1.url}
                                />
                            );
                        })}
                </div>
                <div className="flex flex-wrap gap-x-6 xl:gap-y-15 gap-y-0 justify-center xl:justify-start">
                    {speakers
                        .sort(
                            (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
                        )
                        .map((speakerObj, index) => {
                            return (
                                <Spiker
                                    key={index}
                                    srcImg={speakerObj.image_url}
                                    text1={speakerObj.text1}
                                    text2={speakerObj.text2}
                                    text3={speakerObj.text3}
                                    url={speakerObj.url}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Speakers;
