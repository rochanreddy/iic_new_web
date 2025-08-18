// Performance monitoring utilities
export const measurePerformance = () => {
  const metrics: any = {};

  // Measure page load time
  if (performance.timing) {
    const navigationStart = performance.timing.navigationStart;
    const loadEventEnd = performance.timing.loadEventEnd;
    metrics.loadTime = loadEventEnd - navigationStart;
  }

  // Measure DOM content loaded
  if (performance.timing) {
    const navigationStart = performance.timing.navigationStart;
    const domContentLoaded = performance.timing.domContentLoadedEventEnd;
    metrics.domContentLoaded = domContentLoaded - navigationStart;
  }

  // Measure first paint
  if (performance.getEntriesByType) {
    const paintEntries = performance.getEntriesByType('paint');
    const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    if (firstPaint) metrics.firstPaint = firstPaint.startTime;
    if (firstContentfulPaint) metrics.firstContentfulPaint = firstContentfulPaint.startTime;
  }

  return metrics;
};

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization helper
export const optimizeImage = (src: string, width: number, quality: number = 80): string => {
  // Add image optimization parameters if using a CDN
  if (src.includes('unsplash.com') || src.includes('images.unsplash.com')) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return src;
};

// Lazy loading intersection observer
export const createLazyObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    };
  }
  return null;
};

// Network information
export const getNetworkInfo = () => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    };
  }
  return null;
}; 