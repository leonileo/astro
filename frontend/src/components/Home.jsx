import axios from "axios"
import { motion } from "framer-motion"
import Message from "./Message"
import { useEffect, useState } from "react"

const Home = () => {
  const [success, setSuccess] = useState(false);
  const [mess, setMess] = useState("");

  // const getHello = () => {
  // }
    useEffect(() => {
      axios.get('https://astro-backend-yj6z.onrender.com/')
      .then(mess => {
        setSuccess(true)
        setMess(mess.data)
      }).catch(()=>{
        setSuccess(false)
      })
    },[])
  return (
      <div 
        //   initial={{ x: "10%", opacity:0 }}
        //   animate={{
        //     x: "0%", opacity:1
        // }}
          className='h-full bg-gradient-to-t bg-lime-50 flex justify-center items-center'>
        <div className=' grid justify-center'>
          <p className='font-extralight text-[50px] text-center'> This is a test website! </p>
          <p>Edited now!</p>
          <Message mess={mess}/>
          <div className='my-5 text-center'>
            <button 
            // initial={{y: "-100%", opacity:0}} 
            // animate={{y: "0", opacity: 1, transition: {duration: 0}}} 
            className='bg-blue-400 hover:bg-blue-500 transition-all text-white p-3 w-[150px] text-[20px] rounded-full'
            onClick={getHello}
            > 
              Say hi
            </button>
          </div>
        </div>
        </div>
  )
}

export default Home