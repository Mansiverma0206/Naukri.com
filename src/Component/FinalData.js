import { useSelector } from 'react-redux';
import Personal from '../Component/Personal'

export default function FinalData() {
  const regData = useSelector(state => state.regData.value);

  // Check if regData is an array before using .map()
  if (!Array.isArray(regData)) {
    return (
      <div className='container'>
        <h1 className='alert alert-warning text-center'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1 className='alert alert-success text-center'>Final Data</h1>
      {regData.map((data, index) => (
        <div key={index}>
         <Personal personal={personal}/>
        </div>
      ))}
    </div>
  );
}
