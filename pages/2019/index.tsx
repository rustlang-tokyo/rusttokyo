import { Meta } from "@/components/2019/meta";
import { Orgs } from "@/components/2019/organizer/";
import { BronzeSponsors } from "@/components/2019/sponsor/bronze_sponsors";
import { GoldSponsors } from "@/components/2019/sponsor/gold_sponsors";
import { SilverSponsors } from "@/components/2019/sponsor/silver_sponsors";
import { Top } from "@/components/2019/top/";
import { Volunteers } from "@/components/2019/volunteers/";
import { Footer } from "@/components/common/footer/";

export default function index() {
  return (
    <>
      <Meta />
      <Top />
      <GoldSponsors />
      <SilverSponsors />
      <BronzeSponsors />
      <Orgs />
      <Volunteers />
      <Footer />
    </>
  );
}
