"use client";

import { Experiences } from "./components/experiences";
import { Header } from "./components/header";
import { Languages } from "./components/languages";
import { Social } from "./components/social";
import { Technologies } from "./components/technologies";


export default function Home() {
  return (
    <main className="container">
      
        <Header />
        <Social/>
        <Languages/>
        <Experiences/>
        <Technologies/>
    </main>
  );
}
