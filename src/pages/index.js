import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import CodeBlock from "@theme/CodeBlock";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/category/get-started">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/Git21221/form-snippet"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: "Highly Customizable",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={styles.featureIcon}
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    description: (
      <>
        Build complex forms with ease using a wide range of highly customizable
        components built on top of Material UI.
      </>
    ),
  },
  {
    title: "Type Safe",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={styles.featureIcon}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    description: (
      <>
        Fully written in TypeScript, ensuring a smooth and error-free
        development experience with full IntelliSense support.
      </>
    ),
  },
  {
    title: "Easy Integration",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={styles.featureIcon}
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    description: (
      <>
        Seamlessly integrates with React Hook Form, giving you full control over
        your form state without the boilerplate.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className="text--center">{icon}</div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Modern form components for React projects."
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.codePreviewSection}>
          <div className="container">
            <Heading as="h2">Build Forms in Minutes</Heading>
            <p className={styles.heroSubtitle}>
              Clean, declarative API that feels natural to React developers.
            </p>
            <div className={styles.codePreviewContainer}>
              <CodeBlock language="jsx">
                {`import { FormWrapper, Input, Button } from "form-snippet";

export const MyForm = () => (
  <FormWrapper onSubmit={data => console.log(data)}>
    <Input name="email" label="Email" required />
    <Input name="password" label="Password" type="password" />
    <Button type="submit">Login</Button>
  </FormWrapper>
);`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
