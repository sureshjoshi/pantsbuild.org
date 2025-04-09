import clsx from "clsx";
import styles from "./index.module.css";
import React from "react";
import MDXContent from "@theme/MDXContent";
import Layout from "@theme/Layout";
import Index from "./_index.mdx";
import GitHubButton from "react-github-btn";

export default function Home() {
  return (
    <Layout>
      <main>
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <img src={"img/logo.svg"}
              className="heroBannerLogo"
              alt="Pants logo" />
            <h1 className="hero__title">Pants</h1>
            <p class="hero__subtitle">The ergonomic build system</p>

            <div class="heroButtons_gdhS name margin-vert--md">
              <a class="button button--outline button--primary button--lg margin-horiz--sm" href="/docs/getting-started">Get Started</a>
              <a class="button button--outline button--primary button--lg margin-horiz--sm" href="/docs/api">Learn More</a>
            </div>

            <GitHubButton href="https://github.com/pantsbuild/pants" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star pantsbuild/pants on GitHub">Star</GitHubButton>
          </div>
        </header>


        <section className="container">
          <div className={styles.usedBy}>
            <h3 className="">Used by</h3>
            <a href="">
              <img src={require("./spotlight/users/aiven.png").default} />
            </a>
            <a href="">
              <img src={require("./spotlight/users/astranis.png").default} />
            </a>
            <a href="">
              <img src={require("./spotlight/users/aviva.png").default} />
            </a>
            <a href="">
              <img src={require("./spotlight/users/coinbase.png").default} />
            </a>
            <a href="">
              <img src={require("./spotlight/users/exoflare.png").default} />
            </a>
          </div>
          <a href=""><p>And many more...</p></a>
        </section>

        <section className="container">
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
        </section>

      </main>
      <MDXContent>
        <Index />
      </MDXContent>
    </Layout >
  );
}
