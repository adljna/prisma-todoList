import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {};

function TodoForm({}: Props) {
  const [body, setBody] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter(); // 🔥 tambahin ini

  const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setisLoading(true);

    try {
      const { data } = await axios.post('/api/todos', { body });

      console.log(data);

      setBody(''); // 🔥 reset input
      setisLoading(false);

      router.replace(router.asPath); // 🔥 REFETCH DATA
    } catch (error) {
      console.error(error);
      setisLoading(false);
    }
  };

  return (
    <section className='p-6 border-l border-r'>
      <form onSubmit={handleAddTodo} className='flex flex-row bg-white border'>
        <input
          type='text'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className='ml-2 w-full outline-none'
          placeholder='Buy Tomatoes'
        />
        <input
          type='submit'
          className='p-2 ml-auto bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
          value='Add Todo'
        />
      </form>

      {isLoading && (
        <p className='mt-4 p-2 bg-blue-400 rounded-md text-white select-none'>
          Loading...
        </p>
      )}
    </section>
  );
}

export default TodoForm;