import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useMeasure } from 'react-use';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useLayout } from '../lib/layoutState';
import getSmallCloudinary from '../util/getSmallCloudinary';

export default function Hero({ hero }) {
  // State
  const [videoReady, setVideoReady] = useState(false);

  const [headlineRef, { width: headlineWidth }] = useMeasure();
  const [heroRef, { height: heroHeight }] = useMeasure();
  const { setHeroHeight } = useLayout();
  useEffect(() => {
    setHeroHeight(heroHeight);
  });

  useEffect(() => {
    console.log('videoReady', videoReady);
  }, [videoReady]);

  return (
    <div className="relative py-32">
      <Image
        src={hero.image.url}
        alt="Kombucha"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 backdrop-filter backdrop-grayscale-0"
        priority
        placeholder="blur"
        blurDataURL={getSmallCloudinary(hero.image.url)}
      />
      <div
        id="imageFilter"
        className="absolute inset-0 bg-gray-500 opacity-50"
        ref={heroRef}
      />
      <div className="relative w-full min-h-full ">
        <div
          id="textAndVideo"
          className="relative font-montserrat font-bold tracking-wide inset-0 flex flex-col justify-center items-center text-left  gap-y-5 xxs:gap-y-7 sm:gap-y-10 lg:gap-y-16 text-2xl xxs:text-3xl xs:text-5xl sm:text-6xl lg:text-8xl"
        >
          <div className="text-white rounded-md">
            <span>{hero.topText}</span>
          </div>
          <div ref={headlineRef}>
            <span className="bg-white text-black p-2 sm:p-4">
              {hero.bottomText}
            </span>
          </div>

          <div id="videoAndPreview" className="relative">
            {!videoReady && (
              <div className="w-full border-gray-200 flex justify-center absolute mt-8">
                <Image
                  src={
                    isMobile
                      ? '/images/videoPlaceholderMobile.jpg'
                      : '/images/videoPlaceholder.jpg'
                  }
                  alt="Video Placeholder"
                  width={headlineWidth}
                  height={headlineWidth * 0.5625}
                  layout="fixed"
                  objectFit="contain"
                  priority
                />
              </div>
            )}

            <div id="reactPlayerWrapper" className="mt-8">
              <ReactPlayer
                url={hero.vimeoUrl}
                width={headlineWidth}
                height={headlineWidth * 0.5625}
                onReady={() => setVideoReady(true)}
                onError={() => setVideoReady(false)}
                // fallback={<HeroVideoFallback />}
                // height="auto"
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                  vimeo: {
                    playerOptions: {
                      autopause: false,
                      muted: true,
                      playsinline: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
