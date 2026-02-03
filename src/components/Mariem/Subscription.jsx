import React, { useState } from "react";

const Subscription = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      description: "Enjoy an extensive library of movies and shows.",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
    },
    {
      name: "Standard Plan",
      description: "Access to more content including new releases.",
      monthlyPrice: 12.99,
      yearlyPrice: 129.99,
    },
    {
      name: "Premium Plan",
      description: "All new releases + offline viewing.",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
    },
  ];

  return (
    <>
      <section className="py-16 px-6 max-w-7xl mx-auto text-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Choose the plan that's right for you</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences.
            </p>
          </div>

          <div className="inline-flex border border-neutral-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 text-sm font-medium transition ${
                billing === "monthly"
                  ? "bg-neutral-800 text-white"
                  : "text-gray-400 hover:bg-neutral-800/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 text-sm font-medium transition ${
                billing === "yearly"
                  ? "bg-neutral-800 text-white"
                  : "text-gray-400 hover:bg-neutral-800/50"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-neutral-800 p-6 rounded-2xl flex flex-col justify-between transform transition hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/20"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <p className="text-2xl font-bold mb-6">
                  ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  <span className="text-sm text-gray-400">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex-1 py-2 border border-neutral-700 rounded-lg transition hover:bg-neutral-700">
                  Start Free Trial
                </button>
                <button className="flex-1 py-2 bg-red-600 rounded-lg transition hover:bg-red-700">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-white">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 text-sm sm:text-base text-gray-300">
            <thead className="bg-neutral-900 text-white">
              <tr>
                <th className="py-4 px-4 text-left">Features</th>
                <th className="py-4 px-4 text-left">Basic</th>
                <th className="py-4 px-4 text-left">Standard</th>
                <th className="py-4 px-4 text-left">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "$9.99/Month", "$12.99/Month", "$14.99/Month"],
                [
                  "Content",
                  "Access to a wide selection of movies and shows, including some new releases.",
                  "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
                  "Access to the widest selection of movies and shows, including all new releases and offline viewing.",
                ],
                ["Devices", "Watch on 1 device", "Watch on 2 devices", "Watch on 4 devices"],
                ["Free Trial", "7 Days", "7 Days", "7 Days"],
                ["Cancel Anytime", "Yes", "Yes", "Yes"],
                ["HDR", "No", "Yes", "Yes"],
                ["Dolby Atmos", "No", "Yes", "Yes"],
                ["Ad-Free", "No", "Yes", "Yes"],
                ["Offline Viewing", "No", "Yes, for select titles", "Yes, for all titles"],
                ["Family Sharing", "No", "Yes, up to 5 members", "Yes, up to 6 members"],
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-gray-800 hover:bg-neutral-800/40 transition">
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="py-3 px-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="relative text-white py-16 px-6 max-w-7xl mx-auto mb-5">
        <div className="relative border-2 border-gray-800 bg-[url('/src/assets/pic1.png')] bg-center bg-cover bg-no-repeat h-[25vh] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-10">
            <div>
              <h2 className="text-3xl font-bold">Start your free trial today!</h2>
              <p className="text-gray-400 mt-2 max-w-lg">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition">
              Start a Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
