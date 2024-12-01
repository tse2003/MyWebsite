import React from 'react';

const Register = () => {
  return (
    <div className='pt-10 pb-10'>
      <div className="card glass p-6 rounded-lg shadow-lg md:w-1/3 text-white m-auto">
        <h1 className="text-white font-bold text-5xl">Бүртгүүлэх</h1>
        
        <label htmlFor="Email" className="block mt-5 mb-2 text-sm font-medium text-white">
          Нэр
        </label>
        <input
          type="text"
          id="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Нэр"
          required
        />
        
        <label htmlFor="Email" className="block mt-5 mb-2 text-sm font-medium text-white">
          И-мэйл
        </label>
        <input
          type="text"
          id="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="И-мэйл"
          required
        />
        
        <label htmlFor="Password" className="block mt-5 mb-2 text-sm font-medium text-white">
          Нууц үг
        </label>
        <input
          type="text"
          id="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Та шинэ нууц үг оруулна уу"
          required
        />
        
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5">
          Бүртгүүлэх
        </button>
        
        <div className="flex text-gray-400 gap-4 pt-3">
          <a href="/login" className="m-auto">Нэвтрэх</a>
        </div>
      </div>
    </div>
  );
};

export default Register;