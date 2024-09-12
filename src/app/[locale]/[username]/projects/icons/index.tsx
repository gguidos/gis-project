/** @jsxImportSource theme-ui */

import { IconBaseProps } from 'react-icons';
import {
  MdHeight,
  MdLanguage,
  MdOutlineBusiness,
  MdOutlineContentCut,
  MdOutlineEmail,
  MdOutlineFileUpload,
  MdOutlineFormatListBulleted,
  MdOutlineNavigation,
  MdOutlineOpenInFull,
  MdOutlinePersonOutline,
  MdOutlinePlace,
  MdOutlineRedo,
  MdOutlineSettings,
  MdOutlineTrendingDown,
  MdOutlineUndo,
  MdPhone,
  MdStraighten,
  MdImage,
  MdZoomIn,
  MdZoomOut
} from 'react-icons/md';
import { RxAngle, RxColumns, RxGroup, RxRows, RxQuestionMarkCircled } from 'react-icons/rx';
import React from 'react';

export function EditorObstacle({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19.6 19.6"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 11842"
        d="m6.8 6.8 6 6m0-6-6 6m-4-12h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function EditorMinimizeToolbar({
  size = '1em',
  color = 'inherit',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16.414 16.828"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 12471"
        d="M15.414 8.414h-14m0 0 7 7m-7-7 7-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function EditorPolygonIcon({
  size = '1em',
  color = 'inherit',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 24 24">
      <path d="M20 3.456L12 9.28V9H9v.433l-5-3.31V4H1v3h1v13H1v3h3v-1h16v1h3v-3h-1V4h1V1h-3zM10 10h1v1h-1zM2 5h1v1H2zm0 17v-1h1v1zm20 0h-1v-1h1zm-1-2h-1v1H4v-1H3V7h.512L9 10.632V12h3v-1.483L20.952 4H21zm1-18v1h-1V2z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </svg>
  )
}

export function EditorPencilIcon({
  size = '1em',
  color = 'inherit',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <g transform="translate(1 1)">
          <g>
            <g>
              <path d="M131.414,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C140.241,493.786,136.71,490.255,131.414,490.255z"></path> 
              <path d="M290.31,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C299.138,493.786,295.607,490.255,290.31,490.255z"></path> 
              <path d="M237.345,490.255H219.69c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C246.172,493.786,242.641,490.255,237.345,490.255z"></path>
              <path d="M25.483,490.255H7.828c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C34.31,493.786,30.779,490.255,25.483,490.255z"></path> 
              <path d="M78.448,490.255H60.793c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C87.276,493.786,83.745,490.255,78.448,490.255z"></path>
              <path d="M184.379,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C193.207,493.786,189.676,490.255,184.379,490.255z"></path>
              <path d="M502.172,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C511,493.786,507.469,490.255,502.172,490.255z"></path>
              <path d="M449.207,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C458.034,493.786,454.503,490.255,449.207,490.255z"></path>
              <path d="M343.276,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C352.103,493.786,348.572,490.255,343.276,490.255z"></path>
              <path d="M396.241,490.255h-17.655c-5.297,0-8.828,3.531-8.828,8.828c0,5.297,3.531,8.828,8.828,8.828h17.655 c5.297,0,8.828-3.531,8.828-8.828C405.069,493.786,401.538,490.255,396.241,490.255z"></path>
              <path d="M203.8,222.779l-6.179,6.179c0,0,0,0-0.001,0.001l-18.538,18.538c-3.531,3.531-3.531,8.828,0,12.359 c1.766,1.766,3.531,2.648,6.179,2.648c1.766,0,4.414-0.883,6.179-2.648l18.538-18.538c0,0,0,0,0,0l6.179-6.179 c3.531-3.531,3.531-8.828,0-12.359C212.628,219.248,207.331,219.248,203.8,222.779z"></path>
              <path d="M453.621,23.276C440.379,10.034,421.841,2.09,403.303,2.09c-17.655,0-35.31,6.179-47.669,18.538l-15.007,15.007l0,0 l-0.003,0.003l-12.356,12.356l0.081,0.081L72.269,307.524c-1.869,1.869-2.738,4.232-2.629,6.566L2.531,464.655 c-1.766,3.531-0.883,7.062,1.766,9.71c1.766,1.766,3.531,2.648,6.179,2.648c0.883,0,1.766-0.883,3.531,0l156.248-70.621 c2.464-0.616,4.065-2.522,4.81-4.817l265.315-266.19v0l15.007-15.007c26.483-25.6,26.483-68.855-0.883-96.221L453.621,23.276z M228.517,210.421c1.766,1.766,3.531,2.648,6.179,2.648c2.648,0,4.414-0.883,6.179-2.648l100.193-100.193l24.717,24.717 l-31.338,31.338c-3.531,3.531-3.531,8.828,0,12.359c1.766,1.766,3.531,2.648,6.179,2.648c2.648,0,4.414-0.883,6.179-2.648 l31.338-31.338l12.8,12.8c0.015,0.015,0.029,0.027,0.044,0.041L175.552,376.327v-26.431l137.672-137.672 c0.966-0.435,1.912-1.029,2.687-1.804l6.179-6.179c1.884-1.884,2.752-4.269,2.626-6.621c0.125-2.352-0.743-4.737-2.626-6.62 c-3.531-3.531-8.828-3.531-12.359,0L160.293,340.438l-31.527,9.458l8.582-32.611l30.259-32.713c3.531-3.531,3.531-8.828,0-12.359 c-3.531-3.531-8.828-3.531-12.359,0l-30.212,32.662H99.43L316.08,85.238l12.631,12.631L228.517,198.062 C224.986,201.593,224.986,206.89,228.517,210.421z M48.014,404.207l36.613-81.676h32.662l-9.71,37.076 c-0.883,3.531,0,7.062,2.648,8.828c2.648,1.766,6.179,2.648,8.828,1.766l38.841-11.476v32.662l-84.466,38.238L48.014,404.207z M403.324,147.767c-0.007-0.007-0.013-0.015-0.02-0.022l-74.95-74.95l12.274-12.443l75.034,75.034L403.324,147.767z M443.028,108.021l-15.007,15.007l-75.034-75.034l15.89-15.007c8.828-7.945,21.186-13.241,34.428-13.241 c14.124,0,27.366,5.297,37.959,15.89l0.883,0.883C464.214,58.586,459.8,91.248,443.028,108.021z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export function EditorRectangleIcon({
  size = '1em',
  color = 'inherit',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"><path d="M22,2H4A1,1,0,0,0,3,3V21a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V3A1,1,0,0,0,22,2ZM21,20H5V4H21Z"></path></g>
    </svg>
  )
}

export function EditorAddOptimizer({
  size = '1em',
  color = 'inherit',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 23.628 23.628"
      sx={{ color }}
      {...props}
    >
      <g data-name="Group 11814" fill="none" strokeWidth="1.6">
        <path data-name="Path 12481" d="M11.868 16.289V7.598" stroke="currentColor" />
        <path data-name="Path 12482" d="M16.214 11.942H7.523" stroke="currentColor" />
        <g data-name="Rectangle 4551" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M2.868 2.943h18v18h-18z" />
          <path d="M3.668 3.743h16.4v16.4h-16.4z" />
        </g>
        <path data-name="Path 12483" d="M23.627 14.813h-3.628" stroke="currentColor" />
        <path data-name="Path 12484" d="M23.627 8.813h-3.628" stroke="currentColor" />
        <path data-name="Path 12485" d="M8.814 3.627V-.001" stroke="currentColor" />
        <path data-name="Path 12486" d="M8.814 23.627v-3.628" stroke="currentColor" />
        <path data-name="Path 12487" d="M14.814 3.627V-.001" stroke="currentColor" />
        <path data-name="Path 12488" d="M14.814 23.627v-3.628" stroke="currentColor" />
        <path data-name="Path 12489" d="M3.627 14.813H-.001" stroke="currentColor" />
        <path data-name="Path 12490" d="M3.627 8.813H-.001" stroke="currentColor" />
      </g>
    </svg>
  );
}

export function EditorAddPanel({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19.6 19.6"
      sx={{ color }}
      {...props}
    >
      <g
        data-name="Group 11530"
        transform="translate(-2.2 -2.2)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      >
        <rect data-name="Rectangle 4019" width="7" height="7" rx="1" transform="translate(3 3)" />
        <rect data-name="Rectangle 4020" width="7" height="7" rx="1" transform="translate(3 14)" />
        <rect data-name="Rectangle 4021" width="7" height="7" rx="1" transform="translate(14 3)" />
        <path data-name="Path 11768" d="M17.5 14v7" />
        <path data-name="Path 11769" d="M21 17.5h-7" />
      </g>
    </svg>
  );
}

export function EditorDrag({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24.4"
      sx={{ color }}
      {...props}
    >
      <path data-name="Rectangle 4022" fill="none" d="M0 .2h24v24H0z" />
      <path
        data-name="Path 11776"
        d="M21 7.2a2.5 2.5 0 0 0-2.5-2.5 2.734 2.734 0 0 0-.5.05V4.2a2.5 2.5 0 0 0-2.5-2.5 2.463 2.463 0 0 0-.67.09 2.5 2.5 0 0 0-4.79.47 2.352 2.352 0 0 0-.54-.06A2.5 2.5 0 0 0 7 4.7v5.89a2.9 2.9 0 0 0-1.22-.66l-.77-.21a1.972 1.972 0 0 0-2.19.83 2.131 2.131 0 0 0-.15 1.95l2.56 6.43A8.354 8.354 0 0 0 13 24.2a8 8 0 0 0 8-8Zm-2 9a6 6 0 0 1-6 6 6.354 6.354 0 0 1-5.91-4.01l-2.6-6.54.53.14a1.478 1.478 0 0 1 1 .9L7 15.2h2V4.7a.5.5 0 0 1 1 0v7.5h2V2.7a.5.5 0 0 1 1 0v9.5h2v-8a.5.5 0 0 1 1 0v8h2v-5a.5.5 0 0 1 1 0Z"
        stroke="none"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}

export function EditorPenTool({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21.931 21.931"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 11688"
        d="m1.131 1.131 14.5 3.5 1.5 7.5-5 5-7.5-1.5Zm0 0 7.586 7.586m2.414 9.414 7-7 3 3-7 7Zm1-8a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function EditorPenToolCustomLength({
  size = '1em',
  color = 'red',
  ...props
}: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21.931 21.931"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 11688"
        d="m1.131 1.131 14.5 3.5 1.5 7.5-5 5-7.5-1.5Zm0 0 7.586 7.586m2.414 9.414 7-7 3 3-7 7Zm1-8a2 2 0 1 1-2-2 2 2 0 0 1 2 2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function EditorDeleteTool({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19.6 21.6"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 11762"
        d="M.8 4.8h2m0 0h16m-16 0v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-14Zm3 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function EditorSelectTool({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18.57 18.57"
      sx={{ color }}
      {...props}
    >
      <path
        data-name="Path 11687"
        d="m10.8 10.8 6 6M.8.8l7.07 16.97 2.51-7.39 7.39-2.51Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function EditorCircle({ size = '1em', color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#FFFFFF"></path> </g>
    </svg>
  );
}

export function EditorRuler({ color = 'currentColor', ...props }: IconBaseProps): JSX.Element {
  return <MdStraighten color={color} {...props} />;
}

export function Navigation({ color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return <MdOutlineNavigation color={color} {...props} />;
}

export function MapCenter({ color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width={props.size} {...props}>
      <path
        d="M18 35a17 17 0 1 0 0-34 17 17 0 0 0 0 34Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 28.2a10.2 10.2 0 1 0 0-20.4 10.2 10.2 0 0 0 0 20.4v0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 21.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ToggleOn({ color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height="24" viewBox="0 0 44 24">
      <defs>
        <clipPath id="a">
          <path
            data-name="Path 12609"
            d="M199 12a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12Z"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g data-name="Group 11947" transform="translate(-199)" clipPath="url(#a)">
        <path
          data-name="Path 12608"
          d="M199 12a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12Z"
          fill="#13ab62"
        />
        <g data-name="Group 11946">
          <circle data-name="Ellipse 527" cx="10" cy="10" r="10" transform="translate(221 2)" fill="#fff" />
        </g>
      </g>
    </svg>
  );
}

export function ToggleOff({ color = 'inherit', ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height="24" viewBox="0 0 44 24">
      <defs>
        <clipPath id="a">
          <path
            data-name="Path 12609"
            d="M199 12a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12Z"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g data-name="Group 11947" transform="translate(-199)" clipPath="url(#a)">
        <path
          data-name="Path 12608"
          d="M199 12a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12Z"
          fill="#b1b9c9"
        />
        <g data-name="Group 11946" transform="translate(-20)">
          <circle data-name="Ellipse 527" cx="10" cy="10" r="10" transform="translate(221 2)" fill="#fff" />
        </g>
      </g>
    </svg>
  );
}
export function Print(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26.892" height="26.892" viewBox="0 0 26.892 26.892">
      <path data-name="Path 13004" d="M0,0H26.892V26.892H0Z" fill="none" />
      <path
        id="Path_13005"
        data-name="Path 13005"
        d="M21.049,8.6H19.928V3H6.482V8.6H5.362A3.357,3.357,0,0,0,2,11.964v6.723H6.482v4.482H19.928V18.687H24.41V11.964A3.357,3.357,0,0,0,21.049,8.6ZM8.723,5.241h8.964V8.6H8.723Zm8.964,13.446v2.241H8.723V16.446h8.964Zm2.241-2.241V14.205H6.482v2.241H4.241V11.964a1.124,1.124,0,0,1,1.121-1.121H21.049a1.124,1.124,0,0,1,1.121,1.121v4.482Z"
        transform="translate(0.241 0.362)"
        fill="#fff"
      />
      <circle
        id="Ellipse_551"
        data-name="Ellipse 551"
        cx="1.121"
        cy="1.121"
        r="1.121"
        transform="translate(19.049 11.765)"
        fill="#fff"
      />
    </svg>
  );
}

export function Area({ color = '#13ab62', size = 18, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18" {...props}>
      <path
        d="M16 0H2a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V2a2.006 2.006 0 0 0-2-2Zm0 16H2V2h14Z"
        fill={color}
      />
    </svg>
  );
}

export function PanelCount({ color = '#13ab62', size = 18, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 18 18" {...props}>
      <g data-name="Group 11982">
        <g data-name="Group 11981">
          <g data-name="Group 11976">
            <path data-name="Rectangle 4720" fill="#13ab62" d="M4 10h4v4H4z" />
          </g>
          <g data-name="Group 11977">
            <path data-name="Rectangle 4721" fill="#13ab62" d="M10 10h4v4h-4z" />
          </g>
          <g data-name="Group 11978">
            <path
              data-name="Path 12630"
              d="M16 0H2a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V2a2.006 2.006 0 0 0-2-2Zm0 16H2V2h14Z"
              fill={color}
            />
          </g>
          <g data-name="Group 11979">
            <path data-name="Rectangle 4722" fill={color} d="M4 4h4v4H4z" />
          </g>
          <g data-name="Group 11980">
            <path data-name="Rectangle 4723" fill={color} d="M10 4h4v4h-4z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function PanelTilt({ color = '#13ab62', size = 16.5, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16.551 16.551" {...props}>
      <g data-name="Group 12221">
        <path
          data-name="Path 12027"
          d="M1.414 15.137 15.137 1.414"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <g data-name="Polygon 2" fill={color}>
          <path d="M13.6219 15.493H6.0361l3.7929-3.7929 3.7929 3.7929Z" />
          <path d="M9.829 12.4072 7.2432 14.993h5.1716L9.829 12.4072m0-1.4142 5 5h-10l5-5Z" />
        </g>
      </g>
    </svg>
  );
}

export function Orientation({ color = '#13ab62', size = 19, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 19 19" {...props}>
      <g data-name="Group 12222" transform="rotate(90 12 9.5)" fill="none" stroke={color} strokeWidth="2">
        <path
          data-name="Path 11763"
          d="M8.918 10.907a12.534 12.534 0 0 1-.4-2.384 12.53 12.53 0 0 1 2.384.4 6.193 6.193 0 0 1 2.74 1.435 6.2 6.2 0 0 1 1.435 2.74 12.534 12.534 0 0 1 .4 2.384 12.535 12.535 0 0 1-2.384-.4 6.194 6.194 0 0 1-2.74-1.435 6.2 6.2 0 0 1-1.435-2.74Z"
        />
        <circle data-name="Ellipse 21" cx="8.5" cy="8.5" r="8.5" transform="translate(3.5 3.5)" />
      </g>
    </svg>
  );
}

export function AngledRoof({ color = '#13ab62', size = 16.5, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16.551 16.551" {...props}>
      <g data-name="Group 12223">
        <path
          data-name="Path 12027"
          d="M1.414 15.137 15.137 1.414"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function HeightToEaves({ color = 'currentColor', size = 16.5, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16.828 16.414" {...props}>
      <g data-name="Group 12224" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2">
        <path data-name="Path 12610" d="M8.414 15.414v-14m0 0-7 7m7-7 7 7" strokeLinejoin="round" />
        <path data-name="Path 12611" d="M1.414 15.414h14" />
      </g>
    </svg>
  );
}

export function Circle({ color = '#13ab62', size = 6, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 6 6" {...props}>
      <circle data-name="Ellipse 550" cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
}

export function ElectricityConsumption(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
      <g data-name="Group 12287">
        <path data-name="Path 12989" d="M4 28a24 24 0 1 1 24 24A24 24 0 0 1 4 28Z" fill="#d1fadf" />
        <path
          data-name="Path 12990"
          d="M28 48A20 20 0 0 1 8 28H0a28 28 0 0 0 28 28Zm20-20a20 20 0 0 1-20 20v8a28 28 0 0 0 28-28ZM28 8a20 20 0 0 1 20 20h8A28 28 0 0 0 28 0Zm0-8A28 28 0 0 0 0 28h8A20 20 0 0 1 28 8Z"
          fill="#ecfdf3"
        />
        <g data-name="Group 12235">
          <path data-name="Rectangle 5229" fill="none" d="M13 13.001h30v30H13z" />
        </g>
        <g data-name="Group 12237">
          <g data-name="Group 12236" fill="#039855">
            <path
              data-name="Path 12998"
              d="M39.185 26.757a11.184 11.184 0 1 0-14.913 10.539v3.132h2.485v-2.56a10.393 10.393 0 0 0 2.485 0v2.56h2.485v-3.132a11.19 11.19 0 0 0 7.458-10.539Zm-11.184 8.7a8.7 8.7 0 1 1 8.7-8.7A8.709 8.709 0 0 1 28 35.456Z"
            />
            <path data-name="Rectangle 5230" d="M23 22h10v2H23z" />
            <path
              data-name="Path 12999"
              d="m28.932 25.515-3.728 3.728 1.55 1.554-1.55 1.553 1.864 1.865 3.728-3.728-1.553-1.553 1.553-1.553Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function PrivateOrBusiness(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
      <g data-name="Group 12286">
        <path data-name="Path 11911" d="M4 28a24 24 0 1 1 24 24A24 24 0 0 1 4 28Z" fill="#d1fadf" />
        <path
          data-name="Path 11912"
          d="M28 48A20 20 0 0 1 8 28H0a28 28 0 0 0 28 28Zm20-20a20 20 0 0 1-20 20v8a28 28 0 0 0 28-28ZM28 8a20 20 0 0 1 20 20h8A28 28 0 0 0 28 0Zm0-8A28 28 0 0 0 0 28h8A20 20 0 0 1 28 8Z"
          fill="#ecfdf3"
        />
        <g
          data-name="Group 11581"
          fill="none"
          stroke="#039855"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path data-name="Path 11941" d="M37 25c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
          <path data-name="Path 11942" d="M28 28a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
        </g>
      </g>
    </svg>
  );
}

export function CalculationAssumptions({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="calculate_black_24dp"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <g id="Group_12226" data-name="Group 12226">
        <rect id="Rectangle_5220" data-name="Rectangle 5220" width={size} height={size} fill="none" />
      </g>
      <g id="Group_12227" data-name="Group 12227">
        <path
          id="Path_12982"
          data-name="Path 12982"
          d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM13.03,7.06,14.09,6,15.5,7.41,16.91,6l1.06,1.06L16.56,8.47l1.41,1.41-1.06,1.06L15.5,9.54l-1.41,1.41L13.03,9.89l1.41-1.41Zm-6.78.66h5v1.5h-5ZM11.5,16h-2v2H8V16H6V14.5H8v-2H9.5v2h2ZM18,17.25H13v-1.5h5Zm0-2.5H13v-1.5h5Z"
          fill="#1dba6c"
        />
      </g>
    </svg>
  );
}
export function BasicInformation({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="business_black_24dp_1_"
      data-name="business_black_24dp (1)"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path id="Path_12977" data-name="Path 12977" d="M0,0H24V24H0Z" fill="none" />
      <path
        id="Path_12978"
        data-name="Path 12978"
        d="M12,7V3H2V21H22V7ZM6,19H4V17H6Zm0-4H4V13H6Zm0-4H4V9H6ZM6,7H4V5H6Zm4,12H8V17h2Zm0-4H8V13h2Zm0-4H8V9h2Zm0-4H8V5h2ZM20,19H12V17h2V15H12V13h2V11H12V9h8Zm-2-8H16v2h2Zm0,4H16v2h2Z"
        fill="#1dba6c"
      />
    </svg>
  );
}

export function EditInfo({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="edit_black_24dp"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path id="Path_13009" data-name="Path 13009" d="M0,0H24V24H0Z" fill="none" />
      <path
        id="Path_13010"
        data-name="Path 13010"
        d="M14.06,9.02l.92.92L5.92,19H5v-.92l9.06-9.06M17.66,3a1,1,0,0,0-.7.29L15.13,5.12l3.75,3.75,1.83-1.83a1,1,0,0,0,0-1.41L18.37,3.29A.982.982,0,0,0,17.66,3Zm-3.6,3.19L3,17.25V21H6.75L17.81,9.94,14.06,6.19Z"
        fill="#9ea5b8"
      />
    </svg>
  );
}

export function CostsForConstruction({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.002" height="22" viewBox="0 0 21.002 22">
      <path
        id="Path_12396"
        d="M14.175,4.222C14.177,2.994,11.673,2,8.588,2S3,3,3,4.222m0,0C3,5.45,5.5,6.444,8.588,6.444s5.588-.994,5.588-2.222v8.622M3,4.222V17.556c0,1.228,2.5,2.222,5.588,2.222a11.163,11.163,0,0,0,3.85-.618M3,8.667c0,1.228,2.5,2.222,5.588,2.222s5.588-.994,5.588-2.222m-1.672,6.028a11.116,11.116,0,0,1-3.917.639C5.5,15.333,3,14.339,3,13.111m17.526.353a4.98,4.98,0,0,1,0,7.071,5.051,5.051,0,0,1-7.113,0,4.98,4.98,0,0,1,0-7.071A5.051,5.051,0,0,1,20.527,13.465Z"
        transform="translate(-1.998 -1)"
        fill="none"
        stroke="#039855"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

export function Settings() {
  return <MdOutlineSettings size={20} sx={{ color: '#B1B9C9' }} />;
}

export function Language({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdLanguage size={size} fill={fill} {...props} />;
}

export function Phone({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdPhone size={size} fill={fill} {...props} />;
}

export function Mail({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineEmail size={size} fill={fill} {...props} />;
}

export function Address({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlinePlace size={size} fill={fill} {...props} />;
}

export function User({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlinePersonOutline size={size} fill={fill} {...props} />;
}

export function Menu({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineFormatListBulleted size={size} fill={fill} {...props} />;
}

export function Business({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineBusiness size={size} fill={fill} {...props} />;
}

export function FileUpload({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineFileUpload size={size} fill={fill} {...props} />;
}

export function RoofTilt({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <RxAngle size={size} fill={fill} {...props} />;
}

export function QuestionMarkCircled({ size = 27, fill = 'currentColor', ...props }: IconBaseProps) {
  return <RxQuestionMarkCircled size={size} fill={fill} {...props} />;
}

export function Loss({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineTrendingDown size={size} fill={fill} {...props} />;
}

export function Rows({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <RxRows size={size} fill={fill} {...props} />;
}

export function Columns({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <RxColumns size={size} fill={fill} {...props} />;
}

export function Setback({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <RxGroup size={size} fill={fill} {...props} />;
}

export function SnippingTool({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineContentCut size={size} fill={fill} {...props} />;
}

export function Undo({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineUndo size={size} fill={fill} {...props} />;
}

export function Redo({ size = 24, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdOutlineRedo size={size} fill={fill} {...props} />;
}

export function Height({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdHeight size={size} fill={fill} {...props} />;
}

export function ImageRoof({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return <MdImage size={size} fill={fill} {...props} />;
}

export function ZoomIN({ size = 24, fill = 'black', ...props }: IconBaseProps) {
  return <MdZoomIn size={size} fill={fill} {...props} />;
}

export function ZoomOUT({ size = 24, fill = 'black', ...props }: IconBaseProps) {
  return <MdZoomOut size={size} fill={fill} {...props} />;
}

export function Location({ size = 16, fill = 'currentColor', ...props }: IconBaseProps) {
  return (
    <MdOutlineOpenInFull
      fill={fill}
      size={size}
      {...props}
      style={{
        transform: 'rotate(90deg)'
      }}
    />
  );
}

export function CheckMark({ size = 24, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_12437" data-name="Group 12437" transform="translate(-222 -393)">
        <rect
          id="Rectangle_5454"
          data-name="Rectangle 5454"
          width="24"
          height="24"
          rx="12"
          transform="translate(222 393)"
          fill="#c3ead2"
        />
        <path
          id="Path_13404"
          data-name="Path 13404"
          d="M61.1,239.39l-7.16,6.91-1.9-2.03a1.038,1.038,0,0,0-1.3-.07.917.917,0,0,0-.26,1.21l2.25,3.66a1.23,1.23,0,0,0,2.05,0c.36-.47,7.23-8.66,7.23-8.66.9-.92-.19-1.73-.91-1.03Z"
          transform="translate(178 161)"
          fill="#13ab62"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
}

export function Globe({ size = 20, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <g id="globe" transform="translate(-1 -1)">
        <circle
          id="Ellipse_554"
          data-name="Ellipse 554"
          cx="10"
          cy="10"
          r="10"
          transform="translate(2 2)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_23"
          data-name="Line 23"
          x2="20"
          transform="translate(2 12)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Path_13385"
          data-name="Path 13385"
          d="M12,2a15.3,15.3,0,0,1,4,10,15.3,15.3,0,0,1-4,10A15.3,15.3,0,0,1,8,12,15.3,15.3,0,0,1,12,2Z"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}

export function Air({ size = 24, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg id="air_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_12429" data-name="Group 12429">
        <path id="Path_13368" data-name="Path 13368" d="M0,0H24V24H0Z" fill="none" />
      </g>
      <g id="Group_12431" data-name="Group 12431">
        <g id="Group_12430" data-name="Group 12430">
          <path
            id="Path_13369"
            data-name="Path 13369"
            d="M14.5,17a3,3,0,0,1-6,0h2a1,1,0,1,0,1-1H2V14h9.5A3.009,3.009,0,0,1,14.5,17ZM19,6.5a3.5,3.5,0,0,0-7,0h2A1.5,1.5,0,1,1,15.5,8H2v2H15.5A3.5,3.5,0,0,0,19,6.5ZM18.5,11H2v2H18.5a1.5,1.5,0,0,1,0,3v2a3.5,3.5,0,0,0,0-7Z"
            fill="#667085"
          />
        </g>
      </g>
    </svg>
  );
}

export function Terrain({ size = 24, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="terrain_black_24dp"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path id="Path_13370" data-name="Path 13370" d="M0,0H24V24H0Z" fill="none" />
      <path
        id="Path_13371"
        data-name="Path 13371"
        d="M14,6,9.78,11.63l1.25,1.67L14,9.33,19,16H10.54L6.53,10.63,1,18H23ZM5,16l1.52-2.03L8.04,16Z"
        fill="#667085"
      />
    </svg>
  );
}

export function Snow({ size = 24, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="ac_unit_black_24dp"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path id="Path_13366" data-name="Path 13366" d="M0,0H24V24H0Z" fill="none" />
      <path
        id="Path_13367"
        data-name="Path 13367"
        d="M22,11H17.83l3.24-3.24L19.66,6.34,15,11H13V9l4.66-4.66L16.24,2.93,13,6.17V2H11V6.17L7.76,2.93,6.34,4.34,11,9v2H9L4.34,6.34,2.93,7.76,6.17,11H2v2H6.17L2.93,16.24l1.41,1.42L9,13h2v2L6.34,19.66l1.42,1.41L11,17.83V22h2V17.83l3.24,3.24,1.42-1.41L13,15V13h2l4.66,4.66,1.41-1.42L17.83,13H22Z"
        fill="#667085"
      />
    </svg>
  );
}

export function Close({ size = 12, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14.828" height="14.828" viewBox="0 0 14.828 14.828">
      <path
        id="Path_13405"
        data-name="Path 13405"
        d="M13,1,1,13M1,1,13,13"
        transform="translate(0.414 0.414)"
        fill="none"
        stroke="#039855"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

export function ShoppingCart({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg id="shopping-cart" xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
      <circle
        id="Ellipse_555"
        data-name="Ellipse 555"
        cx="1"
        cy="1"
        r="1"
        transform="translate(8 20)"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <circle
        id="Ellipse_556"
        data-name="Ellipse 556"
        cx="1"
        cy="1"
        r="1"
        transform="translate(19 20)"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        id="Path_13386"
        data-name="Path 13386"
        d="M1,1H5L7.68,14.39a2,2,0,0,0,2,1.61H19.4a2,2,0,0,0,2-1.61L23,6H6"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

export function Expand({ size = 18, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20.828" height="20.828" viewBox="0 0 20.828 20.828">
      <path
        id="Path_13384"
        data-name="Path 13384"
        d="M15,3h6m0,0V9m0-6-7,7M9,21H3m0,0V15m0,6,7-7"
        transform="translate(-1.586 -1.586)"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}

export function Sliders({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
      <g id="sliders" transform="translate(0 -2)">
        <line
          id="Line_14"
          data-name="Line 14"
          y1="7"
          transform="translate(4 14)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_15"
          data-name="Line 15"
          y1="7"
          transform="translate(4 3)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_16"
          data-name="Line 16"
          y1="9"
          transform="translate(12 12)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_17"
          data-name="Line 17"
          y1="5"
          transform="translate(12 3)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_18"
          data-name="Line 18"
          y1="5"
          transform="translate(20 16)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_19"
          data-name="Line 19"
          y1="9"
          transform="translate(20 3)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_20"
          data-name="Line 20"
          x2="6"
          transform="translate(1 14)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_21"
          data-name="Line 21"
          x2="6"
          transform="translate(9 8)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <line
          id="Line_22"
          data-name="Line 22"
          x2="6"
          transform="translate(17 16)"
          fill="none"
          stroke="#006734"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}

export function Gear({ size = 22, ...props }: IconBaseProps): JSX.Element {
  return (
    <svg
      id="Group_12433"
      data-name="Group 12433"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        id="Path_13382"
        data-name="Path 13382"
        d="M12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Z"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        id="Path_13383"
        data-name="Path 13383"
        d="M19.4,15a1.65,1.65,0,0,0,.33,1.82l.06.06a2,2,0,1,1-2.83,2.83l-.06-.06a1.661,1.661,0,0,0-2.82,1.18V21a2,2,0,0,1-4,0v-.09A1.65,1.65,0,0,0,9,19.4a1.65,1.65,0,0,0-1.82.33l-.06.06a2,2,0,1,1-2.83-2.83l.06-.06a1.661,1.661,0,0,0-1.18-2.82H3a2,2,0,0,1,0-4h.09A1.65,1.65,0,0,0,4.6,9a1.65,1.65,0,0,0-.33-1.82l-.06-.06A2,2,0,1,1,7.04,4.29l.06.06a1.65,1.65,0,0,0,1.82.33H9a1.65,1.65,0,0,0,1-1.51V3a2,2,0,0,1,4,0v.09a1.661,1.661,0,0,0,2.82,1.18l.06-.06a2,2,0,1,1,2.83,2.83l-.06.06a1.65,1.65,0,0,0-.33,1.82V9a1.65,1.65,0,0,0,1.51,1H21a2,2,0,0,1,0,4h-.09a1.65,1.65,0,0,0-1.51,1Z"
        fill="none"
        stroke="#006734"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}
