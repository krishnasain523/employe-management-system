export default function Completed({data}) {
    return (<>

        <div className="h-full p-5 flex-shrink-0 w-[300px] bg-green-300  rounded-xl">
            <div className="flex justify-between items-center">
                <h2 className="bg-red-400 py-1 px-2 rounded-sm font-medium">{data.category}</h2>
                <h3 className="">{data.date}</h3>
            </div>
            <h3 className="text-2xl  font-bold mt-5">{data.title}</h3>
            <p className=" mt-2">{data.description}</p>
            <div className="mt-3 flex justify-between">
                <button className="bg-green-500 hover:bg-green-600 p-1 rounded-sm">Completed</button>
            </div>
        </div>
    </>)
}