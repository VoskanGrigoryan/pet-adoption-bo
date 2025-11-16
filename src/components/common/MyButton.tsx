import { Button, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

interface MyButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function MyButton({
  variant = "filled",
  color = "violet",
  leftSection,
  rightSection,
  fullWidth = false,
  size = "md",
  disabled = false,
  loading = false,
  children,
  ...props
}: MyButtonProps) {
  return (
    <Button
      variant={variant}
      color={color}
      leftSection={leftSection}
      rightSection={rightSection}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {children}
    </Button>
  );
}
