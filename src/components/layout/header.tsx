import type { HTMLAttributes, Ref } from "react";
import { AppBreadcrumb } from "@/components/layout/app-breadcrumb";
import { cn } from "@/lib/utils";

type HeaderProps = HTMLAttributes<HTMLElement> & {
    fixed?: boolean;
    ref?: Ref<HTMLElement>;
};

export function Header({ className, fixed, children, ...props }: HeaderProps) {
    return (
        <header
            className={cn(
                "z-50 h-16",
                fixed && "header-fixed peer/header sticky top-0 w-[inherit]",
                className,
            )}
            {...props}
        >
            <div
                className={cn(
                    "relative flex h-full items-center gap-3 p-4 sm:gap-4",
                )}
            >
                {children}
            </div>
        </header>
    );
}
