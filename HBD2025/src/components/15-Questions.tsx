import line from "../svg/line.svg";

function Questions() {
    return (
        <div className="mt-6 xl:mt-[68px] relative ">
            <div className="flex  flex-col xl:flex-row gap-12">
                <div className="flex flex-col flex-1 gap-4 xl:gap-6">
                    <div className="flex gap-[18px] xl:gap-6">
                        <div className="w-[6px] h-[124px]">
                            <img className="w-full h-full" src={line}></img>
                        </div>
                        <div className="text-[32px] max-w-[320px] xl:max-w-full xl:text-[40px] text-white font-[750] uppercase">
                            что такое house business day?
                        </div>
                    </div>
                    <div className="text-white text-[16px] font-[400]">
                        <p>
                            Это бизнес-концерт от строительной компании{" "}
                            <a href='https://www.gwd.ru/' target="blank" className="text-[#FFA100] hover:underline hover:decoration-1 hover:decoration-[#FFA100]">
                                GOOD&nbsp;WOOD
                            </a>
                            , который проходит с 2018 года. Здесь спикеры
                            расскажут про реальные кейсы, методики роста и
                            развития строительных компаний во времена
                            турбулентности, а также научат выстраивать
                            клиентский сервис, создавать команды мечты и
                            контролировать качество стройки.
                        </p>
                        <p>
                            Без пустых слов и мотивационных выступлений. Только
                            проверенные советы, отработанные инструменты и кейсы
                            от реальных лидеров отрасли.
                        </p>
                        <p>
                            Мероприятие, после посещения которого руководители,
                            топ-менеджеры и владельцы смогут вывести компанию на
                            новый уровень, увеличат прибыль без дополнительных
                            затрат.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-4 xl:gap-6">
                    <div className="flex gap-[18px] xl:gap-6">
                        <div className="w-[6px] h-[124px]">
                            <img className="w-full h-full" src={line}></img>
                        </div>
                        <div className="text-[32px] max-w-[320px] xl:max-w-full xl:text-[40px] text-white font-[750] uppercase">
                            ОБ ОРГАНИЗАТОРЕ GOOD WOOD{" "}
                        </div>
                    </div>
                    <div className="text-white text-[16px] font-[400]">
                        <p>
                            Компания{" "}
                            <a href='https://www.gwd.ru/' target="blank"  className="text-[#FFA100] hover:underline hover:decoration-1 hover:decoration-[#FFA100]">
                                GOOD&nbsp;WOOD
                            </a>
                            — это собственное проектно-архитектурное бюро,
                            деревообрабатывающий комбинат и строительная
                            компания. Мы создаем современные дома из клееного
                            бруса и кирпича в Москве и Петербурге с гарантией 50
                            лет. С 2005 года построили более 5000 домов и
                            центральный офис компании — GOOD WOOD PLAZA, первое
                            в России многоэтажное здание из дерева.
                        </p>
                        <p>
                            GOOD WOOD строит дома так, как будто Заказчик
                            постоянно присутствует на объекте, в то время как он
                            имеет возможность заниматься бизнесом, проводить
                            время с семьей.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
