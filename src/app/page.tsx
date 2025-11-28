"use client";

import { SignOutButton } from "@clerk/nextjs";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen gap-3">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>

            <ThemeToggle />

            <SignOutButton>
                <Button>Sair</Button>
            </SignOutButton>
        </div>
    );
}
