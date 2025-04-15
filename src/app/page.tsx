import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  // 주요 사업 영역 데이터
  const businessAreas = [
    {
      title: "자동화 솔루션",
      description: "생산 공정 자동화를 위한 첨단 솔루션 제공",
      icon: "/icons/automation.svg",
      link: "/solutions#automation",
    },
    {
      title: "로봇 시스템",
      description: "산업용 로봇 시스템 설계 및 구현",
      icon: "/icons/robot.svg",
      link: "/solutions#robotics",
    },
    {
      title: "스마트 팩토리",
      description: "IoT 기반 스마트 팩토리 구축 및 컨설팅",
      icon: "/icons/factory.svg",
      link: "/solutions#smart-factory",
    },
    {
      title: "품질 관리 시스템",
      description: "AI 기반 품질 검사 및 관리 시스템",
      icon: "/icons/quality.svg",
      link: "/solutions#quality-control",
    },
  ];

  // 최신 뉴스 데이터
  const latestNews = [
    {
      title: "Hirata Korea, 2025년 신규 자동화 솔루션 출시",
      date: "2025-04-10",
      description: "차세대 자동화 시스템으로 생산성 30% 향상 기대",
      imageSrc: "/images/news/automation-solution.jpg",
      link: "/news/automation-solution-2025",
    },
    {
      title: "글로벌 자동차 제조사와 협력 계약 체결",
      date: "2025-03-22",
      description: "주요 자동차 제조사의 생산라인 자동화 프로젝트 수주",
      imageSrc: "/images/news/partnership.jpg",
      link: "/news/automotive-partnership",
    },
    {
      title: "2025 서울 산업 자동화 전시회 참가 예정",
      date: "2025-03-15",
      description: "5월 서울 COEX에서 열리는 산업 자동화 전시회에 부스 운영",
      imageSrc: "/images/news/exhibition.jpg",
      link: "/news/seoul-automation-expo",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-background.jpg"
            alt="Industrial automation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              혁신적인 자동화 솔루션으로<br />미래 산업을 선도합니다
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Hirata Korea Technology는 최첨단 자동화 기술과 로봇 시스템으로 
              글로벌 제조업의 디지털 혁신을 지원합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions">
                <Button size="lg">
                  솔루션 알아보기
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  문의하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 사업 영역 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">주요 사업 영역</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology는 다양한 산업 분야에 최적화된 자동화 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/* 아이콘 이미지가 있으면 표시, 없으면 기본 아이콘 */}
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{area.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{area.description}</p>
                <div className="text-center">
                  <Link href={area.link} className="text-blue-600 hover:text-blue-800 font-medium">
                    자세히 보기 &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/company-overview.jpg"
                  alt="Hirata Korea Technology 본사"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">글로벌 기술 혁신 기업</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hirata Korea Technology는 1985년 설립 이후 40년 가까이 자동화 기술 분야에서 
                글로벌 리더로 자리매김해왔습니다. 우리는 혁신적인 기술과 전문 지식을 바탕으로 
                고객사의 생산성 향상과 비용 절감을 지원합니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">40년 이상의 산업 자동화 경험</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">전 세계 15개국 지사 운영</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">500개 이상의 글로벌 기업과 협력</span>
                </li>
              </ul>
              <Link href="/about">
                <Button variant="secondary">
                  회사 소개 더 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 뉴스 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">최신 소식</h2>
              <p className="text-xl text-gray-600">Hirata Korea Technology의 최신 소식과 업데이트를 확인하세요.</p>
            </div>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium hidden md:block">
              모든 소식 보기 &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card
                key={index}
                title={news.title}
                description={`${news.date} - ${news.description}`}
                imageSrc={news.imageSrc}
                imageAlt={news.title}
                link={news.link}
                variant="elevated"
                aspectRatio="video"
              />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/news">
              <Button variant="secondary">
                모든 소식 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 미래를 만들어 가세요</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology와 함께 귀사의 생산 시스템을 혁신하고 
            경쟁력을 강화하세요. 지금 바로 문의하시고 맞춤형 솔루션을 상담받으세요.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              지금 문의하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
