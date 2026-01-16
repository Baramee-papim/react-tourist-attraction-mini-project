import { useEffect, useState } from "react";
import axios from "axios";

function CardSection({ keywords }) {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const normalizedKeywords = (keywords ?? "").trim();

  useEffect(() => {
    let cancelled = false;

    async function fetchTrips() {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:4001/trips", {
          params: {
            keywords: normalizedKeywords || "", // ส่ง empty string ถ้าไม่มี keywords
          },
        });

        if (!cancelled) {
          setTrips(res.data?.data ?? []);
          console.log("ได้รับข้อมูล:", res.data?.data?.length ?? 0, "รายการ");
        }
      } catch (e) {
        if (!cancelled) {
          console.error("Error fetching trips:", e);
          const errorMessage =
            e.response?.data?.message ||
            e.message ||
            "เช็คว่า server รันที่พอร์ต 4001";
          setError(`โหลดข้อมูลไม่สำเร็จ: ${errorMessage}`);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchTrips();
    return () => {
      cancelled = true;
    };
  }, [normalizedKeywords]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-gray-600">กำลังโหลด...</div>
    );
  }

  if (error) {
    return <div className="max-w-6xl mx-auto p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {trips.map((trip) => (
        <div
          key={trip.eid}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6"
        >
          {/* ภาพหลักทางซ้าย */}
          <div className="md:w-1/2 shrink-0">
            <img
              src={trip.photos?.[0]}
              alt={trip.title}
              className="w-full h-64 md:h-96 max-h-82 object-cover rounded-lg"
            />
          </div>

          {/* เนื้อหาทางขวา */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              {/* หัวข้อ */}
              <a
                href={trip.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight hover:underline"
              >
                {trip.title}
              </a>

              {/* คำอธิบาย */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {trip.description && trip.description.length > 100
                  ? trip.description.substring(0, 100) + "..."
                  : trip.description}
              </p>

              {/* ลิงก์อ่านต่อ */}
              <a
                href={trip.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
              >
                อ่านต่อ
              </a>

              {/* แท็ก */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="flex items-center">หมวด</span>
                {(trip.tags ?? []).map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="text-blue-600 hover:bg-blue-50 transition-colors text-sm border-2 border-solid rounded-full p-1  "
                    onClick={() => {
                      navigator.clipboard?.writeText(tag);
                    }}
                    title="คลิกเพื่อคัดลอกแท็ก"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* ภาพย่อยและไอคอน */}
            <div className="flex items-center justify-between mt-4">
              {/* ภาพย่อย 3 ภาพ */}
              <div className="flex gap-2 flex-1">
                {(trip.photos ?? []).slice(1, 4).map((photoUrl, index) => {
                  const imageKey = trip.eid + "-" + index;
                  const altText = trip.title + " " + (index + 2);

                  return (
                    <img
                      key={imageKey}
                      src={photoUrl}
                      alt={altText}
                      className="w-20 h-20 max-w-20 max-h-20 object-cover rounded-lg shrink-0"
                    />
                  );
                })}
              </div>

              {/* ไอคอนลิงก์ */}
              <div className="ml-4">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors cursor-pointer"
                  aria-label="คัดลอกลิงก์"
                  onClick={() => {
                    navigator.clipboard?.writeText(trip.url);
                  }}
                  title="คลิกเพื่อคัดลอกลิงก์"
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {trips.length === 0 && (
        <div className="text-center text-gray-500">ไม่พบผลลัพธ์</div>
      )}
    </div>
  );
}

export default CardSection;
