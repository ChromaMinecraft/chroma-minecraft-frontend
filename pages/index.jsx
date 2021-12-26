import Footer from '../components/BaseComponents/Footer';
import BannerSection from '../components/Homepage/BannerSection';
import GameModeSection from '../components/Homepage/GameModeSection';
import DonateSection from '../components/Homepage/DonateSection';
import HelpSection from '../components/Homepage/HelpSection';
import ReportSection from '../components/Homepage/ReportSection';
import NavigationSection from '../components/Homepage/NavigationSection';
import FloatingActionButton from '../components/BaseComponents/FloatingActionButton';

export default function Home() {
  return (
    <>
      <NavigationSection />
      <BannerSection />
      <GameModeSection />
      <DonateSection />
      <HelpSection />
      <ReportSection />
      <Footer />
      <FloatingActionButton href='/#nav-home' />
    </>
  );
}
