interface Ticket {
    svg_icon?: string;
    name?: string;
    description?: string;
    price?: string;
    button_name?: string;
    background_color?: string;
    is_active?: boolean;
}
interface TicketProps {
    ticket: Ticket;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
    return (
        <div
            className={`rounded-[10px] py-8 px-6 w-[341px] h-[465px] flex flex-col justify-between bg-cover bg-no-repeat ${
                ticket.is_active
                    ? "text-white"
                    : " text-[#959D97] pointer-events-none bg-blend-multiply"
            }`}
            style={{
                background: ticket.is_active
                    ? ticket.background_color || "#080740"
                    : "#757678", 
            }}
        >
            <div className="flex flex-col gap-[22px]">
                <div className=" text-[32px] xl:text-[40px] font-[750] flex items-center gap-3 justify-center border-b-2 ">
                    
                    
                    { ticket.is_active && ticket.svg_icon ? (
                        <img src={ticket.svg_icon} className="w-10 h-10"></img>
                    ) : (
                        ""
                    )}
                    {ticket.name}
                </div>
                <div className="flex flex-col gap-2  text-[16px] font-[700] uppercase">
                    {ticket?.description?.split(";").map((text, index) => {
                        return (
                            <div className="flex gap-2" key={index}>
                                <div>•</div>
                                <div>{text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className=" text-[40px] xl:text-[45px] font-[750] uppercase text-center leading-none mb-[12px]">
                    {ticket.price}
                </div>
                <a
                    href="#ByTicket"
                    className={`${
                        ticket.background_color &&  ticket.is_active
                            ? "text-black bg-white hover:opacity-80"
                            : "border-1 hover:bg-white hover:text-black"
                    }  rounded-lg px-[18px] py-[16px] flex items-center justify-center text-[20px] font-[500] cursor-pointer `}
                >
                    {ticket.button_name}
                </a>
            </div>
        </div>
    );
};

export default Ticket;
