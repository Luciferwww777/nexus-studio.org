
import React from "react";

export default function BuildsPage() {
  const versions = ["2.4.3", "3.3.5", "4.3.4", "5.4.8", "7.3.5", "10.2.5"];
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-500">Сборки и сайты</h1>
      <p className="text-blue-300">Все, что связано с TrinityCore, AzerothCore, Mangos, World of Warcraft.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {versions.map((ver, i) => (
          <div key={ver} className="bg-[#101725] p-4 rounded-xl">
            <div className="h-32 bg-blue-700 rounded mb-3 flex items-center justify-center text-white text-lg">
              Картинка {i+1}
            </div>
            <h2 className="text-xl font-semibold">Сборка WoW {ver}</h2>
            <p>Полный цикл настройки под ключ</p>
            <button className="mt-3 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
              Заказать сборку
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
