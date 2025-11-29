import { useHotkeys } from "@mantine/hooks";
import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    useContext,
    useState,
} from "react";

type SearchContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType | null>(null);

type SearchProviderProps = {
    children: ReactNode;
};

export function SearchProvider({ children }: SearchProviderProps) {
    const [open, setOpen] = useState(false);

    useHotkeys([["mod + K", () => setOpen((open) => !open)]]);

    return (
        <SearchContext value={{ open, setOpen }}>
            {children}
            {/*TODO: <CommandMenu />*/}
        </SearchContext>
    );
}

export const useSearch = () => {
    const searchContext = useContext(SearchContext);

    if (!searchContext) {
        throw new Error("useSearch has to be used within SearchProvider");
    }

    return searchContext;
};
