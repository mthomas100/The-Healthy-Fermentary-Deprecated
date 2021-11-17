import styled from 'styled-components';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useWindowSize } from 'react-use';
import { useEffect } from 'react';
import useBreakpoint from '../lib/useBreakpoint';

export default function Hero() {
  const { width } = useWindowSize();
  const breakpoint = useBreakpoint();

  console.log(breakpoint);
  return (
    <div className="relative w-full h-auto ">
      <Image
        src="/images/kombuchaFruit.jpg"
        alt="Kombucha"
        layout="responsive"
        width="100%"
        height={
          {
            xxs: '150%',
            xs: '50%',
            sm: '50%',
            md: '50%',
            lg: '50%',
            xl: '50%',
          }[breakpoint]
        }
        objectFit="cover"
        className="absolute inset-0 z-0 backdrop-filter backdrop-grayscale-0"
      />
      <div className="z-10 absolute inset-0 bg-gray-500 opacity-50" />

      <div
        id="heading"
        className="absolute z-20 inset-0 flex flex-col justify-center items-center text-left font-bold tracking-wide gap-y-4 xs:gap-y-7 sm:gap-y-10 text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl lg:text-8xl"
      >
        <div className="text-white">
          <span>Fermented Beverages</span>
        </div>
        <div>
          <span className="bg-white text-black p-2 sm:p-4">
            Delivered to your Doorstep
          </span>
        </div>

        <ReactPlayer
          className="mx-4"
          url="https://vimeo.com/182458845"
          width="100%"
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
  );
}
