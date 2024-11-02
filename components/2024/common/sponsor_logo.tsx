import { AspectRatio, Box, Image, Link } from "@chakra-ui/react";

export function SponsorLogo(props: {
  size: string;
  url: string;
  logoImagePath: string;
  imageRatio?: string;
  alt: string;
  padding: number;
  inverse?: boolean;
}) {
  return (
    <Link href={props.url} target="_blank">
      <AspectRatio flex={1} ratio={1} width={props.size} maxWidth={props.size}>
        <Box
          bgColor={props.inverse ? "black" : "white"}
          borderColor={props.inverse ? "white" : undefined}
          borderWidth={props.inverse ? 4 : undefined}
          borderRadius={"full"}
        >
          <Image
            src={props.logoImagePath}
            width={props.imageRatio ?? "100%"}
            height={props.imageRatio ?? "100%"}
            paddingLeft={props.padding}
            paddingRight={props.padding}
            objectFit={"contain"}
            alt={props.alt}
          />
        </Box>
      </AspectRatio>
    </Link>
  );
}
