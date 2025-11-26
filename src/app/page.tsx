"use client";

import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button, Flex } from "@radix-ui/themes";

export default function Home() {
    return (
        <Flex align="center" gap="3" justify="center" minHeight="100vh">
            <UserButton />
            <SignOutButton>
                <Button>Sair</Button>
            </SignOutButton>
        </Flex>
    );
}
