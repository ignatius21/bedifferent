import React from 'react'

import CustomButon from './CustomButton'

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea className='aipicker-textarea' placeholder='Ask AI..' rows={5} value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButon type='outlined' title='Asking AI...' customStyles='text-sm'/>
        ):(
          <>
            <CustomButon type='outlined' title='AI logo' customStyles='text-sm' handleClick={()=>handleSubmit('logo')}/>
            <CustomButon type='filled' title='AI Full' customStyles='text-sm' handleClick={()=>handleSubmit('full')}/>
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker