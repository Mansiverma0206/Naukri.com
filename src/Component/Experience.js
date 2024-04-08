import {Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addExperinceItem ,dltExperinceItem} from '../ReduxData/RegisterSlice'
import uuid from 'react-uuid';

export default function Experience()
{
   const [isFormDisplay, setIsFormDisplay] =useState(false)
   var orgBox = undefined;
   var postBox = undefined;
   var salaryBox = undefined;
   var strDateBox = undefined;
   var edDateBox = undefined;
    
   const dispatch = useDispatch()
   const experienceData = useSelector(state=>state.regData.value.experience)
   const save = (event)=>{
      var ob = {
         id : uuid() ,
         organisation : orgBox.value , post : postBox.value ,
         salary : salaryBox.value , start : strDateBox.value ,
         end : edDateBox.value
      }
      dispatch(addExperinceItem(ob))
      orgBox.value = '';
      postBox.value = '';
      salaryBox.value = '';
      strDateBox.value = '';
      edDateBox.value = '';
      event.preventDefault()
   }

   const dltItem = (id)=>{
      var status = window.confirm("Are you sure to delete ?")
      if(status){
         dispatch(dltExperinceItem({id}))
      }
   }

   return<>
   <h3 className="alert alert-danger text-center">Experince Data</h3><hr/>
   <button className='btn btn-info btn-lg'onClick={()=>setIsFormDisplay(!isFormDisplay)}>{isFormDisplay?'Close':'Add Experince'}</button><hr/>
   <form style={{display: isFormDisplay?'block':'none'}}>
      <input type="text" className="form-control" ref={c=>orgBox=c}placeholder="Organisation" required/>&nbsp;&nbsp;
      <input type="text" className="form-control" ref={c=>postBox=c} placeholder="Post" required/>&nbsp;&nbsp;
      <input type="text" className="form-control" placeholder="Salary" ref={c=>salaryBox=c}required/>&nbsp;&nbsp;
      <input type="Date" className="form-control" placeholder="Start Date"ref={c=>strDateBox=c} required/>&nbsp;&nbsp;
      <input type="Date" className="form-control" ref={c=>edDateBox=c} placeholder="End Date" required/><br/>
      <button className="btn btn-success btn-lg" onClick={save}>Save Data</button>&nbsp;&nbsp;
   </form><hr/>
   {experienceData != undefined ? <table className="table table-striped">
      <thead>
        <tr>
          <th>S. No</th>
          <th>organisation</th>
          <th>Post</th>
          <th>salary</th>
          <th>Joining Date</th>
          <th>End Date</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {experienceData.map((data, index) => <tr key={index}>
          <td>{index + 1}</td>
          <td>{data.organisation}</td>
          <td>{data.post}</td>
          <td>{data.salary}</td>
          <td>{data.start}</td>
          <td>{data.end}</td>
          <td>
            <button className='btn btn-danger' onClick={()=>dltItem(data.id)}>Dalete</button>
          </td>
        </tr>)}
      </tbody>
    </table> : ""}<hr />



   <Link to="/education" className="btn btn-warning btn-lg">Previous</Link>&nbsp;&nbsp;
      {experienceData!=undefined?<Link to='/finalData' className="btn btn-warning btn-lg">Next</Link>:''}

   
   </>
}