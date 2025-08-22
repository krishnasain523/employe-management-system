
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/auth/login'
import Admindashboard from './components/dashboard/admindashboard'
import Employdashboard from './components/dashboard/employdasboard'
import { getlocaldata, setlocaldata } from './utils/localstorage'
import { Authcontext } from './context/authprovider'

function App() {
  // localStorage.clear();
  useEffect(() => {
    // Your side-effect logic here
    // setlocaldata();
    // getlocaldata();
  });
  const [user,setUser]=useState('');
  const [logedinuserdata,setLogedinuserdata]=useState('');

  const authdata=useContext(Authcontext);
  useEffect(()=>{

    const logedinuser=localStorage.getItem("logedinuser");
    if(logedinuser)
    { const logdata=JSON.parse(logedinuser)
         setUser(logdata.role);
    }
   const curruserdata=localStorage.getItem("curruser")
   if(curruserdata)
   { const currusrdata=JSON.parse(curruserdata)
    setLogedinuserdata(currusrdata.employe);
   }
  },[])
  if(!authdata)
  {
    return <div>loading...</div>
  }
 
  
  const loginhandler=(email,password)=>
  {
    if(email=="admin@gmail.com" && password=='123')
    {
      
      localStorage.setItem("logedinuser",JSON.stringify({role:"admin"}))
      setUser('admin');
      // const admin=authdata.admin.find((e)=>e.email==email && e.password==password)
      // setLogedinuserdata('')
      // setLogedinuserdata(admin);
    }
   else if(authdata)
   { const employe=authdata.employee.find((e)=>e.email==email && e.password==password);
    setUser('employee');
    setLogedinuserdata(employe);
    localStorage.setItem("logedinuser",JSON.stringify({role:"employee"}))
    localStorage.setItem("curruser",JSON.stringify({employe}))
   }
   else
   {
    alert("invalid craditions");
   }
  }
  // if(logout==true)
  // {
  //   setuser(null);
  // }

  return (
    <>
    {!user?<Login loginhandler={loginhandler}/>:''}
  { user=='admin'&& <Admindashboard data={logedinuserdata}/>}
  { user=='employee'&& <Employdashboard data={logedinuserdata}/>}
    </>
  )
}

export default App
