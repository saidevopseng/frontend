import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("signup/", form);
      alert("Signup successful!");
      navigate("/signin");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
      <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} className="input"/>
      <input type="text" placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} className="input"/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} className="input"/>
      <button className="btn">Signup</button>
    </form>
  );
}
