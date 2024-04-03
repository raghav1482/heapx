"use client"
import Image from "next/image";
import TopContain from "../components/TopContain";
import Sliderr from "../components/Slider";
import { useState } from "react";
export default function Home() {
  return (
    <main className="main flex min-h-screen flex-col items-center justify-between">
      <h3 className="main-h3">Sports</h3>
      <TopContain/>
      <Sliderr/>
    </main>
  );
}
