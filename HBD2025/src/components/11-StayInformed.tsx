import ImgStayInformed from "../images/StayInformed.png";

function StayInformed() {
    return (
        <div className="mt-[176px] relative ">
            <div className="flex flex-col  justify-center gap-10">
                <div className="flex flex-col ">
                    <div className="text-[#FFA100] text-[14px] xl:text-[50px] font-[400] w-5/10 text-right ">
                        КАК ЭТО
                    </div>
                    <div className="text-white xl:text-[120px] text-[32px] font-[750] flex items-end w-7/10 ml-auto mt-[-10px] xl:mt-[-50px]">
                        БЫЛО 
                        <svg
                            className="mb-[15px] xl:mb-[50px] ml-2 xl:ml-4 xl:w-10 xl:h-10 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 40 40"
                            fill="none"
                        >
                            <path
                                d="M2 38L2 4.11765L7.92941 4.11765L7.92941 27.8353L33.7647 2L38 6.23529L12.1647 32.0706L35.8824 32.0706L35.8824 38L2 38Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={ImgStayInformed}></img>
                </div>
            </div>
        </div>
    );
}

export default StayInformed;
