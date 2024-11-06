import { Button, type ButtonOptions } from "@chakra-ui/react";

export function LinkButton({
  href,
  leftIcon,
  rightIcon,
  children,
}: {
  href: string;
  leftIcon?: ButtonOptions["leftIcon"];
  rightIcon?: ButtonOptions["rightIcon"];
  children: React.ReactNode;
}) {
  return (
    <Button
      as="a"
      rel="noreferrer noopener"
      target="_blank"
      href={href}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      width={275.4}
    >
      {children}
    </Button>
  );
}
