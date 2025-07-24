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
        <div className="mt-[56px] xl:mt-[176px] relative ">
            <div className="flex flex-col xl:ap-12 gap-0">
                <div className="flex flex-col ">
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400] w-3/5 text-right">
                        СПЕЦИАЛЬНЫЕ
                    </div>
                    <div className=" text-white text-[32px] xl:text-[120px] font-[750] w-3/5 xl:mt-[-50px] ml-auto flex">
                        ГОСТИ&nbsp;
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            fill="none"
                            className="mt-[10px] xl:mt-[45px] xl:w-10 xl:h-10 w-5 h-5"
                        >
                            <path
                                d="M2.11231 1.75732L2.1123 35.6397L8.04172 35.6397L8.04172 11.922L33.877 37.7573L38.1123 33.522L12.277 7.68674L35.9947 7.68674L35.9947 1.75732L2.11231 1.75732Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-14 gap-y-[26px] xl:gap-y-[26px] justify-center items-center">
                    {guests
                        .sort(
                            (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
                        )
                        .map((guest, index) => {
                            return (
                                <Guest
                                    key={index}
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
