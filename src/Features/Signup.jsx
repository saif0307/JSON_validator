import React from 'react'
import { useState } from 'react'
import {supabase} from '../client'
import { Link } from "react-router-dom";



function SignupPage({data}){
  // const [name ,setname]=useState('')
  // const [email,setemail]=useState('')
  // const [pass,setPass]=useState('')
  const [formData,setformData]=useState({
    full_name:'',email :'',password:''
  })


    console.log(formData)

  
    function handleChange(event){
      setformData((preFormData)=>{
        return{
          ...preFormData,
          [event.target.name]:event.target.value
        }
      })

    }


   

       async function handleSubmit(e){
    e.preventDefault();
    // if (email && pass && name){
    //       console.log(email,pass,name);

      try{
        const { data, error } = await supabase.auth.signUp(
  {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        full_name: formData.full_name,
        
      }
    }
  }
)
if (error) throw error
alert("check your email for verification")


}  
catch(error){
  alert(error)

}}

    // }else{
    //   alert("empty fields")
    // }

    
    
    return (
      < >
      <div className='flex justify-center items-center w-full h-[600px]  '>
        <div className='border- border-[2px] max-w-[500px] w-full  rounded-[20px]'>
      <form onSubmit={handleSubmit} className='max-w-[500px] w-full p-[2px]' >

        
        <div className='bg-sky-500  rounded-[20px] text-white'><h3 className='max-w-[250px] w-full items-center text-center font-bold text-[30px] py-4 '>Sign Up</h3></div>
        <div className='px-[4px] mt-[20px]'>
        <div  className="mb-3 flex gap-[60px] h-[50px] ">
          <label className='w-full max-w-[70px] flex justify-center  items-center '>Full name</label>
          <input
            className="form-control w-full border border-blue-300 rounded-[5px] px-[4px] outline-none  hover:border-sky-700 hover:border-b-4 "
            placeholder="Full name"
            name='full_name'
            onChange={handleChange}

          />
        </div>
        
        <div className="mb-3 flex gap-[30px] h-[50px]">
          <label className='w-full max-w-[100px]  text-center flex justify-center  items-center '>Email address</label>
          <input
            name="email"
            className="form-control w-full border border-blue-300 rounded-[5px] px-[4px] outline-none hover:border-sky-700 hover:border-b-4 "
            placeholder="Enter email"
            onChange={handleChange}

          />
        </div>
        <div className="mb-3 flex gap-[60px] h-[50px]">
          <label className='w-full max-w-[70px] flex justify-center  items-center '>Password</label>
          <input
            name="password"
            type='password'
            className="form-control w-full border border-blue-300 rounded-[5px] px-[4px] outline-none hover:border-sky-700  hover:border-b-4"
            placeholder="Enter password"
            onChange={handleChange}

            
          />
        </div>
        <div className="d-grid flex justify-center items-center ">
          <button type="submit" className="btn btn-primary border-[2px] font-bold text-sky-500 hover:text-white text-[16px]  rounded-[10px] max-w-[200px] w-full text-center  py-[5px]  hover:bg-sky-500 ">
            Sign Up
          </button>
        </div>
        </div>
       
      </form> 
      <div className='flex items-center justify-center'>
      <Link to="/"><button className='mt-4 '>  Already registered ? log in</button></Link></div>
      </div>
     
         
         </div> 
        </>
    )
    }


export default SignupPage;
