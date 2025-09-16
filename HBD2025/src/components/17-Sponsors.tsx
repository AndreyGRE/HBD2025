import imageGal1 from "../images/SponsorGallery/01_ColorLogo.png";
import imageGal2 from "../images/SponsorGallery/02_ColorLogo.png";
import imageGal3 from "../images/SponsorGallery/03_ColorLogo.png";
import imageGal4 from "../images/SponsorGallery/04_ColorLogo.png";
import imageGal5 from "../images/SponsorGallery/05_ColorLogo.png";
import imageGal6 from "../images/SponsorGallery/06_ColorLogo.png";
import imageGal7 from "../images/SponsorGallery/07_ColorLogo.png";
import imageGal8 from "../images/SponsorGallery/08_ColorLogo.png";
import imageGal9 from "../images/SponsorGallery/09_ColorLogo.png";
import imageGal10 from "../images/SponsorGallery/10_ColorLogo.png";
import Modal from "./ModalForm";

function Sponsors() {
    return (
        <div className="mt-[100px]  xl:mt-[240px] relative ">
             <div className="flex flex-col justify-center items-center gradient text-white text-[30px] xl:text-[74px] font-[750] uppercase text-center xl:max-w-full  m-auto">
                    Наши партнеры
                </div>
            <div className="flex flex-col gap-[10px] xl:gap-8 xl:mt-[64px] mt-[24px]">
                
                <div className="flex justify-center">
                    <img src={imageGal1} className="w-24 xl:w-auto" ></img>
                    <img src={imageGal2} className="w-24 xl:w-auto" ></img> 
                    <img src={imageGal3} className="w-24 xl:w-auto" ></img>
                    <img src={imageGal4} className="w-24 xl:w-auto" ></img>
                   
                </div>
                <div className="flex justify-center">
                    <img src={imageGal5} className="w-24 xl:w-auto" ></img>
                    <img src={imageGal6} className="w-24 xl:w-auto" ></img>
                    <img src={imageGal7} className="w-24 xl:w-auto" ></img>
                    <img src={imageGal8} className="w-24 xl:w-auto" ></img>
                 
                </div>
                <div className="flex justify-center">
                    <img src={imageGal9} className="w-24 xl:w-auto"></img>
                    <img src={imageGal10} className="w-24 xl:w-auto"></img>
                </div>
                <div className="flex justify-center">
                    <Modal ></Modal>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
