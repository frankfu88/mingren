"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw
} from "react-icons/fa";

export default function Home() {
  const router = useRouter(); // ✅ 用於導航到獨立頁面
  
  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            名仁動物醫院位於屏東市中心，由一群熱愛動物、經驗豐富的獸醫師團隊所創立，致力於提供細緻、專業且具溫度的寵物醫療服務。院內醫師長期投入犬貓臨床照護，擅長內外科、心臟超音波、急重症處理及預防醫學等多元領域。
            <br /><br />
            我們相信，醫療不該只是治療，更是一種理解與陪伴。名仁以「仁心仁術」為核心理念，關心毛孩健康，也重視與飼主的溝通與信任，力求每一次診療都能讓飼主安心、讓毛孩放鬆。
            <br /><br />
            醫院配備先進設備，包括數位X光、心臟與腹部超音波、全自動血液檢驗儀、麻醉監控系統，以及犬貓分離住院區，確保診療品質與動物安全。服務項目涵蓋一般診療、健康檢查、疫苗注射、結紮手術、皮膚病治療、慢性病追蹤與急診處理等。
            <br /><br />
            名仁動物醫院採預約優先制度，減少等待時間，提升就診效率。我們也提供夜間診療，陪伴每一位毛孩度過健康的每一天。
            <br /><br />
            在名仁，我們不只是醫療團隊，更是您與毛孩生命旅程中的守護者與夥伴，期待與您一同見證毛孩的成長與幸福。
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
      {/* <section id="director" className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
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
      </section> */}

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {[
            {
              label: "急診服務",
              treatments: ["我們提供緊急急救與急診服務，隨時隨地照顧您寵物的健康需求。"],
            },
            {
              label: "一般健康檢查",
              treatments: ["定期的健康檢查是保持寵物健康的關鍵，為您的寵物進行全面的檢查與健康建議。"],
            },
            {
              label: "手術與內外科服務",
              treatments: ["我們配備專業的手術團隊，為寵物提供各種外科手術和內科治療。"],
            },
            {
              label: "牙科護理",
              treatments: ["牙齒健康與整體健康息息相關，服務包括牙齒檢查、清潔和治療。"],
            },
            {
              label: "住院治療",
              treatments: ["需要更長期觀察和治療的病例，提供舒適的住院環境，確保寵物獲得良好的照顧。"],
            },
            {
              label: "結紮手術",
              treatments: ["結紮手術有助於控制寵物的繁殖，同時帶來健康和行為上的好處。"],
            },
            {
              label: "預防注射",
              treatments: ["定期的預防注射是防範常見疾病的有效方式。"],
            },
            {
              label: "驅蟲治療",
              treatments: ["我們提供各種驅蟲產品和治療方案，確保寵物免受寄生蟲的困擾。"],
            },
            {
              label: "晶片植入",
              treatments: ["為您的寵物提供獨特的身份識別碼，以增加尋找失踪寵物的成功率。"],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaPaw className="text-yellow-500" /> {service.label}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mt-4">
                {service.treatments.map((treatment, i) => (
                  <li key={i}>{treatment}</li>
                ))}
              </ul>
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
              地址：900屏東縣屏東市仁愛路7號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：08-7512022
            </p>
            {/* <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@dyi0676c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @dyi0676c
              </a>
            </p> */}
          </div>

          {/* 門診時間 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg text-gray-800">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-4">門診時間</h3>
              <p className="leading-relaxed mb-1">早上 9 點 至 中午 12 點</p>
              <p className="leading-relaxed mb-1">下午 2 點 至 晚上 6 點</p>
              <p className="leading-relaxed mb-1">晚上 7 點 至 晚上 9 點，<span className="font-semibold">急診：</span>晚上 9 點 ~ 11 點</p>
              <p className="leading-relaxed mt-4 text-red-700 font-bold">
                禮拜三下午 4 點後休診、晚上休診
              </p>
            </div>
          </div>

        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 名仁動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.615667599654!2d120.49100179999998!3d22.668113899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1744823847a9%3A0xd80774b4e42c060!2z5ZCN5LuB5YuV54mp6Yar6Zmi772c5aSc6ZaT5a-154mp5oCl6Ki6LOiyk-eLl-e1kOe0rizpqYXon7Is5qSN5YWl5pm254mH!5e0!3m2!1szh-TW!2stw!4v1750127951127!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
