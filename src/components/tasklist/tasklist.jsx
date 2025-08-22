import Accepted from "./accepttask";
import Completed from "./completed";
import Failed from "./failed";
import Newtask from "./newtask";
export default function Tasklist({empdata}) {
        const updata = JSON.parse(localStorage.getItem('curruser'));
        console.log(updata);
//   updata.forEach((employee) => {
//     if (employee.tasks && Array.isArray(employee.tasks)) {
//       employee.tasks.forEach((task) => {
//         if (task.title === data.title) {
//           task.active = false;
//           task.completed = true;
//          // Optional: mark it completed
//         }
//       });
//        employee.taskSummary.completed++; 
//     }
//   });
    return (
        <>
            <div id="tasklist" className=" h-[350px] text-white overflow-x-auto w-full mt-10 flex flex-nowrap gap-5 justify-start items-center py-10">
             {updata.employe.tasks.map((elem,idx)=>{
                console.log(elem)
               if(elem.active)
               {
               return <Accepted data={elem}  curremp={empdata} key={idx} {...elem}/>
               }
                if(elem.completed)
               {
                return  <Completed  data={elem}  key={idx}  {...elem}/>
               }
                if(elem.failed)
               {
               return <Failed  data={elem}  key={idx}  {...elem}/>
               }
               if(elem.newtask)
               {
               return <Newtask  data={elem}  key={idx}  {...elem}/>
               }
             })}
            </div>
        </>
    )
}