import { Button, type ButtonOptions } from "@chakra-ui/react";

export function LinkButton({
  href,
  leftIcon,
  children,
}: {
  href: string;
  leftIcon: ButtonOptions["leftIcon"];
  children: React.ReactNode;
}) {
  return (
    <Button
      as="a"
      rel="noreferrer noopener"
      target="_blank"
      href={href}
      leftIcon={leftIcon}
      width={275.4}
    >
      {children}
    </Button>
  );
}
