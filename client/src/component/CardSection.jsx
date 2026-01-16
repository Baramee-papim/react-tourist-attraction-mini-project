function CardSection() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6">
        {/* ภาพหลักทางซ้าย */}
        <div className="md:w-1/2 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
            alt="เกาะช้าง"
            className="w-full h-64 md:h-full object-cover rounded-lg"
          />
        </div>

        {/* เนื้อหาทางขวา */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            {/* หัวข้อ */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
              คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!
            </h2>

            {/* คำอธิบาย */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทํากิจกรรมต่าง ๆ เช่น
              เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างก่องป...
            </p>

            {/* ลิงก์อ่านต่อ */}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
            >
              อ่านต่อ
            </a>

            {/* แท็ก */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-blue-600 underline text-sm">หมวด</span>
              <span className="text-blue-600 underline text-sm">เกาะ</span>
              <span className="text-blue-600 underline text-sm">ทะเล</span>
              <span className="text-blue-600 underline text-sm">จุดชมวิว</span>
              <span className="text-blue-600 underline text-sm">ธรรมชาติ</span>
              <span className="text-blue-600 underline text-sm">และ ตราด</span>
            </div>
          </div>

          {/* ภาพย่อยและไอคอน */}
          <div className="flex items-center justify-between mt-4">
            {/* ภาพย่อย 3 ภาพ */}
            <div className="flex gap-2 flex-1">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop"
                alt="ชายหาด"
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop"
                alt="น้ำตก"
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop"
                alt="ทะเล"
                className="w-20 h-20 object-cover rounded-lg shrink-0"
              />
            </div>

            {/* ไอคอนลิงก์ */}
            <div className="ml-4">
              <button className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-50 transition-colors">
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
    </div>
  );
}

export default CardSection;
