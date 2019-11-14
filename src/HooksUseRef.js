import React, { useRef } from 'react';

function HooksUseRef() {
  const inputEl = useRef(null)

  return (
    <>
      <input ref={inputEl} type="text"></input>
      <button 
        onClick={() => {
          inputEl.current.value = "Hello, world"
          console.log(inputEl)
        }}
      >
        在input上展示文字
      </button>
    </>
  )
}

export default HooksUseRef