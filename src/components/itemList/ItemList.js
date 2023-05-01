import Item from "../item/Item";

function ItemList({ todo, setTodo }) {
  function onDeleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  const elements = todo.map((item) => {
    return (
      <Item
        key={item.id}
        title={item.title}
        onDeleteTodo={() => onDeleteTodo(item.id)}
        todo={todo}
      />
    );
  });

  return <ul>{elements}</ul>;
}

export default ItemList;
