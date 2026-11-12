import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: name,
    };
    console.log(data);

    const response = await axios.get(
      "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      data,
    );

    console.log(response.data);

    setName("");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Get started
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and we'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-md shadow-orange-100 transition hover:bg-orange-600 active:scale-95"
          >
            Send Message →
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          We respect your privacy and personal information.
        </p>
      </div>
    </section>
  );
};

export default Contact;
