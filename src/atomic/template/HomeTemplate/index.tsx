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
    <div className="p-10 h-screen select-none">
      <div className="h-full border-[#333] border relative">
        <header className="flex justify-end p-[2.5rem] text-3xl font-bold items-center relative z-10">
          <div className="flex gap-3">
            <Link
              href={githubLink}
              className="hover:opacity-70 transition-opacity"
            >
              <GithubLogo weight="light" size={40} />
            </Link>
            <Link
              href={gitlabLink}
              className="hover:opacity-70 transition-opacity"
            >
              <GitlabLogo weight="light" size={40} />
            </Link>
            <Link
              href={whatsappLink}
              className="hover:opacity-70 transition-opacity"
            >
              <WhatsappLogo weight="light" size={40} />
            </Link>
            <Link
              href={linkedinLink}
              className="hover:opacity-70 transition-opacity"
            >
              <LinkedinLogo weight="light" size={40} />
            </Link>
          </div>
        </header>

        <div className="w-full h-full absolute top-0 flex items-center justify-center flex-col gap-1 z-0 ">
          <p className="text-lg">Hello, my name is</p>
          <p className="uppercase text-8xl font-extrabold">Rodrigo Rocha</p>
          <p className="text-lg">I&apos;m a developer full stack</p>
        </div>
      </div>
    </div>
  );
}
