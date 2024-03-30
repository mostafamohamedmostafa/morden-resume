import logo from "./logo.svg";
import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { WhyInfoComponent } from "./Components/WhyInfoComponent";
import { AboutCompanyComponent } from "./Components/AboutCompanyComponent";
import { ServicesComponent } from "./Components/ServicesComponent";
import { TrustCompanyComponent } from "./Components/TrustCompanyComponent";
import { ProjectComponent } from "./Components/ProjectsComponent";
import { WhyUsCompanyComponent } from "./Components/WhyUsCompanyComponent";
import { TopReviewsComponent } from "./Components/TopReviewsComponent";

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <WhyInfoComponent></WhyInfoComponent>
      <AboutCompanyComponent></AboutCompanyComponent>
      <ServicesComponent></ServicesComponent>
      <TrustCompanyComponent></TrustCompanyComponent>
      <ProjectComponent></ProjectComponent>
      <WhyUsCompanyComponent></WhyUsCompanyComponent>

      <TopReviewsComponent></TopReviewsComponent>
    </div>
  );
}

export default App;
