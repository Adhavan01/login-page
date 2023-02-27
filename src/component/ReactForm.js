import React from 'react'
import {useForm} from 'react-hook-form'

function ReactForm() {
const {register,handleSubmit,watch,formState:{errors}}=useForm()

const fName=watch('fName')
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
      })}> 
        {/* <h2>{data.fName} </h2> <h2> {data.lName}</h2> */}
        <input type="text" {...register('fName',{required:'enter the 1st name'})} placeholder='FirstName' /><br/>
        <h1>{fName}</h1>
        {errors?.fName && <p>{errors.fName.message}</p>}
        <input type="text" {...register('lName',{required:'enter the last name', minLength:{
          value:4,
          message:"min length is 4"
        }})} placeholder='LastName' /><br/>
         {errors?.lName && <p>{errors.lName.message}</p>}
        <input type="submit" {...register("submit")} />
      </form>
    </div>
  )
}

export default ReactForm