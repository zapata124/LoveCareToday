import * as React from 'react';
import { SVGProps } from 'react';
const AdoptionSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    // viewBox='0 0 400 399'
    // width={'90%'}
    // height={'90%'}
    {...props}
  >
    {/* <path
      d='m366 430-1 1h-5l-1 1h-4l-1 1h-3l-1 1h-2l-1 1h-3l-1 1h-1l-1 1h-2l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-2l-2 2h-1l-1 1h-1l-1 1h-1l-3 3h-1l-2 2h-1l-7 7h-1l-2 2v1l-1 1h-1v1l-4 4v1l-3 3v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v1l-1 1v2l-1 1v2l-1 1v2l-1 1v3l-1 1v4l-1 1v7l-1 1v34l1 1v7l1 1v5l1 1v4l1 1v4l1 1v2l1 1v3l1 1v2l1 1v2l1 1v2l1 1v2l1 1v2l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l2 2v1l1 1v1l2 2v1l2 2v1l2 2v1l2 2v1l2 2v1l2 2v1l2 2v1l3 3v1l4 4v1l2 2v1l4 4v1l4 4v1l4 4v1l5 5v1l7 7v1l10 10v1l6 6h1l22 22h1l8 8h1l5 5h1l6 6h1l5 5h1l3 3h1l3 3h1l3 3-2 2h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-3l-1 1h-2l-1 1h-2l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-3l-1 1h-4l-1 1h-4l-1 1h-4l-1 1h-5l-1 1h-5l-1 1h-5l-1 1h-8l-1 1h-5l-1 1h-8l-1 1h-9l-1 1h-13l-1 1h-45l-1-1h-12l-1-1h-8l-1-1-1 1-1-1h-9l-1-1h-8l-1-1h-6l-1-1h-6l-1-1h-6l-1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l2-2v-1l2-2v-4l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-2l-1-1v-2l-1-1v-1l-1-1v-2l-1-1v-3l-1-1v-2l-1-1v-2l-1-1v-4l-1-1v-3l-1-1v-5l-1-1v-5l-1-1v-8l-3 3v1l-2 2v1l-2 2v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-2 2v2l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v4l-1 1v4l1 1v3l1 1v2l1 1v1l7 7h1l2 2h1l1 1h3l1 1h3l1 1h4l1 1h4l1 1h4l1 1h5l1 1h5l1 1h5l1 1h6l1 1h6l1 1h8l1 1h6l1 1h8l1 1h9l1 1h10l1 1h13l1 1h16l1 1h49l1-1h14l1-1h10l1-1h9l1-1h7l1-1h6l1-1h5l1-1h5l1-1h5l1-1h5l1-1h4l1-1h4l1-1h3l1-1h4l1-1h3l1-1h3l1-1h3l1-1h3l1-1h3l1-1h3l1-1h2l1-1h3l1-1h3l1-1h2l1-1h2l1-1h2l1-1h2l1-1h2l1-1h2l1-1h3l1-1h1l1-1h2l1-1h2l1-1h2l1-1h2l1-1h1l1-1h2l1-1h1l1-1h2l1-1h2l1-1h1l1-1h2l1-1h1l1-1h1l1-1h2l1-1h1l1-1h1l1-1h1l1-1h1l1-1h1l1-1h1l1-1h1l1-1h2l1 1h1l1 1h1l1 1h1l1 1h1l1 1h1l1 1h2l1 1h1l1 1h1l1 1h2l1 1h1l1 1h2l1 1h1l1 1h2l1 1h1l1 1h2l1 1h2l1 1h1l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h2l1 1h3l1 1h2l1 1h2l1 1h3l1 1h2l1 1h3l1 1h3l1 1h4l1 1h3l1 1h3l1 1h3l1 1h4l1 1h4l1 1h4l1 1h4l1 1h5l1 1h5l1 1h4l1 1h6l1 1h6l1 1h7l1 1h7l1 1h8l1 1 1-1 1 1h11l1 1h54l1-1h14l1-1h12l1-1h10l1-1h7l1-1h7l1-1h7l1-1h7l1-1h6l1-1h6l1-1h6l1-1h5l1-1h5l1-1h5l1-1h5l1-1h4l1-1h4l1-1h3l1-1h1l2-2h1l6-6v-1l1-1v-1l1-1v-1l1-1v-3l1-1v-6l-1-1v-3l-1-1v-2l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-2-2v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1h-1v8l-1 1v3l-1 1v4l-1 1v3l-1 1v3l-1 1v3l-1 1v3l-1 1v2l-1 1v2l-1 1v2l-1 1v2l-1 1v2l-1 1v1l-1 1v2l-1 1v1l-1 1v2l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1 2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l1 1v2l1 1v1l1 1v1l1 1v1l1 1v2l1 1v2l-1 1h-7l-1 1h-6l-1 1h-6l-1 1h-5l-1 1h-7l-1 1h-12l-1 1h-11l-1 1h-45l-1-1h-12l-1-1h-9l-1-1h-10l-1-1h-8l-1-1h-5l-1-1h-5l-1-1h-4l-1-1h-5l-1-1h-4l-1-1h-4l-1-1h-4l-1-1h-4l-1-1h-3l-1-1h-3l-1-1h-3l-1-1h-3l-1-1h-3l-1-1h-3l-1-1h-3l-1-1h-2l-1-1h-3l-1-1h-2l-1-1h-2l-1-1h-2l-1-1h-2l-1-1h-3l-1-1h-2l-1-1h-1l-1-1h-2l-1-1h-1l-1-1 4-4h1l5-5h1l4-4h1l5-5h1l8-8h1l8-8h1l39-39v-1l9-9v-1l5-5v-1l5-5v-1l4-4v-1l3-3v-1l3-3v-1l3-3v-1l2-2v-1l3-3v-1l2-2v-1l1-1v-1l3-3v-1l1-1v-1l2-2v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-2l1-1v-1l1-1v-2l1-1v-1l1-1v-2l1-1v-1l1-1v-2l1-1v-3l1-1v-2l1-1v-3l1-1v-2l1-1v-3l1-1v-3l1-1v-4l1-1v-4l1-1v-5l1-1v-38l-1-1v-5l-1-1v-4l-1-1v-2l-1-1v-3l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-5-5v-1l-7-7h-1l-4-4h-1l-3-3h-1l-2-2h-1l-1-1h-1l-2-2h-1l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-2l-1-1h-1l-1-1h-2l-1-1h-2l-1-1h-3l-1-1h-3l-1-1h-4l-1-1h-5l-1-1h-30l-1 1h-6l-1 1h-5l-1 1h-3l-1 1h-4l-1 1h-3l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-2l-1 1h-1l-1 1h-2l-1 1h-1l-1 1h-1l-1 1h-2l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-1 1h-1l-2 2h-1l-1 1h-1l-2 2h-1l-1 1h-1l-2 2h-1l-2 2h-1l-1 1h-1l-2 2h-1l-2 2h-1l-1 1h-1l-3 3h-1l-1 1-2-2h-1l-2-2h-1l-2-2h-1l-2-2h-1l-2-2h-1l-2-2h-1l-1-1h-1l-2-2h-1l-1-1h-1l-2-2h-1l-1-1h-1l-2-2h-1l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-2l-1-1h-1l-1-1h-1l-1-1h-1l-1-1h-2l-1-1h-1l-1-1h-2l-1-1h-1l-1-1h-2l-1-1h-2l-1-1h-2l-1-1h-2l-1-1h-3l-1-1h-2l-1-1h-3l-1-1h-4l-1-1h-4l-1-1h-4l-1-1h-7l-1-1zM501 150l-1 1h-1l-1 1h-2l-2 2h-1l-5 5v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-1 1v1l-2 2v1l-1 1v1l-1 1v1l-1 1h2l1-1h3l1-1h2l1-1h3l1-1h4l1-1h7l1-1h29l1 1h7l1 1h4l1 1h4v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l2-2v-1l2-2v-1l1-1v-1l2-2v-1l1-1v-1l1-1v-1l2-2v-1l2-2v-1l2-2v-1l1-1v-1l2-2v-1l2-2v-1l2-2v-1l1-1v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2v-1l2-2 2 2v1l3 3v1l2 2v1l2 2v1l2 2v1l3 3v1l1 1v1l2 2v1l2 2v1l2 2v1l1 1v1l2 2v1l2 2v1l2 2v1l2 2v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l2 2v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l2 2v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1l1 1v1h1l1-1h3l1-1h3l1-1h7l1-1h29l1 1h7l1 1h4l1 1h3l1 1h3l1 1h2l1 1h2l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-2-2v-1l-2-2v-1l-2-2v-1l-1-1v-1l-2-2v-1l-6-6h-1l-1-1h-1l-1-1h-2l-1-1z'
      style={{
        fill: '#ff0000',
        stroke: '#00ff00',
        strokeWidth: 1,
      }}
    /> */}
    {/* <g fillRule='evenodd'>
      <path
        fill='#ec2c43'
        d='M198.57 51.1c-1.166 1.712-4.418 7.277-12.445 21.3-3.086 5.39-6.919 12.05-8.518 14.8-1.599 2.75-3.302 5.72-3.784 6.6-.482.88-3.19 5.56-6.018 10.4-2.828 4.84-6.571 11.32-8.317 14.4-1.746 3.08-3.544 6.23-3.995 7-.452.77-.623 1.22-.382 1 .402-.366 4.588-7.363 6.701-11.2.485-.88 2.456-4.3 4.382-7.6 3.817-6.544 18.443-31.894 22.453-38.917.465-.816 2.16-3.733 3.765-6.483 1.606-2.75 3.697-6.341 4.648-7.98 2.267-3.908 2.742-4.389 3.546-3.585.333.333 1.384 1.947 2.334 3.585.95 1.639 3.045 5.23 4.656 7.98 1.61 2.75 3.304 5.664 3.766 6.476A2592.788 2592.788 0 0 0 222.598 88.4c2.063 3.539 3.386 6.246 3.392 6.945.011 1.283-9.442 10.855-10.72 10.855-.598 0-2.479-2.459-3.824-5-.291-.55-2.203-3.88-4.247-7.4a2878.74 2878.74 0 0 1-4.657-8.037c-1.531-2.667-2.359-3.252-3.343-2.362-.44.398-1.224 1.461-1.741 2.362a3193.138 3193.138 0 0 1-9.304 16.037c-.522.88-1.79 3.13-2.817 5a256.33 256.33 0 0 1-3.535 6.2c-.917 1.54-2.696 4.6-3.955 6.8-2.431 4.248-6.391 11.049-10.83 18.6-1.488 2.53-3.241 5.59-3.897 6.8a95.314 95.314 0 0 1-2.311 4c-.97 1.562-3.27 5.547-9.18 15.905l-5.591 9.8c-2.289 4.012-5.09 8.825-6.225 10.695a207.618 207.618 0 0 0-3.602 6.2 333.002 333.002 0 0 1-3.775 6.607 429.46 429.46 0 0 0-2.836 4.883c-.853 1.53-7.16 12.448-12.079 20.91-2.302 3.96-4.949 8.55-5.883 10.2-.934 1.65-1.857 3.27-2.051 3.6-.194.33-1.485 2.56-2.87 4.954a7975.675 7975.675 0 0 1-3.517 6.081c-.55.949-2.511 4.39-4.357 7.645-5.308 9.361-4.766 9.195-11.28 3.455-6.593-5.811-6.516-5.286-1.896-12.892.854-1.406 1.474-2.635 1.378-2.731-.095-.096-.93 1.145-1.855 2.757-4.38 7.635-3.783 7.516-9.459 1.888-42.603-42.246-53.165-83.82-30.629-120.557C56.575 109.899 76.319 96.261 97.6 92.339c20.248-3.732 39.651-.063 57.044 10.786 2.421 1.51 3.336 1.587 4.425.375 1.265-1.408 6.531-10.905 6.531-11.778 0-3.488-22.017-13.4-34.576-15.567C84.713 68.166 42.181 90.93 24.064 133.4c-1.448 3.396-4.352 12.146-4.695 14.149-.136.798-.501 2.47-.81 3.715-2.109 8.494-2.097 26.386.023 34.136.301 1.1.676 2.806.833 3.791.705 4.416 5.379 16.816 9.266 24.583 2.74 5.476 4.394 8.299 9.211 15.726 14.039 21.647 42.279 48.935 72.508 70.065 5.941 4.153 6.341 4.06-17.024 3.939L73.4 303.4l-.121-.845c-.07-.493 1.052-2.82 2.701-5.6 4.339-7.316 4.981-8.66 4.689-9.821-.248-.99-9.256-8.861-11.114-9.71-1.52-.695-1.403-.868-11.997 17.776-1.812 3.19-3.954 6.88-4.76 8.2-5.265 8.628-8.908 15.536-8.519 16.153.374.593 7.366.647 83.365.647H210.6l8.899-5.367c4.895-2.952 8.826-5.441 8.737-5.531-.09-.09-1.935.922-4.1 2.248a466.245 466.245 0 0 1-9.195 5.431l-5.259 3.021-82.341-.101L45 319.8l-.128-.902c-.074-.521.515-1.955 1.395-3.4.838-1.374 1.795-2.994 2.128-3.6.333-.606 2.495-4.373 4.805-8.372 2.31-4 5.028-8.724 6.04-10.499 10.336-18.126 8.761-16.743 14.036-12.327 8.762 7.334 8.696 5.113.568 19.145-1.174 2.026-1.459 2.843-1.157 3.321.362.574 7.999.653 80.957.837 44.306.112 80.601.247 80.656.3.512.495-.318 1.375-2.5 2.652-1.429.836-2.721 1.718-2.87 1.959-.15.241.345.068 1.099-.385s2.226-1.314 3.271-1.914c2.071-1.189 2.495-2.362 1-2.763-.495-.133-20.392-.244-44.216-.247l-43.316-.005-1.672-.853c-.919-.469-2.127-1.171-2.684-1.56-.556-.389-3.892-2.594-7.412-4.9-17.3-11.334-39.718-28.14-40.399-30.284-.258-.812.471-2.156 11.39-21.003 2.04-3.52 4.111-7.12 4.604-8 .492-.88 3.19-5.56 5.995-10.4a21835.63 21835.63 0 0 0 28.407-49.2c2.913-5.06 7.329-12.71 9.812-17 2.483-4.29 6.074-10.5 7.981-13.8 1.907-3.3 5.086-8.79 7.065-12.2 1.98-3.41 3.857-6.65 4.172-7.2 1.799-3.139 2.697-3.159 4.655-.1 7.276 11.365 11.692 24.549 12.887 38.466.429 5.002.137 4.834 8.431 4.834 8.243 0 7.929.18 8.403-4.811 7-73.724 96.825-101.613 141.65-43.979 27.86 35.822 20.232 79.345-21.611 123.293-2.118 2.225-2.969 3.417-2.998 4.202-.047 1.234 6.7 13.111 7.656 13.478 1.566.601 13.716-12.473 22.843-24.583 4.34-5.757 5.352-7.208 9.004-12.9 6.535-10.185 14.38-28.191 15.646-35.909.161-.985.542-2.781.846-3.991 2.099-8.358 2.1-25.486.002-33.936-.309-1.245-.674-2.917-.81-3.715-.698-4.073-4.434-14.049-7.697-20.549C351.86 85.012 302.25 64.332 258 79.09c-9.971 3.325-19.687 8.349-27.2 14.064-3.9 2.966-1.856 5.541-18.212-22.954-13.558-23.62-12.2-21.768-14.018-19.1m4.137 35.8c1.086 1.815 2.43 4.11 2.985 5.1.555.99 2.741 4.809 4.859 8.488 4.615 8.018 4.557 7.037.729 12.257-3.68 5.018-5.602 8.055-8.45 13.352-2.927 5.442-2.842 5.441-5.644.103-2.516-4.793-4.988-8.725-8.462-13.455-3.838-5.228-3.893-4.306.729-12.289 2.119-3.661 4.305-7.466 4.859-8.456 3.232-5.784 5.004-8.4 5.688-8.4.489 0 1.384 1.092 2.707 3.3m33.986 33.4c-8.246 8.637-8.935 9.765-7.501 12.283.507.889 1.681 2.967 2.609 4.617.929 1.65 3.305 5.79 5.282 9.2 8.452 14.582 12.943 22.35 17.924 31a18270.664 18270.664 0 0 0 28.408 49.2c2.807 4.84 5.505 9.52 5.995 10.4.49.88 2.559 4.48 4.599 8 11.747 20.276 11.713 20.213 11.275 21.175-1.551 3.405-34.613 27.146-53.484 38.405-3.96 2.363-9 5.388-11.2 6.722-5.914 3.587-15.939 9.367-18.106 10.439-1.042.516-6.201 3.15-11.464 5.853-11.294 5.8-10.966 5.74-16.053 2.961L191.4 328.6l-16-.104c-19.146-.124-19.938.079-13.597 3.472 1.538.823 3.607 1.952 4.597 2.507 5.474 3.074 19.92 10.426 29.4 14.963 3.141 1.504 5.255 1.505 8.4.003 8.957-4.277 23.972-11.92 29.4-14.965a560.675 560.675 0 0 1 7.8-4.279c1.54-.835 4.06-2.274 5.6-3.2 1.54-.926 4.6-2.744 6.8-4.04l4-2.357 48.756-.2c44.352-.182 48.794-.258 49.165-.847.389-.617-3.254-7.525-8.519-16.153-.806-1.32-2.947-5.01-4.759-8.2-1.812-3.19-5.018-8.77-7.125-12.4-2.106-3.63-4.497-7.77-5.313-9.2-.817-1.43-3.158-5.48-5.204-9a2258.59 2258.59 0 0 1-7.482-13c-2.07-3.63-3.957-6.78-4.192-7-.843-.79-.695-.52 7.394 13.4 1.215 2.09 4.177 7.22 6.582 11.4 2.406 4.18 6.048 10.48 8.094 14a1880.98 1880.98 0 0 1 5.562 9.627 3096.06 3096.06 0 0 0 6.041 10.499c2.31 3.999 4.472 7.766 4.805 8.372.333.606 1.29 2.226 2.128 3.6.88 1.445 1.469 2.879 1.395 3.4l-.128.902-46.45.102c-53.259.116-49.652.39-43.88-3.337a1461.747 1461.747 0 0 0 15.147-9.898l4.017-2.667h21.434c25.811 0 24.097.578 19.495-6.577-.574-.893-2.889-4.863-5.144-8.823-2.256-3.96-5.335-9.27-6.843-11.8-1.508-2.53-3.591-6.13-4.627-8a370.791 370.791 0 0 0-3.765-6.6 786.248 786.248 0 0 1-4.231-7.333 873.682 873.682 0 0 0-3.353-5.846c-.55-.941-2.133-3.672-3.517-6.067a1115.396 1115.396 0 0 0-2.876-4.954c-.198-.33-1.374-2.4-2.614-4.6-1.241-2.2-3.939-6.88-5.997-10.4-3.63-6.208-9.967-17.17-11.327-19.593a463.079 463.079 0 0 0-2.905-5 333.002 333.002 0 0 1-3.775-6.607c-.847-1.54-2.468-4.33-3.602-6.2-1.135-1.87-3.936-6.683-6.225-10.695l-5.591-9.8c-5.91-10.358-8.21-14.343-9.18-15.905-.615-.99-1.658-2.79-2.319-4-1.758-3.223-6.173-10.818-7.063-12.152-1.583-2.372-1.204-3.225 3.989-8.978 2.616-2.898 4.887-5.27 5.047-5.27 1.001 0 1.806.905 3.77 4.244 1.216 2.066 2.31 3.756 2.431 3.756.12 0-.132-.585-.561-1.3-.429-.715-1.283-2.2-1.898-3.3-2.618-4.684-3.091-4.836-5.894-1.9m-82.677 7.818c-.305.485-2.524 4.302-4.932 8.482l-9.677 16.8c-5.6 9.722-13.548 23.485-19.52 33.8-1.974 3.41-5.614 9.71-8.089 14-2.474 4.29-6.528 11.31-9.008 15.6-2.48 4.29-5.584 9.69-6.899 12a650.901 650.901 0 0 1-4.28 7.4c-2.784 4.714-4.59 8.055-4.106 7.6.396-.373 4.554-7.336 6.807-11.4 2.238-4.036 8.367-14.725 10.781-18.8.977-1.65 1.929-3.27 2.115-3.6.711-1.258 7.438-12.992 8.392-14.638.55-.949 2.427-4.209 4.171-7.244a901.459 901.459 0 0 1 5.428-9.318c1.242-2.09 3.578-6.14 5.192-9 1.615-2.86 3.336-5.83 3.825-6.6.49-.77 2.555-4.37 4.59-8 2.036-3.63 4.107-7.23 4.604-8 .496-.77 2.028-3.38 3.405-5.8a825.49 825.49 0 0 1 5.286-9.124c1.531-2.598 2.713-4.795 2.626-4.882-.086-.087-.407.239-.711.724m91.184-.696c0 .22.249.755.552 1.189.304.434 1.011 1.599 1.57 2.589.56.99 2.903 5.04 5.208 9s6.134 10.62 8.51 14.8c2.376 4.18 4.618 8.05 4.983 8.6.365.55 1.982 3.34 3.592 6.2 1.611 2.86 3.944 6.91 5.186 9a901.459 901.459 0 0 1 5.428 9.318c1.744 3.035 3.621 6.295 4.171 7.244.954 1.646 7.681 13.38 8.392 14.638.186.33 1.138 1.95 2.115 3.6 1.51 2.549 5.898 10.161 8.941 15.509 4.799 8.433 8.286 14.363 8.641 14.691.64.593.209-.166-15.4-27.2-2.414-4.18-6.413-11.11-8.887-15.4-2.475-4.29-6.115-10.59-8.089-14a26389.313 26389.313 0 0 1-29.398-50.958c-4.626-8.036-5.515-9.458-5.515-8.82m69.785 154.318c.406.296 1.025 1.101 1.376 1.789.946 1.849 5.437 9.705 8.129 14.217 1.366 2.291 2.303 4.304 2.232 4.8l-.122.854-19.976.104c-13.829.072-20.107-.029-20.4-.326-.55-.556 1.11-2.037 6.808-6.071 4.838-3.426 10.238-7.54 16.51-12.579 4.526-3.636 4.383-3.563 5.443-2.788'
      />
      <path
        fill='#07222b'
        d='M199.192 51.01c-.278.335-1.261 1.91-2.183 3.5a4844.21 4844.21 0 0 1-4.597 7.89c-1.605 2.75-3.3 5.667-3.765 6.483-4.01 7.023-18.636 32.373-22.453 38.917-1.926 3.3-3.897 6.72-4.382 7.6-.484.88-2.1 3.67-3.59 6.2-1.491 2.53-3.348 5.77-4.127 7.2-.779 1.43-1.811 3.23-2.293 4-.482.77-2.364 4.01-4.182 7.2-1.817 3.19-3.711 6.43-4.209 7.2-.497.77-2.569 4.37-4.605 8-2.035 3.63-4.1 7.23-4.59 8-.489.77-2.21 3.74-3.825 6.6-1.614 2.86-3.95 6.91-5.192 9a901.459 901.459 0 0 0-5.428 9.318 3613.674 3613.674 0 0 1-4.171 7.244c-.954 1.646-7.681 13.38-8.392 14.638-.186.33-1.138 1.95-2.115 3.6-2.414 4.075-8.543 14.764-10.781 18.8-.549.99-2.218 3.87-3.709 6.4a998.094 998.094 0 0 0-3.401 5.8c-.38.66-1.262 2.165-1.962 3.344-4.122 6.951-4.223 6.422 2.323 12.191 6.514 5.74 5.972 5.906 11.28-3.455 1.846-3.255 3.807-6.696 4.357-7.645.55-.949 2.133-3.686 3.517-6.081 1.385-2.394 2.676-4.624 2.87-4.954.194-.33 1.117-1.95 2.051-3.6.934-1.65 3.581-6.24 5.883-10.2 4.919-8.462 11.226-19.38 12.079-20.91a429.46 429.46 0 0 1 2.836-4.883 333.002 333.002 0 0 0 3.775-6.607c.847-1.54 2.468-4.33 3.602-6.2 1.135-1.87 3.936-6.683 6.225-10.695l5.591-9.8c5.91-10.358 8.21-14.343 9.18-15.905.615-.99 1.655-2.79 2.311-4 .656-1.21 2.409-4.27 3.897-6.8 4.439-7.551 8.399-14.352 10.83-18.6 1.259-2.2 3.038-5.26 3.955-6.8a256.33 256.33 0 0 0 3.535-6.2c1.027-1.87 2.295-4.12 2.817-5 .922-1.554 7.412-12.74 9.304-16.037 2.072-3.609 3.012-3.609 5.084 0 .516.9 2.612 4.517 4.657 8.037 2.044 3.52 3.956 6.85 4.247 7.4 1.345 2.541 3.226 5 3.824 5 1.278 0 10.731-9.572 10.72-10.855-.006-.699-1.329-3.406-3.392-6.945a2592.788 2592.788 0 0 1-11.236-19.524 978.498 978.498 0 0 0-3.766-6.476c-1.611-2.75-3.683-6.301-4.605-7.89-1.827-3.149-2.526-4.11-2.991-4.11-.166 0-.53.274-.808.61m34.606 73.06c-5.193 5.753-5.572 6.606-3.989 8.978.89 1.334 5.305 8.929 7.063 12.152.661 1.21 1.704 3.01 2.319 4 .97 1.562 3.27 5.547 9.18 15.905l5.591 9.8c2.289 4.012 5.09 8.825 6.225 10.695 1.134 1.87 2.755 4.66 3.602 6.2s2.545 4.513 3.775 6.607a463.079 463.079 0 0 1 2.905 5c1.36 2.423 7.697 13.385 11.327 19.593 2.058 3.52 4.756 8.2 5.997 10.4 1.24 2.2 2.416 4.27 2.614 4.6.197.33 1.491 2.56 2.876 4.954 1.384 2.395 2.967 5.126 3.517 6.067.55.942 2.059 3.573 3.353 5.846a786.248 786.248 0 0 0 4.231 7.333c1.034 1.76 2.728 4.73 3.765 6.6 1.036 1.87 3.119 5.47 4.627 8 1.508 2.53 4.587 7.84 6.843 11.8 2.255 3.96 4.57 7.93 5.144 8.823 4.602 7.155 6.316 6.577-19.495 6.577h-21.434l-3.917 2.6a1513.72 1513.72 0 0 1-15.247 9.965c-5.772 3.727-9.379 3.453 43.88 3.337L355 319.8l.128-.902c.074-.521-.515-1.955-1.395-3.4-.838-1.374-1.795-2.994-2.128-3.6-.333-.606-2.495-4.373-4.805-8.372-2.31-4-5.029-8.724-6.041-10.499a1997.405 1997.405 0 0 0-5.559-9.627 8770.812 8770.812 0 0 1-16.865-29.187 5582.288 5582.288 0 0 0-5.185-9 6035.21 6035.21 0 0 1-9.302-16.104c-3.043-5.348-7.431-12.96-8.941-15.509-.977-1.65-1.929-3.27-2.115-3.6a5318.584 5318.584 0 0 0-8.392-14.638c-.55-.949-2.427-4.209-4.171-7.244a901.459 901.459 0 0 0-5.428-9.318 553.646 553.646 0 0 1-5.186-9c-1.61-2.86-3.227-5.65-3.592-6.2-.365-.55-2.607-4.42-4.983-8.6-2.376-4.18-6.205-10.84-8.51-14.8-5.7-9.794-6.177-10.622-6.918-12-3.493-6.498-5.583-9.4-6.767-9.4-.16 0-2.431 2.372-5.047 5.27M67.912 278.3c-.547.627-3.208 5.146-8.672 14.727a3059.17 3059.17 0 0 1-6.04 10.499c-2.31 3.999-4.472 7.766-4.805 8.372-.333.606-1.29 2.226-2.128 3.6-.88 1.445-1.469 2.879-1.395 3.4l.128.902 82.341.101 82.341.101 5.259-3.022c2.892-1.661 6.879-4.013 8.859-5.226 1.98-1.213 3.994-2.418 4.476-2.679 4.636-2.512 6.684-4.134 6.024-4.772-.055-.053-36.35-.188-80.656-.3-72.958-.184-80.595-.263-80.957-.837-.302-.478-.017-1.295 1.157-3.321 8.128-14.032 8.194-11.811-.568-19.145-3.935-3.294-4.401-3.502-5.364-2.4'
      />
      <path
        fill='#fbfbfb'
        d='M0 200v200h400V0H0v200M200.899 50.3c.687.773 1.657 2.424 11.689 19.9C228.944 98.695 226.9 96.12 230.8 93.154c10.394-7.906 26.158-14.926 38.176-16.999 46.344-7.994 88.83 14.744 106.96 57.245 1.448 3.396 4.352 12.146 4.695 14.149.136.798.501 2.47.81 3.715 2.098 8.45 2.097 25.578-.002 33.936a59.398 59.398 0 0 0-.846 3.991c-.734 4.471-5.4 16.843-9.274 24.583-2.74 5.476-4.394 8.299-9.211 15.726-7.723 11.908-26.975 33.863-29.008 33.083-.956-.367-7.703-12.244-7.656-13.478.029-.785.88-1.977 2.998-4.202 30.342-31.869 42.709-62.741 36.53-91.196-11.826-54.468-74.12-80.251-120.572-49.904-20.657 13.496-33.506 35.55-35.997 61.786-.474 4.991-.16 4.811-8.403 4.811-8.294 0-8.002.168-8.431-4.834-1.195-13.917-5.611-27.101-12.887-38.466-1.958-3.059-2.856-3.039-4.655.1-.315.55-2.192 3.79-4.172 7.2-1.979 3.41-5.158 8.9-7.065 12.2-1.907 3.3-5.498 9.51-7.981 13.8-2.483 4.29-6.899 11.94-9.812 17a21835.63 21835.63 0 0 1-28.407 49.2c-2.805 4.84-5.503 9.52-5.995 10.4-.493.88-2.564 4.48-4.604 8-10.919 18.847-11.648 20.191-11.39 21.003.681 2.144 23.099 18.95 40.399 30.284 3.52 2.306 6.856 4.511 7.412 4.9.557.389 1.765 1.091 2.684 1.56l1.672.853 43.316.005c23.824.003 43.721.114 44.216.247 1.605.43 1.059 1.599-1.4 2.998-1.265.719-6.8 4.018-12.3 7.329l-10 6.021h-82.956c-75.999 0-82.991-.054-83.365-.647-.389-.617 3.254-7.525 8.519-16.153.806-1.32 2.948-5.01 4.76-8.2 10.594-18.644 10.477-18.471 11.997-17.776 1.858.849 10.866 8.72 11.114 9.71.292 1.161-.35 2.505-4.689 9.821-1.649 2.78-2.771 5.107-2.701 5.6l.121.845 19.976.104c23.365.121 22.965.214 17.024-3.939-30.229-21.13-58.469-48.418-72.508-70.065-4.817-7.427-6.471-10.25-9.211-15.726-3.887-7.767-8.561-20.167-9.266-24.583a43.294 43.294 0 0 0-.833-3.791c-2.12-7.75-2.132-25.642-.023-34.136.309-1.245.674-2.917.81-3.715.343-2.003 3.247-10.753 4.695-14.149 18.117-42.47 60.649-65.234 106.96-57.245 12.559 2.167 34.576 12.079 34.576 15.567 0 .873-5.266 10.37-6.531 11.778-1.089 1.212-2.004 1.135-4.425-.375-9.127-5.693-18.688-9.358-29.008-11.119C91.472 86.177 57.101 103.74 41.496 135c-17.448 34.952-6.406 72.824 32.86 112.7 7.178 7.29 6.39 7.219 10.072.9 2.089-3.586 2.832-4.872 10.057-17.4 2.094-3.63 5.833-10.11 8.311-14.4 2.477-4.29 6.528-11.31 9.002-15.6 2.475-4.29 6.115-10.59 8.089-14 5.972-10.315 13.92-24.078 19.52-33.8 2.915-5.06 7.329-12.71 9.811-17 2.482-4.29 6.523-11.31 8.98-15.6 2.457-4.29 6.781-11.76 9.608-16.6 2.827-4.84 5.535-9.52 6.017-10.4.482-.88 2.185-3.85 3.784-6.6 1.599-2.75 5.432-9.41 8.518-14.8 13.909-24.298 13.441-23.598 14.774-22.1m-3.606 36.6a261.224 261.224 0 0 0-2.981 5.1c-.554.99-2.74 4.795-4.859 8.456-4.622 7.983-4.567 7.061-.729 12.289 3.474 4.73 5.946 8.662 8.462 13.455 2.802 5.338 2.717 5.339 5.644-.103 2.848-5.297 4.77-8.334 8.45-13.352 3.828-5.22 3.886-4.239-.729-12.257A1464.027 1464.027 0 0 1 205.692 92c-3.284-5.856-5.008-8.4-5.692-8.4-.489 0-1.384 1.092-2.707 3.3m43.17 32.2c.558.605 2.145 3.08 3.529 5.5 1.383 2.42 4.441 7.73 6.794 11.8 2.354 4.07 6.717 11.63 9.697 16.8a22251.398 22251.398 0 0 0 19.63 34c1.974 3.41 5.614 9.71 8.089 14 2.474 4.29 6.475 11.22 8.892 15.4 9.45 16.35 16.795 29.079 20.312 35.2 2.022 3.52 5.35 9.28 7.395 12.8 2.046 3.52 4.387 7.57 5.204 9 .816 1.43 3.207 5.57 5.313 9.2 2.107 3.63 5.313 9.21 7.125 12.4 1.812 3.19 3.953 6.88 4.759 8.2 5.265 8.628 8.908 15.536 8.519 16.153-.371.589-4.813.665-49.165.847l-48.756.2-4 2.357c-2.2 1.296-5.26 3.114-6.8 4.04-1.54.926-4.06 2.365-5.6 3.2a560.675 560.675 0 0 0-7.8 4.279c-5.428 3.045-20.443 10.688-29.4 14.965-3.145 1.502-5.259 1.501-8.4-.003-9.48-4.537-23.926-11.889-29.4-14.963-.99-.555-3.059-1.684-4.597-2.507-6.341-3.393-5.549-3.596 13.597-3.472l16 .104 3.577 1.955c5.087 2.779 4.759 2.839 16.053-2.961 5.263-2.703 10.422-5.337 11.464-5.853 2.167-1.072 12.192-6.852 18.106-10.439 2.2-1.334 7.24-4.359 11.2-6.722 18.871-11.259 51.933-35 53.484-38.405.438-.962.472-.899-11.275-21.175-2.04-3.52-4.109-7.12-4.599-8-.49-.88-3.188-5.56-5.995-10.4a18270.664 18270.664 0 0 1-28.408-49.2c-4.981-8.65-9.472-16.418-17.924-31-1.977-3.41-4.353-7.55-5.282-9.2a1174.39 1174.39 0 0 0-2.609-4.617c-1.434-2.518-.745-3.646 7.501-12.283 2.545-2.666 2.449-2.635 3.77-1.2m69.079 165.428c-6.272 5.039-11.672 9.153-16.51 12.579-5.698 4.034-7.358 5.515-6.808 6.071.293.297 6.571.398 20.4.326l19.976-.104.122-.854c.071-.496-.866-2.509-2.232-4.8-2.692-4.512-7.183-12.368-8.129-14.217-.605-1.185-1.782-2.329-2.395-2.329-.155 0-2.146 1.497-4.424 3.328'
      />
    </g> */}
  </svg>
);
export default AdoptionSVG;
