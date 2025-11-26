import type { User } from "@clerk/backend";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { isAuthenticated } = await auth();

    if (!isAuthenticated) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await getCurrentUser();

    return NextResponse.json({
        userId: user.id,
        name: user.fullName,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
    });
}

async function getCurrentUser() {
    return (await currentUser()) as User;
}
