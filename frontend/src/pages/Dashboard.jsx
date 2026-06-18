import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import AnalyticsCard from "../components/AnalyticsCard";
import SessionGrid from "../components/SessionGrid";

import api from "../services/api";

function Dashboard() {
  const [sessions, setSessions] = useState([]);

  const [stats, setStats] = useState({
    totalSessions: 0,
    totalEvents: 0,
    totalClicks: 0,
  });

  useEffect(() => {
    fetchSessions();
    fetchStats();
    const interval = setInterval(() => {
    fetchSessions();
    fetchStats();
  }, 5000);

  return () => clearInterval(interval);
  }, []);

  const fetchSessions = async () => {
    try {
      const response =
        await api.get("/events/sessions");

      setSessions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStats = async () => {
    try {
      const response =
        await api.get("/events/stats");

      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="mb-12">
  <h1 className="text-6xl font-bold">
    InsightFlow Analytics
  </h1>

  <p className="text-gray-500 mt-4 text-lg">
    Track sessions, clicks and user behavior
    through a lightweight analytics platform.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard
          title="Total Sessions"
          value={stats.totalSessions}
        />

        <AnalyticsCard
          title="Total Events"
          value={stats.totalEvents}
        />

        <AnalyticsCard
          title="Total Clicks"
          value={stats.totalClicks}
        />
      </div>
      <SessionGrid sessions={sessions} />
    </MainLayout>
  );
}

export default Dashboard;