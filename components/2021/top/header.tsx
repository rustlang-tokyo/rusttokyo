import {
  PagePath,
  cocPagePath,
  lineupPagePath,
  sponsorPagePath,
  topPagePath,
} from "@/constants/2021/header/navigation";
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
      <Box bg="ivy.100" color="gray.50">
        <Container maxW="container.xl">
          {props.isPc && (
            <Flex py={{ base: 4 }} px={{ base: 4 }}>
              <Link href={topPagePath.ja} fontSize={"sm"}>
                Rust.Tokyo
              </Link>
              <Spacer />
              <Stack direction={"row"} spacing={4}>
                <Box>
                  <Link
                    p={2}
                    href={lineupPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    LINE UP & SCHEDULE
                  </Link>
                  <Link
                    p={2}
                    href={sponsorPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    SPONSORS
                  </Link>
                  <Link
                    pl={2}
                    pr={4}
                    href={cocPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={500}
                  >
                    CODE OF CONDUCT
                  </Link>
                </Box>
              </Stack>
              <Stack direction={"row"} spacing={4}>
                <Divider orientation="vertical" />
                <Box>
                  <Link pr={2} href={props.currentPage.ja} fontSize={"sm"}>
                    JP
                  </Link>
                  <Link href={props.currentPage.en} fontSize={"sm"}>
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
                  <Link pr={2} href={props.currentPage.ja} fontSize={"sm"}>
                    JP
                  </Link>
                  <Link href={props.currentPage.en} fontSize={"sm"}>
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

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box>
                <Link href={topPagePath.ja} fontSize={"md"} fontWeight={500}>
                  TOP
                </Link>
              </Box>
              <Box>
                <Link href={lineupPagePath.ja} fontSize={"md"} fontWeight={500}>
                  LINE UP & SCHEDULE
                </Link>
              </Box>
              <Box>
                <Link
                  href={sponsorPagePath.ja}
                  fontSize={"md"}
                  fontWeight={500}
                >
                  SPONSORS
                </Link>
              </Box>
              <Box>
                <Link href={cocPagePath.ja} fontSize={"md"} fontWeight={500}>
                  CODE OF CONDUCT
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
