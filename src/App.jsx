//import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider) => (
  new ethers.providers.Web3Provider(provider)
)

import Preloader from "./components/Preloader";

import Header from "./sections/Header";
import Content from "./sections/Content";
import Footer from "./sections/Footer";

/*
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

import ReactGA from "react-ga4";*/

function App() {
  /*
  const [isConsent, setIsConsent] = useState(false);

  useEffect(() => {
    
    const c = getCookieConsentValue();
    
    if (!c) return;

    ReactGA.initialize("G-LTQF6BQ2ZZ");
    ReactGA.send("pageview");
  }, [isConsent])

  <CookieConsent
          location="bottom"
          buttonText="Accept"
          style={{ background: "#07232c", padding: "4rem", display: "grid", fontSize: "12px" }}
          enableDeclineButton
          declineButtonText="Reject"
          declineButtonStyle={{ background: "transparent", border: "1px solid black" }}         
          expires={150}
          onAccept={() => {
            setIsConsent(true);
          }}
        >
          We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for “experience improvement” and “measurement” as specified in the cookie policy. Refusal of consent may make the relative functions unavailable.

          You can freely give, refuse or revoke your consent at any time.

          Use the "Accept" button to agree. Use the "Reject" button or close this information to continue without accepting.
        </CookieConsent>
  */

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Preloader />
      <div className="App font-elite text-gray-200 bg-gray-800">
        <BrowserRouter basename='/JYO/'>
          <Content />
          <Header />
          <Footer />
        </BrowserRouter>
        
      </div>
    </Web3ReactProvider>
  )
}

export default App