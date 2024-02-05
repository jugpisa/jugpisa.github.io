import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jugpisa.github.io',
  integrations: [react({
    experimentalReactChildren: true
  }), 
  sitemap({
    serialize(item){
      if(item.url.includes('eventi/') || item.url.includes('archivio/')){
        if(item.url.endsWith('eventi/') || item.url.endsWith('archivio/')) return item;
        return undefined;
      }
      return item;
    },
    i18n: {
      defaultLocale: 'it',
      locales: {
        it: 'it-IT'
      }
    }
  }),
  tailwind(),
  mdx()]
});