"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditComingForm({
  id,
  title,
  image,
  age,
  type,
  duration,
  startDate,
  description,
}) {
  const [newTitle, setNewTitle] = useState(title || "");
  const [newImage, setNewImage] = useState(image || "");
  const [newAge, setNewAge] = useState(age || "");
  const [newType, setNewType] = useState(type || "");
  const [newDuration, setNewDuration] = useState(duration || "");
  const [newStartDate, setNewStartDate] = useState(startDate || "");
  const [newDescription, setNewDescription] = useState(description || "");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/comings/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newImage,
          newAge,
          newType,
          newDuration,
          newStartDate,
          newDescription,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Movie");
      }
      router.refresh();
      router.push("/comings");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Кино засах</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">

        {/* Title */}
        <div className="space-y-2">
          <label htmlFor="newTitle" className="text-sm font-semibold text-gray-700">Нэр</label>
          <input
            id="newTitle"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter movie title"
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label htmlFor="newImage" className="text-sm font-semibold text-gray-700">Зураг</label>
          <input
            id="newImage"
            onChange={(e) => setNewImage(e.target.value)}
            value={newImage}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter image URL"
          />
        </div>

        {/* Age Rating */}
        <div className="space-y-2">
          <label htmlFor="newAge" className="text-sm font-semibold text-gray-700">Нас</label>
          <input
            id="newAge"
            onChange={(e) => setNewAge(e.target.value)}
            value={newAge}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter age rating"
          />
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label htmlFor="newType" className="text-sm font-semibold text-gray-700">Төрөл</label>
          <input
            id="newType"
            onChange={(e) => setNewType(e.target.value)}
            value={newType}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter movie type"
          />
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label htmlFor="newDuration" className="text-sm font-semibold text-gray-700">Үргэлжлэх хугацаа (минут)</label>
          <input
            id="newDuration"
            onChange={(e) => setNewDuration(e.target.value)}
            value={newDuration}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter movie duration"
          />
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label htmlFor="newStartDate" className="text-sm font-semibold text-gray-700">Дэлгэцээр гарах өдөр</label>
          <input
            id="newStartDate"
            onChange={(e) => setNewStartDate(e.target.value)}
            value={newStartDate}
            className="input input-bordered w-full"
            type="date"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="newDescription" className="text-sm font-semibold text-gray-700">Тайлбар</label>
          <textarea
            id="newDescription"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Enter a brief description"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-4">
          Update Coming Movie
        </button>
      </form>
    </div>
  );
}
