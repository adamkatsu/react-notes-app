import { useState } from "react"

export default function Notes(props){
  const [notesData, setNotesData] = useState(props.data);
  let activeNote = props.currentNote;
  const [activeTab, setActiveTab] = useState(notesData[activeNote])
  
  function updateData(event){
    notesData.map((x) => {
      
      const currentIndex = x.id -1
      {currentIndex === activeNote && 
        console.log(x)
      }
    })
  }
  
  // function updateData(event){
  //   const inputTitle = event.target.name
  //   const inputValue = event.target.value

  //   setActiveTab((prevState) => {
  //     return {
  //       ...prevState,
  //       [inputTitle] : inputValue
  //     }
  //   })
  // }
  
  // console.log(active)

  return (
    <main>
      <input 
        className="notes-textarea h1" 
        name='title' 
        defaultValue={notesData[activeNote].title} 
        onChange={updateData}
      />
      <textarea 
        className="notes-textarea" 
        name='content' 
        defaultValue={notesData[activeNote].content} 
        onChange={updateData}
      />
    </main>
  )
}