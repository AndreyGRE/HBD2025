import imageGal1 from "../images/SponsorGallery/ColorLogo_01.png";

import imageGal21 from "../images/SponsorGallery/ColorLogo_21.png";
import imageGal22 from "../images/SponsorGallery/ColorLogo_22.png";
import imageGal23 from "../images/SponsorGallery/ColorLogo_23.png";
import imageGal24 from "../images/SponsorGallery/ColorLogo_24.png";
import imageGal25 from "../images/SponsorGallery/ColorLogo_25.png";
import imageGal26 from "../images/SponsorGallery/ColorLogo_26.png";

import imageGal31 from "../images/SponsorGallery/ColorLogo_31.png";
import imageGal32 from "../images/SponsorGallery/ColorLogo_32.png";
import imageGal33 from "../images/SponsorGallery/ColorLogo_33.png";
import imageGal34 from "../images/SponsorGallery/ColorLogo_34.png";
import imageGal35 from "../images/SponsorGallery/ColorLogo_35.png";
import imageGal36 from "../images/SponsorGallery/ColorLogo_36.png";
import imageGal37 from "../images/SponsorGallery/ColorLogo_37.png";
import imageGal38 from "../images/SponsorGallery/ColorLogo_38.png";

import imageGal41 from "../images/SponsorGallery/ColorLogo_41.png";
import imageGal42 from "../images/SponsorGallery/ColorLogo_42.png";
import imageGal43 from "../images/SponsorGallery/ColorLogo_43.png";

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
                        <img src={imageGal1} className="w-17 lg:w-22 xl:w-22"></img>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center  justify-center gap-[40px] gap-y-[30px] xl:gap-[69px]">
                    <div className="flex flex-wrap items-center  justify-center gap-[40px] gap-y-[30px] xl:gap-[69px]">
                        <img src={imageGal21} className="w-17 lg:w-22 xl:w-22"></img>     
                        <img src={imageGal22} className="w-17 lg:w-22 xl:w-22"></img>  
                        <img src={imageGal23} className="w-17 lg:w-22 xl:w-22"></img>  
                        <img src={imageGal24} className="w-17 lg:w-22 xl:w-22"></img>  
                        <img src={imageGal25} className="w-17 lg:w-22 xl:w-22"></img>  
                        <img src={imageGal26} className="w-17 lg:w-22 xl:w-22"></img>  
                    </div> 
                </div>
                
                <div className="flex items-center  justify-center gap-[40px] xl:gap-[45px]">
                   <img src={imageGal31} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal32} className="w-17 lg:w-22 xl:w-22"></img> 
                   <img src={imageGal33} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal34} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal35} className="w-17 lg:w-22 xl:w-22"></img> 
                   <img src={imageGal36} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal37} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal38} className="w-17 lg:w-22 xl:w-22"></img>  
                </div>

                <div className="flex items-center  justify-center gap-[40px] xl:gap-[45px]">
                   <img src={imageGal41} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal42} className="w-17 lg:w-22 xl:w-22"></img>   
                   <img src={imageGal43} className="w-17 lg:w-22 xl:w-22"></img>   
                </div>

                <div className="flex justify-center w-full lg:max-w-[440px] mt-4">
                    <Modal></Modal>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
