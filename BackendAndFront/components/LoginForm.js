"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {  

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="card glass p-6 rounded-lg shadow-lg md:w-1/3 text-white">
        <h1 className='text-white font-bold text-5xl'>Нэвтрэх</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Email" className="block mt-5 mb-2 text-sm font-medium text-white">И-мэйл</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="И-мэйл"
          />
          <label htmlFor="Password" className="block mt-5 mb-2 text-sm font-medium text-white">Нууц үг</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Нууц үг"
          />
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5">
            Нэвтрэх
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm p-2 md:p-4 font-bold cursor-pointer px-6 py-2 rounded">
              {error}
            </div>
          )}
          <div className='flex text-gray-400 gap-4 pt-3'>
            <a href='/register' className='m-auto'>Бүртгүүлэх</a>
          </div>
        </form>
      </div>
      <div className="card glass p-6 rounded-lg shadow-lg md:w-1/3 text-white">
        <div className="m-auto text-center">
          <h1 className='text-white font-bold text-2xl'>Тасалбар захиалах</h1>
          <p>Эрхэм үйлчлүүлэгч та цахимаар киноны тасалбар захиалах бол өөрийн эрхээр нэвтрэн орно уу!</p>
        </div> 
      </div>
    </div>
  );
}