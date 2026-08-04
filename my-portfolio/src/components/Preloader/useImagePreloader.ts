import { useEffect, useState } from "react";

/** Reveal the page after this long no matter what, so a stalled remote
 *  image can never wedge the gate shut. */
const MAX_WAIT_MS = 6000;

interface PreloadState {
  progress: number;
  isComplete: boolean;
}

export default function useImagePreloader(imageUrls: string[]): PreloadState {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalCount = imageUrls.length;

    if (totalCount === 0) {
      setProgress(100);
      setIsComplete(true);
      return;
    }

    let isMounted = true;
    let settledCount = 0;

    const handleSettled = () => {
      if (!isMounted) return;

      settledCount += 1;
      setProgress(Math.round((settledCount / totalCount) * 100));

      if (settledCount === totalCount) {
        setIsComplete(true);
      }
    };

    for (const imageUrl of imageUrls) {
      const image = new Image();
      // A 404 or a dead CDN counts as settled — it must not block the reveal.
      image.onload = handleSettled;
      image.onerror = handleSettled;
      image.src = imageUrl;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isMounted) return;
      setProgress(100);
      setIsComplete(true);
    }, MAX_WAIT_MS);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { progress, isComplete };
}
