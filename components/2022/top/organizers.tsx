import { headlines } from "@/constants/2022/css/css";
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
              src="/static/2022/organizers/dorayakikun.png"
              altText="Tomohide Takao"
              name="Tomohide Takao"
              twitterUrl="https://twitter.com/dorayaki_kun"
              twitterId="@dorayaki_kun"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2022/organizers/chikoski.jpeg"
              altText="chikoski"
              name="chikoski"
              twitterUrl="https://twitter.com/chikoski"
              twitterId="@chikoski"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2022/organizers/yuki.png"
              altText="Yuki Toyoda"
              name="Yuki Toyoda"
              twitterUrl="https://twitter.com/helloyuki_"
              twitterId="@helloyuki_"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2022/organizers/akie_mitsukado.jpg"
              altText="Akie Mitsukado"
              name="Akie Mitsukado"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2022/organizers/tkato.jpeg"
              altText="Tomohiro Kato"
              name="Tomohiro Kato"
              twitterUrl="https://twitter.com/_tkato_"
              twitterId="@_tkato_"
            />
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
