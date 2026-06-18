import homePreview from "../assets/home-preview.png";
import pricingPreview from "../assets/pricing-preview.png";

function HeatmapCanvas({ points, pageUrl }) {
  const previewImage =
    pageUrl === "/pricing"
      ? pricingPreview
      : homePreview;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative rounded-3xl shadow-2xl border overflow-hidden bg-white">

        {/* Browser Header */}
        <div className="bg-gray-100 border-b px-4 py-3 flex items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-white border rounded-lg px-4 py-1 text-sm text-gray-500 min-w-[250px] text-center">
              https://insightflow-demo.com{pageUrl}
            </div>
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative bg-gray-50 p-4">
          <img
            src={previewImage}
            alt="Website Preview"
            className="w-full rounded-xl border shadow-sm"
          />

          {/* Heatmap Overlay */}
          <div className="absolute inset-0">
            {points.map((point, index) => (
              <div
                key={index}
                title={`(${point.x}, ${point.y})`}
                className="absolute"
                style={{
                  left: `${point.x}px`,
                  top: `${point.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Outer Glow */}
                <div className="absolute w-24 h-24 bg-red-500 opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                {/* Middle Glow */}
                <div className="absolute w-16 h-16 bg-red-500 opacity-10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>

                {/* Inner Glow */}
                <div className="absolute w-10 h-10 bg-red-500 opacity-20 rounded-full blur-md -translate-x-1/2 -translate-y-1/2"></div>

                {/* Center Point */}
                <div className="relative w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeatmapCanvas;