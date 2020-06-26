import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NewRelicIcon.module.scss';

const NewRelicIcon = ({ className, name, size = '1em' }) => {
  const paths = NEWRELIC_ICONS[name];

  return paths ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cx(styles.icon, className)}
      style={{ width: size, height: size }}
    >
      {paths}
    </svg>
  ) : null;
};

const NEWRELIC_ICONS = {
  automation: (
    <>
      <g>
        <path
          d="M14.6,14.3l1.4-0.8l-1.9-3.3l-1.4,0.8c-0.7-0.6-1.5-1.1-2.4-1.4V7.9H6.4v1.6C5.5,9.8,4.7,10.3,4,10.9l-1.4-0.8
		l-1.9,3.3L2,14.3c-0.2,1-0.2,1.8,0,2.8l-1.4,0.8l1.9,3.3L4,20.4c0.7,0.6,1.5,1.1,2.4,1.4v1.6h3.9v-1.6c0.9-0.3,1.7-0.8,2.4-1.4
		l1.4,0.8l1.9-3.3l-1.4-0.8C14.8,16.1,14.8,15.2,14.6,14.3z"
        />
        <circle cx="8.3" cy="15.7" r="2.6" />
      </g>
      <g>
        <path
          d="M22.7,4.2l0.8-0.5l-1.2-2l-0.8,0.5c-0.4-0.4-0.9-0.7-1.5-0.8v-1h-2.3v1c-0.5,0.2-1,0.5-1.5,0.8l-0.8-0.5
		l-1.2,2l0.8,0.5c-0.1,0.6-0.1,1.1,0,1.7l-0.8,0.5l1.2,2l0.8-0.5c0.4,0.4,0.9,0.7,1.5,0.8v1h2.3v-1c0.5-0.2,1-0.5,1.5-0.8l0.8,0.5
		l1.2-2l-0.8-0.5C22.9,5.3,22.9,4.8,22.7,4.2z"
        />
        <circle cx="18.9" cy="5.1" r="1.6" />
      </g>
    </>
  ),
  buildApps: (
    <>
      <polygon points="11.5,7.5 .5,4.5 12,1.5 23.5,4.5" />
      <polyline points="23.5,4.463 23.5,18.5 11.5,22.5 .5,18.5 .5,4.463" />
      <line x1="11.5" x2="11.5" y1="7.5" y2="22.5" />
    </>
  ),
  collectData: (
    <>
      <path d="M15.799 16.5h2.396c0 0 4.305-.561 4.305-4.783 0-2.675-2.209-4.874-4.955-4.773 -1.073-2.266-3.373-3.835-6.045-3.835 -3.563 0-6.468 2.784-6.676 6.294 -2.232-.467-4.324 1.232-4.324 3.509 0 3.645 3.826 3.588 3.826 3.588h2.863" />
      <line x1="11.5" x2="11.5" y1="11" y2="22" />
      <polyline points="14.5,14 11.5,11 8.5,14" />
    </>
  ),
  developerDocs: (
    <>
      <path d="M16.5 2.5c0 0-1.893 0-2 0 -2 0-3 1.5-3 3.5 0-2-1-3.5-3-3.5 -.5 0-8 0-8 0v16c0 0 6.5 0 8 0 2 0 3 1 3 3 0-2 1-3 3-3 1.5 0 8 0 8 0v-16h-2" />
      <line x1="11.5" x2="11.5" y1="6" y2="21" />
      <polygon points="20.5,10 18.5,8 16.5,10 16.5,1.5 20.5,1.5" />
    </>
  ),
  developerChampions: (
    <>
      <path class="st0" d="M5.37,15.76c-0.24,0.04-0.48,0.09-0.7,0.14c1.07,2.85,3.18,5.75,7.32,8.1v-0.76 C8.34,21.07,6.39,18.47,5.37,15.76z"/>
      <path class="st0" d="M4.33,10.15C4.31,9.7,4.3,9.25,4.3,8.81V3.63c0.66-0.1,1.64-0.23,2.29-0.4l3.46-1.48 c0.02-0.01,0.04-0.02,0.06-0.03c0.61-0.28,1.29-0.6,1.88-0.94V0c-0.76,0.51-1.8,0.96-2.64,1.35l-2.04,1 C6.22,2.69,4.76,2.93,3.59,3.08v5.73c0,0.49,0.01,1,0.03,1.54C3.84,10.28,4.08,10.21,4.33,10.15z"/>
      <path class="st1" d="M7.36,5.12"/>
      <path class="st0" d="M13.88,1.72c0.02,0.01,0.04,0.02,0.06,0.03l3.46,1.48c0.64,0.16,1.63,0.3,2.29,0.4v5.18 c0,0.44-0.01,0.89-0.03,1.34c0.25,0.06,0.49,0.13,0.71,0.19c0.02-0.54,0.03-1.05,0.03-1.54V3.08c-1.17-0.14-2.63-0.39-3.71-0.72 l-2.04-1C13.81,0.96,12.76,0.51,12,0l-0.12,0.4L12,0.78C12.6,1.12,13.27,1.44,13.88,1.72z"/>
      <path class="st0" d="M18.62,15.76c-1.02,2.71-2.97,5.31-6.61,7.47l-0.12,0.33L12,24c4.14-2.35,6.25-5.25,7.32-8.1 C19.1,15.85,18.86,15.81,18.62,15.76z"/>
      <path class="st0" d="M20.94,9.98C19.1,9.32,15.67,8.9,11.98,8.9v0.51H12c3.52,0,6.92,0.41,8.65,1.03c0.72,0.26,1.05,0.74,1.05,1.55 v4.78c-1.19-0.88-5.09-1.53-9.71-1.53v0.51c3.51,0,8.9,0.82,8.9,1.83c0,0.52-1.81,1-3.59,1.33c-0.06,0.11-0.13,0.22-0.19,0.33 c2.7-0.38,5.16-1.03,5.16-1.75v-5.59C22.26,10.94,21.83,10.3,20.94,9.98z"/>
      <path class="st1" d="M8.05,11.15"/>
      <path class="st0" d="M3.06,9.98C4.89,9.32,8.3,8.9,11.98,8.9v0.51h-0.01c-3.51,0-6.89,0.41-8.62,1.03C2.62,10.71,2.3,11.19,2.3,12 v4.78c1.19-0.88,5.07-1.53,9.68-1.53v0.51c-3.5,0-8.87,0.82-8.87,1.83c0,0.52,1.81,1,3.58,1.33c0.06,0.11,0.13,0.22,0.19,0.33 c-2.69-0.38-5.15-1.03-5.15-1.75v-5.59C1.74,10.94,2.17,10.3,3.06,9.98z"/>
      <path class="st1" d="M750.7,362.2"/>
    </>
  ),
};

NewRelicIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(NEWRELIC_ICONS)).isRequired,
  size: PropTypes.string,
};

export default NewRelicIcon;
