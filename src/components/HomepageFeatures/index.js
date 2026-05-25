import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome to RoMarket',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Thank you for playing RoMarket. We hope you enjoy your experince. If you encounter any issues, please do let us know.
      </>
    ),
  },
  {
    title: 'Staff Handbook',
    link: "docs/intro.mdx",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Get helpful information about working at RoMarket such as Staff Regulations, Guides, and Store Maps.
      </>
    ),
  },
  {
    title: 'Join our Community!',
    link: "https://discord.gg/5Ypu3HGVhc",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Join the Discord Server to chat with other staff members or customers and recieve support from higher ranks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
