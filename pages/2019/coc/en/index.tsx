import { Coc } from "@/components/2019/coc/en/";
import { Meta } from "@/components/2019/meta";
import { SubMenu } from "@/components/2019/submenu/en/";
import { Footer } from "@/components/common/footer/";
import { codeOfConduct } from "@/constants/2019/title/";

export default function index() {
  return (
    <>
      <Meta pageTitle={codeOfConduct.en} />

      <SubMenu />

      <Coc />

      <Footer />
    </>
  );
}
