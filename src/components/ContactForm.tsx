"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const inquiryTypes = [
    { value: "general", label: "일반 문의" },
    { value: "business", label: "사업 제휴" },
    { value: "support", label: "기술 지원" },
    { value: "sales", label: "제품 구매" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 입력 시 해당 필드의 에러 메시지 제거
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요";
    }

    // 전화번호 검증 (선택 사항이지만 입력된 경우 유효성 검사)
    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "전화번호 형식을 확인해주세요 (예: 010-1234-5678)";
      }
    }

    // 메시지 검증
    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요";
    } else if (formData.message.length < 10) {
      newErrors.message = "문의 내용은 최소 10자 이상 입력해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 여기에 실제 API 호출 코드가 들어갑니다
      // 예: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // 성공 시뮬레이션 (실제 구현 시 API 응답으로 대체)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
      });
      
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">문의하기</h2>
      
      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* 이름 필드 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* 이메일 필드 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* 전화번호 필드 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              연락처
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="예: 010-1234-5678"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          {/* 문의 유형 필드 */}
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
              문의 유형
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 메시지 필드 */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            문의 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* 개인정보 수집 동의 */}
        <div className="mb-6">
          <div className="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              required
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
              개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="text-right">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            문의하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;