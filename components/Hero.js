import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useMeasure } from 'react-use';
import { useEffect, useState } from 'react';
import SkeletonLoader from 'tiny-skeleton-loader-react';
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

  return (
    <div className="relative py-32 rounded-t-3xl">
      <Image
        src={hero.image.url}
        alt="Kombucha"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 backdrop-filter backdrop-grayscale-0 rounded-t-3xl"
        priority
        placeholder="blur"
        blurDataURL={getSmallCloudinary(hero.image.url)}
      />
      <div
        id="imageFilter"
        className="absolute inset-0 bg-gray-500 opacity-40 rounded-t-3xl"
        ref={heroRef}
      />
      <div className="relative w-full min-h-full ">
        <div
          id="textAndVideo"
          className="relative font-bold tracking-wide inset-0 flex flex-col justify-center items-center text-left  gap-y-5 xxs:gap-y-7 sm:gap-y-10 lg:gap-y-16 text-[50px] md:text-[65px] "
        >
          <div
            className="text-white rounded-md  text-center  font-reenieBeanie tracking-widest p-2 sm:p-4"
            ref={headlineRef}
          >
            <span className="leading-relaxed">The Healthy Fermentary</span>
          </div>

          <div id="videoAndPreview" className="relative">
            {!videoReady && (
              <div className="w-full border-gray-200 flex justify-center absolute mt-8">
                <SkeletonLoader
                  width={headlineWidth}
                  height={headlineWidth * 0.5625}
                  background="#9b9da3"
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
            {/* <div className="text-white rounded-md  text-center mt-20 font-reenieBeanie">
              <span>The Healthy Fermentary</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
