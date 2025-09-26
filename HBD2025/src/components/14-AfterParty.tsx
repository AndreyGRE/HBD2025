import AfImg from "../images/AfterParty/image1.png";
import AfImg2 from "../images/AfterParty/image2.png";

function AfterParty() {
    return (
        <div
            id="AfterParty"
            className="px-[0px] mt-[100px] lg:mx-auto xl:mt-[384px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-full  2xl:ml-[0px] "
        >
            <div className="absolute -right-[20%] w-[1604px] h-[772px] rounded-[1604px] flex-shrink-0 rotate-[30deg] blur-[250px] custom-gradient-bg -z-10"></div>
            <div className="bg-Af bg-contain bg-no-repeat text-white 2xl:ml-[411px] pl-[27px] 2xl:mr-[0px] 2xl:pt-[44px] pt-[42px] relative ">
                <div className="relative 2xl:w-fit 2xl:min-w-[1200px]">
                    <div className="flex flex-col gap-[30px] w-fit  relative">
                        <p className="text-[67px] lg:text-[70px] xl:text-[90px]  2xl:text-[120px] font-[750] xl:leading-[120px] leading-[40px] max-w-[440px]">
                            AFTER
                        </p>
                        <p className="text-[67px] lg:text-[70px] xl:text-[90px]  2xl:text-[120px] font-[750] xl:leading-[120px] leading-[40px] lg:ml-[90px] xl:ml-[150px] 2xl:ml-[220px] max-w-[440px]">
                            PARTY
                        </p>
                        <p className="text-[20px] lg:text-[25px] xl:text-[30px]  2xl:text-[40px] font-[300] 2xl:ml-[220px] max-w-[440px]">
                            ВЕЧЕРИНКА HBD 2025
                        </p>
                        <p className="text-[16px] font-[400] 2xl:ml-[220px] max-w-[440px] pr-[60px]">
                            4 часа неформального общения после основного
                            меропртиятия HOUSE BUSINESS DAY.
                            <br className="xl:hidden"></br>
                            <br className="xl:hidden"></br> 
                            Вас ждёт фуршет с
                            напитками и выступлением кавер-группы{" "}
                            <br className="xl:hidden"></br>
                            <br className="xl:hidden"></br> 
                            Для посещения
                            афтерпати требуется покупка дополнительного билета.
                        </p>
                    </div>
                    <div className="absolute lg:left-180 lg:-top-20 xl:left-220 xl:-top-30  2xl:left-250 2xl:-top-30 top-146 right-0 max-w-[180px] flex flex-col items-end ">
                        <img
                            src={AfImg}
                            className="2xl:max-w-[450px] lg:max-w-[300px] xl:max-w-[350px]  "
                        />
                        <img
                            src={AfImg2}
                            className="lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-[550px] xl:mt-[80px] max-w-[350px] mt-[70px] pr-[27px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-[230px] lg:gap-[34px]  xl:gap-[64px]  lg:pt-[35px] lg:pb-[34px] pt-[65px] pb-[64px] w-fit">
                    <div className="flex flex-col lg:flex-row xl:gap-[50px] gap-[20px]">
                        <div className="flex-col text-white uppercase font-[750]">
                            <div className="text-[16px] ">цена билета</div>
                            <div className="xl:text-[40px] text-[32px] ">
                                15 000 ₽
                            </div>
                        </div>
                        <div className="flex-col text-white uppercase font-[750] ">
                            <div className="text-[16px] ">нетворкинг</div>
                            <div className="xl:text-[40px] text-[32px] ">
                                бесценен
                            </div>
                        </div>
                        <div className="flex-col text-white uppercase font-[750]">
                            <div className="text-[16px] ">19 ноября</div>
                            <div className="xl:text-[40px] text-[32px] ">
                                20:00
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer flex gap-2 bg-[#E95521] -skew-x-17 rounded-lg lg:px-[31px] xl:py-[10px] w-full px-4 lg:w-fit  py-[10px] items-center justify-center text-white text-[20px] xl:text-[24px] font-[450] hover:opacity-80 overflow-hidden">
                        <a className="skew-x-17  font-[100] uppercase" href="#AfterPartyTickets">
                            билет на афтерпати
                        </a>
                    </div>
                </div>
            </div>

            <div id="AfterPartyTickets" className="w-full h-[300px] xl:h-[530px] mb-11">
                <iframe
                    className="w-full h-full"
                    src="https://events.nethouse.ru/buy_tickets/135797/iframe/"
                    style={{ border: "none" }}
                ></iframe>
            </div>
        </div>
    );
}

export default AfterParty;
