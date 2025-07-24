import img1 from "../images/AfterParty/image 74.png";
import img2 from "../images/AfterParty/image 75.png";

function AfterParty() {
    return (
        <div
            id="AfterParty"
            className="w-full px-[16px] xl:px-[0px]  mt-[64px]  xl:w-[1128px]  xl:mt-[176px] xl:pb-21 xl:mx-auto"
        >
            <div className="flex flex-col xl:flex-row  pt-4 mb-12 gap-8 xl:gap-0">
                <div className="flex-col xl:flex-2 ">
                    <div className="flex xl:hidden flex-col mb-4">
                        <p className="text-[32px] font-[750] text-white text-center">
                            AFTER  PARTY
                        </p>
                        <p className="text-[16px] font-[400] text-[#FFA100] text-center">
                            ВЕЧЕРИНКА HBD 2025
                        </p>
                    </div>

                    <div className="hidden xl:flex flex-col">
                        <p className="text-[120px] font-[750] text-white text-center">
                            AFTER
                        </p>
                        <p className="text-[40px] font-[400] text-[#FFA100] mt-[-40px] text-center">
                            ВЕЧЕРИНКА HBD 2025
                        </p>
                        <p className="text-[120px] font-[750] text-white mt-[-40px] text-center">
                            PARTY
                        </p>
                    </div>

                    <div className="xl:pl-4 flex-col text-[12px] xl:text-[16px] font-[700] text-white flex gap-3 text-center">
                        <p>
                            4 часа неформального общения после основного
                            меропртиятия HOUSE BUSINESS DAY.
                        </p>
                        <p>
                            Вас ждет фуршет с напитками и выступлением
                            кавер-группы
                        </p>
                        <p>
                            Для посещения афтерпати требуется покупка
                            дополнительного билета.
                        </p>
                    </div>
                </div>
                <div className="flex xl:flex-3 justify-center xl:items-center gap-4 xl:gap-12">
                    <img
                        src={img1}
                        className="max-w-[47%] relative xl:translate-y-10"
                    ></img>
                    <img
                        src={img2}
                        className="max-w-[47%] relative xl:-translate-y-30"
                    ></img>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row mb-[32px] py-6 xl:py-10 xl:px-[60px] justify-between items-center gap-4 border-y-1 border-white">
                <div className="flex-col text-white uppercase font-[750]">
                    <div className="text-[16px] ">цена билета</div>
                    <div className="xl:text-[40px] text-[32px] ">7 499 ₽</div>
                </div>
                <div className="flex-col text-white uppercase font-[750] text-center">
                    <div className="text-[16px] ">нетворкинг</div>
                    <div className="xl:text-[40px] text-[32px] ">бесценен</div>
                </div>
                <div className="flex-col text-white uppercase font-[750]">
                    <div className="text-[16px] ">19 ноября</div>
                    <div className="xl:text-[40px] text-[32px] ">20:00</div>
                </div>
                <a
                    href="#ByTicket"
                    className="w-full xl:w-fit text-white text-[24px] uppercase font-[400] xl:py-[22px] xl:px-[32px] py-4 px-11 rounded-[16px] bg-[linear-gradient(90deg,#FFA100_0%,#FF4700_100%)] cursor-pointer hover:opacity-80"
                >
                    билет на афтерпати
                </a>
            </div>
            <div className="flex items-center justify-center pb-[32px]">
                <div className="uppercase text-white text-[20px] font-[750]">
                    месТо проведения афтерпати:
                    <span className="text-[#FFA100]  ">
                        {" "}
                        клуб Sisters, ул. Большая Переяславская 46с1
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AfterParty;
