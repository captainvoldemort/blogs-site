'use client';

import VideoPlayer from './VideoPlayer';

/**
 * Client wrapper so VideoPlayer can be used from the server-rendered homepage.
 */
export default function HomepageVideo({ src }) {
  return <VideoPlayer src={src} />;
}
