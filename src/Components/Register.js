import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        quiz: []
    })
    const handleSubmit = (e) => {
        if(formData.name === '' || formData.email === '' || formData.password === ''){
            alert("Please fill all the fields")
            return
        }
        //check if use already exists
        localStorage.setItem("Name",formData.name)
        localStorage.setItem("Email",formData.email)
        localStorage.setItem("Password",formData.password)
        localStorage.setItem("Quiz",JSON.stringify(formData.quiz))

    
         console.log(formData) 
            navigate("/login")


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
        >Welcome!</h1>
        <form
        onSubmit={handleSubmit}
        className='
        text-2xl
        '

        >
            <div>
            <p1
            className='text-2xl font-bold'
            >Name</p1>
            <br/>
            <input
            className='h-[50px]
            border-2 border-black
            rounded-md

            '
            value={formData.name}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    name: e.target.value
                })
            }}
             type='text'  placeholder='Enter your name' />
            </div>
            <div>
            <p1
            className='text-2xl font-bold'
            >Email</p1>
            <br/>
            <input
            className='h-[50px]
            border-2 border-black
            rounded-md

            '
            value={formData.email}
            onChange={(e)=>{    
                setFormData({
                    ...formData,
                    email: e.target.value
                })
            }
            }
             type='email'  placeholder='Enter your email' />
            
            </div>
            <div>
            <p1
            className='text-2xl font-bold'
            >Password</p1>
            <br/>
            <input
            className='h-[50px]
            border-2 border-black
            rounded-md

            '
            value={formData.password}
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    password: e.target.value
                })
            }
            }


             type='password'  placeholder='Enter your password' />
            </div>
            <button
            className='
            bg-blue-500
            text-white
            p-2
            rounded
            mt-2
            '
            >Register</button>

            </form>
            <p>
            Already have an account? <a
            className='text-blue-500'
             href='/Login'>Login</a>
            </p>
        </div>
    </div>
  )
}

export default Register