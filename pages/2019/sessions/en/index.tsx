import { Meta } from "@/components/2019/meta";
import { Sessions } from "@/components/2019/sessions/en/";
import { SubMenu } from "@/components/2019/submenu/en/";
import { Footer } from "@/components/common/footer/";
import { session } from "@/constants/2019/title/";

export default function index() {
  return (
    <>
      <Meta pageTitle={session.en} />

      <SubMenu />

      <Sessions />

      <Footer />
    </>
  );
}
