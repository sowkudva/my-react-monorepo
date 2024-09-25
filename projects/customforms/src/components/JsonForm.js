import { data } from '../data'
import './JsonForm.css'
import { useState } from 'react'

function JsonForm() {
  const [formData, setFormData] = useState({})
  const renderField = (feild) => {
    switch (feild.type) {
      case 'text':
      case 'email':
      case 'password':
        return (
          <div key={feild.name} className='feild'>
            <label>{feild.label}</label>
            <input
              type={feild.type}
              name={feild.name}
              placeholder={feild.placeholder}
              required={feild.validation.reuired}
              minLength={feild.validation?.minLength}
              maxLength={feild.validation?.maxLength}
              pattern={feild.validation?.pattern}
            />
          </div>
        )
      // case 'checkbox':
      //   return (
      //     <div key={feild.name}>
      //       <label>
      //         <input
      //           type={feild.type}
      //           name={feild.name}
      //           checked={formData[feild.name] || false}
      //         />
      //         {feild.label}
      //       </label>
      //     </div>
      //   )
    }
  }

  const handleSubmit = (e) => {
    console.log(e)
  }
  return (
    <div>
      <h3>{data.formTitle}</h3>
      <input type='text' placeholder='testing' />
      <form onSubmit={(e) => handleSubmit}>
        {data.fields.map((feild) => renderField(feild))}
      </form>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default JsonForm
