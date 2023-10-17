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
    return diff > 3 ? "normal" : "urgent";
  }
  const bg = getClassName(deadlineInDate);
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={bg}>{deadlineInText}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
