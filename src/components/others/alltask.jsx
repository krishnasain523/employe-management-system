import { useContext } from "react"
import { Authcontext } from "../../context/authprovider"



export default function Alltask() {

    const authdata=useContext(Authcontext);
  const data= JSON.parse(localStorage.getItem("employee"));


    return (<>
        <div  className="text-white bg-[#1c1c1c]  p-5 mt-6 w-full h-55">
        <div className=" font-semibold px-10 py-1 rounded-sm mb-2 bg-red-400 flex justify-between">
                          <h2>Employee name</h2>
                          <h2>New task</h2>
                          <h2>Accepted task</h2>
                          <h2>Completed</h2>
                          <h2>Failed</h2>
                      </div>
           
           <div id="alltask" className="h-[80%] overflow-auto mt-3 ">
           {data.map((emp,idx)=>{
              return  <div key={idx} className=" px-10 py-1 rounded-sm mb-2 border-3 border-white-500 flex justify-between">
                          <h2>{emp.firstName}</h2>
                          <h2>{emp.taskSummary.newtask}</h2>
                          <h2>{emp.taskSummary.active}</h2>
                          <h2>{emp.taskSummary.completed}</h2>
                          <h2>{emp.taskSummary.failed}</h2>
                      </div>
            })}
           </div>
           
           
        </div>
    </>)
}