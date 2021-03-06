import React from 'react';

const AnalyticsIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={props.class}
    >
      <path
        id="icon"
        className="cls-1"
        d="M9.091,20a9.091,9.091,0,0,1,0-18.182c0.3,0,.609.015,0.909,0.045V0.909A0.91,0.91,0,0,1,10.909,0,9.1,9.1,0,0,1,20,9.091a0.91,0.91,0,0,1-.909.909H18.138c0.03,0.307.044,0.613,0.044,0.909A9.1,9.1,0,0,1,9.091,20Zm0-16.364A7.269,7.269,0,1,0,16.307,10h-5.4A0.91,0.91,0,0,1,10,9.091v-5.4A7.394,7.394,0,0,0,9.091,3.636Zm2.727-1.761V8.182h6.307A7.274,7.274,0,0,0,11.818,1.875Z"
      />
    </svg>
  );
};

export default AnalyticsIcon;
