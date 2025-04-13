import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [form, setForm] = useState({ username: "", password: "" }); // ✅ using username
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("signin/", form);
      localStorage.setItem("token", res.data.access);
      alert("Signin success");
      navigate("/services");
    } catch {
      alert("Signin failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
      <input type="text" placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} className="input" />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} className="input" />
      <button className="btn">Signin</button>
    </form>
  );
}
