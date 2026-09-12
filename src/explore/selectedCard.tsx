// import type Itechnologies from "../type";

// export function SelectedCard({stack}:{stack:Itechnologies}) {
    
//     return (
//         <>
//          <div className="flex h-17 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3.5">
      
//       {/* Left side */}
//       <div className="flex items-center gap-3">
//         <img
//           src={stack.icon}
//           alt={stack.name}
//           className="h-9 w-9 object-contain"
//         />

//         <div>
//           <h3 className="text-sm font-semibold text-slate-800">
//             {stack.name}
//           </h3>

//           <p className="text-[10px] text-slate-400">
//             {stack.category}
//           </p>
//         </div>
//       </div>

//       {/* Remove button */}
//       <button
        
//         className="cursor-pointer text-3xl font-light leading-none text-slate-400 transition-colors hover:text-slate-600"
//         aria-label={`Remove ${stack.name}`}
//       >
//         ×
//       </button>
//     </div>
//     </>
//     )
// }


import type Itechnologies from "../type";

interface SelectedCardProps {
  stack: Itechnologies;
  onRemove: () => void;
}

export function SelectedCard({
  stack,
  onRemove,
}: SelectedCardProps) {
  return (
    <div className="flex h-[63px] w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3">

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

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="cursor-pointer text-[27px] font-light leading-none text-slate-400 transition-colors hover:text-slate-600"
        aria-label={`Remove ${stack.name}`}
      >
        ×
      </button>

    </div>
  );
}