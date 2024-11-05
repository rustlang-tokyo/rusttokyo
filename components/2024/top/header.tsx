import {
  type PagePath,
  cocPagePath,
  lineupPagePath,
  topPagePath,
  sponsorPagePath,
} from "@/constants/2024/header/navigation";
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
                <Box>
                  <Link
                    p={2}
                    href={lineupPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    LINE UP & SCHEDULE
                  </Link>
                  <Link
                    p={2}
                    href={sponsorPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    SPONSORS
                </Link>
                  {/*<Link
                    p={2}
                    href={jobboardPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    JOBBOARD
                  </Link>*/}
                  <Link
                    pl={2}
                    pr={4}
                    href={cocPagePath.ja}
                    fontSize={"sm"}
                    fontWeight={700}
                  >
                    CODE OF CONDUCT
                  </Link>
                </Box>
              </Stack>
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
            <Flex py={{ base: 4 }} px={{ base: 4 }} width={"100%"}>
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
                  variant={"solid"}
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
                <Link href={lineupPagePath.ja} fontSize={"md"} fontWeight={700}>
                  LINE UP & SCHEDULE
                </Link>
              </Box>
              <Box>
                <Link
                  href={sponsorPagePath.ja}
                  fontSize={"md"}
                  fontWeight={700}
                >
                  SPONSORS
                </Link>
              </Box>
              {/*<Box>
                <Link
                  href={jobboardPagePath.ja}
                  fontSize={"md"}
                  fontWeight={700}
                >
                  JOBBOARD
                </Link>
              </Box>*/}
              <Box>
                <Link href={cocPagePath.ja} fontSize={"md"} fontWeight={700}>
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
