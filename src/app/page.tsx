"use client"
import Image from "next/image";
import TopContain from "../components/TopContain";
import Sliderr from "../components/Slider";
import { useState } from "react";
export default function Home() {
  const [night , setNight]=useState(true);
  const handleNight = ()=>{
    setNight(!night);
  }
  return (
    <main className="main flex min-h-screen flex-col items-center justify-between">
      <h3 className="main-h3">Sports</h3>
      <button onClick={()=>{handleNight();}}>night</button>
      <TopContain  nmode={night}/>
      <Sliderr  nmode={night}/>
    </main>
  );
}
