import VkSVG from "../svg/icon_VK.svg";

function AnyOtherQuestions() {
    return (
        <div className="mt-[64px]  xl:mt-[179px] relative ">
            <div className="flex flex-col  justify-center gap-11">
                <div className="flex flex-col  ">
                    <div className="text-[#FFA100] text-[16px] xl:text-[50px] font-[400] uppercase w-5/9 xl:w-2/5 text-right">
                        ОСТАЛИСЬ
                    </div>
                    <div className="text-white text-[32px] xl:text-[120px] font-[750] uppercase w-4/5 xl:w-4/5 ml-auto mt-[-10px] xl:mt-[-40px]">
                        ВОПРОСЫ?
                    </div>
                    <div className="flex items-center gap-3 self-center mt-[-10px] xl:mt-[-30px]">
                        <div className="text-white text-[16px] xl:text-[58px] font-[750] ">
                            8 800 333-11-11
                        </div>
                        <a
                            href="https://vk.com/housebusinessday"
                            target="blank"
                            className="h-[30px] w-[30px] xl:h-[71px] xl:w-[71px]"
                        >
                            <img src={VkSVG}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnyOtherQuestions;
