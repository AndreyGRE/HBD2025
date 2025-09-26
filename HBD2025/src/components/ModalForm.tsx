import { useEffect, useState } from "react";

export default function ModalForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setIsConsentGiven(false);
        setFormData({
            name: "",
            company: "",
            phone: "",
            email: "",
            message: "",
        });
    };
    // Обновление состояния при вводе
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isConsentGiven) {
            alert("Вы должны согласиться на обработку персональных данных");
            return;
        }

        setIsSubmitting(true);
        try {
            const url = "https://housebusinessday.ru/report_tg_partners_2025/";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                console.log(formData);
                alert("Форма успешно отправлена!");
                setIsOpen(false);
            } else {
                alert("Ошибка при отправке формы. Попробуйте позже.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Не удалось подключиться к серверу");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Кнопка открытия модала */}
            <div
                onClick={openModal}
                className="cursor-pointer flex gap-2 bg-[#E95521] -skew-x-17 rounded-lg lg:px-[31px] xl:py-[10px] w-3/4  lg:w-fit py-[10px] items-center justify-center text-white text-[20px] xl:text-[24px] font-[450] hover:opacity-80"
            >
                <p className="skew-x-17 font-[100]">СТАТЬ ПАРТНЁРОМ</p>
            </div>

            {/* Модальное окно */}
            {isOpen && (
                <div
                    className="fixed py-2 inset-0  z-50 flex items-center justify-center bg-[#00000080] px-2"
                    onClick={closeModal}
                >
                    <div
                        className="relative top-10 bac2 shadow-lg w-7/8 h-[] xl:w-full xl:max-w-2xl mx-auto p-[32px] z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Крестик в правом верхнем углу */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none cursor-pointer w-7 h-7  xl:w-10 xl:h-10"
                            aria-label="Закрыть модальное окно"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 42 41"
                            >
                                <line
                                    x1="34.5"
                                    y1="6.20711"
                                    x2="6.92283"
                                    y2="33.7843"
                                    stroke="white"
                                    stroke-linecap="round"
                                />
                                <line
                                    x1="33.7929"
                                    y1="33.4999"
                                    x2="6.21573"
                                    y2="5.92277"
                                    stroke="white"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>

                        <h2 className="text-[32px] xl:text-[40px] mt-[10px] xl:mt-[10px] mb-4 text-[#F05C14] text-center uppercase font-[700]">
                            Хочу стать партнёром
                        </h2>

                        {/* Форма */}
                        <form onSubmit={handleSubmit}>
                            {/* Поля формы остаются без изменений */}
                            <div className="mb-4">
                                <label
                                    className="block font-[100] text-white mb-2"
                                    htmlFor="name"
                                >
                                    Имя Фамилия
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 
                                    placeholder:text-[#000023] placeholder:font-[100]"
                                    placeholder="Ваше Имя Фамилия"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block font-[100] text-white mb-2"
                                    htmlFor="company"
                                >
                                    Компания
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
                                    placeholder:text-[#000023] placeholder:font-[100]"
                                    placeholder="Название Компании"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block font-[100] text-white mb-2"
                                    htmlFor="phone"
                                >
                                    Телефон
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
                                    placeholder:text-[#000023] placeholder:font-[100]"
                                    placeholder="Ваш Телефон"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block font-[100] text-white mb-2"
                                    htmlFor="email"
                                >
                                    Почта
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
                                                placeholder:text-[#000023] placeholder:font-[100]"
                                    placeholder="Ваш email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    className="block font-[100] text-white mb-2"
                                    htmlFor="message"
                                >
                                    Чем занимаетесь
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={1}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400
                                    placeholder:text-[#000023] placeholder:font-[100]"
                                    placeholder="Ваше сообщение"
                                    required
                                ></textarea>
                            </div>

                            {/* Галочка согласия */}
                            <div className="mb-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={isConsentGiven}
                                        onChange={(e) =>
                                            setIsConsentGiven(e.target.checked)
                                        }
                                        className="mt-1 h-[21px] w-[21px]   
                                        text-[#F05C14] 
                                        focus:ring-[#F05C14]
                                        appearance-none rounded-sm
                                        border-1 border-[#F05C14]
                                        checked:bg-transparent
                                        checked:before:content-['✓']        
                                        checked:before:text-white          
                                        checked:before:block 
                                        checked:before:text-center 
                                        checked:before:leading-5            
                                        focus:outline-none hover:ring-1 
                                          "
                                        required
                                    />
                                    <span className="ml-2 text-[12px] xl:text-[15px] text-white font-[100]">
                                        Я согласен на обработку моих{" "}
                                        <a
                                            href="https://www.gwd.ru/about/politika-konfidentsialnosti/"
                                            target="_blank"
                                            className="text-[#FFA100] underline"
                                        >
                                            персональных данных
                                        </a>
                                    </span>
                                </label>
                            </div>

                            {/* Убрали кнопку "Отмена", оставили только основную */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={!isConsentGiven || isSubmitting}
                                    className={`px-6 py-2 -skew-x-12 bg-[#E95521] text-white font-[300] rounded-lg transition hover:opacity-90 ${
                                        isConsentGiven
                                            ? "cursor-pointer"
                                            : "cursor-not-allowed opacity-50"
                                    }`}
                                >
                                    <p className="skew-x-12 font-[200]">
                                        {isSubmitting
                                            ? "Отправка..."
                                            : "ОСТАВИТЬ ЗАЯВКУ"}
                                    </p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
