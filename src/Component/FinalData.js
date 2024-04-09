import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function FinalData() {
  const studentInfoObject = useSelector(state => state.regData.value);
  console.log(studentInfoObject);

  // Convert object to array using Object.values()
  const studentInfoArray = Object.values(studentInfoObject);

  return (
    <>
      <h1 className="alert alert-success text-center">Final Data</h1>
      <hr />
      <h3 className="alert alert-danger text-center">Personal Data</h3>
      <hr />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>S no</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>

            <th>University</th>
            <th>College Name</th>
            <th>College Year</th>
            <th>Marks</th>
  
            <th>organisation</th>
            <th>Post</th>
            <th>salary</th>
            <th>Joining Date</th>
            <th>End Date</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {studentInfoArray.map((ob, index) => (
            <tr key={ob.id}>
              <td>{index + 1}</td>
              <td>{ob.name}</td>
              <td>{ob.phone}</td>
              <td>{ob.email}</td>
              <td>{ob.dob}</td>
              <td>{ob.university}</td>
              <td>{ob.clg}</td>
              <td>{ob.year}</td>
              <td>{ob.marks}</td>
              <td>{ob.organisation}</td>
              <td>{ob.post}</td>
              <td>{ob.salary}</td>
              <td>{ob.start}</td>
              <td>{ob.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <hr />
      <h3 className="alert alert-danger text-center">Educational Data</h3><hr />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>S no</th>
            <th>University</th>
            <th>College Name</th>
            <th>College Year</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studentInfoArray.map((ob, index) => (
            <tr key={ob.id}>
              <td>{index + 1}</td>
              <td>{ob.university}</td>
              <td>{ob.clg}</td>
              <td>{ob.year}</td>
              <td>{ob.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="alert alert-danger text-center">Experience Data</h3>
      <hr />
      <table className='table table-striped'>
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
          {studentInfoArray.map((ob, index) => (
            <tr key={ob.id}>
              <td>{index + 1}</td>
              <td>{ob.organisation}</td>
              <td>{ob.post}</td>
              <td>{ob.salary}</td>
              <td>{ob.start}</td>
              <td>{ob.end}</td>
            </tr>
          ))}
        </tbody>
      </table><hr /> */}
      <Link to="/experience" className="btn btn-warning btn-lg">Previous</Link>&nbsp;&nbsp;
    </>
  );
}
