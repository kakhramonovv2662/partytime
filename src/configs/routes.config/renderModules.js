import React from 'react';

export const renderModuleRoutes = [
  {
    title: 'Hero Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/hero/hero.jsx')
    )
  },
  {
    title: 'About Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/about/about.jsx')
    )
  },
  {
    title: 'Portfolio Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/portfolio/portfolio.jsx')
    )
  },
  {
    title: 'Testimonial Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/testimonial/testimonial.jsx')
    )
  },
  {
    title: 'Services Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/services/services.jsx')
    )
  },
  {
    title: 'ContactUs Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/contactUs/contactUs.jsx')
    )
  },
  {
    title: 'Footer Section',
    path: '/',
    component: React.lazy(() =>
      import('../../components/modules/footer/footer.jsx')
    )
  },
];
