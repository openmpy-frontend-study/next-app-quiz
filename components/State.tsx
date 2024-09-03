"use client";

import { IState } from "@/utils/types";
import { useState } from "react";
import Question from "./Question";

interface Props {
  states: IState[];
}

export default function State({ states }: Props) {
  const [state, setState] = useState(0);

  return (
    <div>
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
