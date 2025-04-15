import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "뉴스/공지/IR | Hirata Korea Technology",
  description: "Hirata Korea Technology의 최신 뉴스, 공지사항, IR 정보를 확인하세요.",
};

export default function NewsPage() {
  // 뉴스 데이터
  const newsItems = [
    {
      id: "news-001",
      category: "보도자료",
      title: "Hirata Korea Technology, 차세대 스마트 팩토리 솔루션 출시",
      date: "2025-04-10",
      summary: "Hirata Korea Technology가 AI 기반 스마트 팩토리 솔루션 'SF-Cloud 2.0'을 출시했습니다.",
      image: "/images/news/news-1.jpg",
      content: "Hirata Korea Technology는 지난 10일, 인공지능과 빅데이터 분석 기능이 강화된 차세대 스마트 팩토리 솔루션 'SF-Cloud 2.0'을 공식 출시했습니다. 이번 솔루션은 기존 제품 대비 생산성을 30% 향상시키고, 에너지 소비를 20% 절감하는 효과가 있는 것으로 나타났습니다.",
      featured: true,
    },
    {
      id: "news-002",
      category: "공지사항",
      title: "2025년 상반기 신입/경력 채용 공고",
      date: "2025-04-05",
      summary: "Hirata Korea Technology에서 2025년 상반기 신입 및 경력 사원을 모집합니다.",
      image: "/images/news/news-2.jpg",
      content: "Hirata Korea Technology에서는 로봇 시스템 개발, 소프트웨어 엔지니어링, 영업 및 마케팅 분야의 인재를 모집합니다. 지원 기간은 2025년 4월 5일부터 4월 30일까지이며, 자세한 내용은 채용 페이지를 참고해 주시기 바랍니다.",
      featured: true,
    },
    {
      id: "news-003",
      category: "IR",
      title: "Hirata Korea Technology, 2024년 4분기 실적 발표",
      date: "2025-03-15",
      summary: "Hirata Korea Technology가 2024년 4분기 및 연간 실적을 발표했습니다.",
      image: "/images/news/news-3.jpg",
      content: "Hirata Korea Technology는 2024년 4분기에 전년 동기 대비 매출 15% 증가, 영업이익 20% 증가를 기록했습니다. 특히 자동화 로봇 부문의 성장이 두드러졌으며, 해외 시장 진출 확대로 수출 비중이 전체 매출의 40%를 차지했습니다.",
      featured: true,
    },
    {
      id: "news-004",
      category: "보도자료",
      title: "Hirata Korea Technology, 국제 자동화 전시회 참가",
      date: "2025-03-01",
      summary: "Hirata Korea Technology가 서울에서 열리는 국제 자동화 전시회에 참가합니다.",
      image: "/images/news/news-4.jpg",
      content: "Hirata Korea Technology는 오는 3월 15일부터 20일까지 서울 COEX에서 열리는 '2025 국제 자동화 전시회'에 참가합니다. 이번 전시회에서는 최신 자동화 로봇과 스마트 팩토리 솔루션을 선보일 예정입니다.",
      featured: false,
    },
    {
      id: "news-005",
      category: "공지사항",
      title: "고객 지원 센터 확장 운영 안내",
      date: "2025-02-20",
      summary: "Hirata Korea Technology 고객 지원 센터가 확장 운영됩니다.",
      image: "/images/news/news-5.jpg",
      content: "고객님의 편의를 위해 Hirata Korea Technology 고객 지원 센터가 확장 운영됩니다. 2025년 3월부터 24시간 기술 지원 서비스를 제공하며, 원격 지원 시스템이 도입되어 더욱 신속한 문제 해결이 가능해집니다.",
      featured: false,
    },
    {
      id: "news-006",
      category: "IR",
      title: "Hirata Korea Technology, 신규 투자 유치 성공",
      date: "2025-02-10",
      summary: "Hirata Korea Technology가 500억 원 규모의 신규 투자 유치에 성공했습니다.",
      image: "/images/news/news-6.jpg",
      content: "Hirata Korea Technology는 국내외 투자사로부터 총 500억 원 규모의 투자 유치에 성공했습니다. 이번 투자금은 R&D 역량 강화와 글로벌 시장 확대에 사용될 예정이며, 특히 동남아시아 시장 진출을 위한 현지 법인 설립을 추진할 계획입니다.",
      featured: false,
    },
    {
      id: "news-007",
      category: "보도자료",
      title: "Hirata Korea Technology, 대기업과 전략적 파트너십 체결",
      date: "2025-01-25",
      summary: "Hirata Korea Technology가 국내 대기업과 스마트 팩토리 구축을 위한 전략적 파트너십을 체결했습니다.",
      image: "/images/news/news-7.jpg",
      content: "Hirata Korea Technology는 국내 주요 전자 제조 기업과 스마트 팩토리 구축을 위한 전략적 파트너십을 체결했습니다. 이번 파트너십을 통해 향후 5년간 약 2,000억 원 규모의 스마트 팩토리 솔루션을 공급할 예정입니다.",
      featured: false,
    },
    {
      id: "news-008",
      category: "공지사항",
      title: "기술 세미나 개최 안내",
      date: "2025-01-15",
      summary: "Hirata Korea Technology에서 '미래 제조업과 자동화 기술' 세미나를 개최합니다.",
      image: "/images/news/news-8.jpg",
      content: "Hirata Korea Technology에서는 '미래 제조업과 자동화 기술'을 주제로 기술 세미나를 개최합니다. 일시는 2025년 2월 5일이며, 장소는 서울 강남구 코엑스 컨퍼런스룸입니다. 참가 신청은 홈페이지를 통해 가능합니다.",
      featured: false,
    },
  ];

  // IR 자료 데이터
  const irDocuments = [
    {
      id: "ir-001",
      title: "2024년 연간 실적 보고서",
      date: "2025-03-15",
      fileType: "PDF",
      fileSize: "5.2MB",
    },
    {
      id: "ir-002",
      title: "2024년 4분기 실적 발표 자료",
      date: "2025-03-15",
      fileType: "PDF",
      fileSize: "3.8MB",
    },
    {
      id: "ir-003",
      title: "2024년 3분기 실적 발표 자료",
      date: "2024-12-15",
      fileType: "PDF",
      fileSize: "3.5MB",
    },
    {
      id: "ir-004",
      title: "2024년 2분기 실적 발표 자료",
      date: "2024-09-15",
      fileType: "PDF",
      fileSize: "3.6MB",
    },
    {
      id: "ir-005",
      title: "2024년 1분기 실적 발표 자료",
      date: "2024-06-15",
      fileType: "PDF",
      fileSize: "3.4MB",
    },
    {
      id: "ir-006",
      title: "2023년 연간 실적 보고서",
      date: "2024-03-15",
      fileType: "PDF",
      fileSize: "5.0MB",
    },
  ];

  // 자주 묻는 질문 데이터
  const faqs = [
    {
      question: "보도자료 및 언론 취재는 어디로 문의해야 하나요?",
      answer: "보도자료 및 언론 취재 관련 문의는 홍보팀(pr@hirata-kr.com)으로 연락 주시기 바랍니다. 담당자가 신속하게 답변 드리겠습니다."
    },
    {
      question: "IR 자료는 어디서 확인할 수 있나요?",
      answer: "IR 자료는 본 페이지의 'IR 자료' 섹션에서 확인하실 수 있습니다. 연간 보고서, 분기별 실적 발표 자료 등을 제공하고 있습니다."
    },
    {
      question: "투자 관련 문의는 어디로 해야 하나요?",
      answer: "투자 관련 문의는 IR팀(ir@hirata-kr.com)으로 연락 주시기 바랍니다. 투자 설명회 일정 및 관련 정보도 문의하실 수 있습니다."
    },
    {
      question: "회사 소식을 정기적으로 받아볼 수 있는 방법이 있나요?",
      answer: "홈페이지 하단의 '뉴스레터 구독' 섹션에서 이메일을 등록하시면 Hirata Korea Technology의 최신 소식을 정기적으로 받아보실 수 있습니다."
    },
    {
      question: "과거 보도자료는 어디서 확인할 수 있나요?",
      answer: "과거 보도자료는 본 페이지에서 '보도자료' 카테고리를 선택하여 확인하실 수 있습니다. 검색 기능을 통해 특정 키워드로 검색도 가능합니다."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">뉴스 & 공지사항</h1>
            <p className="text-xl text-blue-100 mb-8">
              Hirata Korea Technology의 최신 소식과 공지사항, IR 정보를 확인하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                보도자료
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                공지사항
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                IR 정보
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 뉴스 섹션 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 소식</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 최신 소식과 중요 공지사항을 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <Link href={`/news/${item.id}`}>
                    <Button variant="outline" size="sm">자세히 보기</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 뉴스 목록 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">뉴스 & 공지사항</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 모든 소식을 확인하세요.
            </p>
          </div>

          {/* 검색 및 필터 */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-3 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">모든 카테고리</option>
                  <option value="보도자료">보도자료</option>
                  <option value="공지사항">공지사항</option>
                  <option value="IR">IR</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">최신순</option>
                  <option value="old">오래된순</option>
                </select>
              </div>
            </div>
          </div>

          {/* 뉴스 목록 */}
          <div className="max-w-5xl mx-auto">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <Link href={`/news/${item.id}`}>
                      <Button variant="outline" size="sm">자세히 보기</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* 페이지네이션 */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  이전
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-blue-600 text-white">
                  1
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  다음
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* IR 자료 섹션 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">IR 자료</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 재무 정보 및 투자 관련 자료를 확인하세요.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">제목</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">등록일</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">파일</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">다운로드</th>
                  </tr>
                </thead>
                <tbody>
                  {irDocuments.map((doc) => (
                    <tr key={doc.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-800">{doc.title}</td>
                      <td className="py-4 px-6 text-gray-600">{doc.date}</td>
                      <td className="py-4 px-6 text-gray-600">{doc.fileType} ({doc.fileSize})</td>
                      <td className="py-4 px-6">
                        <Button variant="outline" size="sm">다운로드</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              뉴스 및 IR 관련 자주 묻는 질문에 대한 답변을 확인하세요.
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

      {/* 구독 섹션 */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">최신 소식을 받아보세요</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology의 최신 소식과 업데이트를 이메일로 받아보세요.
            중요한 공지사항과 새로운 제품 정보를 놓치지 않을 수 있습니다.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-gray-800"
              />
              <Button size="lg">구독하기</Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              * 개인정보 수집 및 이용에 동의합니다. 언제든지 구독을 취소할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">더 궁금한 점이 있으신가요?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology에 대해 더 알고 싶거나 문의사항이 있으시면 
            언제든지 연락해 주세요. 담당자가 신속하게 답변 드리겠습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">문의하기</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">회사 소개</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}