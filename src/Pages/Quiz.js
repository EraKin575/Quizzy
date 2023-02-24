import React,{useState} from 'react'
import QuizQuestion from '../Components/QuizQuestion'
import questions from '../questions'

const Quiz = () => {
    const [currentQuestion,setcurrentQuestion]=useState(0)
    const arr=Array.from({length:12},(_,index)=>index+1)
    const [score,setScore]=useState(0)



  return (
    <div
    className='
    bg-gradient-to-r
    from-blue-400
    to-blue-200
    h-screen
    pt-[7%]
    '

    >
    <div
    className='
    flex
    flex-col
    items-center
    justify-center
    bg-gray-100
    w-min
    ml-[25%]
    p-10
    rounded-xl
  
    '
    >
        <h1
        className='text-4xl font-bold '
        >Quiz</h1>
        <div className='flex space-x-[30px] text-2xl py-[40px]'>
            {arr.map((item)=>{
                return <div onClick={
                    ()=>{
                        setcurrentQuestion(item-1)
                    }

                } className='m-2 border cursor-pointer border-black px-4 rounded-full p-2  text-xl '>
                    {item}
                </div>
            }
            )}
        </div>
        <div className='text-2xl'>
           {
                questions.map((question,index)=>{
                    return index===currentQuestion && <QuizQuestion question={question.question} choices={question.choices} idx={index} />
           }
              )}

        </div>
        <button className='
        bg-blue-400
        px-4
        py-2
        rounded-xl
        text-white
        font-bold
        text-xl
        '
        onClick={()=>{
            setcurrentQuestion(currentQuestion+1)
            setScore(0)
        }}
        >Submit</button>
        <div
        className='
        flex
        pt-[40px]
        space-x-[200px]
        text-xl

        

        '
        >
      
            <p
            onClick={()=>{
                if(currentQuestion>0){
                    setcurrentQuestion(currentQuestion-1)
                }
            }
            }
            >...Previous</p>
            <p
            onClick={()=>{
                if(currentQuestion<9){
                    setcurrentQuestion(currentQuestion+1)
                }
            }
            }

            >Next...</p>
        </div>
              
               
           


        
    </div>
    </div>
  )
}

export default Quiz