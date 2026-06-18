import { Link, useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-sm border px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InsightFlow
            </h1>

            <div className="flex gap-8">
              <Link
                to="/"
                className={`font-medium ${
                  location.pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Dashboard
              </Link>

              <Link
                to="/heatmap"
                className={`font-medium ${
                  location.pathname === "/heatmap"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Heatmap
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-10">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;