import { ptBr } from "@/intl/ptBr";
import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface HeaderProps {
  className?: string;
}
export function Header({ className }: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex justify-end text-3xl font-bold items-center z-10",
        className,
      )}
    >
      <div className="flex gap-3">
        <Link
          href={ptBr.links.github}
          className="hover:opacity-70 transition-opacity"
        >
          <GithubLogo size={32} />
        </Link>
        <Link
          href={ptBr.links.gitlab}
          className="hover:opacity-70 transition-opacity"
        >
          <GitlabLogo size={32} />
        </Link>
        <Link
          href={ptBr.links.whatsapp}
          className="hover:opacity-70 transition-opacity"
        >
          <WhatsappLogo size={32} />
        </Link>
        <Link
          href={ptBr.links.linkedin}
          className="hover:opacity-70 transition-opacity"
        >
          <LinkedinLogo size={32} />
        </Link>
      </div>
    </header>
  );
}
