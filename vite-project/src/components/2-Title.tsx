import logoUrl from "../svg/Logo.svg";

function Title() {
    return (
        <>

            <div className="mt-[0px] xl:mt-[193px] flex justify-between xl:flex-row flex-col-reverse gap-[38px] xl:gap-0" >
                <div className="flex flex-col xl:gap-12 gap-7">
                    <div className="flex flex-col px-[55px]">
                        <img src={logoUrl} alt="Logo" className="w-full" />
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse items-end content-end justify-between">
                        <a href="#ByTicket" className="svgBtn cursor-pointer mt-[67px] xl:mt-0 rounded-2xl xl:border-2 border-1 border-white text-white xl:text-[33px] text-[16px] py-[8px] px-[24px] font-[400] w-full xl:w-fit flex gap-1 hover:bg-white hover:text-black items-center justify-center">
                            КУПИТЬ БИЛЕТ
                            <svg
                                className=" h-[28px] w-[28px] xl:h-[48px] xl:w-[48px]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                fill="none"
                            >
                                <path
                                    d="M40.5 8.5H10.3824V13.7706L31.4647 13.7706L8.5 36.7353L12.2647 40.5L35.2294 17.5353L35.2294 38.6176H40.5V8.5Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <div className="max-w-[350px] text-white xl:font-[500] font-[400] xl:text-[24px] text-[11px] text-center xl:text-left">
                            VII БИЗНЕС-КОНЦЕРТ ОТРАСЛИ МАЛОЭТАЖНОГО СТРОИТЕЛЬСТВО
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:max-w-[230px] items-center xl:items-start xl:gap-0 gap-5">
                    <div className="text-[#F18412] xl:font-[900] font-[450] text-[14px] xl:text-[20px] flex flex-col xl:gap-4 gap-2 text-center xl:text-left">
                        <div>МОСКВА</div>
                        <div>
                            19 НОЯБРЯ,<br></br>СРЕДА, 10:00
                        </div>
                        <div>ПЛАНЕТА КВН, ШЕРЕМЕТЬЕВСКАЯ, 2</div>
                    </div>
                    <a href="https://yandex.ru/maps/org/planeta_kvn/1159842195/?ll=37.617725%2C55.793991&z=10" target="blank"  className="hover:underline hover:decoration-1 hover:text-[#FFA100] hover:decoration-[#FFA100] text-[14px] font-[400] text-white">
                        НА КАРТЕ
                    </a>
                </div>
            </div>



            <div className="mt-[75px] xl:mt-[182px] flex xl:flex-row flex-col justify-between">
                <div className="flex flex-col items-center">
                    <div className="xl:text-[106px] xl:font-[900] text-[48px] font-[750] text-white">
                        4000+
                    </div>
                    <div className="xl:text-[32px] xl:font-[700] text-[24px] font-[700] text-[#C4C4C4]">
                        УЧАСТНИКОВ
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="xl:text-[106px] xl:font-[900] text-[48px] font-[750] text-[#FFA100] ">
                        200+
                    </div>
                    <div className="xl:text-[32px] xl:font-[700] text-[24px] font-[700] text-[#F28812]">
                        КОМПАНИЙ
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="xl:text-[106px] xl:font-[900] text-[48px] font-[750] text-white">
                        <span className="xl:text-[32px] xl:font-[900] text-[24px] font-[750] text-white">
                            C
                        </span>{" "}
                        2018
                    </div>
                    <div className="xl:text-[32px] text-[24px]  xl:font-[700] text-[#C4C4C4]">
                        ГОДА
                    </div>
                </div>
            </div>
        </>
    );
}

export default Title;
