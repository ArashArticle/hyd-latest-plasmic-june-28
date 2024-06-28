/* eslint-disable prettier/prettier */
import { initPlasmicLoader } from '@plasmicapp/loader-react';
//import { FeaturedProducts } from '~/components/FeaturedProducts';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'rcswM9RcMehErfbSY3sBPz', // ID of a project you are using
      token:
        'MMq7OnV5kYKxIVh9JbHocmK9n7FnPDq7UjxvIlWEa7BENqqRFLBdPEt5Oxoc6RuUnmez1wXttrY3o5EjLxD9g', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

/*PLASMIC.registerComponent(FeaturedProducts, {
  name: 'FeaturedProducts',
  props: {
    count: {
      type: 'number',
      defaultValue: 1,
    },
    heading: {
      type: 'string',
      defaultValue: 'Shop Best Sellers',
    },
    sortKey: {
      type: 'string',
      defaultValue: 'ID',
      hidden: () => true,
    },
  },
});*/
