import Link from "next/link";
import Image from "next/image";

export default function DashboardProjects() {
  const dashboards = [
    {
      dashboardTitle: "Balaji Foods Sales Analysis",
      dashboardDescription:
        "A deep dive into sales patterns, product insights, and payment trends from Balaji Foods' sales data.",
      thumbnailUrl: "/balaji/product-insights.png",
      link: "/projects/balaji",
    },
    {
      dashboardTitle: "Superstore Sales Analysis",
      dashboardDescription:
        "A deep dive into sales patterns, product insights, and payment trends from Superstore's sales data.",
      thumbnailUrl: "/superstore/superstore_sales.png",
      link: "/projects/superstore",
    },
  ];
  return (
    <>
      <p className="text-gray-400 max-w-3xl text-center mx-auto mt-4 mb-8 italic">
        Interactive analytics and UI-based tools for monitoring, reporting, and
        data visualization. These projects focus on data dashboard development,
        API integration, and creating intuitive interfaces for end users and
        small businesses.
      </p>
      {dashboards.map((dashboard, index) => (
        <div key={index} className="w-full">
          <Link href={dashboard.link}>
            <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer max-w-4xl mx-auto ">
              {/* Image (30%) */}
              <div className="w-1/4 pr-4 hidden sm:block">
                <Image
                  src={dashboard.thumbnailUrl}
                  alt="Dashboard Thumbnail"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded object-cover"
                />
              </div>

              {/* Text (70%) */}
              <div className="w-full sm:w-2/3 text-center sm:text-left pl-2">
                <h2 className="text-3xl font-semibold text-emerald-400 mb-2">
                  {dashboard.dashboardTitle}
                </h2>
                <p className="text-gray-300 text-md">
                  {dashboard.dashboardDescription}
                </p>
              </div>
            </div>
          </Link>

          {index < dashboards.length - 1 && (
            <hr className="my-7 border-t border-gray-500 w-full max-w-4xl mx-auto" />
          )}
        </div>
      ))}
    </>
  );
}
