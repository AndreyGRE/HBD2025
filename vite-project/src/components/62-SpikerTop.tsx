type speaker = {
    srcImg?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    url?: string;
};

function SpikerTop({ srcImg, text1, text2, text3, url }: speaker) {
    return (
        <div className=" bg-[#05042E] py-6 pl-6 xl:py-10 xl:pl-10 w-[552px] mi-h-[309px] mt-[100px] relative ">
            <div className="flex justify-between">
                <div className="">
                    <div className="inline-block py-[6px] px-[18px] rounded-sm bg-[linear-gradient(180deg,#E0921E_26.96%,#F05C14_100%)] text-[14px] font-[400] text-white uppercase">
                        ЭКСКЛЮЗИВ
                    </div>
                    <div className="mt-6 text-[15px] text-[#FFA100] font-[750] uppercase max-w-[280px]">
                        {text1}
                    </div>
                </div>
                <a href={url}>
                    <img
                        src={srcImg}
                        alt="Speaker Photo"
                        className="object-cover h-[130px] w-[120px] top-[-60px] xl:w-[237px] xl:h-[247px] absolute xl:top-[-165px] right-0"
                    />
                </a>
            </div>
            <div className="flex justify-between items-end mt-4">
                <div className="flex flex-col gap-3 max-w-[370px]">
                    <div className="text-[26px] xl:text-[30px] text-white font-[750] uppercase">
                        {text2}
                    </div>
                    <div className="text-[16px] text-white font-[400]">
                        {text3}
                    </div>
                </div>
                <div>
                    <a href={url}>
                        {url ? (
                            <svg
                                className="mr-10 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_3156_42)">
                                    <path
                                        d="M22.6154 19.5583C22.6158 19.3336 22.6794 19.1131 22.7995 18.92C22.9196 18.7269 23.0918 18.5682 23.2981 18.4606C23.5044 18.3531 23.7372 18.3005 23.972 18.3085C24.2069 18.3165 24.4351 18.3847 24.6329 18.506L39.2428 27.4825C39.4278 27.5958 39.58 27.7518 39.6855 27.9361C39.7909 28.1204 39.8462 28.3271 39.8462 28.5372C39.8462 28.7473 39.7909 28.954 39.6855 29.1383C39.58 29.3226 39.4278 29.4786 39.2428 29.5919L24.6329 38.5709C24.4351 38.6922 24.2069 38.7605 23.972 38.7684C23.7372 38.7764 23.5044 38.7239 23.2981 38.6163C23.0918 38.5087 22.9196 38.35 22.7995 38.1569C22.6794 37.9638 22.6158 37.7434 22.6154 37.5187V19.5583Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M0 28C0 12.5364 12.5364 0 28 0C43.4636 0 56 12.5364 56 28C56 43.4636 43.4636 56 28 56C12.5364 56 0 43.4636 0 28ZM28 3.81818C21.5866 3.81818 15.4358 6.3659 10.9009 10.9009C6.3659 15.4358 3.81818 21.5866 3.81818 28C3.81818 34.4134 6.3659 40.5642 10.9009 45.0991C15.4358 49.6341 21.5866 52.1818 28 52.1818C34.4134 52.1818 40.5642 49.6341 45.0991 45.0991C49.6341 40.5642 52.1818 34.4134 52.1818 28C52.1818 21.5866 49.6341 15.4358 45.0991 10.9009C40.5642 6.3659 34.4134 3.81818 28 3.81818Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3156_42">
                                        <rect
                                            width="56"
                                            height="56"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            ""
                        )}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SpikerTop;
