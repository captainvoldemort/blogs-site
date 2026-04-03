'use client';

import Carousel from './Carousel';

/**
 * Wrapper to use the Carousel component from a server-rendered page.
 * Accepts serializable items (with icon as JSX from server) and renders them.
 */
export default function HomepageCarousel({ items }) {
  return <Carousel items={items} />;
}
