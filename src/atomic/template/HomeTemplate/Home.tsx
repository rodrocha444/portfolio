import { ptBr } from "@/intl/ptBr";

export function Home() {
  return (
    <div
      className="w-full h-full flex items-center justify-center flex-col gap-1 z-0 "
      id="home"
    >
      <p className="text-lg">{ptBr.apresentacao.intro}</p>
      <p className="uppercase text-8xl font-extrabold text-center">
        {ptBr.apresentacao.name}
      </p>
      <p className="text-lg">{ptBr.apresentacao.euSou}</p>
    </div>
  );
}
