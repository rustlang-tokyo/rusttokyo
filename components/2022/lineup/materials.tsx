import { SelectedSession } from "@/constants/2022/lineup/context";
import { Icon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/layout";
import { RiSlideshowLine } from "react-icons/ri";

export function PresentationMaterials(props: { session: SelectedSession }) {
  return (
    <>
      {props.session.presentationSlide && (
        <>
          <Box
            border="1px"
            borderRadius="5px"
            borderColor="gray.400"
            backgroundColor="gray.100"
            p={2}
            mb={8}
          >
            <Text>
              {props.session.presentationSlide && (
                <>
                  <Link
                    href={props.session.presentationSlide.url}
                    isExternal
                    color="blue.800"
                    textDecoration="underline"
                  >
                    <Icon as={RiSlideshowLine} mr={2} />
                    {props.session.presentationSlide.title}
                  </Link>
                </>
              )}
            </Text>
          </Box>
        </>
      )}
    </>
  );
}
