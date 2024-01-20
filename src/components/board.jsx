'use client'
import { Excalidraw } from "@excalidraw/excalidraw";
export default function Board() {
    return (
      <>
        {/* <h1 style={{ textAlign: "center" }}>Code X A</h1> */}
        <div style={{ height: "100vh" }}>
          <Excalidraw />
        </div>
      </>
    );
  }