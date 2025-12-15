import React from 'react';

// Ícones sólidos SVG
const LockerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 14H9v-1h2v1zm4 0h-2v-1h2v1zm.5-4h-7c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5z"/>
    <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2h6v2H9V8zm0 4h6v2H9v-2z"/>
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
  </svg>
);

const SecureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const NoQueueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const features = [
  {
    icon: <LockerIcon />,
    altText: 'locker de retirada',
    title: 'Retirada em 10 Min',
    description: 'Nos lockers mais próximos',
  },
  {
    icon: <SupportIcon />,
    altText: 'suporte ao cliente',
    title: 'Suporte 24/7',
    description: 'Atendimento o dia todo',
  },
  {
    icon: <SecureIcon />,
    altText: 'pagamento seguro',
    title: 'Pagamento Seguro',
    description: '100% Seguro e Criptografado',
  },
  {
    icon: <NoQueueIcon />,
    altText: 'sem filas',
    title: 'Sem Filas',
    description: 'Compra antecipada',
  },
];

const FeatureBar = () => {
  return (
    <section className="feature-bar border-top">
      <div className="container">
        <div className="row py-3 g-5 g-lg-4 justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-sm-6 mb-3 mb-md-0"
            >
              <div className="feature-bar__item d-flex align-items-center">
                <div className="feature-bar__icon text-primary" style={{ minWidth: '48px' }}>
                  {feature.icon}
                </div>
                <div className="feature-bar__text ms-4">
                  <h3 className="feature-bar__title fs-6 fw-bold mb-0">
                    {feature.title}
                  </h3>
                  <p
                    style={{ whiteSpace: 'nowrap' }}
                    className="feature-bar__description fs-7 mb-0"
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
