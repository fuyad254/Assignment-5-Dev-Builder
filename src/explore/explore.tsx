import { Selected } from "./selected";
import { Technologies } from "./technologies";
import type Itechnologies from "../type";
import { useState } from "react";

interface ItechnologiesProps  {
  technologiesPromis: Promise<Itechnologies[]>;
};



export function Explore({ technologiesPromis }:ItechnologiesProps ) {
    
  const [addStack,setAddStack]=useState<Itechnologies[]>([]);

    return (
        <>
        <div className="container m-auto  mt-25">
        <h2 className="font-inter text-[36px] font-bold mb-2">Explore the <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent '>Technologies</span></h2>
        <p className="text-slate-600 font-['Plus_Jakarta_Sans'] text-[18px] font-normal mb-7">Pick one technology per category to build your ideal stack.</p>
        <div className="grid grid-cols-12 gap-6 ">
          <div className=" col-span-9 grid grid-cols-3 gap-3">
            <Technologies technologiesPromis={technologiesPromis} addStack={addStack}setAddStack={setAddStack}></Technologies>
            </div>
          <div className="bg-green-300 col-span-3">
            <Selected addStack={addStack}setAddStack={setAddStack}></Selected>
            </div>
        </div>
      </div>
        </>
    )
}