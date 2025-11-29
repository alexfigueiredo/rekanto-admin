import Image from "next/image";
import type { ComponentProps } from "react";

export function IconSidebarInset(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            alt="Icon sidebar inset"
            height={51.14}
            src="/assets/custom/icon-sidebar-inset.svg"
            width={79.86}
            {...props}
        />
    );
}
