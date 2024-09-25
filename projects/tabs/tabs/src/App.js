import './styles.css'

import Tab from './components/Tab'

function App() {
  return (
    <div className='App'>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Tab
            items={[
              {
                label: 'HTML',
                value: 'html',
                text: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
              },
              {
                label: 'CSS',
                value: 'css',
                text: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
              },
              {
                label: 'Javascript',
                value: 'js',
                text: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default App
