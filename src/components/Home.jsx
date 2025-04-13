// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-teal-700">Welcome to SangamSoftSol</h1>
      <div className="space-x-4">
        <Link to="/signup" className="btn">Signup</Link>
        <Link to="/signin" className="btn">Signin</Link>
        <Link to="/userform" className="btn">User Form</Link>
      </div>
    </div>
  );
}
