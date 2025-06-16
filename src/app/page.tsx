"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const servicesDetailed = [
  {
    label: "內科診療",
    treatments: [
      "一般內科診療（腸胃、皮膚、泌尿、呼吸道等常見疾病）",
      "心臟內科診療（配合高階超音波與血壓監控）",
      "腫瘤內科門診（腫瘤初步評估與追蹤）",
      "老年動物慢性病照護（腎臟、心臟、內分泌相關）",
      "雷射治療（B-CURE動物專用雷射，適用於疼痛與術後恢復）",
      "呼吸道霧化治療（SUMO超音波霧化器）"
    ]
  },
  {
    label: "外科手術",
    treatments: [
      "一般外科手術（如腫瘤切除、膿瘍清創、異物取出）",
      "母浪貓側腹微創絕育手術",
      "全身麻醉手術（配備氣體麻醉機與動物專用生理監控）",
      "牙科手術（拔牙、口腔清創）",
      "腫瘤切除手術（搭配術前影像與檢驗）",
      "術後照護與加護病房（ICU氧氣保溫系統）"
    ]
  },
  {
    label: "健康檢查與疫苗接種",
    treatments: [
      "全年齡健康檢查（建議每年定期檢查）",
      "完整血液、尿液與內分泌檢驗（IDEXX系統）",
      "心肺影像評估（X光、超音波、Vcheck免疫分析）",
      "疫苗接種（幼犬幼貓、成犬成貓定期預防針）",
      "術前健康風險評估（麻醉前生理檢查）"
    ]
  }
];

export default function Home() {
  const router = useRouter(); // ✅ 用於導航到獨立頁面
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            鈞懋動物醫院由祝偉鈞院長創立，院長畢業於國立嘉義大學獸醫學院，擁有豐富的小動物臨床經驗，曾任台北市和欣動物醫院、劍橋動物醫院、台中東南動物醫院內外科主治醫師，以及馬汀體系威爾斯分院院長，長年專注於犬貓內外科、心臟內科、牙科、腫瘤科、預防醫學與微創手術等多項領域。
            <br /><br />
            鈞懋動物醫院位於台中，致力於打造一個結合專業與溫度的獸醫空間。我們相信，每一隻毛孩都是家庭的重要成員，值得被理解、尊重與用心對待。
            <br /><br />
            從院內環境到就診流程，我們重視每個細節，只為了讓毛孩與飼主都能安心、舒適地看診。我們的團隊擁有臨床經驗與醫療熱忱，提供包括健康檢查、疫苗施打、皮膚病診療、X光與超音波影像檢查、外科手術、慢性病照護等全面服務。
            <br /><br />
            我們深知，真正的醫療不僅來自專業技術，更來自於與飼主的信任連結與充分溝通。鈞懋重視每一段互動，耐心傾聽、清楚說明，讓每一位飼主都能在診療過程中感受到被理解與被支持。
            <br /><br />
            在鈞懋動物醫院，我們用專業守護健康，用心陪伴生命旅程，成為您與毛孩最值得信賴的醫療夥伴。
          </p>
        </div>

        {/* 🔹 我們的優勢 */}
        <div className="bg-white shadow-xl rounded-xl p-8 mt-12">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 我們的優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {[
              { title: "隔離病房", description: "提供安全的隔離環境，有效防止傳染病擴散。" },
              { title: "犬貓重症ICU病房", description: "專業監護設備，24 小時照護危重動物。" },              
              { title: "諾亞高壓氧保養", description: "透過高壓氧艙提升細胞含氧量，加速術後癒合、改善炎症與慢性疼痛。" },
              { title: "寵物保險指定醫院", description: "支援多種寵物保險，減輕您的醫療負擔。" }
            ].map((advantage, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg text-center">
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
                  <FaPaw className="text-yellow-500" /> {advantage.title}
                </h3>
                <p className="mt-2 text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 院長資訊 */}
      <section id="director" className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/5">
          <Image
            src="/director.jpg"
            alt="院長"
            width={400}
            height={400}
            className="rounded-xl border-4 border-yellow-500 shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center gap-2">
            <FaPaw className="text-yellow-500" /> 院長資訊
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            院長祝偉鈞醫師畢業於國立嘉義大學獸醫學院，擁有多年小動物臨床經驗，從基礎內外科到進階專科診療，皆有深厚實力。職涯歷練橫跨北中知名院所，曾任台北市和欣動物醫院、劍橋動物醫院、台中市東南動物醫院主治獸醫，亦擔任馬汀體系威爾斯分院院長，具備豐富的實務與醫療團隊管理經驗。
            <br /><br />
            祝院長專長涵蓋犬貓內外科診療、心臟內科、腫瘤科、牙科治療、預防醫學健檢，以及母浪貓側腹微創絕育手術等，尤注重醫療的精準性與人道關懷。他始終堅信：「醫療不是單向的指導，而是與飼主攜手做出的每一個選擇。」因此在診療過程中，總是以同理與耐心聆聽每一位飼主的聲音。
            <br /><br />
            院長創立鈞懋動物醫院，正是為了實踐他對理想醫療環境的願景——一個兼具專業、信任與溫度的診療空間，讓每位毛孩在就醫的同時，也能感受到被溫柔對待的尊重與安心。
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {servicesDetailed.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaPaw className="text-yellow-500" /> {service.label}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#5A4032]" />
                ) : (
                  <FaChevronDown className="text-[#5A4032]" />
                )}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
                  {service.treatments.map((treatment, i) => (
                    <li key={i}>{treatment}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* 🔹 諾亞寵物高壓氧 - 可點擊導向 `/oxygen` */}
          <div
            onClick={() => router.push("/oxygen")}
            className="flex items-center gap-2 bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" />
            <div>
              <h3 className="text-xl font-bold text-[#5A4032]">諾亞寵物高壓氧</h3>
              <p className="text-base mt-1 text-gray-700">
                點擊了解高壓氧療法如何提升毛孩康復與健康。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 聯絡方式 */}
      <section id="contact" className="max-w-6xl mx-auto py-16 px-6 text-center bg-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 聯絡方式
        </h2>

        {/* 🔹 聯絡資訊 + 門診 & 探視時間 */}
        <div className="bg-[#E6D6CC] shadow-lg rounded-xl p-8 mt-6">
          {/* 地址 & 聯絡資訊 */}
          <div className="text-lg flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              地址：406台中市北屯區軍福十六路283號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：04-24351283
            </p>
            <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@dyi0676c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @dyi0676c
              </a>
            </p>
          </div>

          {/* 門診時間 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-2">門診時間</h3>
              <ul className="leading-relaxed">
                <li>星期一：10:00–12:30, 14:30–17:30, 18:30–21:00</li>
                <li>星期二：10:00–12:30, 14:30–17:30, 18:30–21:00</li>
                <li>星期三：10:00–12:30, 14:30–17:30, 18:30–21:00</li>
                <li>星期四：10:00–12:30, 14:30–17:30, 18:30–21:00</li>
                <li>星期五：10:00–12:30, 14:30–17:30, 18:30–21:00</li>
                <li>星期六：10:00–17:30</li>
                <li>星期日：休息</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 文志動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.9064251492778!2d120.72297829999998!3d24.175014299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469181806f6df59%3A0xfac5fc0010e4f899!2z6Yie5oeL5YuV54mp6Yar6ZmiICjniqzospPlsIjnp5HilILkuIDoiKzlhaflpJbnp5HilILlv4Poh5_ilILnmq7ohprilILohbjog4PilILniZnnp5HilILmgKXoqLrilILlgaXmqqLilILlronlr6fnhaforbfilILmsKfmsKPnl4XmiL_ilILlsIjmpa3msKPpq5TpurvphonilILpq5jlo5PmsKfilILlr7Xniankv53pmqrilILlpKflnZHli5XnianphqvpmaLmjqjolqYp!5e0!3m2!1szh-TW!2stw!4v1750060847910!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
