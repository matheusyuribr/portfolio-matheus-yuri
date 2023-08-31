"use client";

import { Experiences } from "./components/experiences";
import { Header } from "./components/header";
import { Languages } from "./components/languages";
import { Social } from "./components/social";


export default function Home() {
  return (
    <main className="container">
      
        <Header />
        <Social/>
        <Languages/>
        <Experiences/>
    </main>
  );
}
