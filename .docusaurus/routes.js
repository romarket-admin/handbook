import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/handbook/markdown-page',
    component: ComponentCreator('/handbook/markdown-page', 'cbc'),
    exact: true
  },
  {
    path: '/handbook/docs',
    component: ComponentCreator('/handbook/docs', '3d3'),
    routes: [
      {
        path: '/handbook/docs',
        component: ComponentCreator('/handbook/docs', '420'),
        routes: [
          {
            path: '/handbook/docs',
            component: ComponentCreator('/handbook/docs', '508'),
            routes: [
              {
                path: '/handbook/docs/category/general-information',
                component: ComponentCreator('/handbook/docs/category/general-information', 'fd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/category/hr-information',
                component: ComponentCreator('/handbook/docs/category/hr-information', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/category/lr-information',
                component: ComponentCreator('/handbook/docs/category/lr-information', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/category/mr-information',
                component: ComponentCreator('/handbook/docs/category/mr-information', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/category/tutorial---basics',
                component: ComponentCreator('/handbook/docs/category/tutorial---basics', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/category/tutorial---extras',
                component: ComponentCreator('/handbook/docs/category/tutorial---extras', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/general-info/maps',
                component: ComponentCreator('/handbook/docs/general-info/maps', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/general-info/ranks',
                component: ComponentCreator('/handbook/docs/general-info/ranks', 'ea6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/general-info/shr',
                component: ComponentCreator('/handbook/docs/general-info/shr', 'f4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/cmds',
                component: ComponentCreator('/handbook/docs/hr-info/cmds', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/promo',
                component: ComponentCreator('/handbook/docs/hr-info/promo', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/punishments',
                component: ComponentCreator('/handbook/docs/hr-info/punishments', '801'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/regs',
                component: ComponentCreator('/handbook/docs/hr-info/regs', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/shift',
                component: ComponentCreator('/handbook/docs/hr-info/shift', '71a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/hr-info/training',
                component: ComponentCreator('/handbook/docs/hr-info/training', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/intro',
                component: ComponentCreator('/handbook/docs/intro', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/lr-info/promo',
                component: ComponentCreator('/handbook/docs/lr-info/promo', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/lr-info/regs',
                component: ComponentCreator('/handbook/docs/lr-info/regs', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/mr-info/cmds',
                component: ComponentCreator('/handbook/docs/mr-info/cmds', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/mr-info/promo',
                component: ComponentCreator('/handbook/docs/mr-info/promo', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/mr-info/regs',
                component: ComponentCreator('/handbook/docs/mr-info/regs', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/handbook/docs/tutorial-basics/congratulations', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/handbook/docs/tutorial-basics/create-a-blog-post', 'd48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/handbook/docs/tutorial-basics/create-a-document', '392'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/handbook/docs/tutorial-basics/create-a-page', '1e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/handbook/docs/tutorial-basics/deploy-your-site', 'c92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/handbook/docs/tutorial-basics/markdown-features', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/handbook/docs/tutorial-extras/manage-docs-versions', '170'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/handbook/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/handbook/docs/tutorial-extras/translate-your-site', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/handbook/',
    component: ComponentCreator('/handbook/', 'c10'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
