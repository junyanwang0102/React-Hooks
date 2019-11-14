import React, { useState, useEffect, useCallback } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight 
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function HooksSelfDesign() {
  let size = useWindowSize()

  return (
    <div>
      当前页面大小：{size.width}x{size.height}
    </div>
  )
}

export default HooksSelfDesign

