import React from 'react'
import { useState } from 'react'
import TaskList from '../TaskList/TaskList';
 
const Notes = () => {
  const [text, setText] = useState('');
  const [noteList, setNoteList] = useState([]);
   const formHandler=(e)=>{
    setText(e);
}
const Addnote=()=>{

  if(text.trim()===""){
    return ;
  }

  const currentNotes=[...noteList];
  currentNotes.push(text)
  setNoteList(currentNotes);
  console.log(currentNotes);  
  setText("");

}

const deleteNote=(idx)=>{
  const copyTask=[...noteList];
  copyTask.splice(idx,1);
  setNoteList(copyTask);
}
  return (
    <div className='h-full flex flex-col'>
    <div className='bg-white rounded-xl shadow-lg p-6 '>
      <h2 className='text-2xl font-bold'>Notes</h2>
      <textarea onChange={(e)=>{
        formHandler(e.target.value);
      }}className='w-full border rounded-lg p-3 mt-4 outline-none resize-none focus:ring-2 focus:ring-blue-500'
              value={text}
></textarea>
      <button className='bg-blue-500
      hover:bg-blue-600 transition font-medium text-white rounded-lg px-4 py-2 mt-4 ' onClick={()=>{
        Addnote();
      }}>Add Note</button>
    </div>
    <div className="flex flex-wrap gap-4 mt-6 justify-start flex-start">
      {noteList.length===0?(
        <p>Not Note yet!</p> 
      ):(
        noteList.map((ele,idx)=>{
        return (
          <div key={idx} className='h-80 w-80 bg-cover bg-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7I3s5zErc9IsaVB-7p4C4vG0a2g1hDejwl_hwQ_PJSOdgn7fzuoyUz6Bq&s=10"))] items-start  px-10 bt-4 pt-18 flex flex-col'>
            <h3 className='leading-tight text-xl font-bold'>{ele}</h3>
            <button onClick={()=>{
              deleteNote(idx);
            }} className="cursor-pointer active:scale-95 mt-auto w-full bg-red-600 mb-5 p-2 text-xs rounded font-bold text-white">Delete</button>
          </div>
        )
      })
      )
    }      
      </div>
      </div>
  )
}

export default Notes
