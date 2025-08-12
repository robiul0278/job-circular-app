"use client"
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

type TNotice = {
  _id: string;
  notice: string;
}

export default function NoticeMarquee({notice}:{notice:TNotice[]}) {

  const contentRef = useRef<HTMLDivElement>(null);

  const notices = useMemo(() => notice || [], [notice]);
  const combined = [...notices, ...notices]; // duplicate for seamless

  useEffect(() => {
    if (!contentRef.current) return;

    const el = contentRef.current;
    const totalWidth = el.scrollWidth / 2;
    const speed = 50;
    const duration = Math.max(totalWidth / speed, 5);

    // Reset position to 0 first before anim start, to avoid jump on re-render
    gsap.set(el, { x: 200 });
    const anim = gsap.to(el, {
      x: -totalWidth,
      duration,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, [notices]);


  return (
    <div className="relative w-full bg-yellow-100 dark:bg-yellow-800  py-1 overflow-hidden border-y border-yellow-300 dark:border-yellow-700">
      <div className="max-w-6xl mx-auto flex items-center space-x-4 px-2 lg:p-0">
        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 whitespace-nowrap">
          Notice:
        </div>

        <div className="flex-1 overflow-hidden whitespace-nowrap relative">
          <div
            ref={contentRef}
            className="inline-flex whitespace-nowrap space-x-16 text-sm"
          >
            {combined.map((item, idx) => (
              <span key={idx} className="whitespace-nowrap">
                ({(idx % notices.length) + 1}) {item.notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
