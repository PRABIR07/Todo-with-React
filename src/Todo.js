import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!input) {
    } else {
      setItems([...items, input]);
      setInput("");
    }
  };

  const deleteItem = (id)=>{
               const updateItems = items.filter((elem,index)=>{
                 return index != id;
                 
               })  
               setItems(updateItems);   
  }


  const removeAll = () =>{
    setItems([]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-green-800 h-[100vh]">
      <h1 className="text-white text-6xl text-center shadow-slate-700 shadow-xl hover:shadow-2xl p-3 bg-slate-500 mx-16">
        Today's Task
      </h1>
      <form
        className="grid grid-cols-5 gap-2 p-3 m-3 mx-[400px]"
        onSubmit={handleSubmit}
      >
        <input
          className="col-span-4 p-4 border border-blue-500 "
          type="text"
          placeholder="Write your work"
          value={input}
          name="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addItem}
          className='bg-orange-500 hover:bg-orange-700 text-white font-bold  rounded-full "
Button'
        >
          Add
        </button>
      </form>
      <div>
        {items.map((elem, index) => {
          return (
           <div className="flex justify-center   text-white gap-3 p-2" key={index}>
                   <h1>{elem}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                
                onClick={() => deleteItem(index)}
                className="w-6 h-6  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              
              </div>
          );
        })}
               
      </div>
      <button onClick={removeAll} className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full p-4 mx-12'>Remove All</button>
    </div>
  );
}

export default Todo;
