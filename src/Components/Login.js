import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        if(
            formData.email === localStorage.getItem("Email") &&
            formData.password === localStorage.getItem("Password")
        ){
            alert("Login Successful"
          

        )
        navigate("/")
        
          

        }
        else{
            alert("Invalid Credentials")
        }
    }

  return (
    <div
    className='
    bg-gradient-to-r
    from-blue-400
    to-blue-200
    h-screen
    pt-[13%]
    '
    
    >
    <div
    className='
    flex
    flex-col
    items-center
    justify-center
    w-min
    ml-[40%]
   
    rounded-lg
    p-10
    bg-gray-100
    '
    >
        <h1
        className='text-4xl font-bold'
        >Welcome Back</h1>
        <form
        onSubmit={handleSubmit}
        className='
        text-2xl'

        >
            <div>
            <p1>Email</p1>
            <br/>
            <input 
            value={formData.email}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    email: e.target.value
                })
            }
            }
            type='email'
            className=' h-[60px] rounded-md border-2 border-gray-400'
              placeholder='Enter your email' />
            </div>
            <div>
            <p1>Password</p1>
            <br/>
            <input
          
            value={formData.password}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    password: e.target.value
                })
            }
            }

             type='password'
             className=' h-[60px] rounded-md border-2 border-gray-400 text-blue-500'
               placeholder='Enter your password' />
            </div>

        </form>
        <button
        className='
        mt-4
        bg-blue-500
        text-white
        rounded-md
        px-7
        py-2
        text-4xl
        
        '

        onClick={handleSubmit}
        >Login</button>
        <p>
            Don't have an account? <span
            className='
            text-blue-500
            cursor-pointer
            '
            onClick={()=>{
                navigate("/Register")
            }
            }
            >Register</span>

        </p>


    </div>
    </div>
  )
}

export default Login