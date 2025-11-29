import Image from "next/image";
import type { ComponentProps } from "react";

export function IconLayoutFull(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-layout-full.svg"
            alt="Icon layout full"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
