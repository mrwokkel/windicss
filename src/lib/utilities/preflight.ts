// (Last Update: Aug 22 2020) [https://github.com/sindresorhus/modern-normalize/blob/master/modern-normalize.css]
// (Last Update: Jan 30 2021) [https://github.com/tailwindlabs/tailwindcss/blob/master/src/plugins/css/preflight.css]

import { hex2RGB } from '../../utils/tools';
import type { ThemeUtil } from '../../interfaces';

export const preflights: {
  keys: string[];
  properties: {
    [key: string]: string | string[] | ((theme: ThemeUtil) => string);
  };
  selector?: string;
  global?: boolean;
}[] = [
  {
    keys: ['*'],
    global: true,
    selector: '*, ::before, ::after',
    properties: {
      'box-sizing': 'border-box',
      'border-width': '0',
      'border-style': 'solid',
      'border-color': 'currentColor',
    },
  },
  {
    keys: ['*'],
    global: true,
    selector: '::before, ::after',
    properties: {
      '--tw-content': '\'\'',
    },
  },
  {
    keys: ['html'],
    global: true,
    selector: 'html',
    properties: {
      'line-height': '1.5',
      '-webkit-text-size-adjust': '100%',
      '-moz-tab-size': '4',
      'tab-size': '4',
      'font-family': (theme) => theme('fontFamily.sans', 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"') as string,
    },
  },
  {
    keys: ['body'],
    global: true,
    selector: 'body',
    properties: {
      'margin': '0',
      'line-height': 'inherit',
    },
  },
  {
    keys: ['hr'],
    properties: {
      'height': '0',
      'color': 'inherit',
      'border-top-width': '1px',
    },
  },
  {
    keys: ['title'],
    global: true,
    selector: 'abbr[title]',
    properties: {
      'text-decoration': 'underline dotted',
    },
  },
  {
    keys: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    properties: {
      'font-size': 'inherit',
      'font-weight': 'inherit',
    },
  },
  {
    keys: ['a'],
    properties: {
      'color': 'inherit',
      'text-decoration': 'inherit',
    },
  },
  {
    keys: ['b', 'strong'],
    properties: {
      'font-weight': 'bolder',
    },
  },
  {
    keys: ['code', 'kbd', 'samp', 'pre'],
    properties: {
      'font-family': (theme) => theme('fontFamily.mono', 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace') as string,
      'font-size': '1em',
    },
  },
  {
    keys: ['small'],
    properties: {
      'font-size': '80%',
    },
  },
  {
    keys: ['sub', 'sup'],
    properties: {
      'font-size': '75%',
      'line-height': '0',
      'position': 'relative',
      'vertical-align': 'baseline',
    },
  },
  {
    keys: ['sub'],
    properties: {
      'bottom': '-0.25em',
    },
  },
  {
    keys: ['sup'],
    properties: {
      'top': '-0.5em',
    },
  },
  {
    keys: ['table'],
    properties: {
      'text-indent': '0',
      'border-color': 'inherit',
      'border-collapse': 'collapse',
    },
  },
  {
    keys: ['button', 'input', 'optgroup', 'select', 'textarea'],
    properties: {
      'font-family': 'inherit',
      'font-size': '100%',
      'line-height': 'inherit',
      'color': 'inherit',
      'margin': '0',
      'padding': '0',
    },
  },
  {
    keys: ['button', 'select'],
    properties: {
      'text-transform': 'none',
    },
  },
  {
    keys: ['button'],
    selector: 'button, [type=\'button\'], [type=\'reset\'], [type=\'submit\']',
    properties: {
      '-webkit-appearance': 'button',
      'background-color': 'transparent',
      'background-image': 'none',
    },
  },
  {
    keys: ['*'],
    global: true,
    selector: ':-moz-focusring',
    properties: {
      'outline': 'auto',
    },
  },
  {
    keys: ['*'],
    global: true,
    selector: ':-moz-ui-invalid',
    properties: {
      'box-shadow': 'none',
    },
  },
  {
    keys: ['progress'],
    properties: {
      'vertical-align': 'baseline',
    },
  },
  {
    keys: ['spin'],
    global: true,
    selector: '::-webkit-inner-spin-button, ::-webkit-outer-spin-button',
    properties: {
      'height': 'auto',
    },
  },
  {
    keys: ['search'],
    global: true,
    selector: '[type=\'search\']',
    properties: {
      '-webkit-appearance': 'textfield',
      'outline-offset': '-2px',
    },
  },
  {
    keys: ['search'],
    global: true,
    selector: '::-webkit-search-decoration',
    properties: {
      '-webkit-appearance': 'none',
    },
  },
  {
    keys: ['file'],
    global: true,
    selector: '::-webkit-file-upload-button',
    properties: {
      '-webkit-appearance': 'button',
      'font': 'inherit',
    },
  },
  {
    keys: ['summary'],
    properties: {
      'display': 'list-item',
    },
  },
  {
    keys: ['blockquote', 'dl', 'dd', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'figure', 'p', 'pre'],
    properties: {
      'margin': '0',
    },
  },
  {
    keys: ['fieldset'],
    properties: {
      'margin': '0',
      'padding': '0',
    },
  },
  {
    keys: ['legend'],
    properties: {
      'padding': '0',
    },
  },
  {
    keys: ['ol', 'ul'],
    properties: {
      'list-style': 'none',
      'margin': '0',
      'padding': '0',
    },
  },
  {
    keys: ['textarea'],
    properties: {
      'resize': 'vertical',
    },
  },
  {
    keys: ['input'],
    selector: 'input::placeholder',
    properties: {
      'opacity': '1',
      'color': (theme) => theme('colors.gray.400', '#9ca3af') as string,
    },
  },
  {
    keys: ['textarea'],
    selector: 'textarea::placeholder',
    properties: {
      'opacity': '1',
      'color': (theme) => theme('colors.gray.400', '#9ca3af') as string,
    },
  },
  {
    keys: ['button'],
    selector: 'button, [role="button"]',
    properties: {
      'cursor': 'pointer',
    },
  },
  {
    keys: ['*'],
    selector: ':disabled',
    properties: {
      'cursor': 'default',
    },
  },
  {
    keys: ['img', 'svg', 'video', 'canvas', 'audio', 'iframe', 'embed', 'object'],
    properties: {
      'display': 'block',
      'vertical-align': 'middle',
    },
  },
  {
    keys: ['img', 'video'],
    properties: {
      'max-width': '100%',
      'height': 'auto',
    },
  },
  {
    keys: ['*'],
    selector: '[hidden]',
    properties: {
      'display': 'none',
    },
  },
  // Should this be here? And if so, why? Not part of preflight css?
  // see https://github.com/tailwindlabs/tailwindcss/blob/bf59a88c3eef78087f95e97753ddcf22c3362a8b/src/corePlugins.js#L1840
  {
    keys: ['*'],
    global: true,
    selector: '*',
    properties: {
      '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
      '--tw-ring-offset-width': theme => theme('ringOffsetWidth.DEFAULT', '0px') as string,
      '--tw-ring-offset-color': theme => theme('ringOffsetColor.DEFAULT', '#fff') as string,
      '--tw-ring-color': theme => `rgba(${hex2RGB(theme('ringColor.DEFAULT', '#93C5FD') as string)?.join(', ')}, ${theme('ringOpacity.DEFAULT', '0.5') as string})`,
      '--tw-ring-offset-shadow': '0 0 #0000',
      '--tw-ring-shadow': '0 0 #0000',
    },
  },
  // Should this be here? And if so, why? Not part of preflight css?
  // see https://github.com/tailwindlabs/tailwindcss/blob/bf59a88c3eef78087f95e97753ddcf22c3362a8b/src/corePlugins.js#L1846
  {
    keys: ['*'],
    global: true,
    selector: '*',
    properties: {
      '--tw-shadow': '0 0 #0000',
    },
  },
];
