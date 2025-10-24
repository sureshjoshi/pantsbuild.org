import clsx from "clsx";
import styles from "./index.module.css";
import React from "react";
import MDXContent from "@theme/MDXContent";
import Layout from "@theme/Layout";
import Index from "./_index.mdx";
import GitHubButton from "react-github-btn";
import Terminal from "../components/Terminal";
import CodeViewer from "../components/CodeViewer";

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <UsersSection />
        <FeaturesSection />
        <CommunitySection />
      </main>
    </Layout>
  );
}

function HeroSection() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
              Fast, scalable, and user-friendly—Pants is the build system that
              grows with your codebase. Python, Go, JVM, Shell & more.
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
            {/* I don't want to install a dep just for this */}
            {/* <GitHubButton
              href="https://github.com/pantsbuild/pants"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-size="large"
              data-show-count="true"
              aria-label="Star pantsbuild/pants on GitHub"
            >
              Star
            </GitHubButton> */}
          </div>
        </div>
      </div>
    </header>
  );
}

const SAMPLE_PLUGIN = `@rule(level=LogLevel.DEBUG)
async def package_fooify() -> BuiltPackage:
    empty_digest = await Get(Digest, CreateDigest())
    return BuiltPackage(digest=empty_digest, artifacts=())

def rules() -> Iterable[Rule | UnionRule]:
    return collect_rules()
`;

const SAMPLE_BUILD = `python_sources()

python_tests(name="tests")

# Yeah, that's it...
`;

function FeaturesSection() {
  function FeatureTitle({ title, contents }) {
    return (
      <>
        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
          {title}
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          {contents}
        </p>
      </>
    );
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          ???Deploy harder, better, faster???
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Build, test, and deploy with confidence
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-rows-2 lg:grid-cols-3 auto-rows-fr">
          {/* Supply Chain  */}
          <div className="bg-white relative overflow-hidden rounded-xl p-6 outline outline-black/5 shadow-sm">
            <FeatureTitle
              title="Resistant to supply chain attacks"
              contents="Pants supports multiple resolves and lockfiles for hermetic, repeatable builds—even with conflicting dependency versions."
            />
          </div>

          {/* Easy to extend */}
          <div className="bg-white relative overflow-hidden rounded-xl p-6 md:col-span-2 outline outline-black/5 shadow-sm">
            <FeatureTitle
              title="Easy to Extend"
              contents="Pants has a powerful async Python 3 plugin API—the same one used by its own built-in rules."
            />
            <div className="">
              <CodeViewer filename="register.py" code={SAMPLE_PLUGIN} />
            </div>
          </div>

          {/* Git friendly  */}
          <div className="bg-white relative overflow-hidden rounded-xl p-6 md:col-span-2 outline outline-black/5 shadow-sm">
            <FeatureTitle
              title="Git friendly"
              contents='Pants natively speaks git, so you can do things like "run all the tests affected by changes between main and my current branch".'
            />
            <div className="overflow-hidden">
              <Terminal />
            </div>
          </div>

          {/* Adoption  */}
          <div className="bg-white relative overflow-hidden rounded-xl p-6 outline outline-black/5 shadow-sm">
            <FeatureTitle
              title="Easy to adopt"
              contents="Pants infers most metadata with static analysis and smart defaults—minimal BUILD files, auto-generated when needed."
            />
            <div className="">
              <CodeViewer filename="BUILD" code={SAMPLE_BUILD} />
            </div>
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
    icon: "img/undraw_online-community_3o0l.svg",
  },
  {
    name: "Open Source, Open Roadmap",
    description:
      "Transparent development and community-driven priorities. Your voice helps shape what comes next.",
    icon: "img/undraw_development_s4gv.svg",
  },
  {
    name: "Contributions Encouraged",
    description:
      "From bug reports to features, Pants makes it easy to get involved—with a plugin-friendly design and mentorship available.",
    icon: "img/undraw_github-profile_abde.svg",
  },
  {
    name: "Docs Built for Humans",
    description:
      "Clear, thorough, and growing fast—our docs are written with real developers (like you) in mind.",
    icon: "img/undraw_google-docs_khfo.svg",
  },
];

function CommunitySection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Community Focused
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            ???Community Focused???
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div>
                <dt className="text-center text-base/7 font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <div className="flex gap-2 items-center">
                  <div className="flex-1/3">
                    <img
                      src={feature.icon}
                      aria-hidden="true"
                      className="size-36"
                    />
                  </div>
                  <div className="flex-2/3">
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function UsersSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
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
      </div>
    </div>
  );
}
