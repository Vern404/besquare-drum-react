import React from "react";
import "./sequence-container.css";

type SequenceContainerProps = {
  active_index: number;
  target_keys: string[];
};

const SequenceContainer = ({
  active_index,
  target_keys,
}: SequenceContainerProps) => {
  const previous_target_keys = target_keys.slice(
    Math.max(active_index - 3, 0),
    active_index
  );
  // const other_elements = [];

  // if (active_index < 3) {
  //   const remaining_elements = 3 - active_index;
  //   for (let i = 0; i < remaining_elements; i++) {
  //     other_elements.push("");
  //   }
  // }

  console.log("previous_target_keys", previous_target_keys);

  while (previous_target_keys.length < 3) {
    previous_target_keys.unshift("");
  }

  const current_target_key = target_keys[active_index];

  const next_target_keys = target_keys.slice(
    active_index + 1,
    Math.min(active_index + 4, target_keys.length)
  );

  console.log("next_target_keys", next_target_keys);

  while (next_target_keys.length < 3) {
    next_target_keys.push("");
  }

  const filtered_target_keys = [
    ...previous_target_keys,
    current_target_key,
    ...next_target_keys,
  ];

  return (
    <div className="sequence container">
      {filtered_target_keys.map((item, index) => (
        <div
          key={index}
          className={`sequence-card card ${index === 3 && "active"}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SequenceContainer;
