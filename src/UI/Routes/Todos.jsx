import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../Components/AddTodo";
import { useFirestoreConnect } from "react-redux-firebase";
import ToDoItem from "../Components/TodoItem";

const Todos = () => {
  const auth  =  useSelector((state) => state.firebase.auth) ;
  console.log(auth);
  const { displayName, uid } = auth;
  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: "todoss",  // todoss là nhãn để gọi 
  });
  const todos = useSelector((state) => state.firestore.data.todoss);  // gọi nhãn dã đặt
  console.log(todos);
  return (
    <div>
      <h3>Hello {displayName}</h3>
      <h4>Todos</h4>
      <AddTodo />
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {todos &&
          Object.values(todos).map((todo) => (
            <li>
              <ToDoItem
                title={todo.title}
                isDone={todo.isDone}
                todoID={todo.todoID}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Todos;
