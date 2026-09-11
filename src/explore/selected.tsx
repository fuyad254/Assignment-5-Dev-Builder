import type { Dispatch, SetStateAction } from "react";
import type Itechnologies from "../type";

interface ItechnologiesProps  {
  
  addStack:Itechnologies[];
  setAddStack:Dispatch<SetStateAction<Itechnologies[]>>
};
export function Selected({addStack, setAddStack}:ItechnologiesProps) {
    console.log(setAddStack);
    return (
        <>
        {
          addStack.map((stack)=>{
            return <h2>{stack.name}</h2>
          })
        }
        </>
    )
}