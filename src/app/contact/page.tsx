import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "문의하기 | Hirata Korea Technology",
  description: "Hirata Korea Technology에 문의하세요. 제품 문의, 기술 지원, 사업 제휴 등 다양한 문의를 받고 있습니다.",
};

export default function ContactPage() {
  // 회사 연락처 정보
  const contactInfo = {
    phone: "02-1234-5678",
    email: "info@hirata-kr.com",
    address: "서울특별시 강남구 테헤란로 123 히라타빌딩 8층",
    businessHours: "평일 09:00 - 18:00 (공휴일 제외)",
  };

  // 지사 정보
  const officeLocations = [
    {
      name: "서울 본사",
      address: "서울특별시 강남구 테헤란로 123 히라타빌딩 8층",
      phone: "02-1234-5678",
      email: "info@hirata-kr.com",
    },
    {
      name: "부산 지사",
      address: "부산광역시 해운대구 센텀중앙로 97 센텀스카이비즈 27층",
      phone: "051-987-6543",
      email: "busan@hirata-kr.com",
    },
    {
      name: "대구 지사",
      address: "대구광역시 동구 동대구로 489 대구무역회관 15층",
      phone: "053-456-7890",
      email: "daegu@hirata-kr.com",
    },
  ];

  // 자주 묻는 질문
  const faqs = [
    {
      question: "제품 견적은 어떻게 요청하나요?",
      answer: "제품 견적은 문의 양식에서 '제품 구매'를 선택하여 요청하시거나, 영업팀(sales@hirata-kr.com)으로 직접 연락주시기 바랍니다.",
    },
    {
      question: "기술 지원은 어떻게 받을 수 있나요?",
      answer: "기술 지원은 문의 양식에서 '기술 지원'을 선택하여 요청하시거나, 고객지원센터(02-1234-5679)로 연락주시면 신속하게 도움을 드립니다.",
    },
    {
      question: "방문 상담도 가능한가요?",
      answer: "네, 방문 상담도 가능합니다. 원활한 상담을 위해 사전에 예약해 주시기 바랍니다. 예약은 문의 양식 또는 전화로 가능합니다.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">문의하기</h1>
            <p className="text-xl text-blue-100 mb-8">
              Hirata Korea Technology에 문의하세요. 제품 문의, 기술 지원, 사업 제휴 등 
              다양한 문의에 대해 빠르고 정확한 답변을 드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 문의 양식 및 연락처 정보 섹션 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* 연락처 정보 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">전화</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">이메일</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">주소</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">업무 시간</h3>
                      <p className="text-gray-600">{contactInfo.businessHours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">소셜 미디어</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 문의 양식 */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">찾아오시는 길</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology 본사 및 지사 위치를 확인하세요.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="h-96 w-full relative">
              {/* 실제 구현 시 Google Maps 또는 Kakao Maps API를 사용하여 지도를 표시합니다 */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">지도가 표시됩니다</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              문의하기 전에 자주 묻는 질문을 확인해보세요.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Q. {faq.question}</h3>
                  <p className="text-gray-600">A. {faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">빠른 답변이 필요하신가요?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            급한 문의사항은 고객지원센터로 전화주세요. 
            전문 상담원이 신속하게 도와드립니다.
          </p>
          <div className="inline-block bg-white text-blue-700 font-bold text-2xl px-8 py-4 rounded-lg">
            02-1234-5679
          </div>
        </div>
      </section>
    </div>
  );
}