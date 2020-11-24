/* eslint-disable filenames/match-exported */
import { useEffect, useState } from 'react';

const useActiveHeading = (headingIds: string[]): string => {
  const [
    activeHeading,
    setActiveHeading,
  ] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0% 0% -70% 0%',
      },
    );

    const headings: HTMLElement[] = headingIds.reduce(
      (accumulator: HTMLElement[], headingId: string) => {
        const element = document.getElementById(`toc-${headingId}`);

        if (!element) {
          return accumulator;
        }

        return [
          ...accumulator,
          element,
        ];
      },
      [],
    );

    headings.forEach((heading: HTMLElement) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading: HTMLElement) => {
        observer.unobserve(heading);
      });
    };
  }, [
    headingIds,
  ]);

  return activeHeading;
};

export default useActiveHeading;
