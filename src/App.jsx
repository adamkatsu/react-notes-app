import { useState } from 'react'
import data from './data'
import Sidebar from './components/Sidebar'
import Notes from './components/Notes'
import Split from 'react-split'


export default function App() {
  const [notesData, setNotesData] = useState(data)
  const [currentNote, setCurrentNote] = useState(0);

  // Set Active Tab to pass to children props
  function clickActiveTab(note) {
    setCurrentNote(note.id - 1)
  }

  return (
    <>
    <Split className='split-wrapper'
      sizes={[25, 75]}
      minSize={[240, 640]}
      expandToMin={false}
      gutterSize={8}
      gutterAlign="center"
      snapOffset={25}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <Sidebar data={notesData} handleClick={clickActiveTab} currentNote={currentNote}/>
      <Notes data={notesData} currentNote={currentNote}/>
    </Split>
    </>
  )
}
