import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducationItem ,dltEducatioItem } from '../ReduxData/RegisterSlice'
import uuid from "react-uuid";

export default function Education() {
  const [isFormDisplay, setIsFormDisplay] = useState(false)

  var universityBox = undefined;
  var clgBox = undefined;
  var yearBox = undefined;
  var markBox = undefined;

  const dispatch = useDispatch()
  const educationData = useSelector(state => state.regData.value.education)


  const save = (event) => {
    var ob = {
      id : uuid(),
      university: universityBox.value, clg: clgBox.value, year: yearBox.value, marks: markBox.value
    }
    dispatch(addEducationItem(ob))
    universityBox.value = "";
    clgBox.value = "";
    yearBox.value = "";
    markBox.value = "";
    event.preventDefault()
  }

  const dltItem = (id) => {
    
   var status =  window.confirm("Are you sure to delete ? ")
    if(status){
           dispatch(dltEducatioItem({id}))
    }
  }
  return <>
    <h3 className="alert alert-danger text-center">Education Detail</h3><hr />
    <button className="btn btn-primary btn-lg" onClick={() => setIsFormDisplay(!isFormDisplay)}>{isFormDisplay ? "Close" : "Add Item"}</button><hr />
    <form style={{ display: isFormDisplay ? 'block' : 'none' }} onSubmit={save}>
      <input type="text" className="form-control" ref={c => universityBox = c} placeholder="University" required />&nbsp;&nbsp;
      <input type="text" className="form-control" ref={c => clgBox = c} placeholder="College" required />&nbsp;&nbsp;
      <input type="number" className="form-control" ref={c => yearBox = c} placeholder="Year" required />&nbsp;&nbsp;
      <input type="text" className="form-control" ref={c => markBox = c} placeholder="Marks" required /><br />
      <button className="btn btn-success btn-lg" onClick={save}>Save Data</button>&nbsp;&nbsp;
    </form><hr />
    {educationData != undefined ? <table className="table table-striped">
      <thead>
        <tr>
          <th>S. No</th>
          <th>University</th>
          <th>College</th>
          <th>Year</th>
          <th>Marks</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {educationData.map((data, index) => <tr key={index}>
          <td>{index + 1}</td>
          <td>{data.university}</td>
          <td>{data.clg}</td>
          <td>{data.year}</td>
          <td>{data.marks}</td>
          <td>
            <button className="btn btn-danger"onClick={()=>dltItem(data.id)}>Delete</button>
          </td>
        </tr>)}
      </tbody>
    </table> : ""}<hr />
    <Link to="/" className="btn btn-warning btn-lg">Previous</Link>&nbsp;&nbsp;
    {educationData != undefined ? <Link to="/experince" className="btn btn-warning btn-lg">Next</Link> : ""}

  </>
}