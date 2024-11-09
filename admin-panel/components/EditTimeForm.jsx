"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTimeForm({
  id,
  title,
  image,
  date,
  branch1,
  time1,
  branch2,
  time2,
  branch3,
  time3,
  branch4,
  time4,
  branch5,
  time5,
  branch6,
  time6,
}) {
  const [newTitle, setNewTitle] = useState(title || "");
  const [newImage, setNewImage] = useState(image || "");
  const [newDate, setNewDate] = useState(date || "");
  const [newBranch1, setNewBranch1] = useState(branch1 || "");
  const [newTime1, setNewTime1] = useState(time1 || "");
  const [newBranch2, setNewBranch2] = useState(branch2 || "");
  const [newTime2, setNewTime2] = useState(time2 || "");
  const [newBranch3, setNewBranch3] = useState(branch3 || "");
  const [newTime3, setNewTime3] = useState(time3 || "");
  const [newBranch4, setNewBranch4] = useState(branch4 || "");
  const [newTime4, setNewTime4] = useState(time4 || "");
  const [newBranch5, setNewBranch5] = useState(branch5 || "");
  const [newTime5, setNewTime5] = useState(time5 || "");
  const [newBranch6, setNewBranch6] = useState(branch6 || "");
  const [newTime6, setNewTime6] = useState(time6 || "");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/times/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newImage,
          newDate,
          newBranch1,
          newTime1,
          newBranch2,
          newTime2,
          newBranch3,
          newTime3,
          newBranch4,
          newTime4,
          newBranch5,
          newTime5,
          newBranch6,
          newTime6,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Movie");
      }
      router.refresh();
      router.push("/times");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Update Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="newTitle" className="block text-sm font-medium">Movie Title</label>
          <input
            id="newTitle"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="input input-bordered input-accent w-full"
            type="text"
            placeholder="Enter movie title"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="newImage" className="block text-sm font-medium">Image URL</label>
          <input
            id="newImage"
            onChange={(e) => setNewImage(e.target.value)}
            value={newImage}
            className="input input-bordered input-accent w-full"
            type="text"
            placeholder="Enter image URL"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="newDate" className="block text-sm font-medium">Date</label>
          <input
            id="newDate"
            onChange={(e) => setNewDate(e.target.value)}
            value={newDate}
            className="input input-bordered input-accent w-full"
            type="text"
            placeholder="Enter the date"
          />
        </div>

        {[...Array(6)].map((_, index) => {
          const branchState = `newBranch${index + 1}`;
          const timeState = `newTime${index + 1}`;
          return (
            <div key={index} className="space-y-2">
              <label htmlFor={`branch${index + 1}`} className="block text-sm font-medium">Branch {index + 1}</label>
              <input
                id={`branch${index + 1}`}
                onChange={(e) => {
                  const updatedBranch = e.target.value;
                  eval(`set${branchState.charAt(0).toUpperCase() + branchState.slice(1)}(updatedBranch)`);
                }}
                value={eval(branchState)}
                className="input input-bordered input-accent w-full"
                type="text"
                placeholder={`Enter branch ${index + 1}`}
              />

              <label htmlFor={`time${index + 1}`} className="block text-sm font-medium">Time {index + 1}</label>
              <input
                id={`time${index + 1}`}
                onChange={(e) => {
                  const updatedTime = e.target.value;
                  eval(`set${timeState.charAt(0).toUpperCase() + timeState.slice(1)}(updatedTime)`);
                }}
                value={eval(timeState)}
                className="input input-bordered input-accent w-full"
                type="text"
                placeholder={`Enter time ${index + 1}`}
              />
            </div>
          );
        })}

        <button className="btn btn-primary w-full">Update Movie</button>
      </form>
    </div>
  );
}
