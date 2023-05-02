import { useState } from "react";

import Item from "../item/Item";

function ItemList({ todo, setTodo, string }) {
  const [editTodo, setEditTodo] = useState(null);
  const [value, setValue] = useState("");

  function onEditTodo(id, title) {
    setEditTodo(id);
    setValue(title);
  }

  function onSaveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEditTodo(null);
  }

  function onDeleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  const filteredTodo = todo.filter((item) => {
    return item.title.toLowerCase().includes(string.toLowerCase());
  });

  const elements = filteredTodo.map((item) => {
    return (
      <Item
        key={item.id}
        title={item.title}
        onDeleteTodo={() => onDeleteTodo(item.id)}
        onEditTodo={() => onEditTodo(item.id, item.title)}
        onSaveTodo={() => onSaveTodo(item.id)}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        id={item.id}
        value={value}
        setValue={setValue}
      />
    );
  });

  return <ul>{elements}</ul>;
}

export default ItemList;
