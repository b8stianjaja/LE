import { useEffect } from 'react';

/**
 * A hook that uses the Intersection Observer API to add a 'is-visible' class
 * to elements when they enter the viewport.
 * @param {string} selector - The CSS selector for the elements to observe.
 * @param {object} options - Intersection Observer options (optional).
 */
export const useIntersectionObserver = (
  selector,
  options = { root: null, rootMargin: '0px', threshold: 0.1 }
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // When the element is in view, add the 'is-visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function to unobserve all elements when the component unmounts
    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [selector, options]); // Rerun the effect if the selector or options change
};