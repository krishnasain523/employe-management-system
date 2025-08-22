import { useState } from "react";


export default function Login({loginhandler}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const submithandler = (e) => {
    e.preventDefault();
    loginhandler(email,password);
    setemail("")
    setpassword("");
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 border-emerald-500 rounded-xl ">
          <form onSubmit={submithandler} action="" className="flex flex-col justify-center p-15">
            <input value={email} onChange={(e) => {
              setemail(e.target.value);
            }} required type="email" placeholder="enter email" className=" outline-none text-white border-2 border-emerald-500 rounded-full py-2 px-6 bg-transparent placeholder:text-grey-400" />
            <input value={password} onChange={(e) => {
              setpassword(e.target.value);
            }} required type="password" placeholder="enter password" className=" outline-none text-white border-2 border-emerald-500 rounded-full py-2 px-6 bg-transparent placeholder: bg-transparent text-grey-400 mt-4" />
            <button className="mt-6 outline-none text-white border-2 border-none font-semibold  hover:bg-emerald-700 rounded-full py-2 px-8 bg-emerald-500 placeholder:text-grey-400">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

