import { ptBr } from "@/intl/ptBr";
import { twJoin } from "tailwind-merge";

export function Sobre() {
  return (
    <div className="w-full h-full" id="sobre">
      <p className="uppercase text-4xl font-black text-center p-[2.5rem]">
        Sobre Mim
      </p>

      {ptBr.sobre.map((item, index, array) => (
        <div className="px-[2.5rem] flex gap-2" key={index}>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="flex-1 w-[2px] bg-white -m-1"></div>
          </div>
          <div
            className={twJoin(
              index !== array.length - 1 && "mb-10",
              "flex flex-col gap-1",
            )}
          >
            <p className="leading-none text-sm font-light">{item.date}</p>
            <p className="text-3xl font-semibold">{item.title}</p>
            <p className="text-sm font-light">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
