// import type { Dispatch, SetStateAction } from "react";
// import type Itechnologies from "../type";
// import { SelectedCard } from "./selectedCard";

// interface ItechnologiesProps  {
  
//   addStack:Itechnologies[];
//   setAddStack:Dispatch<SetStateAction<Itechnologies[]>>
// };
// export function Selected({addStack, setAddStack}:ItechnologiesProps) {
//     console.log(setAddStack);
//     return (
//         <>
//         <div className="w-full  rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      
//       <div>
//         <h2 className="text-[17px] font-bold text-slate-900">
//           Your Stack
//         </h2>

//         <p className="mt-1 text-[13px] text-slate-400">
//           No technologies yet.
//         </p>
//       </div>

      
//       <div className="mt-4 flex h-17.25 items-center justify-center rounded-xl border border-dashed border-slate-200">
//         <p className="text-[13px] text-slate-400">
//            Your stack is empty.
//         </p>
        
//       </div>
//     </div>
        
//         {
//            addStack.map((stack,ind)=>{
//             return <SelectedCard stack={stack} key={ind}></SelectedCard>
//           })
//         }
//         </>
//     )
// }


import type { Dispatch, SetStateAction } from "react";
import type Itechnologies from "../type";
import { SelectedCard } from "./selectedCard";

interface ItechnologiesProps {
  addStack: Itechnologies[];
  setAddStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

export function Selected({
  addStack,
  setAddStack,
}: ItechnologiesProps) {

  
  const handleRemoveAll = () => {
    setAddStack([]);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      
      <div>
        <h2 className="text-[17px] font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[13px] text-slate-400">
          {addStack.length === 0
            ? "No technologies yet."
            : `${addStack.length} Technology Selected`}
        </p>
      </div>

      
      {addStack.length === 0 ? (

        <div className="mt-4 flex h-17.25 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-[13px] text-slate-400">
            Your stack is empty.
          </p>
        </div>

      ) : (

        
        <div className="mt-4">

          <div className="space-y-2">
            {addStack.map((stack) => (
              <SelectedCard
                key={stack.name}
                stack={stack}
                addStack={addStack}
                setAddStack={setAddStack}
                
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="mt-4 w-full rounded-md border border-red-200 py-1.5 text-[11px] font-medium text-red-500 transition hover:bg-red-50 cursor-pointer"
          >
            Remove All
          </button>

        </div>
      )}

    </div>
  );
}