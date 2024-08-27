import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUname, setUserDetails } from "../utils/userSlice";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !phone) {
      return;
    }

    dispatch(
      setUserDetails({ email: email, password: password, phone: phone })
    );
    setUname("");
    setPassword("");
    setPhone("");
  }

  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="w-full  max-w-md p-8  bg-white rounded-lg shadow-lg">
        <div className="flex gap-4 ">
          <img
            className=" w-10 h-12 "
            src={"../../public/images/logo.png"}
            alt="burger"
          />
          <h2 className="font-bold text-xl text-center text-orange-500 my-2">
            Sign Up
          </h2>
        </div>
        <form className="mt-6 mx-4" onSubmit={handleSubmit}>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 w-2/12"
            >
              Email
            </label>
            <input
              type="text"
              className="border-2 border-gray-600 rounded-lg  "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="phone no"
              className="text-sm font-medium text-gray-700 w-2/12"
            >
              Phone
            </label>
            <input
              type="number"
              className="border-2 border-gray-600 rounded-lg  "
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4 flex gap-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 w-2/12"
            >
              Password
            </label>
            <input
              type="password"
              className="border-2 border-gray-600 rounded-lg  "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-6/12 flex justify-center text-center mx-auto border-2 bg-orange-400 mt-8 p-1 rounded-xl ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
