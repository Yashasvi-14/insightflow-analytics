import { Link } from "react-router-dom";

function SessionsTable({ sessions }) {
  return (
    <div className="bg-white rounded-xl shadow-sm mt-8 overflow-hidden">
      <div className="p-6 border-b">
        <div>
  <h2 className="text-2xl font-bold">
    User Sessions
  </h2>

  <p className="text-gray-500">
    Explore visitor journeys and activity.
  </p>
</div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4">
              Session ID
            </th>

            <th className="text-left p-4">
              Events
            </th>

            <th className="text-left p-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((session) => (
            <tr
              key={session.sessionId}
              className="border-t"
            >
              <td className="p-4">
                {session.sessionId}
              </td>

              <td className="p-4">
                {session.eventCount}
              </td>

              <td className="p-4">
                <Link
                  className="text-blue-600"
                  to={`/session/${session.sessionId}`}
                >
                  View Journey
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SessionsTable;