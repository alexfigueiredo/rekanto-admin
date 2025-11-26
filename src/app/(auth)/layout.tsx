import { Flex } from "@radix-ui/themes";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Flex align="center" justify="center" style={{ minHeight: "100vh" }} px="4">
      {children}
    </Flex>
  );
}
