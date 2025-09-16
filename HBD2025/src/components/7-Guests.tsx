import Guest from "./71-Guest";
import { useEffect, useState } from "react";

interface guest {
    image_url?: string;
    name?: string;
    text?: string;
    sort_order?: number;
}

function Guests() {
    const [guests, setGuests] = useState<guest[]>([]);
    useEffect(() => {
        fetch("https://devnewlk2.gwd.ru:5000/api/guests")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setGuests(data);
                } else {
                    console.error("Данные не являются массивом:", data);
                }
            })
            .catch((err) => {
                console.error("Ошибка при получении гостей:", err);
            });
    }, []);
    return (
        <div className="mt-[100px] xl:mt-[259px] relative ">
            <div className="flex flex-col xl:ap-12 gap-0">
                <div className="flex flex-col mb-[64px]">
                    <div className="gradient text-[32px] xl:text-[74px] font-[700] xl:ml-[207px] uppercase ml-[28px] mr-[24px]">
                        СПЕЦИАЛЬНЫЕ<br></br>ГОСТИ
                    </div>
                    
                </div>
                <div className="flex flex-wrap gap-x-40 gap-y-[26px] xl:gap-y-[32px] justify-center items-center xl:pl-[57px] ">
                    {guests
                        .sort(
                            (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
                        )
                        .map((guest, index) => {
                            return (
                                <Guest
                                    key={index}
                                    index={index}
                                    srcImg={guest.image_url}
                                    name={guest.name}
                                    text={guest.text}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Guests;
