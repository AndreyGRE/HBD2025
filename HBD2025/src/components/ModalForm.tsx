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
                console.log(formData)
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
                className="cursor-pointer flex gap-2 bg-[linear-gradient(90deg,#FFA100_0%,#FF4700_100%)] rounded-3xl xl:px-[32px] xl:py-[22px] w-full xl:w-fit py-[14px] items-center justify-center text-white text-[16px] xl:text-[24px] font-[450] hover:opacity-80"
            >
                СТАТЬ ПАРТНЕРОМ
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                >
                    <path
                        d="M27.0003 6.47681H6.92189V9.99053L20.9768 9.99053L5.66699 25.3003L8.1768 27.8101L23.4866 12.5003L23.4866 26.5552H27.0003V6.47681Z"
                        fill="white"
                    />
                </svg>
            </div>

            {/* Модальное окно */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000080] px-2"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-[#000023] rounded-lg shadow-lg w-full max-w-lg mx-auto p-6 border border-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Крестик в правом верхнем углу */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                            aria-label="Закрыть модальное окно"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <h2 className="text-3xl mb-4 text-[#FFA100] text-center uppercase font-[500]">
                            Хочу стать партнером
                        </h2>

                        {/* Форма */}
                        <form onSubmit={handleSubmit}>
                            {/* Поля формы остаются без изменений */}
                            <div className="mb-4">
                                <label
                                    className="block text-white mb-2"
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
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Ваше Имя Фамилия"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-white mb-2"
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
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Название Компании"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-white mb-2"
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
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Ваш Телефон"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-white mb-2"
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
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Ваш email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    className="block text-white mb-2"
                                    htmlFor="message"
                                >
                                    Чем занимаетесь
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Ваше сообщение"
                                    required
                                ></textarea>
                            </div>

                            {/* Галочка согласия */}
                            <div className="mb-6">
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        checked={isConsentGiven}
                                        onChange={(e) =>
                                            setIsConsentGiven(e.target.checked)
                                        }
                                        className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500"
                                        required
                                    />
                                    <span className="ml-2 text-sm text-white">
                                        Я согласен на обработку моих{" "}
                                        <a
                                            target="_blank"
                                            className="text-[#FFA100] underline"
                                        >
                                            персональных данных
                                        </a>
                                    </span>
                                </label>
                            </div>

                            {/* Убрали кнопку "Отмена", оставили только основную */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={!isConsentGiven || isSubmitting}
                                    className={`px-6 py-2 bg-gradient-to-r from-[#FFA100] to-[#FF4700] text-white font-semibold rounded-lg transition hover:opacity-90 ${
                                        isConsentGiven
                                            ? "cursor-pointer"
                                            : "cursor-not-allowed opacity-50"
                                    }`}
                                >
                                    {isSubmitting
                                        ? "Отправка..."
                                        : "ОСТАВИТЬ ЗАЯВКУ"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
