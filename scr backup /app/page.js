"use client"

import Board from "../components/board";
import Ide from "../components/Ide";
// import {} fr

export default function Home() {
  return (

    <body>
      {/* <Board /> */}
      <div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="4" data-libs="mavenlib1, mavenlib2">
        Optional default code goes here
      </div>
      <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"> </script>
    </body>
    // <Ide suppressHydrationWarning />
  );
}
