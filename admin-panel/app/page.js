import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto w-full max-w-6xl pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Movie Registration Card */}
        <div className="card bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <Image className="rounded-t-lg h-60 w-full object-cover" src="/images/cinema.jpg" alt="Movie" width={1000} height={600} />
          <div className="card-body p-5">
            <h5 className="card-title text-2xl font-semibold text-gray-900 dark:text-white">Кино бүртгэл</h5>
            <p className="card-description text-gray-700 dark:text-gray-300 mb-4">
              Бүх кинонуудын бүртгэлийг энэ хуудаснаас хянах боломжтой.
            </p>
            <a
              href="/movies"
              className="btn btn-primary text-white w-full rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Хуудас руу шилжих
            </a>
          </div>
        </div>

        {/* Coming Soon Movies Card */}
        <div className="card bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <Image className="rounded-t-lg h-60 w-full object-cover" src="/images/comings.jpg" alt="Coming Soon" width={1000} height={600} />
          <div className="card-body p-5">
            <h5 className="card-title text-2xl font-semibold text-gray-900 dark:text-white">Тун удахгүй гарах кино бүртгэл</h5>
            <p className="card-description text-gray-700 dark:text-gray-300 mb-4">
              Танилцуулга болон гарах кинонуудыг харах боломжтой.
            </p>
            <a
              href="/comings"
              className="btn btn-primary text-white w-full rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Хуудас руу шилжих
            </a>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="card bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <Image className="rounded-t-lg h-60 w-full object-cover" src="/images/time.jpg" alt="Schedule" width={1000} height={600} />
          <div className="card-body p-5">
            <h5 className="card-title text-2xl font-semibold text-gray-900 dark:text-white">Цагийн хуваарь</h5>
            <p className="card-description text-gray-700 dark:text-gray-300 mb-4">
              Киноны цагийн хуваарийг энэ хэсгээс шалгах боломжтой.
            </p>
            <a
              href="/times"
              className="btn btn-primary text-white w-full rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Хуудас руу шилжих
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
