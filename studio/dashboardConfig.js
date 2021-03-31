export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6064fc423cbaf3007e6320e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-22-studio',
                  apiId: '342a7e21-6b45-4b7f-ad29-015283829b16'
                },
                {
                  buildHookId: '6064fc4258474f00bfa3b2e1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-22',
                  apiId: 'dde555d2-552f-4b72-a453-ec707cac5e82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ThomasGuy/sanity-gatsby-portfolio22',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-22.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
