import AnsQus from "./181-FAQItem";

interface Questions {
    questions: string;
    answer: string;
}

const questionsAndanswer: Questions[] = [
    {
        questions: "Когда начнутся продажи билетов?",
        answer: "22-го сентября.",
    },
    {
        questions: "Где проходит мероприятие?",
        answer: "Площадка — Планета КВН, ул. Шереметьевская, 2. Ближайшее метро — Марьина Роща.",
    },
    {
        questions: "Не пришел билет. Что делать?",
        answer: "Сначала проверьте папку «Спам». Если билета там нет — звоните нам: 8 800 333-11-11.",
    },

    {
        questions: "Когда будет тайминг и программа?",
        answer: "Полная программа появится в Telegram-боте в день мероприятия.",
    },
    {
        questions: "Есть ли парковка?",
        answer: "Да, в ТЦ «Райкин Плаза». Парковка платная.",
    },
    {
        questions: "Можно оплатить билет на месте?",
        answer: "Да, но советуем покупать заранее на сайте — места могут закончиться.",
    },
    {
        questions: "Почему в билете не указано место?",
        answer: "В категории «Стандарт» места в зале не закрепляются. В категориях «Комфорт», «Бизнес» и «VIP» билеты с местами выдаются при регистрации в день мероприятия.",
    },
    {
        questions: "Когда придет ссылка на трансляцию?",
        answer: "За день до события — на вашу почту и телефон, указанные при покупке билета.",
    },
    {
        questions: "Будет ли запись видео?",
        answer: "Да. Ссылка та же, что и для трансляции. Запись включена в билеты категорий «Бизнес» и «VIP», а также доступна по отдельному билету.",
    },
    {
        questions: "Можно ли оплатить билет как юридическое лицо?",
        answer: "Да. На сайте выберите вариант «Оплата от юрлица».",
    },
    {
        questions: "Не работает промокод. Что делать?",
        answer: "Возможно, срок его действия уже истек. Напишите нам в  <a class='underline text-amber-300' href='https://t.me/loginovari'>Telegram</a> и сообщите промокод — мы разберемся.",
    },
    {
        questions: "Во сколько закончится мероприятие?",
        answer: "Ориентировочно в 19:30, но тайминг может немного измениться.",
    },
    {
        questions: "Входит ли питание в билет?",
        answer: "Только для категорий «Бизнес» и «VIP». Для других категорий мы составили подборку кафе и ресторанов поблизости — она будет доступна в Telegram-боте.",
    },

    {
        questions: "Входит ли билет на мероприятие афтерпати?",
        answer: "Афтерпати входит только в ВИП-билет, в остальные категории билетов - не входит. Билет на афтерпати можно приобрести отдельно на сайте. Советуем брать их заранее.",
    },

    {
        questions: "Где пройдет афтерпати?",
        answer: "Клуб Sisters по адресу: ул. Большая Переяславская, 46с1.",
    },
    {
        questions: "До скольки продлится автопати?",
        answer: "До 00:00.",
    },
];

function FAQ() {
    return (
        <div id="Questions" className="mt-[157px]   xl:mt-[172px] relative ">
            <div className="flex flex-col  justify-center gap-12 pl-[26px] pr-[23px] lg:pl-[100px] lg:pr-[100px] ">
                <div className="flex flex-col justify-center items-center gradient text-white text-[30px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] font-[750] uppercase text-center xl:max-w-full  m-auto">
                    ЧАСТЫЕ ВОПРОСЫ<br></br>ПО&nbsp;HBD&nbsp;2025
                </div>
                <div className="flex flex-col justify-center gap-[15px] items-stretch max-w-[1100px] m-auto">
                    {questionsAndanswer.map((elem, index) => {
                        return (
                            <AnsQus
                                key={index}
                                question={elem.questions}
                                answer={elem.answer}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
