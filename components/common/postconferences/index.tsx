import { Container, Link, ListItem, UnorderedList } from "@chakra-ui/react";

export type conference = {
  url: string;
  name: string;
};

export function PostConferences(props: { conferences: conference[] }) {
  return (
    <Container maxW="container.xl">
      <UnorderedList>
        {props.conferences.map((x) => (
          <ListItem key={`rusttokyo${x.name}`}>
            <Link pl={2} pr={4} href={x.url} fontSize={"sm"} fontWeight={700}>
              {x.name}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
}
