import React from 'react';


const login = () => {
  return (
    <div>
      <div className="m-auto w-[100%] h-[660px] flex">
        <div className='w-[50%] h-[660px] bg-cover bg-center'>
            <img src="Urgoo.png" alt="Urgoo" className='m-auto mt-16' />
        </div>
        <div className='w-[50%] h-[660px] p-[8%]'>
          <h1 className='text-white font-bold text-5xl'>Нэвтрэх</h1>
          <label for="Email" className="block mt-5 mb-2 text-sm font-medium text-white">И-мэйл</label>
          <input type="text" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="И-мэйл" required />
          <label for="Password" className="block mt-5 mb-2 text-sm font-medium text-white">Нууц үг</label>
          <input type="text" id="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Нууц үг" required />
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5">Нэвтрэх</button>
          <div className='flex text-gray-400 gap-4 pt-3'>
            <a href='/register' className='m-auto'>Бүртгүүлэх</a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default login;
