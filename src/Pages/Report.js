import React from 'react'
import questions from '../questions'


const Report = () => {
    const correctChoiceColor='bg-green-500'
  
  return (
    <div className='pt-[50px]'>
        <h1
        className='text-4xl font-bold text-center'
        >{localStorage.getItem("Name")},your report is here</h1>
        {questions.map((question,idx)=>{
            return <div
            className='
            border
            border-black
            rounded-md
            m-2
            p-2
            '

            >
                <h1
                className='text-2xl font-bold pl-[30px]'
                >{idx+1}.{question.question}</h1>
                <div className='space-y-4 text-lg pl-[45px]'>
                    
                    {
                        question.choices.map((choice,idx)=>{
                            return <div>
                               <p
                                 className={question.correctAnswer===choice && `w-[200px] rounded-md bg-green-500`}
                               >
                                     <span
                                        className='font-bold rounded-full border-2 px-3'   
                                     >{idx+1}</span> {choice}
                               </p>
                            </div>
                        })

                    }

                </div>
                
            </div>
        })}


        


    </div>
  )
}

export default Report