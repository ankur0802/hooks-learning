import React , {useState} from 'react'

export default function Formch7() {

   const [formData, setFormData] = useState({});

   const handleChange = (e)=>{
      setFormData ({
         ...formData, 
         [e.target.name]: e.target.value
      }) 
   }

   const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formData)
   }

  return (
    <>
    <div className='container'>
       <form onSubmit={handleSubmit}>
          <h1>Hello {formData.name} {formData.email}{formData.number}</h1>
          <input 
          type="text"
          placeholder='Enter your Name'
          onChange={handleChange}
          name='name'
          value={formData.name}
          />
          
          <input 
          type="email"
          placeholder='Enter your Email'
          onChange={handleChange}
          name='email'
          value={formData.email}

          />
          <input 
          type="number"
          placeholder='Enter your Number'
          onChange={handleChange}
          name='number'
          value={formData.number}

          />

          <button className='btn #673ab7 deep-purple' type='submit'>Submit</button>

       </form>
    </div>
    </>
  )
}
