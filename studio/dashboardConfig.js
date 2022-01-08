export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61d95b1aab867c112f276680',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-2ir8k5dn',
                  apiId: '7b0e6891-7925-4b49-9705-d37acc6183e2'
                },
                {
                  buildHookId: '61d95b1a3d5c0307eaae2736',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-9q736ejb',
                  apiId: '2db97393-d3d0-4294-b734-8c8e024e7584'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zen0bit/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-9q736ejb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
