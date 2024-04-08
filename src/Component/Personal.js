import { Link } from "react-router-dom";
import { addPersonalData } from '../ReduxData/RegisterSlice'
import {  useDispatch, useSelector } from "react-redux";

export default function Personal()
 {
  var nameBox = undefined;
  var phoneBox = undefined;
  var emailBox = undefined;
  var dobBox = undefined;

  var dispatch = useDispatch()
  var personalData = useSelector(state=>state.regData.value.personal)
  console.log(">>>>> : ",personalData)

  const save = (event) => {
    var ob = {
      name :nameBox.value , phone : phoneBox.value , email :emailBox.value , dob : dobBox.value
    }
    dispatch(addPersonalData(ob))
    event.preventDefault()
  }
  return <>
    <h3 className="alert alert-danger">Personal Data</h3>
    <hr />
    <form onSubmit={save}>
      <input type="text" className="form-control" Value={personalData!=undefined?personalData.name:''} ref={c=>nameBox=c} placeholder="Name" required />&nbsp;&nbsp;
      <input type="text" className="form-control" Value={personalData!=undefined?personalData.phone:''} ref={c=>phoneBox=c} placeholder="Phone" required />&nbsp;&nbsp;
      <input type="email" className="form-control" Value={personalData!=undefined?personalData.email:''} ref={c=>emailBox=c} placeholder="Email" required />&nbsp;&nbsp;
      <input type="date" className="form-control" Value={personalData!=undefined?personalData.dob:''} ref={c=>dobBox=c} placeholder="DOB" required /><br />
      {personalData!=undefined?<Link to="/finalData" className="btn btn-danger btn-lg">Final Data</Link>:""}&nbsp;&nbsp;
      <button className="btn btn-success btn-lg">Save Data</button>&nbsp;&nbsp;
      {personalData!=undefined?<Link to="/education" className="btn btn-warning btn-lg">Next</Link>:''}
    </form>

  </>
}