import Header from "../others/header";
import Tasklistnumber from "../others/tasklistnumbers";
import Tasklist from "../tasklist/tasklist";



 export default function Employdashboard({data}) {

  return (
    <>
    <Header data={data}/>
    <Tasklistnumber  data={data}/>
    <Tasklist  empdata={data}/>
    </>
  )
}

