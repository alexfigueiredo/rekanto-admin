import Image from "next/image";
import type { ComponentProps } from "react";

export function IconLayoutCompact(
    props: Omit<ComponentProps<typeof Image>, "src" | "alt">,
) {
    return (
        <Image
            src="/assets/custom/icon-layout-compact.svg"
            alt="Icon layout compact"
            width={79.86}
            height={51.14}
            {...props}
        />
    );
}
