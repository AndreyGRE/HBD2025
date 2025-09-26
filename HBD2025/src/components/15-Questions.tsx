
function Questions() {
    return (
        <div className="mt-[100px] xl:mt-[160px] 2xl:mt-[260px] xl:pl-[107px] 2xl:max-w-[1500px] 2xl:mx-auto pr-6 pl-[27px] xl:pr-[228px] 2xl:pr-[128px]  relative ">
            <div className="flex  flex-col gap-[22px] xl:gap-12">
                <div className="flex flex-col lg:flex-row flex-1 gap-4 xl:gap-6">
                    <div className="flex flex-1 gap-[18px] xl:gap-6">
                        <div className="text-[32px] md:text-[56px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] xl:max-w-full  gradient font-[800] uppercase">
                            что такое<br className="xl:hidden"></br> house business day?
                        </div>
                    </div>
                    <div className="flex-1 text-white text-[16px] lg:text-[18px]  xl:text-[20px] font-[300] uppercase">
                        <p>                            
                          Это необычный формат бизнес-мероприятия с концертом от строительной компании <a href='https://www.gwd.ru/' target="blank" className="text-white hover:underline hover:decoration-1 hover:decoration-[#FFA100]">
                                GOOD&nbsp;WOOD
                            </a>. Проходит с 2018 года. Эксперты отрасли загородного домостроения делятся своим опытом: как они решают реальные задачи в строительстве, управлении, IT, сервисе и маркетинге. Ежегодно House Business Day даёт руководителям, топ-менеджерам и владельцам компаний инструменты, которые помогают выживать в кризисы и выводить бизнес на новый уровень.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row flex-1 gap-4 xl:gap-6"> 
                    <div className="flex flex-1  gap-[18px] xl:gap-6">
                        <div className="text-[32px] lg:text-[54px] xl:text-[58px] 2xl:text-[74px] max-w-[320px] lg:max-w-full  gradient font-[750] uppercase">
                            ОБ ОРГАНИЗАТОРЕ GOOD WOOD{" "}
                        </div>
                    </div>
                    <div className="flex-1  text-white text-[20px] lg:text-[18px] font-[300] uppercase">
                        <p>
                            Компания{" "}
                            <a href='https://www.gwd.ru/' target="blank"  className="text-white hover:underline hover:decoration-1 hover:decoration-[#FFA100]">
                                GOOD&nbsp;WOOD 
                            </a>
                            &nbsp;— это строительная компания с собственным производством клееного бруса и архитектурным бюро. Мы создаём современные дома из дерева, кирпича и газобетона в Москве и Петербурге. С 2005 года построили более 5500 домов с гарантией 50 лет. Центральный офис компании — GOOD WOOD PLAZA, самое высокое в России офисное здание из дерева.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
