import { useEffect } from "react";
import { trackPageView, trackViewContent } from "@/lib/metaPixel";

interface UseMetaPixelOptions {
  pageName: string;
  contentName: string;
  contentType?: string;
  contentCategory?: string;
}

/**
 * Hook to track PageView and ViewContent on route mount.
 * Use one per page component.
 */
export function useMetaPixelPage({
  pageName,
  contentName,
  contentType = "page",
  contentCategory,
}: UseMetaPixelOptions) {
  useEffect(() => {
    trackPageView(pageName);
    trackViewContent(contentName, contentType, contentCategory);
  }, [pageName, contentName, contentType, contentCategory]);
}
