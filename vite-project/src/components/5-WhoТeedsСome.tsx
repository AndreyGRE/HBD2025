

function WhoTeedsCome() {
    const text: string[] = [
        "Менеджерам проектов, лидерам команд, прорабам",
        "Владельцам крупного и среднего бизнеса",
        "Менеджерам высшего и среднего звена строительных компаний",
        "Руководителям архитектурных бюро, архитекторам",
        "Будущим руководителям в строительной сфере",
        "Предпринимателям, желающим развивать свой строительный бизнес",
    ];

    return (
        <div className="mt-[56px] xl:mt-44">
            <div className="flex flex-col gap-6 xl:gap-18">
                <div className="flex">
                    <div className="text-white text-[32px] xl:text-[100px] font-[750] w-11/20 text-right">
                        КОМУ
                    </div>
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400] w-9/20 mt-[50px] right-0">
                        ОБЯЗАТЕЛЬНО<br></br>
                        <div className="flex items-center">
                            ПОЙТИ &nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="xl:w-10 xl:h-10 w-5 h-5"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    d="M37.8877 38.2427V4.36032L31.9583 4.36032L31.9583 28.078L6.12299 2.24268L1.8877 6.47797L27.723 32.3133L4.00534 32.3133L4.00534 38.2427H37.8877Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between xl:gap-y-20 gap-y-6">
                    {text.map((item, i) => {
                        return (
                            <div
                                className="w-1/2 xl:w-1/3 uppercase text-white text-[12px] xl:text-[25px] font-[750] gap-2 flex xl:gap-4 xl:max-w-[330px] items-center xl:items-start "
                                key={i}
                            >
                                <div className="w-[2px] xl:w-[6px] h-[124px]  bg-[#FFA100]"></div>
                                <div className="xl:max-w-[300px] max-w-[150px]">
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhoTeedsCome;
