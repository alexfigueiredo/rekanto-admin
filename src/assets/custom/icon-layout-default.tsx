import Image from "next/image";
import type { ComponentProps } from "react";

export function IconLayoutDefault(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-layout-default.svg"
            alt="Icon layout default"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
