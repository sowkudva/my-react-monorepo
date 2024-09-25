import FileExplorer from './components/FileExplorer'
import { data } from './data.js'

function App() {
  return (
    <div className='App'>
      <FileExplorer fileList={data} />
    </div>
  )
}

export default App
