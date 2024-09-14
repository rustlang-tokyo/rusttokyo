import { headlines } from "@/constants/2024/css/css";
import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ProfileCard } from "./profile_card";

export function Organizers(props: { isPc: boolean }) {
  const columnSize = props.isPc ? 5 : 2;

  return (
    <Container maxW="container.xl">
      <Center>
        <VStack>
          <Heading className={headlines} as="h2" size="2xl">
            ORGANIZERS
          </Heading>
          <SimpleGrid columns={columnSize} spacing={10} pt={{ base: 8 }}>
            <ProfileCard
              pc={props.isPc}
              src="/static/2024/organizers/dorayakikun.png"
              altText="Tomohide Takao"
              name="Tomohide Takao"
              twitterUrl="https://twitter.com/dorayaki_kun"
              twitterId="@dorayaki_kun"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2024/organizers/chikoski.jpeg"
              altText="chikoski"
              name="chikoski"
              twitterUrl="https://twitter.com/chikoski"
              twitterId="@chikoski"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2024/organizers/yuki.png"
              altText="Yuki Toyoda"
              name="Yuki Toyoda"
              twitterUrl="https://twitter.com/helloyuki_"
              twitterId="@helloyuki_"
            />
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
