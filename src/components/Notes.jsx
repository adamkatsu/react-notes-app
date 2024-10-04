import { useEffect } from "react"

export default function Notes(props){
  const notesData = props.data
  let activeNote = props.currentNote
  
  console.log(props.currentNote)

  return (
    <main>
      <h1>{notesData[activeNote].title}</h1>
      <p className="notes-textarea" name="" id="" >{notesData[activeNote].content}</p>
    </main>
  )
}