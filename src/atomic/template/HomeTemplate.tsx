import {
  GithubLogo,
  WhatsappLogo,
  GitlabLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
    <div className="flex flex-col justify-between h-screen p-20">
      <header className="flex justify-between">
        <h1>F. RODRIGO ROCHA</h1>

        <div className="flex">
          <Link href={githubLink}>
            <GithubLogo size={30} />
          </Link>
          <Link href={gitlabLink}>
            <GitlabLogo size={30} />
          </Link>
          <Link href={whatsappLink}>
            <WhatsappLogo size={30} />
          </Link>
          <Link href={linkedinLink}>
            <LinkedinLogo size={30} />
          </Link>
        </div>
      </header>

      <footer className="flex justify-between items-end ">
        <p>© 2024 Rodrigo Rocha. All rights reserved.</p>
        <div className="w-[40vw] h-[25vw] bg-secondary shadow-xl shadow-black rounded-xl"></div>
      </footer>
    </div>
  );
}
