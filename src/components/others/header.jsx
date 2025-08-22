

 export default function Header({data}) {
const logout=()=>
{
  localStorage.setItem("logedinuser",'');
  localStorage.setItem("curruser",'')
  window.location.reload();
}

  return (
   
    <>
   <div>
   <div className="flex justify-between items-end p-10">
           <h1 className=" text-2xl text-white font-medium">Helo <br/> <span className="font-semibold text-3xl">{data.firstName} &#128075;</span>  </h1>
           <button onClick={logout} className="bg-red-500 py-2 px-4 rounded-sm font-semibold text-white hover:bg-red-600 ">logout</button>
    </div>
   </div>
    </>
  )
}

