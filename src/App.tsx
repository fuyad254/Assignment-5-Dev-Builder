import { Suspense } from "react";
import { Explore } from "./explore/explore";
import { Hero } from "./hero";
import { Nav } from "./nav";
import type Itechnologies from "./type";
import { ToastContainer } from "react-toastify";
import { Fotter } from "./fotter";

const technologiesPromis = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h1 className="text-center font-bold">Loading Data...... <br />Please Wait</h1>
      }>
        <Explore technologiesPromis={technologiesPromis()}></Explore>
      </Suspense>
      <ToastContainer />
      <Fotter></Fotter>
    </>
  );
}

export default App;
