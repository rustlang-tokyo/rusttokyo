import { Meta } from "@/components/2019/meta";
import { Outline } from "@/components/2019/outline/en/";
import { SubMenu } from "@/components/2019/submenu/en/";
import { Footer } from "@/components/common/footer/";
import { outline } from "@/constants/2019/title/";

export default function index() {
  return (
    <>
      <Meta pageTitle={outline.en} />

      <SubMenu />

      <Outline />

      <Footer />
    </>
  );
}
