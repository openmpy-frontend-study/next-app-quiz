"use client";

import { IState } from "@/utils/types";
import { useState } from "react";
import Question from "./Question";
import SelectState from "./SelectState";

interface Props {
  states: IState[];
}

export default function State({ states }: Props) {
  const [state, setState] = useState(0);

  return (
    <div>
      <SelectState states={states} state={(value) => setState(value)} />
      <div className="flex flex-col space-y-4 md:space-y-8 pt-4">
        {states[state].questions.map((question) => (
          <Question
            withId={true}
            checkEnabled={true}
            key={question.id + "_" + state}
            question={question}
          />
        ))}
      </div>
    </div>
  );
}
