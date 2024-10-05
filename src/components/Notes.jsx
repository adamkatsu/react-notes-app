import { useState, useEffect } from "react"

export default function Notes(props){
  const [notesData, setNotesData] = useState(props.data);
  let currentId = props.currentNote;
  const [currentTab, setCurrentTab] = useState(notesData[currentId])

  // Keep currentTab in sync with notesData[currentId] when currentId changes
  useEffect(() => {
    setCurrentTab(notesData[currentId]);
  }, [currentId, notesData]);

  function handleNoteChange(event) {

    const updatedTab = {
      ...currentTab,
      [event.target.name]: event.target.value
    };

    // Update the notesData array to reflect the change
    const updatedNotes = notesData.map((note, index) => 
      index === currentId ? updatedTab : note
    );

    // Update the state with the modified notes
    setNotesData(updatedNotes);

    setCurrentTab((updatedTab))

    // Notify the parent of the change
    props.handleChange(updatedTab)
  }


  return (
    <main>
      <input 
        className="notes-textarea h1" 
        name='title' 
        value={currentTab.title}
        onChange={handleNoteChange}
      />
      <textarea 
        className="notes-textarea" 
        name='content' 
        value={currentTab.content} 
        onChange={handleNoteChange}
      />
    </main>
  )
}