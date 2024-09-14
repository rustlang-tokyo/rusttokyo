import { Meta } from "@/components/2019/meta";
import { BronzeSponsors } from "@/components/2019/sponsor/bronze_sponsors";
import { GoldSponsors } from "@/components/2019/sponsor/gold_sponsors";
import { SilverSponsors } from "@/components/2019/sponsor/silver_sponsors";
import { Sponsorship } from "@/components/2019/sponsorship/en/";
import { SubMenu } from "@/components/2019/submenu/en/";
import { Footer } from "@/components/common/footer/";
import { sponsors } from "@/constants/2019/title/";

export default function index() {
  return (
    <>
      <Meta pageTitle={sponsors.en} />

      <SubMenu />

      <Sponsorship />

      <GoldSponsors />

      <SilverSponsors />

      <BronzeSponsors />

      <Footer />
    </>
  );
}
