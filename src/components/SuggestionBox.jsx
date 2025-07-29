import React from "react";

const suggestions = [
  { name: "Bikash Thapa", title: "Web Developer at Bajra", avatar: "https://i.pravatar.cc/150?img=9" },
  { name: "Sahara Karki", title: "Graphic Designer at Fusemachines", avatar: "https://i.pravatar.cc/150?img=10" },
  { name: "Ritesh Bhattarai", title: "Full Stack Intern", avatar: "https://i.pravatar.cc/150?img=11" },
];

const news = [
  "React 19 is launching soon!",
  "Nepal Tech Summit 2025 Announced",
  "AI in Education: What's Next?",
];

const companies = [
  {
    name: "Fusemachines",
    tagline: "AI solutions provider",
    logo: "https://logo.clearbit.com/fusemachines.com",
  },
  {
    name: "Leapfrog Technology",
    tagline: "Digital innovation partner",
    logo: "https://logo.clearbit.com/lftechnology.com",
  },
  {
    name: "Deerwalk Inc.",
    tagline: "Healthcare analytics company",
    logo: "https://logo.clearbit.com/deerwalk.com",
  },
  {
    name: "CloudFactory",
    tagline: "Remote workforce solutions",
    logo: "https://logo.clearbit.com/cloudfactory.com",
  },
];

function SuggestionBox() {
  return (
    <div className="space-y-4 w-full">
      {/* Suggested users */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">Add to your feed</h3>
        {suggestions.map((user, idx) => (
          <div key={idx} className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.title}</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm font-semibold hover:underline">+ Follow</button>
          </div>
        ))}
      </div>

      {/* News */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">LinkedIn News</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          {news.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Companies to follow */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">Companies you might like</h3>
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img src={company.logo} alt={company.name} className="w-8 h-8 rounded" />
              <div>
                <p className="text-sm font-medium">{company.name}</p>
                <p className="text-xs text-gray-500">{company.tagline}</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm font-semibold hover:underline">+ Follow</button>
          </div>
        ))}
      </div>

      {/* Optional ad */}
      <div className="bg-white rounded-lg shadow-sm p-4 text-center text-xs text-gray-400">
        <p>Ad • Join ReactNepal Community</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Ad"
          className="mx-auto w-12 mt-2"
        />
      </div>
    </div>
  );
}

export default SuggestionBox;