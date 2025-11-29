import Image from "next/image";
import type { ComponentProps } from "react";

export function IconThemeDark(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-theme-dark.svg"
            alt="Icon theme dark"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
