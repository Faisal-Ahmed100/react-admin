import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
const [data,setData]=useState(userRows);
const handleBtn=(id)=>{
setData(data.filter(item=>item.id !== id));
}
  const actionCell=[
    {field:'action',headerName:'Action',width:200,renderCell:(params)=>{
      return(
        <div className="cellAction">
          <div className="viewBtn">
            <Link to='/users/test'>
            View
            </Link>
            
            
            </div>
          <div className="deleteBtn" onClick={()=>handleBtn(params.row.id)}>Delete</div>
        </div>
      )
    }}
  ];

  return (
    <div className='datatable'>
      <div className="addDataTable">
  Add New User 
  <Link to='/users/new' className='link'>
  Add New
  </Link>
</div>
<DataGrid
        className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionCell)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable