import { Paper, PaperProps } from "@mantine/core";
import { ReactNode } from "react";

interface MyPaperProps extends PaperProps {
  children: ReactNode;
}
export default function MyPaper({
  shadow = "md",
  p = "md",
  radius = "md",
  children,
  ...props
}: MyPaperProps) {
  return (
    <Paper shadow={shadow} p={p} radius={radius} {...props}>
      {children}
    </Paper>
  );
}
