import Image from "next/image";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function IconThemeSystem({
    className,
    ...props
}: Omit<ComponentProps<typeof Image>, "src" | "alt">) {
    return (
        <Image
            alt="Icon theme system"
            className={cn("overflow-hidden rounded-[6px]", className)}
            height={51.14}
            src="/assets/custom/icon-theme-system.svg"
            width={79.86}
            {...props}
        />
    );
}
