import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box className={styles.page}>
      <Flex className={styles.shell} direction="column" gap="5">
        <Flex direction="column" gap="3">
          <Heading size="8" weight="medium">
            Radix Next starter
          </Heading>
          <Text size="4" color="gray">
            Next.js App Router with Radix Themes, Bun, and Biome pre-wired. Use
            this page as a quick reference for local commands and UI patterns.
          </Text>
          <Flex gap="3" wrap="wrap">
            <Button asChild>
              <Link
                href="https://www.radix-ui.com/themes/docs/overview/getting-started"
                rel="noreferrer"
                target="_blank"
              >
                Radix Themes docs
              </Link>
            </Button>
            <Button variant="soft" asChild>
              <Link
                href="https://nextjs.org/docs/app/building-your-application"
                rel="noreferrer"
                target="_blank"
              >
                Next.js app guide
              </Link>
            </Button>
          </Flex>
        </Flex>

        <Card size="3">
          <Flex direction="column" gap="3">
            <Heading size="4">Project quickstart</Heading>
            <Text as="p">
              Use Bun for everything: install with <code>bun install</code>,
              develop via <code>bun run dev</code>, lint with{" "}
              <code>bun run lint</code>, and test with <code>bun test</code>.
            </Text>
            <Separator orientation="horizontal" />
            <Heading size="4">UI patterns</Heading>
            <Text as="p">
              Build layouts with Radix primitives (e.g., <code>Flex</code>,
              <code>Box</code>) and theme tokens (accent indigo, sand grays,
              radius large). Import components directly from{" "}
              <code>@radix-ui/themes</code> inside client components.
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
}
