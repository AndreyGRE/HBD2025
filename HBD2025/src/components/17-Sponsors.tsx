import imageGal1 from "../images/SponsorGallery/01_ColorLogo.png";
import imageGal2 from "../images/SponsorGallery/02_ColorLogo.png";
import imageGal3 from "../images/SponsorGallery/03_ColorLogo.png";
import imageGal4 from "../images/SponsorGallery/04_ColorLogo.png";
import imageGal5 from "../images/SponsorGallery/05_ColorLogo.png";
import imageGal6 from "../images/SponsorGallery/06_ColorLogo.png";
import imageGal21 from "../images/SponsorGallery/21_ColorLogo.png";
import imageGal22 from "../images/SponsorGallery/22_ColorLogo.png";
import imageGal23 from "../images/SponsorGallery/23_ColorLogo.png";
import imageGal24 from "../images/SponsorGallery/24_ColorLogo.png";
import imageGal25 from "../images/SponsorGallery/25_ColorLogo.png";
import imageGal26 from "../images/SponsorGallery/26_ColorLogo.png";
import imageGal27 from "../images/SponsorGallery/27_ColorLogo.png";
import imageGal28 from "../images/SponsorGallery/28_ColorLogo.png";
import imageGal31 from "../images/SponsorGallery/31_ColorLogo.png";
import imageGal32 from "../images/SponsorGallery/32_ColorLogo.png";
import imageGal33 from "../images/SponsorGallery/33_ColorLogo.png";
import imageGal34 from "../images/SponsorGallery/34_ColorLogo.png";

import Modal from "./ModalForm";

function Sponsors() {
    return (
        <div className="mt-[100px]  xl:mt-[240px] relative xl:mx-[240px] mx-[27px]">
            <div className="-z-1 absolute -left-[20%] flex-shrink-0 w-[1604px] h-[772px] rotate-[-32.855deg] rounded-[1604px] bg-custom-gradient blur-[250px]"></div>
            <div className="flex flex-col justify-center items-center gradient text-white text-[30px] lg:text-[54px] xl:text-[64px] 2xl:text-[74px] font-[750] uppercase text-center xl:max-w-full  m-auto">
                Наши партнеры
            </div>
            <div className="flex flex-col flex-wrap gap-[10px] xl:gap-8 gap-y-[40px] xl:mt-[64px] mt-[24px] items-center">
                <div className="flex flex-wrap items-center justify-center gap-[30px] xl:gap-[89px]">
                    <div className="flex flex-wrap items-center justify-center gap-[30px] xl:gap-[89px]">
                        <img src={imageGal1} className="w-17 lg:w-22 xl:w-auto"></img>
                        <img src={imageGal2} className="w-17 lg:w-22 xl:w-auto"></img>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-[30px] xl:gap-[89px]">
                        <img src={imageGal3} className="w-17 lg:w-22 xl:w-auto"></img>
                        <img src={imageGal4} className="w-17 lg:w-22 xl:w-auto"></img>
                        <img src={imageGal5} className="w-17 lg:w-22 xl:w-auto"></img>
                    </div>
                    <div className="hidden xl:flex flex-wrap items-center justify-center gap-[30px] xl:gap-[89px] ">
                        <img src={imageGal6} className="w-17 lg:w-22 xl:w-auto"></img>
                        
                    </div>
                </div>
                <div className="flex flex-wrap items-center  justify-center gap-[40px] gap-y-[30px] xl:gap-[69px]">
                    <div className="flex flex-wrap items-center  justify-center gap-[40px] gap-y-[30px] xl:gap-[69px]">
                        <img src={imageGal6}  className="w-10 lg:w-20 xl:w-25 block xl:hidden"></img>
                        <img src={imageGal21} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal22} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal23} className="w-10 lg:w-20 xl:w-25"></img>
                        
                    </div> 
                    <div className="flex flex-wrap items-center  justify-center gap-[40px] gap-y-[30px] xl:gap-[69px]">
                        <img src={imageGal24} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal25} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal26} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal27} className="w-10 lg:w-20 xl:w-25"></img>
                        <img src={imageGal28} className="w-10 lg:w-20 xl:w-25"></img>
                    </div>
                </div>
                <div className="flex items-center  justify-center gap-[40px] xl:gap-[45px]">
                    <img src={imageGal31} className="w-17 lg:w-20 xl:w-auto"></img>
                    <img src={imageGal32} className="w-17 lg:w-20 xl:w-auto"></img>
                    <img src={imageGal33} className="w-17 lg:w-20 xl:w-auto"></img>
                    <img src={imageGal34} className="w-17 lg:w-20 xl:w-auto"></img>
                </div>
                <div className="flex justify-center w-full lg:max-w-[440px] mt-4">
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
