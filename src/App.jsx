import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Correct way to update mainTask with the new task
    setMainTask([...mainTask, { title, desc }]);

    setTitle('');
    setDesc('');
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className='text-2xl font-bold text-center'>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='mb-8'>
          <div className='border border-gray-500 p-4 rounded-lg'>
            <div className='flex justify-between mb-5'>
              <div className='w-2/3'>
                <h5 className='text-2xl font-semibold'>{t.title}</h5>
                <h6 className='text-lg font-medium'>{t.desc}</h6>
              </div>
              <button
                className='bg-red-700 text-white px-4 py-2 rounded font-bold'
                onClick={() => deleteHandler(i)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-5xl'>Moizz's TodoList APP</h1>
      <form onSubmit={submitHandler}>
        <input
          className='text-2xl border-zinc-800 border-2 px-5 py-3 m-6 mt-10'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter Your Task Here'
        />
        <input
          className='text-2xl border-zinc-800 border-2 px-5 py-3 m-6'
          type='text'
          placeholder='Enter Your Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='bg-black px-4 py-2 text-white font-bold rounded text-2xl ml-5'>
          Add Task
        </button>
      </form>
      <ul className='p-8'>
        {renderTask}
      </ul>
    </>
  );
};

export default App;
