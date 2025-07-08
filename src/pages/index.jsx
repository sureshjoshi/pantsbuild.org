import clsx from "clsx";
import styles from "./index.module.css";
import React from "react";
import MDXContent from "@theme/MDXContent";
import Layout from "@theme/Layout";
import Index from "./_index.mdx";
import GitHubButton from "react-github-btn";
// import HeroTerminal from "../components/Terminal";
export default function Home() {
  return (
    <Layout>
      <main className="featureSeparator">
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            {/* <div className={styles.terminal}> */}
            {/* <HeroTerminal /> */}
            {/* </div> */}

            {/* <div className="heroButtons_gdhS name margin-vert--md">
              <a className="button button--outline button--primary button--lg margin-horiz--sm" href="/docs/getting-started">Get Started</a>
              <a className="button button--outline button--primary button--lg margin-horiz--sm" href="/docs/api">Learn More</a>
            </div> */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <div className="text-center">
                <div className="flex items-center">
                  <img
                    src={"img/logo.svg"}
                    className="aspect-square size-48 sm:size-60 "
                    alt="Pants logo"
                  />
                  <div>
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                      Pants
                    </h1>
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                      The ergonomic build system
                    </h2>
                  </div>
                </div>

                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Fast, scalable, and user-friendly—Pants is the build system
                  that grows with your codebase. Python, Go, JVM, Shell & more.
                </p>
                <div className="mt-10 mb-4 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="https://pantsbuild.slack.com"
                    className="text-sm/6 font-semibold text-gray-900"
                  >
                    Chat on Slack<span aria-hidden="true">→</span>
                  </a>
                </div>
                <GitHubButton
                  href="https://github.com/pantsbuild/pants"
                  data-color-scheme="no-preference: light; light: light; dark: dark;"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star pantsbuild/pants on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
            </div>
          </div>
        </header>

        {/* <section className="container">
          <div className="row">
            <div className="col col--8">
              <h1>What is Pants?</h1>
              <p>
                Pants is a fast, scalable, user-friendly build system for codebases of all sizes. It's currently focused on Python, Go, Java, Scala, Kotlin, Shell, and Docker, with support for other languages and frameworks coming soon.
              </p>
            </div>
          </div>

          <div className="row">
            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_maintenance_rjtm.svg" className={styles.featureImage} />
              <h3>Much easier to adopt and maintain</h3>
              <p>
                Pants requires very minimal BUILD file metadata/boilerplate.
                It uses a combination of static analysis and sensible defaults to infer most of that information on the fly.
                So your BUILD files can be very minimal — and even those can be
                generated and updated for you!
              </p>
            </div>

            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_secure-server_lz9x.svg" className={styles.featureImage} />
              <h3>Resistant to supply chain attacks</h3>
              <p>
                Pants has out-of-the-box support for multiple dependency resolves and their corresponding lockfiles,
                so you can have hermetic, repeatable builds that are resilient to supply chain attacks,
                even in complex situations where you have multiple versions of the same dependencies in different parts of the codebase.
              </p>
            </div>

            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_in-the-zone_07y7.svg" className={styles.featureImage} />
              <h3>Meets you where you are</h3>
              <p>
                Pants operates, underneath it all, at the file level. So even if you have fine-grained dependency
                tangles (or even cycles!) that prevent you from creating modular BUILD targets and dependencies,
                Pants can work with that.
              </p>
            </div>
          </div>

          <div className="row">
            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_product-iteration_r2wg.svg" className={styles.featureImage} />
              <h3>Easy to extend</h3>
              <p>
                Pants has a rich plugin API that uses idiomatic async Python 3, in case you need any customizations.
                In fact the built-in rules use that same API.
              </p>
            </div>

            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_version-control_e4yu.svg" className={styles.featureImage} />
              <h3>Git-friendly</h3>
              <p>
                Pants natively speaks git, so you can do things like "run all the tests affected by changes between
                main and my current branch".
              </p>
            </div>

            <div className={clsx("col margin-vert--md", styles.featureBlock)}>
              <img src="img/undraw_programming_65t2.svg" className={styles.featureImage} />
              <h3>First-class Python</h3>
              <p>
                You'll find no subsets like Starlark here. Pants empowers you with full support for Python.
              </p>
            </div>
          </div>
        </section> */}
        <Example4 />

        <Example />

        <Example2 />
      </main>
      {/* <MDXContent> 
        <Index />
      </MDXContent> */}
    </Layout>
  );
}

function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          ???Deploy harder, better, faster???
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Build, test, and deploy with confidence
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Git friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants natively speaks git, so you can do things like "run all
                  the tests affected by changes between main and my current
                  branch".
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Easy to adopt
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants infers most metadata with static analysis and smart
                  defaults—minimal BUILD files, auto-generated when needed.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Resistant to supply chain attacks
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants supports multiple resolves and lockfiles for hermetic,
                  repeatable builds—even with conflicting dependency versions.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Easy to Extend
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants has a powerful async Python 3 plugin API—the same one
                  used by its own built-in rules.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    {/* Your code example */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: "Welcoming & Active Community",
    description:
      "Join a friendly, growing group of developers in Slack, GitHub, and forums—always ready to help and collaborate.",
    icon: "CloudArrowUpIcon",
  },
  {
    name: "Open Source, Open Roadmap",
    description:
      "Transparent development and community-driven priorities. Your voice helps shape what comes next.",
    icon: "LockClosedIcon",
  },
  {
    name: "Contributions Encouraged",
    description:
      "From bug reports to features, Pants makes it easy to get involved—with a plugin-friendly design and mentorship available.",
    icon: "ArrowPathIcon",
  },
  {
    name: "Docs Built for Humans",
    description:
      "Clear, thorough, and growing fast—our docs are written with real developers (like you) in mind.",
    icon: "FingerPrintIcon",
  },
];

function Example2() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Community Focused
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            ???Community Focused???
          </p>
          {/* <p className="mt-6 text-lg/8 text-gray-700">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Example4() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Users
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          ???Trusted by???
        </p>
        <section className="mt-10 sm:mt-16">
          <div className="flex items-center justify-start overflow-hidden mb-4">
            <div className="flex items-center justify-start w-fit animate-[ticker_60s_linear_infinite]">
              <img
                className="x-8 max-h-12 min-w-48 object-contain w-48"
                src={require("./spotlight/users/aiven.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/astranis.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/aviva.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/brand24.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/chartbeat.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/coinbase.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/doctrine.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/embark.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/esl.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/exoflare.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/foursquare.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/geminus.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/grapl.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/housing-anywhere.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/iManage.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/kaiko.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/aiven.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/astranis.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/aviva.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/brand24.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/chartbeat.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/coinbase.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/doctrine.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/embark.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/esl.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/exoflare.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/foursquare.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/geminus.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/grapl.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/housing-anywhere.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/iManage.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/kaiko.png").default}
              />
            </div>
          </div>

          <div className="flex items-center justify-start overflow-hidden">
            <div className="flex items-center justify-start w-fit animate-[ticker_55s_linear_infinite]">
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/lablup.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/myst-ai.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/ocrolus.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/orca-security.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/pave.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/payhere.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/people-data-labs.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/ponder.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/rippling.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/salesforce.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/snowfall.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/tessian.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/unit.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/valon.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/vicara-solutions.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/whisper.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/lablup.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/myst-ai.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/ocrolus.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/orca-security.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/pave.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/payhere.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/people-data-labs.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/ponder.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/rippling.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/salesforce.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/snowfall.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/tessian.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/unit.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/valon.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/vicara-solutions.png").default}
              />
              <img
                className={styles.usedBy__ticker__img}
                src={require("./spotlight/users/whisper.png").default}
              />
            </div>
          </div>
        </section>
        {/* <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Git friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants natively speaks git, so you can do things like "run all the tests affected by changes between main and my current branch".
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Easy to adopt</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants infers most metadata with static analysis and smart defaults—minimal BUILD files, auto-generated when needed.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Resistant to supply chain attacks</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants supports multiple resolves and lockfiles for hermetic, repeatable builds—even with conflicting dependency versions.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Easy to Extend
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Pants has a powerful async Python 3 plugin API—the same one used by its own built-in rules.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}
        {/* </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
