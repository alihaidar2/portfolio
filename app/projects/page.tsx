export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center mt-16">
      {/* Title */}
      <h1 className="text-5xl font-bold animate-fade-in">
        My <span className="text-blue-400">Projects</span>
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        Here are some of the projects I’ve worked on, showcasing my skills in
        full-stack development, data engineering, and AI-driven solutions.
      </p>

      {/* Placeholder for Future Projects */}
      <div className="mt-6 flex flex-col space-y-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-xl font-semibold text-blue-400">Project 1</h2>
          <p className="text-gray-300 mt-2">Description of project 1.</p>
        </div>
      </div>
    </div>
  );
}
