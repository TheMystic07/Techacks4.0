"use client"

import Board from "../components/board";
import Ide from "../components/Ide";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* <Link href="/"><Board /></Link> */}
      <Link href="/board"><Board /></Link>

      {/* <Ide  /> */}
    </>
  );
}
