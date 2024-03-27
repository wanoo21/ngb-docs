import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import starlight from "@astrojs/starlight";
import favicon from "./src/static/logo-60.png";

import {SITE_DATA} from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: 'https://ngb.email',
  integrations: [solidJs(), starlight({
    title: 'Guide to Email Editor',
    favicon: favicon.src,
    logo: {
      src: '@/static/logo-160.png',
      replacesTitle: true,
    },
    social: {
      twitter: SITE_DATA.twitterUrl,
      github: SITE_DATA.githubUrl,
      discord: SITE_DATA.discordUrl,
    },
    sidebar: [
      {
        label: 'Start Here',
        items: [
          {label: 'Introduction', link: '/guides'},
          {label: 'Getting Started', link: '/guides/getting-started'},
          // { label: 'FAQ', link: '/guides/faq' },
          // { label: 'Changelog', link: '/guides/changelog' },
        ]
      },
      {
        label: 'Blocks',
        autogenerate: {directory: 'guides/blocks'}
      },
      {
        label: 'Included Blocks',
        autogenerate: {directory: 'guides/default-blocks'}
      },
      {
        label: 'Services',
        autogenerate: {directory: 'guides/services'},
        collapsed: true,
      },
      {
        label: 'Directives',
        autogenerate: {directory: 'guides/directives'},
        collapsed: true,
      },
      {
        label: 'Pipes',
        autogenerate: {directory: 'guides/pipes'},
        collapsed: true,
      },
      {
        label: 'References',
        autogenerate: {directory: 'guides/references'},
        collapsed: true,
      }
    ],
    editLink: {
      baseUrl: 'https://github.com/wanoo21/ngb-docs/edit/main/',
    },
  }),
    tailwind({
      applyBaseStyles: true,
    })
  ]
});
