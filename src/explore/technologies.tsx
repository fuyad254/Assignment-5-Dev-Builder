import { use, type Dispatch, type SetStateAction } from "react";
import type Itechnologies from "../type";
import { TechnologyCard } from "./technologyCard";

interface ItechnologiesProps  {
  technologiesPromis: Promise<Itechnologies[]>;
  addStack: Itechnologies[];
  setAddStack: Dispatch<SetStateAction<Itechnologies[]>>;
}

export function Technologies({ technologiesPromis, addStack, setAddStack }: ItechnologiesProps) {
    const technologies = use(technologiesPromis);

    return (
        <>
        {
            technologies.map((technology: Itechnologies, ind) => {
                return (
                    <TechnologyCard
                        technology={technology}
                        addStack={addStack}
                        setAddStack={setAddStack}
                        key={ind}
                    />
                );
            })
        }
        </>
    );
}