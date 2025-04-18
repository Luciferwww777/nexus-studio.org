
import React from "react";

export default function HomePage() {
  return (
    <div className="space-y-10 text-center">
      <h1 className="text-5xl font-bold text-blue-500 mt-6">Nexus-Studio</h1>
      <p className="text-2xl text-blue-300">Мы — будущее, мы — приоритет</p>
      <p className="max-w-2xl mx-auto text-gray-300">
        Индивидуальный подход, максимальная отдача. Мы делаем не просто сайты — мы создаем решения будущего.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[1,2,3,4,5,6].map(id => (
          <div key={id} className="bg-[#101725] p-4 rounded-xl shadow-md">
            <div className="h-32 bg-blue-800 rounded mb-2">Фото {id}</div>
            <h3 className="text-xl font-semibold">Имя {id}</h3>
            <p>Разработчик, Дизайнер</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-12 text-blue-400">
        {["Telegram", "Instagram", "TikTok", "YouTube", "Discord"].map((name, i) => (
          <a key={i} href="#" className="hover:text-blue-600">{name}</a>
        ))}
      </div>
    </div>
  );
}
