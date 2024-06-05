import Link from "next/link";
import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
export interface HomeTemplateProps {
  whatsappLink: string;
  githubLink: string;
  gitlabLink: string;
  linkedinLink: string;
}
export function HomeTemplate({
  githubLink,
  gitlabLink,
  linkedinLink,
  whatsappLink,
}: HomeTemplateProps) {
  return (
    <div>
      <header className="flex justify-between p-[2.5rem] text-3xl font-bold items-center">
        <h1>F. RODRIGO ROCHA</h1>

        <div className="flex gap-2">
          <Link
            href={githubLink}
            className="hover:opacity-70 transition-opacity"
          >
            <GithubLogo size={30} />
          </Link>
          <Link
            href={gitlabLink}
            className="hover:opacity-70 transition-opacity"
          >
            <GitlabLogo size={30} />
          </Link>
          <Link
            href={whatsappLink}
            className="hover:opacity-70 transition-opacity"
          >
            <WhatsappLogo size={30} />
          </Link>
          <Link
            href={linkedinLink}
            className="hover:opacity-70 transition-opacity"
          >
            <LinkedinLogo size={30} />
          </Link>
        </div>
      </header>
    </div>
  );
}
