import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      );
      setAllDogs(response.data);
    };

    fetchDogs();
  }, []);

  if (allDogs.length === 0) {
    return <h1>Loading dogs...</h1>;
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Meet our lovely pets
          </p>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            All Dogs
          </h1>
          <p className="mt-3 text-gray-500">
            Explore our adorable dogs and find your perfect companion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {allDogs.map((dog) => (
            <div
              key={dog.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dog.image}
                  alt="Buddy"
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">{dog.name}</h2>
                <p className="mt-1 text-sm text-gray-500">{dog.breed}</p>
                <div className="my-5 border-t border-gray-100"></div>
                <button className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                  View {dog.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
