
import React from "react";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-blue-500">Связаться с нами</h1>
      <form className="grid gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Имя" className="p-2 rounded bg-[#101725]" />
        <input type="email" placeholder="Email" className="p-2 rounded bg-[#101725]" />
        <textarea placeholder="Сообщение" className="p-2 rounded bg-[#101725]"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded">Отправить</button>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-blue-300 text-center">
        {["Telegram", "Instagram", "TikTok", "Discord", "Email", "Телефон", "Skype", "Viber", "WhatsApp"].map((contact, i) => (
          <div key={i} className="bg-[#101725] p-2 rounded">{contact}</div>
        ))}
      </div>
    </div>
  );
}
