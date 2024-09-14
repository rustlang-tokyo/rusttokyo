import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/css";
import { ProfileCard } from "./profile_card";

const headlines = css`
  display: inline-block;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 3px;
    background: #bbb;
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export function Organizers(props: { isPc: boolean }) {
  const columnSize = props.isPc ? 4 : 2;

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
              src="/static/2021/organizers/dorayakikun.png"
              altText="Tomohide Takao"
              name="Tomohide Takao"
              twitterUrl="https://twitter.com/dorayaki_kun"
              twitterId="@dorayaki_kun"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2021/organizers/chikoski.jpeg"
              altText="chikoski"
              name="chikoski"
              twitterUrl="https://twitter.com/chikoski"
              twitterId="@chikoski"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2021/organizers/yuki.png"
              altText="Yuki Toyoda"
              name="Yuki Toyoda"
              twitterUrl="https://twitter.com/helloyuki_"
              twitterId="@helloyuki_"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2021/organizers/akie_mitsukado.jpg"
              altText="Akie Mitsukado"
              name="Akie Mitsukado"
            />
            <ProfileCard
              pc={props.isPc}
              src="/static/2021/organizers/tkato.jpeg"
              altText="Tomohiro Kato"
              name="Tomohiro Kato"
              twitterUrl="https://twitter.com/_tkato_"
              twitterId="_tkato_"
            />
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
