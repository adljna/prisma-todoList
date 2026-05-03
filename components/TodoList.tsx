import React from 'react';
import TodoCard from './TodoCard';
import Todo from '../types/todo';

type Props = {
  todos: Array<Todo>;
};

function TodoList({ todos }: Props) {
  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}              // 🔥 kirim id
            body={todo.body}
            completed={todo.completed ?? false} // 🔥 kirim status
          />
        ))
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
}

export default TodoList;