export function Projetos() {
  return (
    <div className="overflow-hidden h-full" id="projetos">
      <p className="uppercase text-4xl font-black text-center p-[2.5rem]">
        Principais Projetos
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 px-[2.5rem] gap-10 pb-[2.5rem]">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="" key={index}>
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold text-xl">Título do Projeto {index + 1}</p>

              <div className="w-full h-[14rem] bg-white shadow-[inset_2px_2px_20px_0px_#666]"></div>

              <p className="text-sm text-justify">
                uma descricao inicial sobre o projeto de forma a servir como
                resumo, citando as principais funcionalidades e tecnologias
                utilizadas para o desenvolvimento do mesmo.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
