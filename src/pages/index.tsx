import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PageHead />

      <p>hello world</p>
      <Button color="primary">Button</Button>
    </main>
  );
}
