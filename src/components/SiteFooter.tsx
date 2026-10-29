import Image from "next/image";
import { Container } from "@/components/primitives";
import { identity } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto overflow-hidden pt-[72px]">
      <Container>
        <div className="flex justify-between pb-5 text-[13px] text-muted">
          <span>{identity.name}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </Container>
      <Image
        src="/abuja.jpg"
        alt="A watercolour sketch of Abuja: the National Mosque, Aso Rock and the Millennium Tower across a lake, with a small boat."
        width={1983}
        height={503}
        sizes="100vw"
        className="mt-2 block h-auto w-full mix-blend-multiply"
      />
    </footer>
  );
}
