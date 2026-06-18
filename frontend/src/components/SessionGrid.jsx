import SessionCard from "./SessionCard";

function SessionGrid({ sessions }) {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          User Sessions
        </h2>

        <p className="text-gray-500">
          Explore visitor journeys and activity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {sessions.length === 0 && (
    <div className="bg-white rounded-3xl p-10 text-center col-span-3">
      No sessions found.
    </div>
  )}

  {sessions.map((session) => (
    <SessionCard
      key={session.sessionId}
      session={session}
    />
  ))}
</div>
      </div>
    
  );
}

export default SessionGrid;