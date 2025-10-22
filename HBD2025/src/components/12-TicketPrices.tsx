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
        <div id="TicketPrices" className="mt-[41px] xl:mt-[150px] relative ">
            <div className="flex flex-col  justify-center gap-[32px] lg:gap-[64px] ">
                <div className="px-[27px] lg:px-0 gradient lg:text-center text-[32px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] font-[750] text-left leading-10 lg:leading-22">
                    СТОИМОСТЬ<br></br>МЕРОПРИЯТИЯ
                </div>
                <div className="flex flex-wrap gap-10 xl:gap-x-[150px] gap-y-12 justify-center xl:justify-center  items-center xl:max-w-[1700px]   xl:px-0 pr-2">
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
