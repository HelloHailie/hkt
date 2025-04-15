"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  footer?: ReactNode;
  link?: string;
  variant?: "default" | "bordered" | "elevated";
  className?: string;
  aspectRatio?: "auto" | "square" | "video";
  children?: ReactNode;
}

const Card = ({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  footer,
  link,
  variant = "default",
  className = "",
  aspectRatio = "auto",
  children,
}: CardProps) => {
  // 카드 스타일 변형에 따른 클래스
  const variantClasses = {
    default: "bg-white",
    bordered: "bg-white border border-gray-200",
    elevated: "bg-white shadow-md",
  };

  // 이미지 비율에 따른 클래스
  const aspectRatioClasses = {
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
  };

  const cardContent = (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-200 ${
        variantClasses[variant]
      } ${className} ${link ? "hover:shadow-lg" : ""}`}
    >
      {imageSrc && (
        <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
      {footer && <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">{footer}</div>}
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;