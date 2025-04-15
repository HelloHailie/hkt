import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "사업분야/솔루션 | Hirata Korea Technology",
  description: "Hirata Korea Technology의 자동화 솔루션, 로봇 시스템, 스마트 팩토리, 품질 관리 시스템 등 주요 사업 영역 소개",
};

export default function SolutionsPage() {
  // 주요 사업 영역 데이터
  const businessAreas = [
    {
      id: "automation",
      title: "자동화 솔루션",
      description: "생산 공정 자동화를 위한 첨단 솔루션으로 생산성을 높이고 비용을 절감합니다.",
      imageSrc: "/images/solutions/automation.jpg",
      benefits: [
        "생산성 향상: 수작업 대비 최대 300% 생산성 향상",
        "품질 향상: 일관된 품질 유지 및 불량률 감소",
        "비용 절감: 인건비 및 운영 비용 절감",
        "안전성 향상: 위험한 작업 환경에서 작업자 보호",
      ],
      features: [
        "맞춤형 자동화 시스템 설계 및 구현",
        "기존 생산 라인 자동화 업그레이드",
        "자동화 설비 유지보수 및 관리",
        "자동화 시스템 성능 최적화",
      ],
      caseStudies: [
        {
          title: "자동차 부품 제조업체 생산라인 자동화",
          description: "연간 생산량 40% 증가, 불량률 60% 감소 달성",
        },
        {
          title: "전자제품 조립 공정 자동화",
          description: "작업 시간 50% 단축, 인건비 30% 절감 효과",
        },
      ],
    },
    {
      id: "robotics",
      title: "로봇 시스템",
      description: "산업용 로봇 시스템 설계 및 구현으로 정밀하고 효율적인 작업을 수행합니다.",
      imageSrc: "/images/solutions/robotics.jpg",
      benefits: [
        "정밀성: 인간 작업자보다 높은 정밀도로 작업 수행",
        "연속 작업: 24시간 연속 작업 가능으로 생산성 극대화",
        "유연성: 다양한 작업에 적용 가능한 유연한 시스템",
        "데이터 수집: 작업 데이터 실시간 수집 및 분석 가능",
      ],
      features: [
        "협동 로봇(Cobot) 시스템 구축",
        "로봇 비전 시스템 통합",
        "로봇 제어 소프트웨어 개발",
        "다관절 로봇 및 직교 로봇 시스템",
      ],
      caseStudies: [
        {
          title: "반도체 제조사 웨이퍼 이송 로봇 시스템",
          description: "불량률 80% 감소, 생산 속도 35% 향상",
        },
        {
          title: "식품 포장 공정 로봇 자동화",
          description: "인력 70% 감축, 생산량 50% 증가",
        },
      ],
    },
    {
      id: "smart-factory",
      title: "스마트 팩토리",
      description: "IoT 기반 스마트 팩토리 구축 및 컨설팅으로 제조 환경의 디지털 혁신을 지원합니다.",
      imageSrc: "/images/solutions/smart-factory.jpg",
      benefits: [
        "실시간 모니터링: 생산 현황 실시간 파악 및 대응",
        "예측 유지보수: 장비 고장 사전 예측으로 다운타임 최소화",
        "자원 최적화: 에너지 및 자원 사용 최적화",
        "데이터 기반 의사결정: 생산 데이터 분석을 통한 의사결정 지원",
      ],
      features: [
        "IoT 센서 네트워크 구축",
        "제조 실행 시스템(MES) 구현",
        "빅데이터 분석 플랫폼",
        "클라우드 기반 공장 관리 시스템",
      ],
      caseStudies: [
        {
          title: "화학 제품 제조사 스마트 팩토리 구축",
          description: "에너지 비용 25% 절감, 생산 효율성 40% 향상",
        },
        {
          title: "의약품 제조 공장 디지털 트랜스포메이션",
          description: "품질 검사 시간 60% 단축, 규제 준수 보고 자동화",
        },
      ],
    },
    {
      id: "quality-control",
      title: "품질 관리 시스템",
      description: "AI 기반 품질 검사 및 관리 시스템으로 제품 품질을 보장합니다.",
      imageSrc: "/images/solutions/quality-control.jpg",
      benefits: [
        "불량 감소: AI 기반 검사로 불량품 출하 방지",
        "비용 절감: 품질 검사 인력 및 시간 절감",
        "데이터 기반 개선: 품질 데이터 분석을 통한 공정 개선",
        "추적성 확보: 제품 생산 전 과정 추적 가능",
      ],
      features: [
        "머신 비전 기반 외관 검사 시스템",
        "실시간 품질 모니터링 대시보드",
        "품질 데이터 분석 및 보고 시스템",
        "바코드/RFID 기반 제품 추적 시스템",
      ],
      caseStudies: [
        {
          title: "디스플레이 패널 제조사 비전 검사 시스템",
          description: "불량 검출률 99.8% 달성, 검사 시간 75% 단축",
        },
        {
          title: "자동차 부품 품질 관리 시스템",
          description: "고객 클레임 65% 감소, 품질 보증 비용 40% 절감",
        },
      ],
    },
  ];

  // 자주 묻는 질문 데이터
  const faqs = [
    {
      question: "자동화 시스템 도입 시 기존 설비와의 호환성은 어떻게 되나요?",
      answer: "Hirata Korea Technology의 자동화 솔루션은 기존 설비와의 호환성을 최우선으로 고려합니다. 초기 컨설팅 단계에서 기존 설비에 대한 철저한 분석을 진행하고, 필요한 인터페이스와 통합 방안을 설계합니다. 대부분의 경우 기존 설비를 최대한 활용하면서 자동화 시스템을 구축하여 투자 비용을 최소화합니다."
    },
    {
      question: "자동화 시스템 도입 후 유지보수는 어떻게 이루어지나요?",
      answer: "당사는 자동화 시스템 구축 후 포괄적인 유지보수 서비스를 제공합니다. 24/7 기술 지원, 정기 점검, 원격 모니터링, 소프트웨어 업데이트 등을 포함한 다양한 유지보수 패키지를 제공하고 있으며, 고객의 요구에 맞게 맞춤형 유지보수 계약을 체결할 수 있습니다. 또한 예방적 유지보수를 통해 시스템 다운타임을 최소화합니다."
    },
    {
      question: "스마트 팩토리 구축 시 보안 문제는 어떻게 해결하나요?",
      answer: "스마트 팩토리의 보안은 당사가 가장 중요하게 생각하는 부분입니다. 네트워크 분리, 엔드포인트 보안, 데이터 암호화, 접근 제어 등 다층적 보안 아키텍처를 적용하며, 국제 보안 표준(ISO 27001 등)을 준수합니다. 또한 정기적인 보안 감사와 취약점 평가를 통해 보안 위협에 선제적으로 대응하고 있습니다."
    },
    {
      question: "로봇 시스템 도입 시 기존 작업자들의 교육은 어떻게 진행되나요?",
      answer: "로봇 시스템 도입 시 기존 작업자들을 위한 체계적인 교육 프로그램을 제공합니다. 이론 교육, 실습 교육, 현장 트레이닝 등 단계별 교육을 통해 작업자들이 새로운 시스템에 빠르게 적응할 수 있도록 지원합니다. 또한 도입 후 일정 기간 동안 현장 기술 지원을 제공하여 원활한 전환을 돕습니다."
    },
    {
      question: "품질 관리 시스템의 정확도는 어느 정도인가요?",
      answer: "당사의 AI 기반 품질 관리 시스템은 업계 최고 수준의 정확도를 자랑합니다. 일반적으로 99% 이상의 불량 검출률을 달성하며, 지속적인 머신러닝 알고리즘 개선을 통해 정확도를 계속 향상시키고 있습니다. 또한 고객의 제품 특성과 품질 요구사항에 맞게 시스템을 최적화하여 최상의 성능을 보장합니다."
    },
    {
      question: "자동화 솔루션 도입 시 투자 대비 수익(ROI)은 얼마나 되나요?",
      answer: "자동화 솔루션의 ROI는 산업 분야, 규모, 기존 공정의 효율성 등 여러 요소에 따라 달라집니다. 일반적으로 당사의 고객들은 1-3년 내에 초기 투자 비용을 회수하고 있습니다. 생산성 향상, 품질 개선, 인건비 절감, 에너지 효율화 등 다양한 측면에서 비용 절감 효과가 나타납니다. 구체적인 ROI 분석은 초기 컨설팅 단계에서 제공해 드립니다."
    },
  ];

  // 산업별 솔루션 데이터
  const industrySolutions = [
    {
      industry: "자동차",
      solutions: ["자동차 부품 조립 자동화", "차체 용접 로봇 시스템", "품질 검사 자동화"],
      imageSrc: "/images/industries/automotive.jpg",
    },
    {
      industry: "전자",
      solutions: ["PCB 조립 자동화", "반도체 패키징 시스템", "디스플레이 검사 시스템"],
      imageSrc: "/images/industries/electronics.jpg",
    },
    {
      industry: "제약/바이오",
      solutions: ["무균 공정 자동화", "의약품 패키징 시스템", "품질 관리 시스템"],
      imageSrc: "/images/industries/pharma.jpg",
    },
    {
      industry: "식품/음료",
      solutions: ["식품 가공 자동화", "포장 시스템", "위생 관리 시스템"],
      imageSrc: "/images/industries/food.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/solutions/solutions-hero.jpg"
            alt="Hirata Korea Technology 솔루션"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">사업분야/솔루션</h1>
            <p className="text-xl text-blue-100">
              Hirata Korea Technology는 첨단 자동화 기술로 제조업의 미래를 혁신합니다.
              맞춤형 솔루션으로 고객의 비즈니스 성공을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 사업 영역 개요 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 사업 영역</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology는 자동화 솔루션, 로봇 시스템, 스마트 팩토리, 품질 관리 시스템 등
              다양한 분야에서 최첨단 기술을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.map((area) => (
              <Link href={`#${area.id}`} key={area.id} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={area.imageSrc}
                      alt={area.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 각 사업 영역 상세 설명 */}
      {businessAreas.map((area) => (
        <section key={area.id} id={area.id} className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{area.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{area.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">주요 특징</h3>
                <ul className="space-y-2 mb-8">
                  {area.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">기대 효과</h3>
                <ul className="space-y-2 mb-8">
                  {area.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="relative h-64 w-full">
                    <Image
                      src={area.imageSrc}
                      alt={area.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">적용 사례</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="font-bold text-gray-800 mb-2">{caseStudy.title}</h4>
                      <p className="text-gray-600">{caseStudy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 산업별 솔루션 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">산업별 맞춤 솔루션</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 산업 분야에 최적화된 자동화 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={industry.imageSrc}
                    alt={industry.industry}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{industry.industry} 산업</h3>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              고객님들이 자주 문의하시는 질문들에 대한 답변입니다.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Q. {faq.question}</h3>
                <p className="text-gray-600">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 진행 과정 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">프로젝트 진행 과정</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 체계적인 프로젝트 진행 과정을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">요구사항 분석</h3>
              <p className="text-gray-600">고객의 요구사항과 현재 시스템을 철저히 분석합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">솔루션 설계</h3>
              <p className="text-gray-600">최적의 솔루션을 설계하고 제안합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">개발 및 구현</h3>
              <p className="text-gray-600">설계된 솔루션을 개발하고 구현합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">테스트 및 검증</h3>
              <p className="text-gray-600">구현된 시스템을 철저히 테스트하고 검증합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">운영 및 지원</h3>
              <p className="text-gray-600">시스템 운영 교육과 지속적인 기술 지원을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">맞춤형 솔루션이 필요하신가요?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology의 전문가들이 귀사의 요구사항에 맞는 
            최적의 솔루션을 제안해 드립니다. 지금 바로 문의하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                문의하기
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                제품 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}