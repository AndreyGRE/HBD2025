import VkSVG from "../svg/icon_VK.svg";
import bgAnyOtherQues from "../images/AnyOtherQuestions/bg-AnyOtherQues.png";

function AnyOtherQuestions() {
    return (
        <div
            className={`mt-[64px] py-[44px] xl:py-[98px]  xl:mt-[147px] relative bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${bgAnyOtherQues})` }}
        >
            <div className="flex flex-col  justify-center">
                <div className="flex flex-col text-white  font-[500] justify-center items-center text-[20px] xl:text-[32px] uppercase">
                    <a
                        href="https://vk.com/housebusinessday"
                        target="blank"
                        className="h-[23px] w-[23px] xl:h-[53px] xl:w-[53px] mb-12 hidden xl:block "
                    >
                        <img src={VkSVG}></img>
                    </a>
                    <div>Остались вопросы?</div>
                    <div className="flex items-center gap-4">
                        {" "}
                        <a
                            href="https://vk.com/housebusinessday"
                            target="blank"
                            className="h-[23px] w-[23px] block xl:hidden"
                        >
                            <img src={VkSVG}></img>
                        </a>{" "}
                        8 800 333-11-11
                    </div>
                </div>
            </div>
            <a  className=" absolute lef-0 bottom-0"
                href="https://metrika.yandex.ru/stat/?id=52434073&amp;from=informer"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <img
                    src="https://informer.yandex.ru/informer/52434073/3_0_FFFFFFFF_EFEFEFFF_0_pageviews"
                    style={{ width: "88px", height: "31px", border: 0 }}
                    alt="Яндекс.Метрика"
                    title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
                    className="ym-advanced-informer"
                    data-cid="52434073"
                    data-lang="ru"
                />
            </a>
        </div>
    );
}

export default AnyOtherQuestions;
