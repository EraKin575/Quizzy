import React,{useState} from 'react'
import questions from '../questions'

const QuizQuestion = ({question,choices,idx}) => {
  const [selectedChoice,setSelectedChoice]=useState()
  
  function onChangeValue(event){
    const target = event.target;
    if (target.checked) {
   
      setSelectedChoice(target.value);
       console.log(target.value)
       console.log(idx+1)
       let quizAnswers=JSON.parse((localStorage.getItem("Quiz"))) 
       
        quizAnswers[idx+1]=target.value
        localStorage.setItem("Quiz",JSON.stringify(quizAnswers))



      
           
  
       

       


       
       
    }

  }
  
  return (
    <div className='
    border
    border-black
    rounded-xl
    bg-gray-100
    w-[500px]
    m-2
    p-6
    
    '>
        <h1
        className='text-3xl font-bold pb-[20px] '
        ><span>{idx+1}. </span>{question}</h1>
        <div>
            <form
            className='space-y-5'
           
            >
            {choices.map((choice,idx)=>{
                
                return <div>
                    <input 
                    onChange={onChangeValue}
                    type='radio' 
                    name="choice"
                    value={choice} 
                    checked={selectedChoice===choice}
                    />
                    <label>{choice}</label>
                
                </div>
            }
            )}
            </form>

    </div>
    </div>
  )
}

export default QuizQuestion