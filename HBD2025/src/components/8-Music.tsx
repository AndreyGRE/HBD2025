import ImgMusic from '../images/Music/Music.png' 
function App() {
    return (
        <div className="mt-[100px] xl:mt-[252px] px-[27px] relative">
            <img src={ImgMusic} className='absolute right-0 scale-x-[-1] bottom-0 w-[42%] mr-[17px] max-h-[617px] max-w-[783px] xl:right-10'/>
            <svg
                className="mx-auto max-w-[1770px] max-h-[775px] "
                viewBox="0 0 1452 775"
                fill="none"
            >
                <path
                    d="M1452 727C1452 753.51 1430.51 775 1404 775H48.1554C16.1089 775 -6.93787 744.197 2.10681 713.453L201.864 34.4528C207.874 14.0264 226.621 0 247.913 0H1404C1430.51 0 1452 21.4904 1452 48V727Z"
                    fill="url(#paint0_linear_3594_1054)"
                />

                <text x="220" y="200" fill="white"  style={{textTransform: "uppercase", fontFamily: "AvenirNextCyr" , fontWeight: "700", color: "white", fontSize: "100px"}}>
                    Концертное
                </text>
                <text x="220" y="300" fill="white" style={{textTransform: "uppercase", fontFamily: "AvenirNextCyr" , fontWeight: "700", fontSize: "100px"}}>
                    выступление
                </text>
                <text x="220" y="400" fill="white" style={{ fontFamily: "AvenirNextCyr" ,fontWeight: "100", fontSize: "32px"}}>
                    Звезда мировой музыки, 
                </text>
                <text x="220" y="450" fill="white" style={{ fontFamily: "AvenirNextCyr" ,fontWeight: "100", fontSize: "32px"}}>
                    народный артист России
                </text>
                <text x="220" y="550" fill="white" style={{textTransform: "uppercase", fontWeight: "700", fontFamily: "AvenirNextCyr" ,fontSize: "40px"}}>
                    Игорь
                </text>
                <text x="220" y="600" fill="white" style={{textTransform: "uppercase", fontWeight: "700", fontFamily: "AvenirNextCyr" ,fontSize: "40px"}}>
                    Корнелюк
                </text>
                
           

                <defs>
                    <linearGradient
                        id="paint0_linear_3594_1054"
                        x1="1452"
                        y1="423.362"
                        x2="-240.335"
                        y2="449.314"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.128556" stopColor="#000023" />
                        <stop
                            offset="0.497073"
                            stopColor="#7E82D7"
                            stopOpacity="0.9"
                        />
                        <stop offset="0.870922" stopColor="#E95521" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default App;
