import "./App.css";
import NavigationMenu from "./components/1-NavigationMenu.tsx";
import Title from "./components/2-Title.tsx";
import AboutEvent from "./components/3-AboutEvent.tsx";
import AnonsVideo from "./components/4-AnonsVideo.tsx";
import WhoTeedsCome from "./components/5-WhoТeedsСome.tsx";
import Speakers from "./components/6-Speakers.tsx";
import Guests from "./components/7-Guests.tsx";
import AfterParty from "./components/14-AfterParty.tsx";
import Music from "./components/8-Music.tsx";
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
        <div className="bg-[#000023]">
            <div className="bg-[#000023] bg-opasity-100  w-full xl:max-w-[1920px] xl:mx-auto relative">
                {/*  */}
                <NavigationMenu></NavigationMenu>
            <div className=" relative z-10  overflow-hidden">
                
                {/*  */}
                <Title></Title>
                {/*  */}
                <AboutEvent></AboutEvent>
                {/*  */}
                <AnonsVideo></AnonsVideo>
                {/*  */}
                <WhoTeedsCome></WhoTeedsCome>
                {/*  */}
                <Speakers></Speakers>
                {/*  */}
                <Guests></Guests>
                {/*  */}
                <Music></Music>
                {/*  */}
                <ExpoZone></ExpoZone>
                {/*  */}
                <ItWas></ItWas>
                {/*  */}
                <StayInformed></StayInformed>
                {/*  */}
                <TicketPrices></TicketPrices>
                {/*  */}
                <Registration></Registration>
        
                <AfterParty></AfterParty>
                {/*  */}
                <Questions></Questions>
                {/*  */}
                <Sponsors></Sponsors>
                {/*  */}
                <FAQ></FAQ>
                {/*  */}
                <AnyOtherQuestions></AnyOtherQuestions>
            </div>
        </div>
        </div>
        
    );
}

export default App;
