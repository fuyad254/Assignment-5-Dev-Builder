
import type { Dispatch, SetStateAction } from "react";
import type Itechnologies from "../type";
import { Bounce, toast } from "react-toastify";

interface SelectedCardProps {
  stack: Itechnologies;
  addStack: Itechnologies[];
  setAddStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

export function SelectedCard({
  stack,addStack, setAddStack
}: SelectedCardProps) {

    const handleEventRemoveTechnology= (stack:Itechnologies)=>{
        const stayTechnology= addStack.filter((technology)=>technology.name !=stack.name)
        setAddStack(stayTechnology)

        toast.info(`${stack.name} removed from your stack`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

  return (
    <div className="flex h-17.75 w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3">

      {/* Left side */}
      <div className="flex items-center gap-3">

        <img
          src={stack.icon}
          alt={stack.name}
          className="h-8 w-8 object-contain"
        />

        <div>
          <h3 className="text-[11px] font-semibold leading-4 text-slate-800">
            {stack.name}
          </h3>

          <p className="text-[8px] leading-3 text-slate-400">
            {stack.category}
          </p>
        </div>

      </div>

      
      <button
        onClick={()=>handleEventRemoveTechnology(stack)}
        className="cursor-pointer text-[27px] font-light leading-none text-slate-400 transition-colors hover:text-slate-600"
        
      >
        ×
      </button>

    </div>
  );
}