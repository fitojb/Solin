import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Al día y de calidad',
    Svg: require('@site/static/img/calidad.svg').default,
    description: (
      <>
        Haga que sus traducciones estén a la vanguardia
        con criterios uniformes, acreditados y probados.
      </>
    ),
  },
  {
    title: 'Criterios fáciles de seguir',
    Svg: require('@site/static/img/criterios.svg').default,
    description: (
      <>
        No hallará aquí un tratado de gramática, pero este vademécum
        le apoyará en la resolución rápida de dudas frecuentes.
      </>
    ),
  },
  {
    title: 'Neutral e inclusivo',
    Svg: require('@site/static/img/inclusion.svg').default,
    description: (
      <>
        La base terminológica favorece la comprensión en todas las
        regiones hispanoparlantes. La guía de estilo brinda equidad
        y prioriza la inclusión.
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
