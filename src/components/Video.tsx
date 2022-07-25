import { DiscordLogo } from "phosphor-react";

export function Video() {
    return (

        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[110px] max-h-[60vh] aspect-video">
                </div>
                <div className="p-8 max-w-[1100px] mx-auto">
                    <div className="flex items-start gap-16 ">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold"> 
                            Aula 01 - Criando o projeto e realizando o setup inicial
                            </h1>
                            <p className="mt-4 text-gray-200 leading-relaxed">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                              <img
                               className="h-16 w-16 rounded-full border-2 border-blue"
                               src="https://github.com/MasterPCFull.png"
                               alt=""
                               />    


                              <div className="loading-relaxed">
                                <strong className="front-bold text-2xl block">Italo Carvalho</strong>
                                <span className="text-gray-200 text-sm block">Em Busca dos objetivo</span>
                              </div>
                              </div>
                            </div>
                        <div className="flex flex-col gap-4">
                            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 translate-colors ">
                                <DiscordLogo size={24} />
                                Comunidade do Discord
                            </a>

                            <a href="" className="p-4 text-sm border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center houver:bg-blue-500 translate-colors ">
                                <DiscordLogo size={24} />
                                Acesse o Desafio
                            </a>
                        </div>
                    </div>

                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )


}

//22:01