import { Link, useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Heatmap", path: "/heatmap" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      <nav className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-sm border px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InsightFlow
            </h1>

            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 pb-10">
        {children}
      </main>

      <footer className="border-t bg-white/70 backdrop-blur mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-semibold">
              InsightFlow Analytics
            </h3>

            <p className="text-sm text-gray-500">
              Track sessions, clicks and user journeys.
            </p>
          </div>

          <div className="text-sm text-gray-500 mt-3 md:mt-0">
            Built by Yashasvi Tekriwal • DTU
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;