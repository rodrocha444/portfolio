/* eslint-disable @next/next/no-img-element */
import { ptBr } from "@/intl/ptBr";

export function Projetos() {
  return (
    <div className="overflow-hidden h-full " id="projetos">
      <p className="uppercase text-4xl font-black p-[2.5rem] w-full">
        Principais Projetos
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 px-[2.5rem] gap-10 pb-[2.5rem]">
        {ptBr.projetos.map((projeto, index) => (
          <a
            key={index}
            href={projeto.link}
            className="transition-transform hover:scale-105 "
          >
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold text-xl">{projeto.title}</p>

              <div className="w-full h-[14rem] bg-white shadow-[inset_2px_2px_20px_0px_#666]">
                <img
                  src={projeto.img}
                  alt="projeto"
                  className="w-full h-full object-cover"
                  width={"100"}
                  height={"60"}
                />
              </div>

              <p className="text-sm text-justify">{projeto.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
