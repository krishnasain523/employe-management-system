
export default function Accepted({data,curremp}) {

      
    const markcompleted=()=>
{
    const updata = JSON.parse(localStorage.getItem('curruser'));
  // console.log(updata.employe);
  // console.log(data);
    
  updata.employe.tasks.forEach((task) => {
    // if (employee.tasks && Array.isArray(employee.tasks)) {
    
        if (task.title === data.title) {
          console.log(task);
          task.active = false;
          task.completed = true;
         console.log(task);
         // Optional: mark it completed
        }
      
    })
     updata.employe.taskSummary.completed++; 
  localStorage.setItem('curruser', JSON.stringify(updata));
  window.location.reload();
}
const markfailed=()=>
{
            const updata = JSON.parse(localStorage.getItem('curruser'));
  // console.log(updata.employe);
  // console.log(data);
    
  updata.employe.tasks.forEach((task) => {
    // if (employee.tasks && Array.isArray(employee.tasks)) {
    
        if (task.title === data.title) {
          console.log(task);
          task.active = false;
          task.failed = true;
         console.log(task);
         // Optional: mark it completed
        }
     
    })
      updata.employe.taskSummary.failed++; 
  localStorage.setItem('curruser', JSON.stringify(updata));
  window.location.reload();
        
}
    return (<>

        <div className="h-full p-5 flex-shrink-0 w-[300px] bg-yellow-300  rounded-xl">
            <div className="flex justify-between items-center">
                <h2 className="bg-red-400 py-1 px-2 rounded-sm font-medium">{data.category}</h2>
                <h3 className="">{data.date}</h3>
            </div>
            <h3 className="text-2xl  font-bold mt-5">{data.title}</h3>
            <p className=" mt-2">{data.description}</p>
            <div className="mt-3 flex justify-between">
                <button onClick={markcompleted} className="bg-green-500 hover:bg-green-600 p-1 rounded-sm">Mark as completed </button>
                <button on onClick={markfailed} className="bg-red-500 hover:bg-red-600 p-1 rounded-sm">Mark as failed</button>
            </div>
        </div>
    </>)
}