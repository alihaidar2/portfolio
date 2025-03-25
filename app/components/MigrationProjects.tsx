export default function MigrationProjects() {
  return (
    <>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold text-emerald-400">
          Migration Project 1
        </h2>
        <p className="text-gray-300 mt-2">
          Executed database schema migrations from legacy MySQL to Postgres...
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold text-emerald-400">
          Migration Project 2
        </h2>
        <p className="text-gray-300 mt-2">
          Planned & led ETL processes to unify data across multiple sources...
        </p>
      </div>
    </>
  );
}
