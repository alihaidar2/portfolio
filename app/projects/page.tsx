const projects = [
  {
    title: "Fantasy PL Stats",
    link: "https://fantasyplstats.com",
    desc: "A fantasy football data analysis app.",
  },
  {
    title: "Restaurant Data Dive",
    link: "https://github.com/yourusername/restaurant-data-dive",
    desc: "Data insights for small businesses using Databricks & AWS.",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="block p-4 bg-white shadow-md rounded-md hover:bg-gray-200 transition"
          >
            <h2 className="text-xl text-black font-semibold">
              {project.title}
            </h2>
            <p className="text-gray-600">{project.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
