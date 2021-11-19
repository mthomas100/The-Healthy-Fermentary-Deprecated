import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useMeasure } from 'react-use';
import { useEffect } from 'react';
import { useLayout } from '../lib/layoutState';

export default function Hero() {
  const [headlineRef, { width: headlineWidth }] = useMeasure();
  const [heroRef, { height: heroHeight }] = useMeasure();
  const { setHeroHeight } = useLayout();
  useEffect(() => {
    setHeroHeight(heroHeight);
  });
  return (
    <div className="relative py-32">
      <Image
        src="/images/kombuchaFruitLowestQuality.jpg"
        alt="Kombucha"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 backdrop-filter backdrop-grayscale-0"
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
          <div className="text-white">
            <span>Fermented Beverages</span>
          </div>
          <div ref={headlineRef}>
            <span className="bg-white text-black p-2 sm:p-4">
              Delivered to your Doorstep
            </span>
          </div>

          <ReactPlayer
            className="mt-16"
            url="https://vimeo.com/182458845"
            width={headlineWidth}
            height={headlineWidth * 0.5625}
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
  );
}
