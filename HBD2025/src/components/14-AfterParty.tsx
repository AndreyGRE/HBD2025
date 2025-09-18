import AfImg from "../images/AfterParty/image1.png";
import AfImg2 from "../images/AfterParty/image2.png";

function AfterParty() {
    return (
        <div
            id="AfterParty"
            className=" xl:px-[16px] px-[0px]  mt-[100px] xl:mt-[384px] xl:ml-[211px] xl:mx-auto "
        >
            <div className=" absolute -right-[20%] w-[1604px] h-[772px] rounded-[1604px] flex-shrink-0 rotate-[30deg] blur-[250px] custom-gradient-bg -z-10"></div>
            <div className="bg-Af bg-contain bg-no-repeat text-white xl:ml-[211px] pl-[27px] xl:mr-[174px] xl:pt-[44px] pt-[42px] relative">
                <div className="relative">
                    <div className="flex flex-col gap-[30px]  relative">
                        <p className="text-[67px] xl:text-[120px] font-[750] xl:leading-[120px] leading-[40px] max-w-[440px]">
                            AFTER
                        </p>
                        <p className="text-[67px] xl:text-[120px] font-[750] xl:leading-[120px] leading-[40px] xl:ml-[220px] max-w-[440px]">
                            PARTY
                        </p>
                        <p className="text-[20px] xl:text-[40px] font-[300] xl:ml-[220px] max-w-[440px]">
                            ВЕЧЕРИНКА HBD 2025
                        </p>
                        <p className="text-[16px] font-[400] xl:ml-[220px] max-w-[440px] pr-[60px]">
                            4 часа неформального общения после основного
                            меропртиятия HOUSE BUSINESS DAY.<br className="xl:hidden" ></br><br className="xl:hidden" ></br> Вас ждёт фуршет с
                            напитками и выступлением кавер-группы <br className="xl:hidden" ></br><br className="xl:hidden" ></br> Для посещения
                            афтерпати требуется покупка дополнительного билета.
                        </p>
                    </div>
                    <div className="absolute xl:left-250 xl:-top-30 top-146 right-0 max-w-[180px] flex flex-col items-end ">
                        <img src={AfImg} className="xl:max-w-[450px] " />
                        <img
                            src={AfImg2}
                            className="xl:max-w-[550px] xl:mt-[80px] max-w-[350px] mt-[70px] pr-[27px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row items-start gap-[230px] xl:gap-[64px] pt-[65px] pb-[64px]">
                    <div className="flex flex-col xl:flex-row xl:gap-[50px] gap-[20px]">
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
                    <div className="cursor-pointer flex gap-2 bg-[#E95521] -skew-x-17 rounded-lg xl:px-[31px] xl:py-[10px] w-8/9 xl:w-fit  py-[10px] items-center justify-center text-white text-[20px] xl:text-[24px] font-[450] hover:opacity-80 overflow-hidden">
                        <p className="skew-x-17 font-[100] uppercase">
                            билет на афтерпати
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AfterParty;
