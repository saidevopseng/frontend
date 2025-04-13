import { useState } from "react";
import api from "../api";

export default function UserForm() {
  const [form, setForm] = useState({
    name: "", area_of_interest: "", email: "", phone: "", message: "", wants_whatsapp: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("user-form/", form);
      alert("Submitted successfully");
    } catch {
      alert("Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-2">
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} className="input"/>
      <input placeholder="Interest" onChange={e => setForm({...form, area_of_interest: e.target.value})} className="input"/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} className="input"/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} className="input"/>
      <textarea placeholder="Message" onChange={e => setForm({...form, message: e.target.value})} className="input"/>
      {/* <label><input type="checkbox" onChange={e => setForm({...form, wants_whatsapp: e.target.checked})}/> WhatsApp notification</label> */}
      <button className="btn">Submit</button>
    </form>
  );
}
