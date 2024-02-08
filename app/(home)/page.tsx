import React from "react";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5 gap-2">
        <h2 className="text-xl font-bold">Olá, Matheus</h2>
        <p className="capitalize text-sm ">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>

        <div className="px-5 mt-6">
          <Search />
        </div>
      </div>
    </div>
  );
}