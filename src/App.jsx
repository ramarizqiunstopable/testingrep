import { useState } from "react";
import NavigationBar from "./partials/NavigationBar";
import Hero from "./components/ui/hero/Hero";
import OurServices from "./components/ui/ourservice/OurServices";
import OurTeams from "./components/ui/teams/OurTeams";
import Portofolio from "./components/portofolio/Portofolio";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <OurServices />
      <OurTeams />
      <Portofolio />
    </>
  );
}

export default App;
