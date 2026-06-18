import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

function SessionDetails() {
  const { sessionId } = useParams();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get(
        `/events/sessions/${sessionId}`
      );

      setEvents(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Session Journey
        </h1>

        <p className="text-gray-500 mt-2">
          Session ID: {sessionId}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        {loading ? (
          <p>Loading...</p>
        ) : events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          <div>
            {events.map((event, index) => (
              <div
                key={event._id}
                className="relative pl-10 pb-8"
              >
                {/* Timeline Line */}
                {index !== events.length - 1 && (
                  <div className="absolute left-[5px] top-4 h-full w-[2px] bg-gray-200"></div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500"></div>

                {/* Event Card */}
                <div className="bg-gray-50 rounded-lg p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.eventType === "page_view"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {event.eventType.toUpperCase()}
                    </span>

                    <span className="text-xs text-gray-500">
                      {new Date(
                        event.timestamp
                      ).toLocaleString()}
                    </span>
                  </div>

                  <p className="font-medium">
                    {event.pageUrl}
                  </p>

                  {event.clickData?.x !== undefined && (
                    <div className="mt-2 text-sm text-gray-600">
                      Click Position:
                      <span className="font-medium">
                        {" "}
                        ({event.clickData.x},{" "}
                        {event.clickData.y})
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default SessionDetails;