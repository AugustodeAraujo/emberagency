import Container from "@/components/Container";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownToLine } from "lucide-react";

export default function Home() {
  return (
    <Container className='text-[#DEDCDD] font-sans '>
      {/* Header */}

      <Header />
      {/* <header className='fixed w-10/12 bg-black/20  text-[#DEDCDD] lg:w-1/2 mx-auto left-0 right-0 z-50 flex justify-center lg:justify-between items-center py-4 px-5 text-sm uppercase backdrop-blur-lg  rounded-full shadow mt-4'>
        <div className='hidden lg:flex gap-6'>
          <span className='text-xs'>Sobre</span>
          <span className='text-xs'>Serviços</span>
        </div>
        <div className='text-sm tracking-widest font-mono text-center'>
          THE WEB<span className='line-through'> FCKN </span> STUDIO
        </div>
        <div className='hidden lg:flex  gap-6'>
          <span className='text-xs'>Cases</span>
          <span className='text-xs'>Contato</span>
        </div>
      </header> */}

      <main className='bg-black text-white font-sans min-h-screen'>
        {/* Hero Section */}
        <section className='flex flex-col items-center justify-center h-screen relative px-4'>
          <div className='text-center'>
            <div className='mb-8'>
              {/* Logo Placeholder */}
              <div className='w-36 h-36 flex items-center justify-center mx-auto mb-4 z-0'>
                <div className='relative w-36 h-36 z-10'>
                  {[90, 150, 210].map((deg, i) => (
                    <div
                      key={i}
                      className='absolute inset-0 w-full h-12 bg-[#fd8625] origin-center'
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>
              </div>
              <h1 className='text-2xl font-semibold tracking-wide'>
                make it <span className='font-bold'>simple</span>.
              </h1>
            </div>
            <a href='#about' className='block'>
              <ArrowDownToLine className='w-5 h-5 animate-bounce opacity-60 mx-auto' />
            </a>
          </div>
        </section>

        {/* Welcome Section */}
        <section id='about' className='px-6 md:px-20 py-20 max-w-7xl mx-auto'>
          <p className='text-sm text-red-500 font-semibold mb-2'>
            (2) Discover more about us
          </p>
          <h2 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
            Welcome to <br /> our{" "}
            <span className='text-neutral-300'>studio!</span>
          </h2>
          <p className='text-lg font-medium text-neutral-300 mb-12'>
            We help our clients to realize <br />
            <span className='italic'>the full potential of their space.</span>
          </p>

          <div className='grid md:grid-cols-3 gap-12 text-sm text-neutral-400'>
            <div className='md:col-span-1 h-64 bg-neutral-800 rounded-lg'></div>
            <div className='md:col-span-1'>
              <p>
                As multidisciplinary architects and designers, we consider the
                synthesis of aesthetics and function to be at the heart of our
                work.
              </p>
              <p className='mt-4'>
                We collaborate closely with other experts in their field,
                including brand and graphic designers, photographers, artists,
                and associates from other professions.
              </p>
            </div>
            <div className='md:col-span-1'>
              <p>
                Make it Simple, an architecture studio specializing in
                innovative solutions for its clients in the public and private
                sectors was founded in Vienna by Dipl.-Ing. Brando Jacobi.
              </p>
              <p className='mt-4'>
                Our studio’s unique blend of contemporary observation and
                classic design is born through each emotional connection to
                detail and an appreciation for the practical and spatial.
              </p>
            </div>
          </div>

          <div className='mt-20 grid md:grid-cols-2 gap-12 items-center'>
            <div className='h-64 bg-neutral-800 rounded-lg'></div>
            <div>
              <p className='text-white text-xl font-semibold leading-relaxed'>
                We believe that the design <br /> should be both timeless <br />{" "}
                and meaningful, where <br /> each detail reflects a <br /> sense
                of quality and <br /> performance.
              </p>
              <p className='text-sm text-red-500 mt-4'>
                (2a) That's why we offer a full <br /> range of Services.{" "}
                <span className='underline cursor-pointer'>Discover</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Features */}
      <section id='services' className='bg-neutral-900 py-20 px-6'>
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
                <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
                <p className='text-xs text-gray-400'>{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Works */}
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
  );
}
