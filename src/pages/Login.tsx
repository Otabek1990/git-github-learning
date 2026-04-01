import { useState } from "react";

type FormData = {
  phone: string;
  password: string;
};

export default function Login() {
  const [form, setForm] = useState<FormData>({
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h2>


        <input
          type="text"
          name="phone"
          placeholder="Telefon"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />


        <input
          type="password"
          name="password"
          placeholder="Parol"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
        />


        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg text-white font-semibold"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}