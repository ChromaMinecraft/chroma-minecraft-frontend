import Footer from '../components/BaseComponents/Footer';
import BannerSection from '../components/Homepage/BannerSection';
import GameModeSection from '../components/Homepage/GameModeSection';
import DonateSection from '../components/Homepage/DonateSection';
import HelpSection from '../components/Homepage/HelpSection';
import ReportSection from '../components/Homepage/ReportSection';
import NavigationSection from '../components/BaseComponents/NavigationSection';
import FloatingActionButton from '../components/BaseComponents/FloatingActionButton';
import DonateFinish from '../components/DonatePage/DonateFinish';
import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const {
    isOpen: isDonateFinishOpen,
    onOpen: onDonateFinishOpen,
    onClose: onDonateFinishClose,
  } = useDisclosure();

  useEffect(() => {
    if (router.query.tripay_reference) {
      onDonateFinishOpen();
    }
  }, [router.query]);

  return (
    <>
      <FloatingActionButton>
        <NavigationSection />
        <BannerSection />
        <GameModeSection />
        <DonateSection />
        <HelpSection />
        <ReportSection />
        <Footer />
      </FloatingActionButton>
      <DonateFinish isOpen={isDonateFinishOpen} onClose={onDonateFinishClose} />
    </>
  );
}
