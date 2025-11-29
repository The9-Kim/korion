import React from "react";

const features = [
  { id: 1, title: "Check Point.01", desc: "줄 독립형 트랙터 장착 사료 수확기" },
  { id: 2, title: "Check Point.02", desc: "풀 수거 시스템" },
  { id: 3, title: "Check Point.03", desc: "회전식 흡입 헤더" },
  { id: 4, title: "Check Point.04", desc: "험난한 지형을 위한 보조 바퀴" },
  { id: 5, title: "Check Point.05", desc: "4x4 트랜스미션 및 2가지 유형의 기어박스" },
  { id: 6, title: "Check Point.06", desc: "Kemper 헤더를 제외한 크라운 자체 제조 부품" },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Best Item</span>
          <h2 className="text-2xl font-light text-gray-500 mt-2">정밀한 수확, 강력한 성능</h2>
          <h3 className="text-3xl font-bold text-secondary-900 mt-1">KORION M-Series 포리지 하베스터</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-primary-500 group">
              <div className="w-20 h-20 rounded-full border-2 border-primary-100 flex items-center justify-center mb-4 group-hover:border-primary-500 transition-colors">
                <div className="text-center">
                  <span className="block text-primary-500 font-bold text-sm">Check</span>
                  <span className="block text-primary-500 font-bold text-sm">Point.0{feature.id}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium break-keep leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
