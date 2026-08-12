import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { flushPixelQueue, trackPageView, trackViewContent } from "@/lib/metaPixel";

interface RouteMeta {
  pageName: string;
  contentName: string;
  contentType: string;
  contentCategory?: string;
}

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    pageName: "Home",
    contentName: "Home - Unleash the Infinity",
    contentType: "landing_page",
    contentCategory: "Digital Detox Coaching",
  },
  "/about": {
    pageName: "About",
    contentName: "About - Dr. Yash",
    contentType: "page",
    contentCategory: "Founder Story",
  },
  "/services": {
    pageName: "Services",
    contentName: "Services - Programs",
    contentType: "product_group",
    contentCategory: "Coaching Programs",
  },
  "/contact": {
    pageName: "Contact",
    contentName: "Contact - Get in Touch",
    contentType: "page",
    contentCategory: "Contact",
  },
};

function metaForPath(pathname: string): RouteMeta {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return (
    ROUTE_META[normalized] ?? {
      pageName: normalized,
      contentName: `Page ${normalized}`,
      contentType: "page",
    }
  );
}

/**
 * Fires Meta Pixel PageView + ViewContent on every client-side route change.
 * The very first PageView is already fired by the base pixel snippet in index.html,
 * so it is skipped here to avoid duplicates (ViewContent still fires).
 */
export function MetaPixelTracker() {
  const { pathname, search } = useLocation();
  const isFirstRoute = useRef(true);
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    flushPixelQueue();
  }, []);

  useEffect(() => {
    const key = pathname + search;
    if (lastTracked.current === key) return;
    lastTracked.current = key;

    const meta = metaForPath(pathname);

    if (isFirstRoute.current) {
      isFirstRoute.current = false;
    } else {
      trackPageView(meta.pageName);
    }

    trackViewContent(meta.contentName, meta.contentType, meta.contentCategory);
  }, [pathname, search]);

  return null;
}

export default MetaPixelTracker;
