import { ptBr } from "@/intl/ptBr";
import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Contato() {
  return (
    <div className="flex flex-col items-center h-full w-full" id="contato">
      <p className="uppercase text-4xl font-black p-[2.5rem] w-full">Contato</p>

      <div className="grid grid-cols-2 gap-10 flex-1 content-center mb-[5rem]">
        <a
          href={ptBr.links.gitlab}
          className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:scale-105 hover:cursor-pointer transition-transform"
        >
          <GitlabLogo size={60} />
          <p>rodrocha444</p>
        </a>
        <a
          href={ptBr.links.github}
          className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:scale-105 hover:cursor-pointer transition-transform"
        >
          <GithubLogo size={60} />
          <p>rodrocha444</p>
        </a>
        <a
          href={ptBr.links.linkedin}
          className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:scale-105 hover:cursor-pointer transition-transform"
        >
          <LinkedinLogo size={60} />
          <p>f-rodrigo-rocha</p>
        </a>
        <a
          href={ptBr.links.whatsapp}
          className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:scale-105 hover:cursor-pointer transition-transform"
        >
          <WhatsappLogo size={60} />
          <p>+5588996850205</p>
        </a>
      </div>
    </div>
  );
}
