export default function Services() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Our Services</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>💻 Technology Training</li>
        <li>🛠️ IT Services to Business</li>
        <li>📚 Academic Backlog Clearance Support</li>
      </ul>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/signin";
        }}
        className="btn mt-4"
      >
        Signout
      </button>
    </div>
  );
}
