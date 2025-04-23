import Container from "@/components/Container";
import Header from "@/components/Header";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Flame } from "lucide-react";
import Image from "next/image";

import logo from "../../../public/ember-ov-logo.webp";
import bg from "../../../public/bg.png";

import team from "../../../public/fireteam.png";

export default function Home() {
  return (
    <>
      <Container className='text-[#DEDCDD] font-sans '>
        <Header />
      </Container>

      <main
        className='bg-black text-white font-sans min-h-screen'
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <section className='flex flex-col items-center justify-center h-screen relative px-4'>
            <div className='text-center'>
              <div className=''>
                <Image
                  src={logo}
                  alt='Ember logo'
                  className='w-24 mx-auto mb-10'
                />
              </div>
              <a href='#about' className='block '>
                <div className='flame-glow'>
                  <Flame className='w-6 h-6 text-[#FE4108] animate-pulse' />
                </div>
              </a>
            </div>
          </section>

          <section id='about' className='px-6 md:px-20 py-20 max-w-7xl mx-auto'>
            <p className='text-sm text-[#FE4108] font-semibold mb-2'>
              WHAT?! <span className='line-through'>WTF</span>!?
            </p>
            <h2 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
              TECH
              <br /> & MARKETING <br /> & FIRE
            </h2>
            <p className='text-lg font-medium text-neutral-300 mb-12'>
              Through technology and marketing
              <br />
              <span className='italic'>
                we <span className='font-mono'>forge</span> amazing things
              </span>
              <br />
              to ignite a better world.
            </p>

            <div className='grid md:grid-cols-3 gap-12 text-sm text-neutral-400'>
              <Image
                src={team}
                alt='team fire ember studio'
                className='object-cover h-96 rounded-lg hover:opacity-90 hover:scale-105 ease-in-out'
              />
              <div className='md:col-span-1'>
                <p>
                  Our squad blend cutting-edge technology with bold design to
                  forge experiences that spark emotion and drive transformation.
                </p>
                <p className='mt-4'>
                  We are creators, coders, artists, and strategists united by a
                  passion for aesthetics, storytelling, tech and functional
                  innovation.
                </p>
                <p>
                  From immersive digital platforms to visually striking
                  campaigns, our work is fueled by collaboration and
                  purpose—igniting brands that aim to change the world.
                </p>
              </div>
              <div className='md:col-span-1'></div>
            </div>

            <div className='mt-20 grid md:grid-cols-2 gap-12 items-center'>
              <div className='h-64 bg-neutral-800 rounded-lg'></div>
              <div>
                <p className='text-white text-xl font-semibold leading-relaxed'>
                  We believe that everything <br /> should be both timeless{" "}
                  <br /> and meaningful, where <br /> each detail reflects a{" "}
                  <br /> sense of quality and <br /> performance.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <section
        id='services'
        className='bg-black rounded-t-[4rem] -mt-12 py-20 px-6 w-full'
      >
        <Container>
          <div className='flex justify-between items-start mb-10'>
            <h2 className='text-2xl font-bold uppercase'>Features</h2>
            <div className='text-sm text-gray-400'>Launch with Ease</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-sm'>
            {[
              {
                title: "Unlimited Requests",
                desc: "Get unlimited task request. Prioritize what is needed in your business.",
              },
              {
                title: "Launch Fast",
                desc: "Get started requests taken immediately after subscribing and expect a 2 day average turnaround time.",
              },
              {
                title: "Start Today",
                desc: "Get started requests taken immediately after subscribing and expect a 2 day average turnaround time.",
              },
              {
                title: "Pause Or Cancel Anytime",
                desc: "Easily pause or cancel your subscription at any point, giving you the flexibility your business needs.",
              },
              {
                title: "Affordable Pricing",
                desc: "Save up to 70% per year hiring our team compared to hiring a full-time designer & developer in the United States.",
              },
            ].map((feature, i) => (
              <Card key={i} className='bg-neutral-800 border-none'>
                <CardContent className='p-6'>
                  <h3 className='text-lg font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-xs text-gray-400'>{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <Container>
        <section id='cases' className='bg-black py-20 px-6'>
          <h2 className='text-3xl font-light text-center mb-10 uppercase'>
            Our Works
          </h2>
          <div
            id='contact'
            className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          >
            {[
              "Savage Nation / Digital Collectible",
              "Gooey Crunch / Ecommerce",
              "Kaizen Talent / Marketing Agency",
              "Placeholder Work 4",
              "Placeholder Work 5",
              "Placeholder Work 6",
            ].map((text, i) => (
              <div
                key={i}
                className='bg-neutral-700 h-64 w-full rounded-lg flex items-end justify-between p-4 text-xs text-white relative group overflow-hidden'
              >
                <span>{text}</span>
                <ArrowUpRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
