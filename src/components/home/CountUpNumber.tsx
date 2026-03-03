import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  target: string; // e.g. "1000+", "21K+", "20+"
  duration?: number;
}

function parseTarget(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { num: 0, suffix: value, prefix: "" };
  return {
    prefix: match[1],
    num: parseFloat(match[2]),
    suffix: match[3],
  };
}

export function CountUpNumber({ target, duration = 2000 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const { num, suffix, prefix } = parseTarget(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [hasAnimated, num, duration]);

  return (
    <span ref={ref}>
      {prefix}{hasAnimated ? count : 0}{suffix}
    </span>
  );
}
