import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: true,
    }),
    prerender: {
      entries: ['*']
    }
  }
};