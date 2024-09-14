import { Center, Container, Image, SimpleGrid } from "@chakra-ui/react";

export function Eyecatch() {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={1}>
        <Center>
          <Image
            src="/static/logo/rust.tokyo_logo_2023.png"
            alt="Rust.Tokyo logo"
            boxSize="355"
            objectFit="contain"
          />
        </Center>
      </SimpleGrid>
    </Container>
  );
}
