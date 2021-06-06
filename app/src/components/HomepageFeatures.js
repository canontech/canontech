import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Who We Are',
    Svg: require('../../static/img/canon_small.svg').default,
    description: (
      <>
        Joe Petrowski & Zeke Mostov, both working full time on Polkadot,
				Kusama and the underlying Substrate blockchain framework, bring their
				technical expertise to delivering secure validating infrastructure.
      </>
    ),
  },
	{
		title: 'Stake Polkadot',
		Svg: require('../../static/img/polkadot_symbol/SVG/Polkadot_symbol_black.svg').default,
		description: (
			<>
				Coming soon..
			</>
		),
	},
  {
    title: 'Stake Kusama ',
    Svg: require('../../static/img/kusama_transparent.svg').default,
    description: (
      <>
				Coming soon..
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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