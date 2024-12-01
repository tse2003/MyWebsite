"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) =>  {
    e.preventDefault();

    if(!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }

  };

    return (
        <div className='pt-10 pb-10'>
      <div className="card glass p-6 rounded-lg shadow-lg md:w-1/3 text-white m-auto">
        <h1 className="text-white font-bold text-5xl">Бүртгүүлэх</h1>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="Email" className="block mt-5 mb-2 text-sm font-medium text-white">
            Нэр
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Нэр"
          />
          
          <label htmlFor="Email" className="block mt-5 mb-2 text-sm font-medium text-white">
            И-мэйл
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="И-мэйл"
          />
          
          <label htmlFor="Password" className="block mt-5 mb-2 text-sm font-medium text-white">
            Нууц үг
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Та шинэ нууц үг оруулна уу"
          />
          
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5">
            Бүртгүүлэх
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm p-2 md:p-4 font-bold cursor-pointer px-6 py-2 rounded">
              {error}
            </div>
          )}
          
          <div className="flex text-gray-400 gap-4 pt-3">
            <a href="/" className="m-auto">Нэвтрэх</a>
          </div>
        </form>
      </div>
    </div>
    );
}