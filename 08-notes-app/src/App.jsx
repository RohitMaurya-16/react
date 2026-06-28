import  { useState } from 'react'
import { X, SquarePen } from 'lucide-react';

const App = () => {
  const [title, settitle] = useState("");
  const [note, setnote] = useState("");
  const [task, settask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const sumbitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    if (isEditing) {
      copyTask[editIndex] = {
        title,
        note,
      };

      setIsEditing(false);
      setEditIndex(null);
    } else {
      copyTask.push({
        title,
        note,
      });
    }

    settask(copyTask);

    settitle("");
    setnote("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    settask(copyTask);
  };

  const editNote = (idx) => {
    settitle(task[idx].title);
    setnote(task[idx].note);

    setEditIndex(idx);
    setIsEditing(true);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">

      <form
        onSubmit={sumbitHandler}
        className="flex items-start flex-col p-10 gap-4 lg:w-1/2"
      >

        <h1 className='text-3xl font-bold'>
          {isEditing ? "Edit Note" : "Add Notes"}
        </h1>

        <input
          type='text'
          placeholder='Enter Notes Heading'
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <textarea
          placeholder='Enter Details..'
          className="px-5 py-2 h-40 border-2 w-full rounded outline-none font-medium resize-none"
          value={note}
          onChange={(e) => setnote(e.target.value)}
        />

        <button className="bg-white active:bg-gray-600 active:scale-95 text-black px-5 py-2 rounded w-full outline-none font-medium">
          {isEditing ? "Update Note" : "Add Note"}
        </button>

        {/* <img
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="Correct link of notes png"
          className="h-60 rotate-y-180"
        /> */}

      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start gap-5 mt-5 h-full overflow-auto'>

          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className='relative h-52 w-40 rounded-xl bg-cover bg-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWUoUkWfFNvlBIl0ODT_j8lNhDN1OXdpx0Xgz_JVYHQ&s=10")] text-black p-4'
              >

                {/* Edit Button */}
                <button
                  onClick={() => editNote(idx)}
                  className="absolute bottom-3 right-3 bg-black text-white p-1 rounded hover:scale-110 transition"
                >
                  <SquarePen size={18} />
                </button>

                {/* Delete Button */}
                <button
                  className='absolute top-3 right-3'
                  onClick={() => deleteNote(idx)}
                >
                  <X
                    size={18}
                    className='cursor-pointer hover:scale-110 transition'
                  />
                </button>

                {/* Note Content */}
                <div className='mt-8'>
                  <h3 className='text-lg font-bold leading-tight break-words'>
                    {elem.title}
                  </h3>

                  <p className='mt-3 text-sm leading-5 text-gray-700 break-words overflow-auto h-24'>
                    {elem.note}
                  </p>
                </div>

              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default App;