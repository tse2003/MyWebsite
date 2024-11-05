import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto w-[1000px] h-full pt-10">
      <div className="flex gap-3">
        <div className="w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-60 w-full" src="/images/cinema.jpg" alt="Movie" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Кино бүртгэл</h5>
              <a href="/movies" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Хуудас руу шилжих
              </a>
          </div>
        </div>

        <div className="w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-60 w-full" src="/images/comings.jpg" alt="Coming" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Тун удахгүй гарах кино бүртгэл</h5>
              <a href="/comings" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Хуудас руу шилжих
              </a>
          </div>
        </div>

      </div>
    </div>
  );
}
