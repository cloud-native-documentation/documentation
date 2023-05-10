import { useState } from 'react'
import { useRegister } from '../utils/api/user'

function Register() {
  const myData = {
    username: 'username',
    password: 'password',
    department: 'NYCU'
  }

  const [ register, setRegister ] = useState(false)
  const { data, error, isLoading } = useRegister(register, myData)

  const handleRegister = () => {
    setRegister(true)
  }

  if(!isLoading && !error) {
    console.log({ data, error, isLoading })
  }

  return (
    <div className='bg-blue-500 p-4 rounded-lg'>
      <span className='text-white'>Register</span>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleRegister}>
        Button
      </button>
    </div>
  )
}

export default Register