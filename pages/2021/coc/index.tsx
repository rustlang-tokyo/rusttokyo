import { Meta } from "@/components/2021/common/meta";
import { Footer } from "@/components/2021/top/footer";
import { Header } from "@/components/2021/top/header";
import { headlines } from "@/constants/2021/css/css";
import { cocPagePath } from "@/constants/2021/header/navigation";
import { codeOfConduct } from "@/constants/2021/title/pagetitle";
import { Box, Center, Container, Heading, Link, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";
import useMedia from "use-media";

export function Subtitle(props: { text: string }) {
  return (
    <Center>
      <Heading className={headlines} as="h3" size="md" pb={4}>
        {props.text}
      </Heading>
    </Center>
  );
}

export function P(props: { children: ReactElement }) {
  return <Box pb={4}>{props.children}</Box>;
}

export default function index() {
  const isPc = useMedia("(min-width: 520px)");

  return (
    <>
      <Meta pageTitle={codeOfConduct.ja} />
      <Header isPc={isPc} currentPage={cocPagePath} />
      <Box bg="ivory.100" py={{ base: 12 }}>
        <Container maxW="container.xl">
          <Center>
            <Heading
              className={headlines}
              as="h2"
              size="2xl"
              color="coral.100"
              py={{ base: 4 }}
            >
              CODE OF CONDUCT
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box py={{ base: 8 }}>
        <Container maxW="container.md">
          <Subtitle text="カンファレンスにおける行動規範" />
          <Box pt={4} pb={12}>
            <Text>
              このカンファレンスではすべての参加者，スピーカー，スポンサーとボランティアは以下の行動規範に従うことへの同意を必要とします．カンファレンス主催者はカンファレンスの間を通じてこの規範の実施を徹底します．私達主催者は誰にとっても安全な環境を確約するためにすべての参加者が協力することを期待しています．
            </Text>
          </Box>

          <Subtitle text="助けが必要ですか？" />
          <Box pt={4} pb={12}>
            <Text>以下メールアドレスにご連絡ください。</Text>
            <Text>Mail: rust-tokyo-staff@googlegroups.com</Text>
          </Box>

          <Subtitle text="短いバージョン" />
          <Box pt={4} pb={12}>
            <Text>
              私達のカンファレンスでは，性別，性的指向，障碍の有無，外見，身体の大きさ，人種，宗教にかかわりなく，全員がハラスメント行為なくカンファレンスに参加し体験できる環境の提供に最善を尽くします．私達主催者は，カンファレンス参加者によるハラスメント行為を一切許容しません．性的な言葉や映像表現を使うことはカンファレンス場およびカンファレンスに関連するいかなる場でも不適切であり，その適用範囲は発表やトークの内容，ワークショップ，関連パーティー，ツイッターやその他のオンラインメディアでの発言を含みます．これらのルールを破ったカンファレンス参加者は，主催者の判断によって，カンファレンス内での行動を制限されたり，参加費の返却なくカンファレンスからの追放処分を受けることがあります．
            </Text>
          </Box>

          <Subtitle text="長いバージョン" />
          <Box pt={4} pb={12}>
            <P>
              <Text>
                ハラスメント行為には，言葉による性別，性的指向，障碍の有無，外見，身体の大きさ，人種，宗教に関する攻撃的なコメント，公的空間での性的な映像表現，意図的な威力行為，ストーキング，つきまとい，写真撮影や録音によるいやがらせ，トークやその他のカンファレンスイベントに対して繰り返して中断しようとする行為，不適切な身体接触，そして望まれない性的な注意を引きつける行為を含みます．
              </Text>
            </P>
            <P>
              <Text>
                参加者は，これらのハラスメント行為を止めるように求められた場合，すぐに従わなければなりません．
              </Text>
            </P>
            <P>
              <Text>
                スポンサーもまた反ハラスメント行為ポリシーに従わなければなりません．特に，スポンサーは性的な関心を引き起こす映像表現，活動，あるいはその他の物品を使うべきではありません．ボランティアを含め，ブースのスタッフは，性的な関心を引き起こすような服装/制服/コスチュームを使うべきではありませんし，その他の手段で性的な関心を引き起こすような環境を作ることもすべきではありません．
              </Text>
            </P>
            <P>
              <Text>
                参加者がハラスメント行為に属するふるまいをした場合は，カンファレンス主催者は適切と判断した範囲で，当該行為を行った者に対する警告や，参加費を返還せずにカンファレンスから追放処分とするなどを含むいかなる行動も取ります．
              </Text>
            </P>
            <P>
              <Text>
                もしあなたがハラスメントに遭った場合，他の人がハラスメントに遭っている場合，あるいは他に気になることがあった時は，すぐにカンファレンススタッフの誰かに連絡していただくようお願いします．カンファレンススタッフはカンファレンスのブランドを付けたTシャツを着ています．
              </Text>
            </P>
            <P>
              <Text>
                カンファレンススタッフは，ハラスメントを経験した人が，カンファレンス期間中安全かつ安心と感じられるように，参加者がホテル/会場の警備や近隣の警察に連絡すること，付き添い者の提供，およびその他の支援を行います．私達にとってあなたが参加しているのは大事なことなのです．
              </Text>
            </P>
            <P>
              <Text>
                私達は参加者がカンファレンス場とワークショップ会場，またカンファレンスに関連したソーシャルイベントにて，このルールに従うことを望みます．
              </Text>
            </P>
            <P>
              <Text>
                原文ソースとクレジット:{" "}
                <a href="http://2012.jsconf.us/#/about">
                  http://2012.jsconf.us/#/about
                </a>{" "}
                &{" "}
                <a href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy">
                  The Ada Initiative
                </a>
              </Text>
            </P>
            <P>
              <Text>
                翻訳や内容の改善にご協力をお願いします:{" "}
                <Link href="https://github.com/confcodeofconduct/confcodeofconduct.com">
                  on github.com
                </Link>
              </Text>
            </P>
            <P>
              <Text>
                この作品は{" "}
                <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US">
                  Creative Commons Attribution 3.0 Unported License
                </a>
                でライセンスされています．
              </Text>
            </P>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
