import React, { useState } from "react";

import Checkbox from "../Checkbox";

import "./index.css";

interface Item {
  value: string;
  done: boolean;
}

const cacheValues = new Set();

const Todo = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [flashing, setFlashing] = useState("");

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value !== "") {
            if (!cacheValues.has(value)) {
              cacheValues.add(value);
              const newItems = [{ value, done: false }, ...items];
              setItems(newItems);
            } else {
              setFlashing(value);
            }
          }
        }}
        onKeyUp={() => {
          if (flashing !== "") {
            setTimeout(() => setFlashing(""), 1000);
          }
        }}
      />
      <div className="todo-list">
        {items.map((item) => (
          <div
            className={`todo-item ${flashing === item.value ? "flashing" : ""}`}
            key={item.value}
          >
            <Checkbox
              name={item.value}
              label={item.value}
              defaultChecked={item.done}
              onChange={(e) => {
                const newItems = items.map((newItem) => {
                  if (newItem.value === item.value) {
                    return {
                      value: newItem.value,
                      done: e.target.checked,
                    };
                  } else {
                    return newItem;
                  }
                });

                setItems(newItems);
              }}
            />
            {item.done && (
              <button
                type="button"
                onClick={() => {
                  const newItems = items.filter((i) => i.value !== item.value);
                  setItems(newItems);
                  cacheValues.delete(item.value);
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
