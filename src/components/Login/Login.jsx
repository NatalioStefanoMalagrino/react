import React from 'react'

const Login = ({nombre, onSubmit}) => {
  return (
    <div>
        <h2>el titulo</h2>
        <input type="text" placeholder='ingresa tu nombre'/>
        <button onClick={onSubmit}>sumar</button>
    </div>
  )
}

export default Login