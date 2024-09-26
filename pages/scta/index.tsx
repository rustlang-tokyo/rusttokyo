import { Meta } from "@/components/2023/common/meta";
import { Footer } from "@/components/2023/top/footer";
import { Header } from "@/components/2023/top/header";
import { headlines } from "@/constants/2023/css/css";
import { sctaPagePath } from "@/constants/2023/header/navigation";
import { stca } from "@/constants/2023/title/pagetitle";
import {
  Box,
  Center,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
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
      <Meta pageTitle={stca.ja} />
      <Header isPc={isPc} currentPage={sctaPagePath} />
      <Box bg="vampireBlack.100" pt={16}>
        <Container maxW="container.xl">
          <Center>
            <Heading className={headlines} as="h2" size="2xl">
              SPECIFIED COMMERCIAL TRANSACTION ACT
            </Heading>
          </Center>
        </Container>
      </Box>
      <Box bg="vampireBlack.100" py={{ base: 8 }}>
        <Container maxW="container.md">
          <Center>
            <Heading
              color="cream.100"
              className={headlines}
              as="h3"
              size="xl"
              py={{ base: 4 }}
            >
              特定商取引法に基づく表示
            </Heading>
          </Center>
          <Box pt={8} pb={24}>
            <Table color="white" className="table">
              <Tbody>
                <Tr>
                  <Td>販売業者の正式名称</Td>
                  <Td>Rust JP</Td>
                </Tr>
                <Tr>
                  <Td>所在地</Td>
                  <Td>
                    180-0001 東京都武蔵野市吉祥寺北町4-8-1 セントラルハイツ205
                  </Td>
                </Tr>
                <Tr>
                  <Td>電話番号</Td>
                  <Td>050-3557-1259</Td>
                </Tr>
                <Tr>
                  <Td>メールアドレス</Td>
                  <Td>rust-tokyo-staff@googlegroups.com</Td>
                </Tr>
                <Tr>
                  <Td>運営統括責任者</Td>
                  <Td>代表&nbsp;高尾知秀</Td>
                </Tr>
                <Tr>
                  <Td>商品代金以外の必要料金</Td>
                  <Td>なし</Td>
                </Tr>
                <Tr>
                  <Td>返品・交換の方法</Td>
                  <Td>メールにてお問い合わせ下さい</Td>
                </Tr>
                <Tr>
                  <Td>引渡し時期</Td>
                  <Td>
                    受注後、商品が消費者の元に届く時期 配送指定日または注文より
                    14 日以内
                  </Td>
                </Tr>
                <Tr>
                  <Td>支払い方法</Td>
                  <Td>クレジットカード</Td>
                </Tr>
                <Tr>
                  <Td>支払い時期</Td>
                  <Td>各カード会社引き落とし日</Td>
                </Tr>
                <Tr>
                  <Td>販売価格</Td>
                  <Td>
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th color="cream.100">商品名</Th>
                          <Th color="cream.100">金額</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>ゴールドスポンサー</Td>
                          <Td>JPY 300,000</Td>
                        </Tr>
                        <Tr>
                          <Td>シルバースポンサー</Td>
                          <Td>JPY 100,000</Td>
                        </Tr>
                        <Tr>
                          <Td>ブロンズスポンサー</Td>
                          <Td>JPY 10,000</Td>
                        </Tr>
                        <Tr>
                          <Td>レギュラーチケット</Td>
                          <Td>JPY 500</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
