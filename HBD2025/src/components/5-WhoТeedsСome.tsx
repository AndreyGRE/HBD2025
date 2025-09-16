function WhoTeedsCome() {
    const text: string[] = [
        "Менеджерам проектов Лидерам команд",
        "Владельцам крупного и среднего бизнеса",
        "будущим руководителям в строительной сфере",
        "руководителям Архитектурных бюро, Архитекторам",
        "менеджерам Высшего и среднего звена строительных компаний",
        "предпринимателям, руководителям в строительной сфере",
    ];

    return (
        <div className="mt-[103px] xl:mt-[250px] xl:p-[60px] ">
            <div className="flex flex-col gap-6 xl:gap-18 xl:pl-[148px] xl:pr-[125px] ">
                <div className="flex  font-[750] xl:text-[74px] pl-[27px] text-[32px] gradient">
                    <div className="font-[750] xl:text-[74px] gradient ">
                        КОМУ
                        <br></br>
                        ОБЯЗАТЕЛЬНО ПОЙТИ
                    </div>
                </div>
                <div
                    className="  flex flex-nowrap overflow-x-auto gap-x-[20px] px-4
                                xl:flex-wrap xl:overflow-visible xl:gap-x-[46px] xl:gap-y-[62px] xl:pl-[46px]
                                pl-15
                                scrollbar-hide "
                >
                    {text.map((item, i) => {
                        return (
                            <div
                                className={`bg-[#2e2a78] pl-11 gap-3 text-white px-8 py-6 xl:max-w-[400px] min-w-[353px] h-[240px] justify-center rounded-[40px] shadow-lg transform items-center -skew-x-32 flex ${
                                    i === 3 ? "xl:ml-27" : ""
                                }`}
                                key={i}
                            >
                                <div className="w-[6px] xl:w-[6px] h-[61px]  bacc skew-x-32"></div>
                                <p className="transform skew-x-32 text-xl font-[400] uppercase  ">
                                    {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhoTeedsCome;
