"use client";
import { useState } from "react";

export default function ButtonClient() {
  const [items, setItems] = useState<{ description: string; done: boolean }[]>(
    []
  );
  const [desc, setDesc] = useState("");

  function getTotal() {
    return items.length;
  }

  function getComplete() {
    const total = getTotal();
    if (total === 0) return 0;
    const qtdItemDone = items.filter((item) => item.done).length;
    return Math.round((qtdItemDone / total) * 100);
  }

  function add(desc: string) {
    if (!desc.trim()) return;
    setItems([...items, { description: desc, done: false }]);
    setDesc("");
  }

  function toggleDone(index: number) {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div>
      <div className="total">Total {getTotal()}</div>
      <div className="complete">Complete {getComplete()}</div>

      <input
        className="todo-description"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={() => add(desc)}>Add</button>

      {items.map((item, i) => (
        <div key={i}>
          <div className="description">description {item.description}</div>
          <div className="change">
            Complete {item.done ? "verdade" : "nao feito"}
          </div>
          <button onClick={() => toggleDone(i)}>feito ou n-feito</button>
        </div>
      ))}
    </div>
  );
}
