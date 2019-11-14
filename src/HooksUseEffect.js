import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log("这里是INDEX页面哈哈哈")
    return () => {
      console.log("你离开了Index页面呜呜呜")
    }
  }, [])
  return (
    <h2>Home page</h2>
  )
}

function List() {
  useEffect(() => {
    console.log("这里是List页面哈哈哈")
  }, [])
  return (
    <h2>List page</h2>
  )
}

function HooksUseEffect() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("UseEffect did mount" + count)
    return () => {
      console.log("==========")
    }
  }, [count])
  return (
    <div>
      <p>You have clicked {count} times.</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  )
}

export default HooksUseEffect


