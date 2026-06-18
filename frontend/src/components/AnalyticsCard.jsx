function AnalyticsCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border">
      <p className="text-sm uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </h2>
    </div>
  );
}

export default AnalyticsCard;