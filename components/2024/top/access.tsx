import { headlines } from "@/constants/2024/css/css";
import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react";

export function Access(props: { isPc: boolean }) {
  const contentFontSize = props.isPc ? "md" : "sm";

  return (
    <Container maxW="container.xl">
      <VStack>
        <Heading className={headlines} as="h2" size="2xl">
          Access
        </Heading>
        <Text fontSize={contentFontSize} textAlign="center">
          渋谷フクラス 16階にて開催いたします。
          当日は会場にて飲食の提供はありません。
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          また、イベント会場への再入場ができないため、入場前にお昼ご飯の用意を各自でお願いします。
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          会場内でペットボトルのお水の配布は予定していますが、それ以外の飲料は事前にご購入ください。
        </Text>
        <Heading as="h3" size="lg" mt={4}>
          入場方法
        </Heading>
        <Text fontSize={contentFontSize} textAlign="center">
          当日は休日のため、平日とはイベント会場への入場方法が異なります。
        </Text>
        <Text fontSize={contentFontSize} textAlign="center">
          詳しくは
          <Link
            color={"cottonCandy.100"}
            target="_blank"
            href="https://www.gmo.jp/company-profile/access-map/fukuras02/"
          >
            渋谷フクラス入館方法
          </Link>
          をご覧ください。
        </Text>
      </VStack>
    </Container>
  );
}
