"use client";

import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button, Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex gap="3" justify="center" minHeight="100vh" align="center">
      <UserButton />
      <SignOutButton>
        <Button>Sair</Button>
      </SignOutButton>
    </Flex>
  );
}
