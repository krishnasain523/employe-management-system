export default function Newtask({ data }) {
    const markaccept = () => {
        const updata = JSON.parse(localStorage.getItem('curruser'));
  // console.log(updata.employe);
  // console.log(data);
    
  updata.employe.tasks.forEach((task) => {
    // if (employee.tasks && Array.isArray(employee.tasks)) {
    
        if (task.title === data.title) {
          console.log(task);
          task.active = true;
          task.Newtask = false;
         console.log(task);
         // Optional: mark it completed
        }
      
    })
     updata.employe.taskSummary.active++;
       updata.employe.taskSummary.Newtask--; 
  localStorage.setItem('curruser', JSON.stringify(updata));
  window.location.reload();
    }


    return (<>

        <div className="h-full p-5 flex-shrink-0 w-[300px] bg-orange-300  rounded-xl">
            <div className="flex justify-between items-center">
                <h2 className="bg-red-400 py-1 px-2 rounded-sm font-medium">{data.category}</h2>
                <h3 className="">{data.date}</h3>
            </div>
            <h3 className="text-2xl  font-bold mt-5">{data.title}</h3>
            <p className=" mt-2">{data.description}</p>
            <div className="mt-3 flex justify-between">
                <button onClick={markaccept} className="bg-orange-400 hover:bg-orange-500 p-1 rounded-sm">Accept task</button>
            </div>
        </div>
    </>)
}