import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  id: number;
  body: string;
  completed: boolean;
};

function TodoCard({ id, body, completed }: Props) {
  const router = useRouter();

  const handleComplete = async () => {
    try {
      await axios.delete(`/api/todos/${id}`);

      router.replace(router.asPath); // refresh UI
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex items-center justify-between bg-white p-2 border'>
      <p className={completed ? 'line-through opacity-50' : ''}>
        {body}
      </p>

      <button
        onClick={handleComplete}
        className='bg-green-500 text-white px-3 py-1 rounded'
      >
        Complete
      </button>
    </div>
  );
}

export default TodoCard;