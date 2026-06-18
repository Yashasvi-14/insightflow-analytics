import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import HeatmapCanvas from "../components/HeatmapCanvas";
import api from "../services/api";

function HeatmapPage() {
  const [pages, setPages] = useState([]);
  const [pageUrl, setPageUrl] = useState("");
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    if (pageUrl) {
      fetchHeatmap();
    }
  }, [pageUrl]);

  const fetchPages = async () => {
    try {
      const response = await api.get(
        "/events/pages"
      );

      setPages(response.data);

      if (response.data.length > 0) {
        setPageUrl(response.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHeatmap = async () => {
    try {
      const response = await api.get(
        `/events/heatmap?pageUrl=${pageUrl}`
      );

      setPoints(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-5xl font-bold">
          Click Heatmap
        </h1>

        <p className="text-gray-500 mt-3">
          Visualize user click activity.
        </p>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Select Page
        </label>

        <select
          value={pageUrl}
          onChange={(e) =>
            setPageUrl(e.target.value)
          }
          className="bg-white border rounded-xl px-4 py-2"
        >
          {pages.map((page) => (
            <option
              key={page}
              value={page}
            >
              {page}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-semibold">
          Heatmap Statistics
        </h3>

        <p className="text-gray-500 mt-2">
          Total Clicks: {points.length}
        </p>

        <p className="text-gray-500">
          Current Page: {pageUrl}
        </p>
      </div>

      <HeatmapCanvas
  points={points}
  pageUrl={pageUrl}
/>
    </MainLayout>
  );
}

export default HeatmapPage;