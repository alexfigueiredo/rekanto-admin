import Image from "next/image";
import type { ComponentProps } from "react";

export function IconSidebarSidebar(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-sidebar-sidebar.svg"
            alt="Icon sidebar sidebar"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
