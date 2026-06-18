import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function SessionCard({ session }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Session
        </p>

        <h3 className="font-semibold break-all">
          {session.sessionId.length > 20
  ? `${session.sessionId.slice(0, 8)}...${session.sessionId.slice(-4)}`
  : session.sessionId}
        </h3>
      </div>

      <div className="mb-6 flex gap-2">
        <p className="text-sm text-gray-500 mb-4">
  Last Active:
  {" "}
  {formatDistanceToNow(
    new Date(session.lastActivity),
    { addSuffix: true }
  )}
</p>
  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
    {session.eventCount} Events
  </span>

  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
    Active
  </span>
</div>

      <Link
        to={`/session/${session.sessionId}`}
        className="text-blue-600 font-medium hover:text-blue-800"
      >
        View Journey →
      </Link>
    </div>
  );
}

export default SessionCard;