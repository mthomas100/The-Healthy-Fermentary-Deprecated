import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useWindowSize, useMeasure } from 'react-use';
import useBreakpoint from '../lib/useBreakpoint';

export default function Hero() {
  const [headlineRef, { width: headlineWidth }] = useMeasure();

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
        className="z-10 absolute inset-0 bg-gray-500 opacity-50"
      />
      <div className="relative w-full min-h-full ">
        <div
          id="textAndVideo"
          className="relative font-montserrat font-bold tracking-wide z-20 inset-0 flex flex-col justify-center items-center text-left  gap-y-7 sm:gap-y-10 lg:gap-y-16 text-3xl xs:text-5xl sm:text-6xl lg:text-8xl"
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
