
import React from "react";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-500">Портфолио</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="bg-blue-800 h-24 rounded-xl flex items-center justify-center text-white">
            Фото {i + 1}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl mt-6 text-blue-400">Мы создаем:</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Веб-сайты под любые задачи</li>
          <li>Лендинги, интернет-магазины, кастомные CMS</li>
          <li>Панели управления для серверов WoW</li>
        </ul>
      </div>
    </div>
  );
}
