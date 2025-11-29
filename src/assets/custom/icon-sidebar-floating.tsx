import Image from "next/image";
import type { ComponentProps } from "react";

export function IconSidebarFloating(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-sidebar-floating.svg"
            alt="Icon sidebar floating"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
