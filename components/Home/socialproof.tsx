"use client";

import Image from "next/image";

type SocialProofProps = {
  avatars: string[];
  text?: string;
};

export default function SocialProof({
  avatars,
  text = "Trusted Web Design Service Worldwide",
}: SocialProofProps) {
  return (
    <div className="flex items-center gap-3 bg-light px-3 py-2 rounded-full w-fit max-w-full">

      {/* Avatar stack — smaller on mobile */}
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shrink-0"
          >
            <Image
              src={src || "/images/profile/developer-pic-1.png"}
              alt={`avatar-${i}`}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Stars + text */}
      <div className="flex flex-col leading-tight">

        {/* Stars — fixed to 16px, were accidentally 40px before */}
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#FBBF24"
              stroke="#F59E0B"
              strokeWidth="1"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <span className="text-xs text-gray-600 whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
}