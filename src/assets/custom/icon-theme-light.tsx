import Image from "next/image";
import type { ComponentProps } from "react";

export function IconThemeLight(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-theme-light.svg"
            alt="Icon theme light"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
