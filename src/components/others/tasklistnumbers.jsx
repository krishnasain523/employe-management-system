


export default function Tasklistnumber({data}) {
    console.log(data)
     const updata = JSON.parse(localStorage.getItem('curruser'));   
    return (
        <>
            <div className="flex gap-5 justify-between screen">
                <div className="bg-red-400 rounded-xl w-[45%] mt-10 text-white py-6 px-9">
                    <h2 className="text-6xl font-semibold">{updata.employe.taskSummary.newtask}</h2>
                    <h3 className="text-xl font-medium">New task</h3>
                </div>
                <div className="bg-blue-400 rounded-xl w-[45%] mt-10 text-white py-6 px-9">
                    <h2 className="text-6xl font-semibold">{updata.employe.taskSummary.completed}</h2>
                    <h3 className="text-xl font-medium">Completed task</h3>
                </div>
                <div className="bg-green-400 rounded-xl  w-[45%] mt-10 text-white py-6 px-9">
                    <h2 className="text-6xl font-semibold">{updata.employe.taskSummary.active}</h2>
                    <h3 className="text-xl font-medium">Accecpted task</h3>
                </div>
                <div className="bg-yellow-300 rounded-xl w-[45%] mt-10 text-white py-6 px-9">
                    <h2 className="text-6xl font-semibold">{updata.employe.taskSummary.failed}</h2>
                    <h3 className="text-xl font-medium">Failed task</h3>
                </div>
            </div>
        </>
    )
}