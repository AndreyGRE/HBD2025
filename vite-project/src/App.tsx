import "./App.css";
import NavigationMenu from "./components/1-NavigationMenu.tsx";
import Title from "./components/2-Title.tsx";
import AboutEvent from "./components/3-AboutEvent.tsx";
import AnonsVideo from "./components/4-AnonsVideo.tsx";
import WhoTeedsCome from "./components/5-WhoТeedsСome.tsx";
import Speakers from "./components/6-Speakers.tsx";
import Guests from "./components/7-Guests.tsx";
import AfterParty from "./components/14-AfterParty.tsx";
import ExpoZone from "./components/9-ExpoZone.tsx";
import ItWas from "./components/10-ItWas.tsx";
import StayInformed from "./components/11-StayInformed.tsx";
import TicketPrices from "./components/12-TicketPrices.tsx";
import Registration from "./components/13-Registration.tsx";
import Questions from "./components/15-Questions.tsx";
import AnyOtherQuestions from "./components/16-AnyOtherQuestions.tsx";
import Sponsors from "./components/17-Sponsors.tsx";
import FAQ from "./components/18-FAQ.tsx";

function App() {
    return (
        <div
            className="bg-[#000023]  bg-[url('./images/bg-svg/lineBg.png')] 
                            bg-no-repeat 
                            bg-top "
        >
            <div
                className="
                            bg-[url('./images/image1.png')] 
                            bg-lightgray 
                            bg-[-0.263px_0px] 
                            bg-[100.027%_102.383%] 
                            bg-no-repeat 
                            bg-top
                            "
            >
                <div className=" w-full px-[15px] xl:px-[0px]  xl:w-[1128px] xl:mx-auto">
                    <NavigationMenu></NavigationMenu>
                    <Title></Title>
                    <AboutEvent></AboutEvent>
                    <AnonsVideo></AnonsVideo>
                    <WhoTeedsCome></WhoTeedsCome>
                    <Speakers></Speakers>
                    <Guests></Guests>

                    <ExpoZone></ExpoZone>
                    <ItWas></ItWas>
                    <StayInformed></StayInformed>
                    <TicketPrices></TicketPrices>
                    <Registration></Registration>
                </div>
            </div>
            <div className="rounded-[40px] bg-[linear-gradient(185deg,rgba(13,10,66,0.88)_28.73%,rgba(7,5,51,0.88)_101.81%)] backdrop-blur-[4px]">
                <div className="bg-[url('./images/image2.png')] bg-no-repeat bg-center w-full xl:w-[1335px] mx-auto">
                    <AfterParty></AfterParty>
                </div>
            </div>
            <div className=" w-full px-[15px] xl:px-[0px]  xl:w-[1128px] xl:mx-auto">
                <Questions></Questions>
                <AnyOtherQuestions></AnyOtherQuestions>
                <Sponsors></Sponsors>
                <FAQ></FAQ>
            </div>
        </div>
    );
}

export default App;
