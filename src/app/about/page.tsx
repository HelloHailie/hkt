import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "회사소개 | Hirata Korea Technology",
  description: "Hirata Korea Technology의 기업 개요, 연혁, 비전 및 미션, 경영진 소개",
};

export default function AboutPage() {
  // 회사 연혁 데이터
  const companyHistory = [
    {
      year: "1985",
      events: [
        "Hirata Korea Technology 설립",
        "서울 강남구 첫 사무실 개설",
      ],
    },
    {
      year: "1990",
      events: [
        "첫 번째 자동화 솔루션 개발 및 출시",
        "국내 대기업과 첫 계약 체결",
      ],
    },
    {
      year: "1995",
      events: [
        "기술연구소 설립",
        "해외 시장 진출 (일본, 중국)",
      ],
    },
    {
      year: "2000",
      events: [
        "ISO 9001 인증 획득",
        "로봇 시스템 사업부 신설",
      ],
    },
    {
      year: "2005",
      events: [
        "글로벌 기업과 전략적 제휴 체결",
        "연간 매출 100억 원 달성",
      ],
    },
    {
      year: "2010",
      events: [
        "스마트 팩토리 솔루션 개발",
        "아시아 시장 확장 (베트남, 인도네시아)",
      ],
    },
    {
      year: "2015",
      events: [
        "창립 30주년 기념식 개최",
        "AI 기반 품질 관리 시스템 출시",
        "유럽 시장 진출 (독일, 프랑스)",
      ],
    },
    {
      year: "2020",
      events: [
        "디지털 트랜스포메이션 사업부 신설",
        "클라우드 기반 공장 모니터링 시스템 출시",
        "북미 시장 진출 (미국, 캐나다)",
      ],
    },
    {
      year: "2025",
      events: [
        "창립 40주년 기념",
        "차세대 자동화 솔루션 출시",
        "글로벌 15개국 지사 운영",
        "연간 매출 1000억 원 달성",
      ],
    },
  ];

  // 경영진 데이터
  const executives = [
    {
      name: "김대표",
      position: "대표이사",
      description: "30년 이상의 산업 자동화 경험을 가진 전문가로, Hirata Korea Technology의 성장을 이끌고 있습니다.",
      imageSrc: "/images/executives/ceo.jpg",
    },
    {
      name: "이기술",
      position: "기술이사",
      description: "로봇공학 박사 출신으로 혁신적인 자동화 솔루션 개발에 주력하고 있습니다.",
      imageSrc: "/images/executives/cto.jpg",
    },
    {
      name: "박영업",
      position: "영업이사",
      description: "글로벌 시장에서의 풍부한 경험을 바탕으로 회사의 해외 사업 확장을 담당하고 있습니다.",
      imageSrc: "/images/executives/sales-director.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/about-hero.jpg"
            alt="Hirata Korea Technology 회사 전경"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">회사소개</h1>
            <p className="text-xl text-blue-100">
              Hirata Korea Technology는 1985년 설립 이후 40년 가까이 자동화 기술 분야에서 
              글로벌 리더로 자리매김해왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 기업 개요 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">기업 개요</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hirata Korea Technology는 산업 자동화 및 로봇 시스템 분야의 선도적인 기업으로, 
                제조업의 디지털 혁신을 선도하고 있습니다. 우리는 최첨단 기술과 전문 지식을 바탕으로 
                고객사의 생산성 향상과 비용 절감을 지원합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                현재 전 세계 15개국에 지사를 두고 있으며, 500개 이상의 글로벌 기업과 협력하고 있습니다. 
                우리의 솔루션은 자동차, 전자, 반도체, 식품, 제약 등 다양한 산업 분야에서 활용되고 있습니다.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">40년</p>
                  <p className="text-gray-600">업계 경험</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">15개국</p>
                  <p className="text-gray-600">글로벌 지사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-600">고객사</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">250+</p>
                  <p className="text-gray-600">전문 인력</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/company-building.jpg"
                  alt="Hirata Korea Technology 본사 건물"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 비전 및 미션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">비전 및 미션</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology는 기술 혁신을 통해 더 나은 미래를 만들어 갑니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">비전</h3>
              <p className="text-lg text-gray-700">
                "글로벌 자동화 기술의 리더로서 제조업의 미래를 혁신한다"
              </p>
              <p className="mt-4 text-gray-600">
                우리는 지속적인 기술 혁신과 글로벌 시장 확장을 통해 산업 자동화 분야의 
                선도적인 기업으로 자리매김하고자 합니다. 우리의 기술이 제조업의 미래를 
                변화시키고 더 나은 세상을 만드는 데 기여할 것입니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">미션</h3>
              <p className="text-lg text-gray-700">
                "혁신적인 자동화 솔루션으로 고객의 성공을 지원한다"
              </p>
              <p className="mt-4 text-gray-600">
                우리는 최첨단 기술과 전문 지식을 바탕으로 고객의 생산성 향상과 비용 절감을 
                지원합니다. 고객 중심의 접근 방식과 끊임없는 혁신을 통해 고객의 성공을 
                함께 이루어 나갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">회사 연혁</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 성장 과정을 소개합니다.
            </p>
          </div>
          
          <div className="relative">
            {/* 타임라인 중앙선 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            {/* 연혁 아이템 */}
            {companyHistory.map((period, index) => (
              <div key={index} className="mb-12 relative">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* 연도 표시 (모바일에서는 항상 위에) */}
                  <div className="md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
                    <div className="bg-blue-600 text-white py-2 px-6 rounded-full text-xl font-bold">
                      {period.year}
                    </div>
                  </div>
                  
                  {/* 중앙 원 (데스크톱에서만 표시) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full hidden md:block"></div>
                  
                  {/* 이벤트 목록 */}
                  <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-2">
                      {period.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 경영진 소개 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">경영진 소개</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology를 이끌어가는 리더십 팀을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-80">
                  <Image
                    src={executive.imageSrc}
                    alt={executive.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{executive.name}</h3>
                  <p className="text-blue-600 mb-4">{executive.position}</p>
                  <p className="text-gray-600">{executive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 글로벌 네트워크 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">글로벌 네트워크</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology는 전 세계 15개국에 지사를 두고 있습니다.
            </p>
          </div>
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/global-network.jpg"
              alt="Hirata Korea Technology 글로벌 네트워크"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-gray-800">아시아</h3>
              <p className="text-gray-600">한국, 일본, 중국, 베트남, 인도네시아</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-gray-800">북미</h3>
              <p className="text-gray-600">미국, 캐나다, 멕시코</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-gray-800">유럽</h3>
              <p className="text-gray-600">독일, 프랑스, 영국</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-gray-800">중동</h3>
              <p className="text-gray-600">아랍에미리트, 사우디아라비아</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-gray-800">오세아니아</h3>
              <p className="text-gray-600">호주, 뉴질랜드</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 성장하는 파트너가 되어주세요</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology와 함께 미래를 만들어 가세요.
            우리의 혁신적인 솔루션으로 귀사의 경쟁력을 강화하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                문의하기
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                채용정보
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}