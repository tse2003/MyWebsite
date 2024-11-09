"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddComing() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("/images/1.jpg");
  const [age, setAge] = useState(1);
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !image) {
      setError("Title and Image are required.");
      return;
    }

    setError(""); // Reset error message
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/comings", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, image, age, type, duration, startDate, description }),
      });

      if (res.ok) {
        router.push("/comings");
      } else {
        throw new Error("Failed to create a Coming.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Кино нэмэх</h1>
      </div>

      {/* Error Message */}
      {error && (
        <div className="alert alert-error mb-4">
          <div>
            <span>{error}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <div className="space-y-2">
          <label htmlFor="newTitle" className="text-sm font-semibold text-gray-700">Нэр</label>
          <input
            id="newTitle"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="input input-bordered w-full"
            type="text"
            placeholder="Бичих"
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label htmlFor="newImage" className="text-sm font-semibold text-gray-700">Зураг</label>
          <input
            id="newImage"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            className="input input-bordered w-full"
            type="text"
            placeholder="/images/1.jpg"
          />
        </div>

        {/* Age Rating */}
        <div className="space-y-2">
          <label htmlFor="newAge" className="text-sm font-semibold text-gray-700">Нас</label>
          <input
            id="newAge"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className="input input-bordered w-full"
            type="number"
            placeholder="1"
          />
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label htmlFor="newType" className="text-sm font-semibold text-gray-700">Төрөл</label>
          <input
            id="newType"
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="input input-bordered w-full"
            type="text"
            placeholder="Бичих"
          />
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label htmlFor="newDuration" className="text-sm font-semibold text-gray-700">Үргэлжлэх хугацаа (минут)</label>
          <input
            id="newDuration"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            className="input input-bordered w-full"
            type="text"
            placeholder="Бичих"
          />
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label htmlFor="newStartDate" className="text-sm font-semibold text-gray-700">Дэлгэцээр гарах өдөр</label>
          <input
            id="newStartDate"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            className="input input-bordered w-full"
            type="date"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="newDescription" className="text-sm font-semibold text-gray-700">Тайлбар</label>
          <textarea
            id="newDescription"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Бичих"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn btn-primary w-full mt-4 ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Adding Coming..." : "Нэмэх"}
        </button>
      </form>
    </div>
  );
}
