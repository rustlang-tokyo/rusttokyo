import { headlines } from "@/constants/2024/css/css";
import { staff } from "@/constants/2024/staff";
import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { ProfileCard } from "./profile_card";

export function Staff(props: { isPc: boolean }) {
  const columnSize = props.isPc ? 5 : 2;

  return (
    <Container maxW="container.xl">
      <Center>
        <VStack>
          <Heading className={headlines} as="h2" size="2xl">
            {"SITE STAFF"}
          </Heading>
          <SimpleGrid columns={columnSize} spacing={10} pt={{ base: 8 }}>
            {staff.map((s) => {
              return (
                <ProfileCard
                  key={s.name}
                  pc={props.isPc}
                  src={s.image}
                  altText={s.name}
                  name={s.name}
                  twitterUrl={
                    s.twitter
                      ? `https://twitter.com/${s.twitter.id}`
                      : undefined
                  }
                  twitterId={s.twitter ? `@${s.twitter.id}` : undefined}
                  mastodonUrl={s.mastodon ? s.mastodon.url : undefined}
                  mastodonId={s.mastodon ? s.mastodon.id : undefined}
                />
              );
            })}
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
