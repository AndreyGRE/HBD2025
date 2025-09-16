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
        <div id="TicketPrices" className="mt-[64px] xl:mt-[176px] relative ">
            <div className="flex flex-col  justify-center gap-11 ">
                <div className="gradient text-[32px] xl:text-[74px] font-[750] text-left xl:ml-[263px] pl-[26px] pr-[25px]">
                    СТОИМОСТЬ МЕРОПРТИЯТИЯ
                </div>
                <div className="flex xl:flex-wrap gap-10 xl:gap-x-[150px] gap-y-12 justify-start xl:justify-center xl:mx-auto items-center xl:max-w-[1700px] overflow-x-auto whitespace-nowrap scrollbar-hide pl-10 xl:px-0 pr-2">
                    {ticket
                        .sort(
                            (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
                        )
                        .map((ticket, index) => {
                            return <Tiket key={index} ticket={ticket} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default TicketPrices;
