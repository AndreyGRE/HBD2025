
type guest = {
    srcImg?: string;
    name?: string;
    text?: string;
};

function Speaker({ index, srcImg, name, text }: guest & { index: number }) {
    return (
        <div className={`h-[160px] xl:h-[265px] w-[300px] xl:w-[420px] rounded-[40px] -skew-x-30 ${index == 3 ? '2xl:ml-71' : ''} ${index == 6 ? '2xl:mr-70' : ''}`} >
            <div className={`h-full w-full rounded-[40px]  bg-guest `} >
                <img className={`skew-x-30 absolute xl:-left-22 h-[160px] xl:h-[265px] -left-[33px]`} src={srcImg} />
                <div className="skew-x-30 ml-[110px] xl:ml-[150px]  text-white text-left flex flex-col justify-center pt-[20px] xl:pt-[29px]">
                    <div className=" text-[15px] xl:text-[24px] uppercase font-[750]">
                        {name?.split(" ").map((word, index) => (
                            <div key={index}>{word}</div>
                        ))}
                        
                    </div>
                    <div className="text-[10px] xl:text-[16px] font-[100] xl:font-[400] max-w-[163px] xl:max-w-[220px]">{text}</div>   
                </div>                
            </div>
        </div>
    );
}

export default Speaker;
