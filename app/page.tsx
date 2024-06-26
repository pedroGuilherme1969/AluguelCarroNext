import Image from "next/image";
import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">        
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Catálogo de Carros</h1>
          <p>Busque pelos carros que podem te agradar</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Combustível"/>
            <CustomFilter title="Ano"/>
          </div>
        </div>
      </div>
    </main>
  );
}