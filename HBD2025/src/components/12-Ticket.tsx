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
            className={`flex-shrink-0 rounded-[20px] xl:rounded-[40px] -skew-x-8 pt-[32px] pb-[37px] px-[20px] w-[300px] xl:w-[376px] h-[456px] xl:h-[572px] flex flex-col justify-between bg-cover bg-no-repeat ${
                ticket.is_active
                    ? "text-white"
                    : "text-[#959D97] pointer-events-none bg-blend-multiply"
            }`}
            style={{
                background: ticket.is_active
                    ? ticket.background_color || "linear-gradient(0deg, #1E195D 0%, #1E195D 100%),linear-gradient(90deg, #000023 15.14%, rgba(126, 130, 215, 0.90) 57.3%, #E95521 100.06%),#1E195D"
                    : "#757678",
            }}
        >
            <div className="flex flex-col gap-[42px] ">
                <div className="skew-x-8 text-[25px] xl:text-[40px] font-[750] flex items-center gap-3 justify-center my-border pb-2 ">
                    {ticket.is_active && ticket.svg_icon ? (
                        <img src={ticket.svg_icon} className="w-7 h-7 xl:w-10 xl:h-10"></img>
                    ) : (
                        ""
                    )}
                    {ticket.name}
                </div>
                <div className="flex flex-col gap-2 skew-x-8 text-[12px] xl:text-[18px] font-[400] uppercase max-w-[300px] xl:max-w-[320px] ml-10">
                    {ticket?.description?.split(";").map((text, index) => {
                        return (
                            <div className="flex gap-2" key={index}>
                                <div>•</div>
                                <div className="whitespace-normal">{text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="skew-x-8">
                <div className=" text-[40px] xl:text-[45px] font-[750] uppercase text-center leading-none mb-[44px]">
                    {ticket.price}
                </div>
                <a
                    href="#ByTicket"
                    className={`${
                        ticket.background_color && ticket.is_active
                            ? "text-black bg-white hover:opacity-80"
                            : "border-1 hover:bg-white hover:text-black"
                    } -skew-x-8  rounded-lg px-[18px] py-[16px] flex items-center justify-center  font-[300] cursor-pointer `}
                >
                    <p className="text-[16px] xl:text-[24px] skew-x-8">{ticket.button_name}</p>
                </a>
            </div>
        </div>
    );
};

export default Ticket;
