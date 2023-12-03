"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const MohitVachhani = (props: Props) => {
  const [xScroll, setXScroll] = useState(0);
  const [yScroll, setYScroll] = useState(0);
  const [xMouse, setXMouse] = useState(0);
  const [yMouse, setYMouse] = useState(0);
  const handleMouseMove = (e: any) => {
    const { pageX, pageY } = e;
    setXMouse(pageX);
    setYMouse(pageY);
  };
  const handleScroll = (e: any) => {
    setXScroll(0);
    setYScroll(e.target.scrollTop);
  };
  //   const expandCursor = (_) => {
  //     this.setState({
  //       expand: true,
  //     });
  //   };
  const getStyle = (xMain: number, yMain: number) => {
    return {
      background: `radial-gradient(600px at ${xMain} ${yMain}, rgba(29, 78, 216, 0.15), transparent 80%)`,
    };
  };
  //creating a ref
  const ref = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  const [xMain, yMain] = [xScroll + xMouse, yScroll + yMouse];
  //     console.log("updating class");
  //     let el = document.getElementById("test");
  //     if (el)
  //       el.style.background = `radial-gradient(600px at ${xMain} ${yMain}, rgba(29, 78, 216, 0.15), transparent 80%)`;
  //     if (ref?.current)
  //       ref.current.style.background = `radial-gradient(600px at ${xMain}px ${yMain}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  //   }, [xMouse, xScroll, yMouse, yScroll]);

  return (
    <div>
      {/* saved from url=(0027)https://MohitVachhani.com/ */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Mohit Vachhani</title>
      <meta
        name="description"
        content="Mohit Vachhani is a software engineer who builds accessible, inclusive products and digital experiences for the web."
      />
      <meta name="image" content="https://MohitVachhani.com/og.png" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Mohit Vachhani" />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@bchiang7" />
      <meta property="twitter:site" content="@bchiang7" />
      <meta property="og:title" content="Mohit Vachhani" />
      <meta
        property="og:description"
        content="Mohit Vachhani is a software engineer who builds accessible, inclusive products and digital experiences for the web."
      />
      <meta property="og:url" content="https://MohitVachhani.com/" />
      <meta property="og:image" content="https://MohitVachhani.com/og.png" />
      <meta property="twitter:title" content="Mohit Vachhani" />
      <meta
        property="twitter:description"
        content="Mohit Vachhani is a software engineer who builds accessible, inclusive products and digital experiences for the web."
      />
      <meta property="twitter:url" content="https://MohitVachhani.com/" />
      <meta
        property="twitter:image"
        content="https://MohitVachhani.com/og.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x192"
        href="https://MohitVachhani.com/favicon/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://MohitVachhani.com/favicon/android-chrome-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://MohitVachhani.com/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://MohitVachhani.com/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://MohitVachhani.com/favicon/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://MohitVachhani.com/favicon/site.webmanifest"
      />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="theme-color" content="#0f172a" />
      <meta
        name="google-site-verification"
        content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
      />
      <meta name="next-head-count" content={"29"} />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/730e8169368baf37-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/f1f0c35b32161446-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/d593a8df799d4ab1-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/dc792b508e6f91c7-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/84d3493a9fd22f1c-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/fcb100c7607696fd-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/d90f295d0c348006-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/579e0f95cacfae57-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="https://MohitVachhani.com/_next/static/media/828a494e04a45cbd-s.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        data-next-font="size-adjust"
      />
      <link
        rel="preload"
        href="./Mohit Vachhani_files/f2449264126c18aa.css"
        as="style"
      />
      {/* <link
        rel="stylesheet"
        href="./Mohit Vachhani_files/f2449264126c18aa.css"
        data-n-g
      /> */}
      <noscript data-n-css />
      {/* <link
        as="script"
        rel="prefetch"
        href="./Mohit Vachhani_files/archive-443c4086ec3debb0.js"
      /> */}
      <div id="containerWrap" onScroll={handleScroll}>
        <div
          className="__variable_20b187 group/spotlight relative"
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div
            // className={"cursor"}
            // style={{
            //   left: xMain,
            //   top: yMain,
            // }}
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            // style={getStyle(xMain, yMain)}
            style={{
              background: `radial-gradient(600px at ${xMain}px ${yMain}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
            id="test"
            ref={ref}
          />

          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <a
              href="https://MohitVachhani.com/#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </a>
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="https://MohitVachhani.com/">Mohit Vachhani</a>
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Experienced Product Engineer
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    I craft scalable, optimized and future-forward solutions
                  </p>
                  <nav
                    className="nav hidden lg:block"
                    aria-label="In-page jump links"
                  >
                    <ul className="mt-16 w-max">
                      <li>
                        <a
                          className="group flex items-center py-3 active"
                          href="/#about"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            About
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3"
                          href="/#experience"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Experience
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3"
                          href="/#projects"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            Projects
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <ul
                  className="ml-1 mt-8 flex items-center text-slate-400"
                  aria-label="Social media"
                >
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://github.com/MohitVachhani"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://www.linkedin.com/in/mohit-vachhani-6b0582118/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    </a>
                  </li>
                  <li className="mr-5 text-xs">
                    <a
                      className="block hover:text-slate-200"
                      href="https://twitter.com/mohitvachhani55"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 248 204"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          id="white_background"
                          d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </header>
              <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label="About me"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      About
                    </h2>
                  </div>
                  <div className="text-slate-400">
                    <p className="mb-4">
                      {
                        "Hello there! I'm a Software Architect from Ahmedabad, and I've spent over 5 years perfecting the art of building kick-ass software systems. Picture this – I'm all about making things run like a well-oiled machine, ensuring they not only meet but surpass expectations."
                      }
                    </p>
                    <p className="mb-4">
                      In my world, it&apos;s not just about writing code;
                      it&apos;s about creating systems that are the envy of
                      efficiency. I&apos;ve danced through various industries,
                      tackling challenges and turning them into success stories.
                      Clean, modular, and user-friendly – that&apos;s the mantra
                      I swear by.
                    </p>
                    <p>
                      Ahmedabad is not just where I work; it&apos;s my tech
                      playground. I&apos;m deeply rooted in the local scene, but
                      my gaze is set globally. Staying on top of the latest tech
                      trends is my thing – it&apos;s the secret sauce to making
                      sure the solutions I architect are not just up-to-date but
                      ready for whatever the future throws at them.
                    </p>
                    <p>
                      So, if you&apos;re on the lookout for a Software Architect
                      who doesn&apos;t just speak code but also understands the
                      language of innovation and efficiency, let&apos;s chat.
                      I&apos;m all about turning your tech dreams into a
                      reality!
                    </p>
                  </div>
                </section>
                <section
                  id="experience"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                  aria-label="Work experience"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                      Experience
                    </h2>
                  </div>
                  <div>
                    <ol className="group/list">
                      <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                          <header
                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                            aria-label="2018 to Present"
                          >
                            2018 — Present
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                  href="https://lyearn.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label="Product Engineer - 3  at Lyearn"
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                  <span>
                                    Product Engineer - {/* */}{" "}
                                    <span className="inline-block">
                                      Lyearn
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-slate-400">
                              Team Leadership for Feature Delivery: Spearheaded
                              a team of developers, ensuring the consistent
                              delivery of features while upholding code
                              standards and maintaining high backend API
                              performance. Microservice Architecture
                              Enhancement: Led a team of developers in
                              implementing pivotal changes within our
                              microservice architecture. The goal was to
                              optimize API response times, specifically
                              targeting P90s to achieve sub-500ms performance.
                              Dual Role: Team Leadership and Architecture
                              Design: Acted as both a team leader and a key
                              contributor to architectural design decisions.
                              This multifaceted role involved guiding the team
                              and actively participating in shaping the future
                              architecture of the project.
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  NodeJs
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  GoLang
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  GraphQl
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  JavaScript
                                </div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  TypeScript
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ol>

                    <div className="mt-12">
                      <a
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                        aria-label="View Full Résumé"
                        href="https://MohitVachhani.com/resume.pdf"
                      >
                        <span>
                          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Full{/* */}{" "}
                          </span>
                          <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                              Résumé
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </section>

                <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                  <p>
                    Inpired by {/* */}{" "}
                    <a
                      href="https://brittanychiang.com/"
                      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://brittanychiang.com/
                    </a>{" "}
                  </p>
                </footer>
              </main>
              <div>
                <button
                  className="hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R4l6:"
                  data-state="closed"
                >
                  <span className="sr-only">Click to time travel</span>
                  {/* <Image
                    alt="Spinning Tardis from Doctor Who"
                    loading="lazy"
                    width={100}
                    height={86}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    // srcSet="/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&w=128&q=75 1x, /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&w=256&q=75 2x"
                    src="./Mohit Vachhani_files/rotate.gif"
                  /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <next-route-announcer>
        <p
          aria-live="assertive"
          id="__next-route-announcer__"
          role="alert"
          style={{
            border: "0px",
            clip: "rect(0px, 0px, 0px, 0px)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: "0px",
            position: "absolute",
            top: "0px",
            width: "1px",
            whiteSpace: "nowrap",
            overflowWrap: "normal",
          }}
        />
      </next-route-announcer>
      <grammarly-desktop-integration data-grammarly-shadow-root="true">
        <template shadowrootmode="open" />
      </grammarly-desktop-integration> */}
    </div>
  );
};

export default MohitVachhani;
