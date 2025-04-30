import React, { useState } from 'react'
import { userRows } from '../../data'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function UserList() {

    const [userDatas , setUserDatas] = useState(userRows)

    const userDelete = userID =>{
      setUserDatas(userDatas.filter(user =>user.id !=userID))
    }

    const columns =[
      {
        field :'id',
        headerName:'ID',
        width:90
      },
      {
        field :'user',
        headerName:'User',
        width:300,
        renderCell :(params)=>{
          return (
            <>
              <Link to="/" className='link'>
                <div className="userListUser">
                    <img src={params.row.avatar} className='userListImg'/>
                    {params.row.username}
                </div>
              </Link>
            </>
          )
        }
      },
      {
        field: 'email',
        headerName: 'Email',
        width : 250, 
      },
      {
        field :'status',
        headerName: 'Status',
        width: 150
      },
      {
        field:'transaction',
        headerName: 'Transaction',
        width :200
      },
      {
        field :'action',
        headerName: 'Action',
        width:150 ,
        renderCell : (params) =>{
          return(
            <>
              <Link to={`/user/${params.row.id}`}className='link'>
                <button className='uerListEdit'>Edit</button>
              </Link>
              <DeleteOutlineIcon className='userListDelete'
              onClick ={()=> userDelete(params.row.id)}/>

            </>
          )
        }
      }
    ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns= {columns}
        disableSelectionOnClick
        pageSize={4}
      />
    </div>
  )
}
