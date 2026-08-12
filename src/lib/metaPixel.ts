type PixelEvent = "PageView" | "ViewContent" | "Lead" | "Contact" | "InitiateCheckout";

interface PixelParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Safely push a Meta Pixel event. Guards against the pixel not being loaded yet.
 */
export function trackPixel(event: PixelEvent, params?: PixelParams) {
  if (typeof window === "undefined") return;

  const fbq = (window as any).fbq;
  if (typeof fbq === "function") {
    fbq("track", event, params);
  } else {
    // Queue the event if the pixel hasn't loaded yet
    ((window as any).fbqQueue = (window as any).fbqQueue || []).push({
      event,
      params,
    });
  }
}

/**
 * Track a custom Meta Pixel event using trackCustom.
 */
export function trackPixelCustom(eventName: string, params?: PixelParams) {
  if (typeof window === "undefined") return;

  const fbq = (window as any).fbq;
  if (typeof fbq === "function") {
    fbq("trackCustom", eventName, params);
  } else {
    ((window as any).fbqQueue = (window as any).fbqQueue || []).push({
      event: eventName,
      params,
      custom: true,
    });
  }
}

/**
 * Track page views with content metadata for Home, About, Services, and Contact pages.
 */
export function trackPageView(pageName: string) {
  trackPixel("PageView", {
    page_name: pageName,
  });
}

/**
 * Track content view for a specific page with relevant metadata.
 */
export function trackViewContent(contentName: string, contentType: string, category?: string) {
  trackPixel("ViewContent", {
    content_name: contentName,
    content_type: contentType,
    content_category: category,
  });
}

/**
 * Track lead generation actions (contact form, schedule call, etc.).
 */
export function trackLead(source: string, label: string) {
  trackPixel("Lead", {
    content_name: source,
    content_category: label,
  });
}

/**
 * Replay any events queued before fbq finished loading.
 */
export function flushPixelQueue() {
  if (typeof window === "undefined") return;
  const w = window as any;
  const fbq = w.fbq;
  if (typeof fbq !== "function" || !Array.isArray(w.fbqQueue)) return;

  const queued = w.fbqQueue as Array<{ event: string; params?: PixelParams; custom?: boolean }>;
  w.fbqQueue = [];
  queued.forEach(({ event, params, custom }) => {
    fbq(custom ? "trackCustom" : "track", event, params);
  });
}
