import { useState } from "react"

export default function Createtask({togler}) {


    const [title, settasktitle] = useState('');
    const [date, setDate] = useState('');
    const [asign, setAsign] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    // const [newTask, setnewTask] = useState({});
    const submithandler = (e) => {
        e.preventDefault();
        // setnewTask({ title, date, asign, category, description, active: false, newtask: true, completed: false, failed: false });
        const createdtask={ title, date, asign, category, description, active: false, newtask: true, completed: false, failed: false };

        const data = JSON.parse(localStorage.getItem('employee'));

        data.forEach((elem) => {
            if (elem.firstName == asign) {
                elem.tasks.push(createdtask);
                console.log(elem);
                elem.taskSummary.newtask++;
            }
        })
        
    localStorage.setItem('employee', JSON.stringify(data)); 
        settasktitle('');
        setDate('');
        setAsign('');
        setCategory('')
        setDescription('');
        togler();
        // window.location.reload();
    }
    return (<>
        <div className="px-10 ">
            <div className=" text-white px-10 py-5  bg-[#1c1c1c] w-full h-[320px] rounded-sm">
                <form action="" onSubmit={submithandler} className="flex  justify-between items-center ">
                    <div className="w-1/2">
                        <div className=" ">
                            <h3 className=" mb-0.5 text-gray-300">Task title</h3>
                            <input required onChange={(e) => { settasktitle(e.target.value) }
                            } value={title} className="w-4/5 py-0.5 rounded-sm  px-2 bg-transparent border-2 border-gray-400 outline-none" type="text" placeholder="Make a Ui design" />
                        </div>
                        <div className="mt-3"><h3 className="text-gray-300">Date</h3>
                            <input required onChange={(e) => { setDate(e.target.value) }
                            } value={date} className=" w-4/5 py-0.5 rounded-sm px-2 border-2 border-gray-400 outline-none text-gray-300" type="date" />
                        </div>
                        <div className="mt-3"><h3 className="text-gray-300">Asign to</h3>
                            <input required onChange={(e) => { setAsign(e.target.value) }
                            } value={asign} className=" w-4/5 py-0.5 rounded-sm px-2 border-2 border-gray-400 outline-none" type="text" placeholder="employee name" />
                        </div>
                        <div className="mt-3"><h3 className="text-gray-300">Category</h3>
                            <input required onChange={(e) => { setCategory(e.target.value) }
                            } value={category} className=" w-4/5 py-0.5 rounded-sm px-2 border-2 border-gray-400 outline-none" type="text" placeholder="design,dev,etc" />
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <h3 className="text-gray-300">Description</h3>
                        <textarea required onChange={(e) => { setDescription(e.target.value) }
                        } value={description} className="border-2 border-gray-400 outline-none" name="description" id="" rows={8} cols={60}></textarea>
                        <button className=" mt-2 py-3 rounded-sm font-semibold text-1xl bg-emerald-500 hover:bg-emerald-600">Create Task</button>
                    </div>
                </form>
            </div>
        </div>

    </>)
}