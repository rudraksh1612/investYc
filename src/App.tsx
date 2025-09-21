import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/pages/LandingPage";
import { StartupsPage } from "./components/pages/StartupsPage";
import { StartupProfilePage } from "./components/pages/StartupProfilePage";
import { InvestorsPage } from "./components/pages/InvestorsPage";
import { EducationPage } from "./components/pages/EducationPage";
import { HowItWorksPage } from "./components/pages/HowItWorksPage";
import { AboutPage } from "./components/pages/AboutPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SignupPage } from "./components/pages/SignupPage";
import { DashboardPage } from "./components/pages/DashboardPage";
import { AIInsightsPage } from "./components/pages/AIInsightsPage";
import { TrustSPVPage } from "./components/pages/TrustSPVPage";
import { ContactPage } from "./components/pages/ContactPage";
import { TermsPage } from "./components/pages/TermsPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { KYCPolicyPage } from "./components/pages/KYCPolicyPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<
    "student" | "startup" | "investor"
  >("student");

  const handleLogin = (
    type: "student" | "startup" | "investor",
  ) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onPageChange={setCurrentPage} />;
      case "startups":
        return <StartupsPage onPageChange={setCurrentPage} />;
      case "startup-profile":
        return (
          <StartupProfilePage onPageChange={setCurrentPage} />
        );
      case "investors":
        return <InvestorsPage onPageChange={setCurrentPage} />;
      case "trustspv":
        return <TrustSPVPage onPageChange={setCurrentPage} />;
      case "ai-insights":
        return (
          <AIInsightsPage
            onPageChange={setCurrentPage}
            userType={userType}
          />
        );
      case "education":
        return <EducationPage onPageChange={setCurrentPage} />;
      case "how-it-works":
        return <HowItWorksPage onPageChange={setCurrentPage} />;
      case "about":
        return <AboutPage onPageChange={setCurrentPage} />;
      case "contact":
        return <ContactPage onPageChange={setCurrentPage} />;
      case "terms":
        return <TermsPage onPageChange={setCurrentPage} />;
      case "privacy":
        return <PrivacyPage onPageChange={setCurrentPage} />;
      case "kyc-policy":
        return <KYCPolicyPage onPageChange={setCurrentPage} />;
      case "login":
        return (
          <LoginPage
            onPageChange={setCurrentPage}
            onLogin={handleLogin}
          />
        );
      case "signup":
        return (
          <RegisterPage onPageChange={setCurrentPage} />
        );
      case "dashboard":
        return (
          <DashboardPage
            userType={userType}
            onPageChange={setCurrentPage}
          />
        );
      case "register":
        return <RegisterPage onPageChange={setCurrentPage} />;
      default:
        return <LandingPage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isAuthenticated={isAuthenticated}
        userType={userType}
      />
      <main>{renderPage()}</main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}