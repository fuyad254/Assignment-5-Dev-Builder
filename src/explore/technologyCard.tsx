import { MdStarRate } from "react-icons/md";
import type Itechnologies from "../type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface technologyCardProps {
  technology: Itechnologies;
  addStack: Itechnologies[];
  setAddStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

export function TechnologyCard({
  technology,
  addStack,
  setAddStack,
}: technologyCardProps) {
  
  const isSelected = addStack.find((item) => item.name === technology.name);

  const handleEvent = () => {
    setAddStack([...addStack, technology]);

    toast.success(`${technology.name} added to stack successfully`, {
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
  };

  return (
    <>
      <div
        className={` ${
          isSelected === false
            ? `max-w-87.5 h-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mt-5`
            : `max-w-87.5 h-auto rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mt-5 border-2 border-[#D81B7E]`
        }`}
      >
        <div className="flex items-start justify-between">
          <img className="h-8 w-8 object-contain" src={technology.icon} alt={technology.name} />

          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
            {technology.badge}
          </span>
        </div>

        <div className="mt-5">
          <h2 className="text-[20px] font-bold leading-6 text-slate-900">
            {technology.name}
          </h2>

          <p className="mt-2 text-[12px] font-normal leading-4.75 text-slate-500">
            {technology.description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500">
            {technology.category}
          </span>

          <span className="text-[11px] font-medium text-slate-500">
            {technology.difficulty}
          </span>

          <div className="flex items-center gap-1">
            <MdStarRate className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-[11px] font-medium text-slate-700">
              {technology.rating}
            </span>
          </div>
        </div>

        <button
          onClick={handleEvent}
          disabled={isSelected}
          className={`mt-4 w-full rounded-md py-2.5 text-xs font-medium ${
            isSelected
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "gradient-btn text-white px-6 cursor-pointer"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </>
  );
}