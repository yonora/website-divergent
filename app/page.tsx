import dynamic from "next/dynamic";

import Clients from "@/section/clients";
import Services from "@/section/services";
import Support from "@/section/support";
import ContactNew from "@/section/contact-new";
import CustomerFeedback from "@/section/customer-feedback";
import VideoPlayerDialog from "@/components/videoDialog";



const AnimatedHero = dynamic(() => import('@/components/ui/animated-hero').then(mod => mod.Hero), {
  loading: () => <p>Loading...</p>
});

export const metadata = {
  title: "Home",
  description: "Home Page",
};
export default function Home() {

  return (
    <>
      {/* <VideoPlayerDialog /> */}
      <AnimatedHero/>
      <Services/>
      <Support/>
      <Clients/>
      <CustomerFeedback/>
      <ContactNew/>
    </>
  );
}
