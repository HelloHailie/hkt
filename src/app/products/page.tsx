import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata = {
  title: "제품소개 | Hirata Korea Technology",
  description: "Hirata Korea Technology의 자동화 로봇, 스마트 팩토리 시스템, 품질 관리 솔루션 등 주요 제품 소개",
};

export default function ProductsPage() {
  // 제품 카테고리 데이터
  const productCategories = [
    {
      id: "automation-robots",
      name: "자동화 로봇",
      description: "다양한 산업 환경에 적용 가능한 고성능 자동화 로봇",
      image: "/images/products/automation-robots.jpg",
    },
    {
      id: "smart-factory",
      name: "스마트 팩토리 시스템",
      description: "IoT 기반 생산 관리 및 모니터링 시스템",
      image: "/images/products/smart-factory-system.jpg",
    },
    {
      id: "quality-control",
      name: "품질 관리 솔루션",
      description: "AI 기반 비전 검사 및 품질 관리 시스템",
      image: "/images/products/quality-control.jpg",
    },
    {
      id: "software",
      name: "제어 소프트웨어",
      description: "자동화 시스템 제어 및 데이터 분석 소프트웨어",
      image: "/images/products/control-software.jpg",
    },
  ];

  // 주요 제품 데이터
  const featuredProducts = [
    {
      id: "hr-5000",
      name: "HR-5000 다관절 로봇",
      category: "자동화 로봇",
      description: "6축 다관절 로봇으로 정밀한 조립 및 이송 작업에 최적화되어 있습니다.",
      image: "/images/products/hr-5000.jpg",
      features: [
        "최대 가반 하중: 50kg",
        "작업 반경: 1,850mm",
        "반복 정밀도: ±0.05mm",
        "제어 방식: 서보 모터 제어",
        "프로그래밍: 직관적인 GUI 기반 프로그래밍",
      ],
      applications: ["자동차 부품 조립", "전자제품 제조", "식품 포장"],
      price: "문의 요망",
    },
    {
      id: "sf-cloud",
      name: "SF-Cloud 스마트 팩토리 플랫폼",
      category: "스마트 팩토리 시스템",
      description: "클라우드 기반 생산 관리 및 모니터링 시스템으로 실시간 데이터 수집 및 분석을 제공합니다.",
      image: "/images/products/sf-cloud.jpg",
      features: [
        "실시간 생산 모니터링",
        "예측 유지보수 알고리즘",
        "에너지 사용량 최적화",
        "모바일 앱 지원",
        "ERP/MES 시스템 연동",
      ],
      applications: ["제조업 생산 라인", "물류 센터", "에너지 관리"],
      price: "구독형 (월 이용료 기준)",
    },
    {
      id: "qc-vision",
      name: "QC-Vision 검사 시스템",
      category: "품질 관리 솔루션",
      description: "AI 기반 머신 비전 검사 시스템으로 제품 외관 및 품질 검사를 자동화합니다.",
      image: "/images/products/qc-vision.jpg",
      features: [
        "고해상도 카메라 시스템",
        "딥러닝 기반 불량 검출",
        "실시간 검사 결과 피드백",
        "다양한 제품 규격 지원",
        "검사 데이터 저장 및 분석",
      ],
      applications: ["반도체 검사", "디스플레이 패널 검사", "자동차 부품 검사"],
      price: "문의 요망",
    },
    {
      id: "control-master",
      name: "Control Master Pro",
      category: "제어 소프트웨어",
      description: "통합 자동화 시스템 제어 및 데이터 분석 소프트웨어로 직관적인 인터페이스를 제공합니다.",
      image: "/images/products/control-master.jpg",
      features: [
        "다중 장비 통합 제어",
        "실시간 데이터 시각화",
        "사용자 정의 대시보드",
        "이상 감지 및 알림",
        "데이터 분석 및 리포팅",
      ],
      applications: ["자동화 생산 라인", "품질 관리 시스템", "공정 모니터링"],
      price: "라이센스 기반",
    },
  ];

  // 제품 비교 데이터
  const productComparison = {
    categories: ["모델", "가반 하중", "작업 반경", "반복 정밀도", "제어 방식", "적용 분야"],
    products: [
      {
        name: "HR-3000",
        specs: ["HR-3000", "30kg", "1,500mm", "±0.08mm", "서보 모터", "중소형 부품 조립"],
      },
      {
        name: "HR-5000",
        specs: ["HR-5000", "50kg", "1,850mm", "±0.05mm", "서보 모터", "중대형 부품 조립"],
      },
      {
        name: "HR-7000",
        specs: ["HR-7000", "70kg", "2,100mm", "±0.03mm", "서보 모터", "대형 부품 조립/이송"],
      },
    ],
  };

  // 고객 후기 데이터
  const testimonials = [
    {
      company: "A 자동차 부품 제조사",
      quote: "HR-5000 로봇 도입 후 생산성이 40% 향상되었으며, 불량률도 크게 감소했습니다. 투자 대비 효과가 매우 뛰어납니다.",
      author: "생산관리 책임자",
    },
    {
      company: "B 전자제품 제조사",
      quote: "QC-Vision 시스템은 99.8%의 정확도로 불량을 검출하며, 검사 시간을 75% 단축시켰습니다. 품질 관리가 획기적으로 개선되었습니다.",
      author: "품질관리 팀장",
    },
    {
      company: "C 식품 가공업체",
      quote: "SF-Cloud 플랫폼 도입으로 생산 현황을 실시간으로 파악할 수 있게 되었고, 에너지 비용도 25% 절감했습니다.",
      author: "공장장",
    },
  ];

  // 자주 묻는 질문 데이터
  const faqs = [
    {
      question: "제품 구매 전 테스트나 데모를 진행할 수 있나요?",
      answer: "네, 당사는 고객의 요구에 맞는 제품 데모를 제공하고 있습니다. 실제 작업 환경에서의 성능을 확인하실 수 있도록 테스트 기간도 제공 가능합니다. 자세한 내용은 영업팀에 문의해 주세요."
    },
    {
      question: "제품 설치 및 교육은 어떻게 이루어지나요?",
      answer: "제품 구매 시 전문 엔지니어가 현장을 방문하여 설치 및 초기 설정을 지원합니다. 또한 운영자를 위한 체계적인 교육 프로그램을 제공하여 제품을 효율적으로 활용할 수 있도록 돕습니다."
    },
    {
      question: "제품 보증 기간과 유지보수 서비스는 어떻게 되나요?",
      answer: "당사 제품은 기본 1년의 제품 보증 기간을 제공합니다. 추가로 연장 보증 및 유지보수 계약을 통해 정기 점검, 소프트웨어 업데이트, 기술 지원 등의 서비스를 받으실 수 있습니다."
    },
    {
      question: "기존 시스템과의 호환성은 어떻게 되나요?",
      answer: "당사 제품은 표준 인터페이스를 지원하여 대부분의 기존 시스템과 호환됩니다. 구체적인 호환성 여부는 기술 컨설팅을 통해 확인해 드리며, 필요한 경우 커스터마이징도 가능합니다."
    },
    {
      question: "소프트웨어 업데이트는 어떻게 제공되나요?",
      answer: "소프트웨어 제품의 경우 정기적인 업데이트를 제공하며, 보안 패치 및 버그 수정은 무상으로 제공됩니다. 주요 기능 업데이트는 유지보수 계약에 따라 제공되며, 원격으로 업데이트가 가능합니다."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/products/products-hero.jpg"
            alt="Hirata Korea Technology 제품"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">제품소개</h1>
            <p className="text-xl text-blue-100">
              Hirata Korea Technology는 최첨단 자동화 기술과 혁신적인 제품으로
              고객의 생산성 향상과 비용 절감을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 제품 카테고리 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">제품 카테고리</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology는 다양한 산업 분야에 최적화된 제품을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <Link href={`#${category.id}`} key={category.id} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 제품 소개 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">주요 제품</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology의 대표 제품을 소개합니다.
            </p>
          </div>
          
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              id={product.id}
              className={`mb-16 ${index !== featuredProducts.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}
            >
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-80 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 특징</h4>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">적용 분야</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">가격</span>
                      <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                    </div>
                    <Link href="/contact">
                      <Button variant="primary">
                        제품 문의하기
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 제품 비교 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">제품 비교</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              자동화 로봇 제품군의 주요 사양을 비교해보세요.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {productComparison.categories.map((category, idx) => (
                    <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {category}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productComparison.products.map((product, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {product.specs.map((spec, specIdx) => (
                      <td key={specIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {specIdx === 0 ? <span className="font-medium">{spec}</span> : spec}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">고객 후기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hirata Korea Technology 제품을 사용하는 고객들의 생생한 후기를 확인하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              제품에 관해 자주 묻는 질문들에 대한 답변입니다.
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

      {/* 다운로드 섹션 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">제품 자료</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              제품에 대한 상세 정보를 확인하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 mb-2">제품 카탈로그</h3>
              <p className="text-gray-600 text-center mb-4">전체 제품 라인업과 상세 사양을 확인하세요.</p>
              <Button variant="outline">다운로드</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 mb-2">기술 문서</h3>
              <p className="text-gray-600 text-center mb-4">제품 설치 및 운영에 관한 기술 문서입니다.</p>
              <Button variant="outline">다운로드</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-bold text-gray-800 mb-2">제품 데모 영상</h3>
              <p className="text-gray-600 text-center mb-4">제품 작동 및 적용 사례 영상을 확인하세요.</p>
              <Button variant="outline">영상 보기</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 md:py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">맞춤형 제품 상담이 필요하신가요?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Hirata Korea Technology의 전문가들이 귀사의 요구사항에 맞는 
            최적의 제품을 추천해 드립니다. 지금 바로 문의하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                제품 문의하기
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                솔루션 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}