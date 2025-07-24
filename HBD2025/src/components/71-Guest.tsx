import frame from "../images/Rectangle 1846.png";
type guest = {
    srcImg?: string;
    name?: string;
    text?: string;
};

function Speaker({ srcImg, name, text }: guest) {
   
    return (
        <div
            className="xl:w-[327px] xl:h-[384px] mt-[100px] px-6  h-[320px] w-[320px] bg-no-repeat xl:bg-cover bg-size-[auto_320px]"
            style={{
                backgroundImage: `url(${frame})`,
            }}
        >
            <div className="flex justify-between relative">
                <div className="absolute w-[135px] h-[135px]  xl:top-[-100px] top-[-80px] xl:w-[195px] xl:h-[213px]">
                    <img
                        src={srcImg}
                        alt="Speaker Photo"
                        className="w-auto h-auto"
                    />
                </div>
            </div>
            <div className="max-w-[201px] xl:max-w-[231px] text-white text-[24px] xl:text-[30px] font-[750] uppercase mt-22 xl:mt-30 ">
                {name}
            </div>
            <div className="max-w-[201px] xl:max-w-[231px] text-white text-[16px] font-[400] mt-2 ">
                {text}
            </div>
        </div>
    );
}

export default Speaker;
