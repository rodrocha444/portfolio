import {
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Contato() {
  return (
    <div className="flex flex-col items-center h-full" id="contato">
      <p className="uppercase text-4xl font-black text-center p-[2.5rem]">
        Contato
      </p>

      <div className="grid grid-cols-2 gap-10 flex-1 content-center mb-[5rem]">
        <div className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity">
          <LinkedinLogo size={60} />
          <p>f-rodrigo-rocha</p>
        </div>

        <div className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity">
          <WhatsappLogo size={60} />
          <p>+5588996850205</p>
        </div>

        <div className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity">
          <GitlabLogo size={60} />
          <p>rodrocha444</p>
        </div>

        <div className="bg-gray shadow-lg w-[12rem] h-[12rem] flex flex-col justify-center items-center rounded-md hover:opacity-70 hover:cursor-pointer transition-opacity">
          <GithubLogo size={60} />
          <p>rodrocha444</p>
        </div>
      </div>
    </div>
  );
}
