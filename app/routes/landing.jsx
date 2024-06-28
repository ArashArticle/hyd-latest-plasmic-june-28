/* eslint-disable prettier/prettier */
import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import {
  loadModelData,
  PlasmicModelRenderer,
} from '@plasmicapp/model-renderer-react';

import { PLASMIC } from '~/plasmic-init';

export async function loader({ params, context }) {
  const repr = await loadModelData({
    componentName: 'Landing',
    projectId: 'rcswM9RcMehErfbSY3sBPz',
    projectApiToken:
      'MMq7OnV5kYKxIVh9JbHocmK9n7FnPDq7UjxvIlWEa7BENqqRFLBdPEt5Oxoc6RuUnmez1wXttrY3o5EjLxD9g',
    preview: false,
  });

  return json({
    repr,
  });
}

export default function Landing() {
  const { repr } = useLoaderData();

  return (
    <PlasmicModelRenderer
      repr={repr}
      loader={PLASMIC}
      componentName={'Landing'}
      componentProps={{}}
      globalVariants={{ experiment: 'override' }}
    />
  );
}
