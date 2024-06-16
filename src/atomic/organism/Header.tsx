import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface HeaderProps {
  githubLink: string;
  gitlabLink: string;
  linkedinLink: string;
  whatsappLink: string;
  className?: string;
}
export function Header({
  githubLink,
  gitlabLink,
  linkedinLink,
  whatsappLink,
  className,
}: HeaderProps) {
  return (
    <header
      className={twMerge(
        "flex justify-end text-3xl font-bold items-center z-10",
        className,
      )}
    >
      <div className="flex gap-3">
        <Link href={githubLink} className="hover:opacity-70 transition-opacity">
          <GithubLogo size={32} />
        </Link>
        <Link href={gitlabLink} className="hover:opacity-70 transition-opacity">
          <GitlabLogo size={32} />
        </Link>
        <Link
          href={whatsappLink}
          className="hover:opacity-70 transition-opacity"
        >
          <WhatsappLogo size={32} />
        </Link>
        <Link
          href={linkedinLink}
          className="hover:opacity-70 transition-opacity"
        >
          <LinkedinLogo size={32} />
        </Link>
      </div>
    </header>
  );
}
