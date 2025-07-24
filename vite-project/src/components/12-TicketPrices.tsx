import Tiket from "./12-Ticket";
import { useEffect, useState } from "react";

interface ticket {
    svg?: string;
    name?: string;
    text?: string[];
    prise?: string;
    nameButt?: string;
    bg?: string;
    activ?: boolean;
    sort_order?: number;
}


function TicketPrices() {
     const [ticket, setTicket] = useState<ticket[]>([]);
    useEffect(() => {
        fetch("https://devnewlk2.gwd.ru:5000/api/tickets")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setTicket(data);
                } else {
                    console.error("Данные не являются массивом:", data);
                }
            })
            .catch((err) => {
                console.error("Ошибка при получении гостей:", err);
            });
    }, []);
    return (
        <div id='TicketPrices' className="mt-[64px] xl:mt-[176px] relative ">
            <div className="flex flex-col  justify-center gap-11">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-white text-[32px] xl:text-[120px] font-[750]  text-center xl:text-left">
                        СТОИМОСТЬ
                    </div>
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400]  mt-[-10px] xl:mt-[-40px]">
                        МЕРОПРТИЯТИЯ
                    </div>
                    <div className="text-white text-[12px] xl:text-[20px] font-[450] text-center uppercase">
                        Мы предлагаем несколько вариантов участия
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-[52px] gap-y-6 justify-center xl:justify-start items-center ">
                    {ticket .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)).map((ticket, index) => {
                        return <Tiket key={index} ticket={ticket} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default TicketPrices;
