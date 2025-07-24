import ImgSpon_1_1 from "../svg/LogoSponsors/1_1РОТО.svg";
import ImgSpon_2_1 from "../svg/LogoSponsors/2_1РОТО.svg";
import ImgSpon_2_2 from "../svg/LogoSponsors/2_2РОТО.svg";
import ImgSpon_2_3 from "../svg/LogoSponsors/2_3РОТО.svg";
import ImgSpon_2_4 from "../svg/LogoSponsors/2_4РОТО.svg";
import ImgSpon_2_5 from "../svg/LogoSponsors/2_5РОТО.svg";
import ImgSpon_3_1 from "../svg/LogoSponsors/3_1РОТО.svg";
import ImgSpon_3_2 from "../svg/LogoSponsors/3_2РОТО.svg";
import ImgSpon_3_3 from "../svg/LogoSponsors/3_3РОТО.svg";
import ImgSpon_3_4 from "../svg/LogoSponsors/3_4РОТО.svg";
import ImgSpon_3_5 from "../svg/LogoSponsors/3_5РОТО.svg";
import ImgSpon_4_1 from "../svg/LogoSponsors/4_1РОТО.svg";
import ImgSpon_4_2 from "../svg/LogoSponsors/4_2РОТО.svg";
import ImgSpon_4_3 from "../svg/LogoSponsors/4_3РОТО.svg";
import ImgSpon_4_4 from "../svg/LogoSponsors/4_4РОТО.svg";
import ImgSpon_5_1 from "../svg/LogoSponsors/5_1РОТО.svg";
import ImgSpon_5_2 from "../svg/LogoSponsors/5_2РОТО.svg";
import ImgSpon_5_3 from "../svg/LogoSponsors/5_3РОТО.svg";

function Sponsors() {
    return (
        <div className="mt-[64px]  xl:mt-[176px] relative ">
            <div className="flex flex-col gap-[10px] xl:gap-8 ">
                <div>
                    <img src={ImgSpon_1_1} className=""></img>
                </div>
                <div className="flex justify-around ">
                    <img src={ImgSpon_2_1} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_2_2} className="w-15 xl:w-auto" ></img> 
                    <img src={ImgSpon_2_3} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_2_4} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_2_5} className="w-15 xl:w-auto" ></img>
                </div>
                <div className="flex justify-around">
                    <img src={ImgSpon_3_1} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_3_2} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_3_3} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_3_4} className="w-15 xl:w-auto" ></img>
                    <img src={ImgSpon_3_5} className="w-15 xl:w-auto" ></img>
                </div>
                <div className="flex justify-around">
                    <img src={ImgSpon_4_1} className="w-15 xl:w-auto"></img>
                    <img src={ImgSpon_4_2} className="w-15 xl:w-auto"></img>
                    <img src={ImgSpon_4_3} className="w-15 xl:w-auto"></img>
                    <img src={ImgSpon_4_4} className="w-15 xl:w-auto"></img>
                </div>
                <div className="flex justify-around">
                    <img src={ImgSpon_5_1} className="w-15 xl:w-auto"></img>
                    <img src={ImgSpon_5_2} className="w-15 xl:w-auto"></img>
                    <img src={ImgSpon_5_3} className="w-15 xl:w-auto"></img>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
