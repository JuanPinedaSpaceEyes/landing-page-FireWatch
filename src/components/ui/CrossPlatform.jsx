import { SquareArrowOutUpRight } from "lucide-react";
import { appleImage, googleImage } from "..";
import * as motion from "motion/react-client";
import { android, iosImage, laptopImage } from "..";
export default function CrossPlatform({
  headline = "Cross-platform compatibility ",
  subtitle = "Access FireWatch seamlessly from desktop, tablet, or mobile devices. Its cross-platform design ensures reliable wildfire monitoring anytime, anywhere.",
}) {
  const MotionImg = motion.img;
  const MotionA = motion.a;
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-88px)] grid md:flex
          place-content-center md:place-content-stretch py-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10">
          <div className="md:col-span-6 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              <span className="text-orange-500">{headline}</span>
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">{subtitle}</p>
            <div className="mt-6 md:mt-10 flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-5">
              <MotionImg
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/co/app/firewatch-ai-space-monitoring/id6498717343",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                src={appleImage.src}
                alt={appleImage.alt}
                className="h-[42px] w-auto object-contain cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <MotionImg
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.nativefirewatch&pcampaignid=web_share&pli=1",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                src={googleImage.src}
                alt={googleImage.alt}
                className="h-[42px] w-auto object-contain cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              />
              <span className="hidden md:block h-10 w-px bg-gray-300 mx-1" />
              <MotionA
                href="https://firewatch.space-eyes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 md:gap-0.5 lg:gap-0 whitespace-nowrap leading-none text-base md:text-lg font-medium text-orange-600 hover:text-orange-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <span>Visit our Web Application</span>
                <SquareArrowOutUpRight className="w-4 h-4 md:ml-1" />
              </MotionA>
            </div>
          </div>
          <div className="md:col-span-6 p-4 md:p-6 rounded-xl">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl xl:max-w-[980px] aspect-[16/12] md:aspect-[16/10] mx-auto">
              <div className="pointer-events-none absolute inset-4 md:inset-8 rounded-[2rem] bg-gradient-to-tr from-orange-500/10 via-sky-500/10 to-emerald-500/10 blur-2xl" />
              <MotionImg
                src={laptopImage.src}
                alt={laptopImage.alt}
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[85%] md:w-[78%] xl:w-[82%] object-contain drop-shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <MotionImg
                src={android.src}
                alt={android.alt}
                className="absolute left-2 bottom-3 w-[38%] sm:w-[36%] md:w-[34%] lg:w-[32%] object-contain -rotate-6 origin-bottom drop-shadow-xl"
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              />
              <MotionImg
                src={iosImage.src}
                alt={iosImage.alt}
                className="absolute right-2 bottom-6 w-[36%] sm:w-[34%] md:w-[32%] lg:w-[30%] object-contain rotate-6 origin-bottom drop-shadow-xl"
                initial={{ opacity: 0, y: 30, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
