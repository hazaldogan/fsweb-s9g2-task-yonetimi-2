import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  const deadlineInDate = new Date(taskObj.deadline);
  const deadlineInText = formatDistanceToNow(deadlineInDate, {
    addSuffix: true,
    locale: tr,
  });
  const today = new Date();
  function getClassName(date) {
    const diff = differenceInDays(date, today);
    return diff > 3 ? "normal" : "bg-[#ffd9d4]";
  }
  const bg = getClassName(deadlineInDate);
  return (
    <div className="task">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={bg}>{deadlineInText}</span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm color-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-md rounded border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
