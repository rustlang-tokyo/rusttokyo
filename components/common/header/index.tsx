import {
  type PagePath,
  event2019path,
  event2021path,
  event2022path,
  event2023path,
  topPagePath,
} from "@/constants/common/header/navigation";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Spacer,
  Stack,
  StackDivider,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header(props: { isPc: boolean; currentPage: PagePath }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="lightCobaltBlue.100" color="gray.50">
        <Container maxW="container.xl">
          {props.isPc && (
            <Flex py={{ base: 4 }} px={{ base: 4 }}>
              <Link href={topPagePath.ja} fontSize={"sm"} fontWeight={700}>
                Rust.Tokyo
              </Link>
              <Spacer />
              <Stack direction={"row"} spacing={4}>
                <Divider orientation="vertical" />
                <Box>
                  <Link
                    pr={2}
                    href={props.currentPage.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    JP
                  </Link>
                  <Link
                    href={props.currentPage.en}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    EN
                  </Link>
                </Box>
              </Stack>
            </Flex>
          )}
          {!props.isPc && (
            <Flex py={{ base: 4 }} px={{ base: 4 }}>
              <Stack direction={"row"}>
                <Center>
                  <Link
                    pr={2}
                    href={props.currentPage.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    JP
                  </Link>
                  <Link
                    href={props.currentPage.en}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    EN
                  </Link>
                </Center>
              </Stack>
              <Spacer />
              <Box color="white" fontSize="xl">
                <Button
                  onClick={onOpen}
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  _focus={{ bg: "transparent" }}
                  p={0}
                  variant={"solid"}
                >
                  <GiHamburgerMenu />
                </Button>
              </Box>
            </Flex>
          )}
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody color="black">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box>
                <Link href={topPagePath.ja} fontSize={"md"} fontWeight={700}>
                  TOP
                </Link>
              </Box>
              <Box>
                <Link href={event2019path.ja} fontSize={"md"} fontWeight={700}>
                  2019
                </Link>
              </Box>
              <Box>
                <Link href={event2021path.ja} fontSize={"md"} fontWeight={700}>
                  2021
                </Link>
              </Box>
              <Box>
                <Link href={event2022path.ja} fontSize={"md"} fontWeight={700}>
                  2022
                </Link>
              </Box>
              <Box>
                <Link href={event2023path.ja} fontSize={"md"} fontWeight={700}>
                  2023
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
