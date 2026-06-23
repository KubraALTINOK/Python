const scratchCardSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <defs>
    <style>
      .sc-bg { fill: var(--primary-color, #00C39A); }
      .sc-overlay { fill: var(--secondary-color, #C0C0C0); }
      .sc-text { fill: var(--text-color, #FFFFFF); font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; text-anchor: middle; }
    </style>
  </defs>
  <rect class="sc-bg" width="400" height="300" rx="20" ry="20" />
  <rect class="sc-overlay" x="20" y="20" width="360" height="260" rx="10" ry="10" />
  <text class="sc-text" x="200" y="160">SCRATCH HERE</text>
</svg>`;

const wheelSVG = `<svg id="katman_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-250 0 3650 3128.05">



  <defs>
    <style>
        #katman_2 {
            --primary-color: #00C39A;
            --secondary-color: #808080;
            --text-color: #F2F2F2;
            --accent-color: #00008B;
            --background-color: #F0E8D5;
            --slice-color-1: #edc2c1;
            --slice-color-2: #e3e9bf;
            --slice-color-3: #eb9853;
            --slice-color-4: #87bbb5;
            --pin-color-1: #ff8061;
            --pin-color-2: #F2F2F2;
        }

      .cls-1 {
        fill: var(--primary-color);
      }
      .cls-2 {
        fill: var(--slice-color-1);
      }
      .cls-3 {
        font-family: Arial,sans-serif;
        font-size: 90px;
        font-weight: 700;
      }
      .cls-3 {
        fill: var(--text-color);
      }
      .cls-4{
        fill: #F2F2F2
      }

      .cls-5, .cls-6, .cls-7 {
        isolation: isolate;
      }
      .cls-8 {
        fill: var(--slice-color-2);
      }
      .cls-9 {
        fill: var(--slice-color-4);
      }
      .cls-10 {
        fill: var(--slice-color-3);
      }
      .cls-11 {
        fill: var(--background-color);
      }
      .cls-6 {
        fill: url(#Adsız_degrade_2);
      }
      .cls-6, .cls-7 {
        mix-blend-mode: multiply;
      }
      .cls-7 {
        fill: url(#Adsız_degrade_3);
      }

      .cls-12 {
        fill: var(--secondary-color);
      }

      .base-fill { opacity: 1; }
      .dark-fill { opacity: 0; }

      @media (prefers-color-scheme: dark) {
        .base-fill { opacity: 0; }
        .dark-fill { opacity: 1; }
      }

      .base-fill, .dark-fill {
      pointer-events: none;
      mix-blend-mode: multiply;
     }

      .cls-111 {
        fill: #e6e6e6;
      }
      .cls-211, .cls-311 {
        fill: #1d1d1b;
      }
      .cls-411 {
        fill: var(--pin-color-2);
      }
      .cls-511 {
        opacity: .16;
      }
      .cls-611 {
        fill: var(--pin-color-1);
      }
      .cls-311 {
        stroke: #1d1d1b;
        stroke-miterlimit: 10;
        stroke-width: 7px;
      }

      /* Pin: yalnızca <g transform="..."> attribute — çift transform (CSS+attribute) iğneyi kaydırır */

    </style>
    <radialGradient id="Adsız_degrade_3" data-name="Adsız degrade 3" cx="1564.1" cy="10844.34" fx="1564.1" fy="10844.34" r="283.02" gradientTransform="translate(0 12433.24) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset=".82" stop-color="#7E7C7C"/>
      <stop offset=".88" stop-color="#B4B3B3"/>
      <stop offset=".93" stop-color="#DDDCDC"/>
      <stop offset=".98" stop-color="#F5F5F5"/>
      <stop offset="1" stop-color="#fff"/>
    </radialGradient>
    <radialGradient id="Adsız_degrade_2" data-name="Adsız degrade 2" cx="1563.99" cy="10869.24" fx="1563.99" fy="10869.24" r="1406.68" gradientTransform="translate(0 12433.24) scale(1 -1)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".45" stop-color="#FBFBFB"/>
      <stop offset=".8" stop-color="#F2F2F2"/>
      <stop offset=".83" stop-color="#F1F1F1"/>
      <stop offset=".9" stop-color="#EFEFEF"/>
      <stop offset=".93" stop-color="#E8E8E8"/>
      <stop offset=".95" stop-color="#DCDCDC"/>
      <stop offset=".96" stop-color="#CCCBCB"/>
      <stop offset=".98" stop-color="#B6B5B5"/>
      <stop offset=".99" stop-color="#9C9B9B"/>
      <stop offset="1" stop-color="#7E7C7C"/>
    </radialGradient>
  </defs>
  <g id="katman_1">
    <g class="cls-5">
      <g id="katman_1-2" data-name="katman_1">
        <g>
          <g>
            <g>
            <path class="cls-2" d="M2548.04,579.82l-983.99,984.18L1924.22,219.89c3.36.86,6.72,1.82,10.08,2.78,236.87,65.3,442.65,188.32,606.26,349.76,2.49,2.35,4.99,4.85,7.53,7.39h-.05Z"/>
            <path class="cls-9" d="M1924.17,219.93l-360.17,1344.11L1203.87,219.69c3.41-.86,6.76-1.82,10.17-2.64,222.33-58.01,461.98-61.65,699.96.19,3.41.86,6.76,1.78,10.17,2.69h0Z"/>
            <path class="cls-10" d="M2910.85,1914c-.86,3.41-1.82,6.72-2.69,10.12h0l-1344.11-360.13,1344.31-360.13c.86,3.41,1.82,6.76,2.64,10.17,58.01,222.38,61.65,462.03-.14,699.96h0Z"/>
            <path class="cls-10" d="M1564.05,1564l-984.18-983.99c2.49-2.49,4.99-4.94,7.53-7.39,168.93-166.2,378.12-287.01,606.5-350.19,3.36-.96,6.72-1.92,10.08-2.78l360.13,1344.35h-.05Z"/>
            <path class="cls-8" d="M1564.05,1564L219.88,1203.83c.86-3.41,1.82-6.72,2.78-10.12,65.3-236.92,188.36-442.7,349.81-606.26,2.4-2.49,4.85-4.99,7.39-7.48l984.18,983.99v.05Z"/>
            <path class="cls-8" d="M2908.31,1203.92l-1344.31,360.13,983.99-984.18c2.45,2.45,4.89,4.94,7.39,7.48,166.15,168.93,286.96,378.17,350.15,606.54.96,3.36,1.92,6.72,2.78,10.08v-.05Z"/>
            <path class="cls-2" d="M2548.18,2547.99c-2.45,2.45-4.94,4.94-7.48,7.39-168.93,166.15-378.12,286.96-606.5,350.15-3.36.96-6.72,1.92-10.12,2.78l-360.08-1344.31,984.13,983.99h.05Z"/>
            <path class="cls-8" d="M1924.08,2908.31c-3.41.91-6.76,1.82-10.17,2.64-222.33,58.05-461.98,61.65-699.91-.14-3.41-.86-6.76-1.78-10.17-2.69l360.17-1344.11,360.08,1344.31Z"/>
            <path class="cls-9" d="M2908.11,1924.17c-.86,3.36-1.82,6.72-2.78,10.08-65.3,236.92-188.32,442.7-349.81,606.26-2.35,2.49-4.85,4.99-7.39,7.53l-984.13-983.99,1344.11,360.17v-.05Z"/>
            <path class="cls-9" d="M1564.05,1564l-984.04,984.18c-2.45-2.45-4.89-4.94-7.39-7.48-166.1-168.98-286.96-378.17-350.15-606.54-.96-3.36-1.92-6.72-2.78-10.12l1344.35-360.08v.05Z"/>
            <path class="cls-10" d="M1564.05,1564l-360.17,1344.11c-3.41-.86-6.72-1.82-10.12-2.78-236.92-65.3-442.7-188.36-606.3-349.76-2.49-2.4-4.99-4.89-7.48-7.39l984.04-984.18h.05Z"/>
            <path class="cls-2" d="M1564.05,1564L219.69,1924.08c-.86-3.41-1.82-6.76-2.64-10.17-58.01-222.28-61.65-461.98.14-699.91.86-3.41,1.78-6.76,2.69-10.17l1344.16,360.17h0Z"/>
            </g>
            <path class="cls-4" d="M2910.99,1214.09c-.82-3.41-1.78-6.76-2.64-10.17-.86-3.36-1.82-6.72-2.78-10.08l-1306.45,349.91,956.31-956.45c-2.45-2.49-4.89-4.99-7.39-7.48-2.49-2.49-4.99-4.99-7.53-7.39l-956.26,956.45L1934.25,222.67c-3.36-.96-6.72-1.92-10.08-2.78-3.41-.91-6.76-1.82-10.17-2.69l-350,1306.26L1214.05,217.01c-3.41.82-6.76,1.78-10.17,2.64-3.36.86-6.72,1.82-10.08,2.78l349.91,1306.45-956.4-956.26c-2.49,2.4-4.99,4.85-7.53,7.39-2.49,2.45-4.94,4.94-7.39,7.48l956.4,956.26L222.57,1193.75c-.96,3.41-1.92,6.72-2.78,10.12-.91,3.41-1.82,6.76-2.69,10.17l1306.31,350L216.96,1913.95c.82,3.41,1.78,6.76,2.64,10.17s1.82,6.76,2.78,10.12l1306.45-349.95-956.31,956.5c2.45,2.49,4.89,4.99,7.39,7.48s4.94,4.94,7.48,7.39l956.31-956.45-350,1306.21c3.41.96,6.72,1.92,10.12,2.78,3.41.91,6.76,1.82,10.17,2.69l350-1306.31,349.91,1306.45c3.41-.82,6.76-1.73,10.17-2.64,3.41-.86,6.76-1.82,10.12-2.78l-349.95-1306.45,956.45,956.31c2.49-2.4,4.99-4.89,7.48-7.39s4.99-4.99,7.39-7.53l-956.45-956.26,1306.26,350c.96-3.36,1.92-6.72,2.78-10.08h0c.86-3.45,1.82-6.76,2.69-10.17l-1306.31-350,1306.45-349.95h0Z"/>
          </g>
          <circle class="cls-7" cx="1564.1" cy="1588.9" r="283.02"/>
          <circle class="cls-11" cx="1563.94" cy="1563.9" r="258.12"/>
          <circle class="cls-1" cx="1564.01" cy="1563.9" r="181.12"/>
          <path class="cls-4" d="M1564,1350.26c-118.03,0-213.74,95.67-213.74,213.74s95.67,213.74,213.74,213.74,213.74-95.67,213.74-213.74-95.67-213.74-213.74-213.74Z"/>
          <circle class="cls-8" cx="1564" cy="1564" r="183.81"/>
          <g>
            <g>
              <path class="cls-11" d="M1564,3128.05c863.8,0,1564-700.24,1564-1564S2427.8,0,1564,0,0,700.2,0,1564s700.24,1564,1564,1564v.05ZM1564,173.68c767.85,0,1390.32,622.47,1390.32,1390.32s-622.47,1390.32-1390.32,1390.32S173.68,2331.85,173.68,1564,796.15,173.68,1564,173.68Z"/>
            <g>
                <circle class="cls-12" cx="1564" cy="3041.16" r="46.63"/>
                <circle class="cls-12" cx="1564" cy="95.33" r="46.64"/>
                <circle class="cls-12" cx="2069.18" cy="2952.1" r="46.64" transform="translate(-1480.8 3579.81) rotate(-65)"/>
                <circle class="cls-12" cx="1058.8" cy="175.94" r="46.64"/>
                <path class="cls-12" d="M2483.51,2659.83c19.72-16.55,49.18-14.01,65.73,5.76,16.55,19.72,14.01,49.18-5.76,65.73-19.72,16.55-49.18,13.96-65.73-5.76-16.55-19.72-14.01-49.18,5.76-65.73Z"/>
                <path class="cls-12" d="M644.49,468.17c-19.72,16.55-49.18,13.96-65.73-5.76-16.55-19.72-13.96-49.18,5.76-65.73,19.72-16.55,49.18-14.01,65.73,5.76,16.55,19.72,13.96,49.18-5.76,65.73Z"/>
                <path class="cls-12" d="M2802.85,2279.26c12.86-22.31,41.41-29.94,63.72-17.08,22.31,12.86,29.94,41.41,17.08,63.72-12.86,22.31-41.41,29.94-63.72,17.08-22.31-12.86-29.94-41.41-17.08-63.72Z"/>
                <path class="cls-12" d="M325.15,848.74c-12.86,22.31-41.41,29.94-63.72,17.08-22.31-12.86-29.94-41.41-17.08-63.72,12.86-22.31,41.41-29.94,63.72-17.08,22.31,12.86,29.94,41.41,17.08,63.72Z"/>
                <path class="cls-12" d="M2972.79,1812.43c4.46-25.38,28.69-42.32,54.02-37.86,25.38,4.46,42.32,28.69,37.86,54.02-4.46,25.38-28.69,42.32-54.02,37.86-25.38-4.46-42.32-28.69-37.86-54.02Z"/>
                <circle class="cls-12" cx="109.32" cy="1307.51" r="46.64"/>
                <path class="cls-12" d="M2972.79,1315.62c-4.46-25.38,12.47-49.56,37.86-54.02,25.38-4.46,49.56,12.47,54.02,37.86,4.46,25.38-12.47,49.56-37.86,54.02-25.38,4.46-49.56-12.47-54.02-37.86Z"/>
                <path class="cls-12" d="M155.21,1812.43c4.46,25.38-12.47,49.56-37.85,54.02-25.38,4.46-49.56-12.47-54.02-37.86-4.46-25.38,12.47-49.56,37.85-54.02,25.38-4.46,49.56,12.47,54.02,37.86Z"/>
                <path class="cls-12" d="M2802.85,848.74c-12.86-22.31-5.23-50.86,17.08-63.72,22.31-12.86,50.86-5.23,63.72,17.08,12.86,22.31,5.23,50.86-17.08,63.72-22.31,12.86-50.86,5.23-63.72-17.08Z"/>
                <path class="cls-12" d="M325.15,2279.26c12.86,22.31,5.23,50.86-17.08,63.72-22.31,12.86-50.86,5.23-63.72-17.08-12.86-22.31-5.23-50.86,17.08-63.72,22.31-12.86,50.86-5.23,63.72,17.08Z"/>
                <path class="cls-12" d="M2483.51,468.17c-19.72-16.55-22.31-45.96-5.76-65.73,16.55-19.72,45.96-22.31,65.73-5.76,19.72,16.55,22.31,45.96,5.76,65.73-16.55,19.72-45.96,22.31-65.73,5.76Z"/>
                <path class="cls-12" d="M644.49,2659.83c19.72,16.55,22.31,45.96,5.76,65.73-16.55,19.72-45.96,22.31-65.73,5.76-19.72-16.55-22.31-45.96-5.76-65.73,16.55-19.72,45.96-22.31,65.73-5.76Z"/>
                <circle class="cls-12" cx="2069.24" cy="175.94" r="46.64"/>
                <circle class="cls-12" cx="1058.8" cy="2952.07" r="46.64" transform="translate(-1148.4 724.05) rotate(-25)"/>
              </g>
            </g>
            <circle class="cls-6" cx="1563.99" cy="1564" r="1406.68"/>
          </g>
        </g>
      </g>
    </g>
    <text class="cls-3 wheelText slice1-text1" transform="translate(1927.37 1038.74) rotate(-65.04)"><tspan x="0" y="0">Sorry</tspan></text>
    <text class="cls-3 wheelText slice2-text1" transform="translate(2034.37 1347.74) rotate(-26.96)"><tspan x="0" y="0">50% OFF</tspan></text>
    <text class="cls-3 wheelText slice4-text1" transform="translate(1996.37 1878.74) rotate(30.47)"><tspan x="0" y="0">40% OFF</tspan></text>
    <text class="cls-3 wheelText slice2-text2" transform="translate(1516.83 2091.64) rotate(90.31)"><tspan x="0" y="0">30% OFF</tspan></text>
    <text class="cls-3 wheelText slice4-text2" transform="translate(1097.37 1775.74) rotate(152.37)"><tspan x="0" y="0">20% OFF</tspan></text>
    <text class="cls-3 wheelText slice2-text3" transform="translate(1143.37 1246.74) rotate(-152.87)"><tspan x="0" y="0">70% OFF</tspan></text>
    <text class="cls-3 wheelText slice4-text3" transform="translate(1613.37 1037.74) rotate(-88.38)"><tspan x="0" y="0">60% OFF</tspan></text>
    <text class="cls-3 wheelText slice3-text1" transform="translate(1312.37 1010.74) rotate(-124.69)"><tspan x="0" y="0">Nope</tspan></text>
    <text class="cls-3 wheelText slice1-text3" transform="translate(1076.37 1505.74) rotate(178.09)"><tspan x="0" y="0">Next time</tspan></text>
    <text class="cls-3 wheelText slice3-text2" transform="translate(1300.37 1974.74) rotate(118.82)"><tspan x="0" y="0">No luck today</tspan></text>
    <text class="cls-3 wheelText slice1-text2" transform="translate(1810.37 2075.74) rotate(61.86)"><tspan x="0" y="0">Almost</tspan></text>
    <text class="cls-3 wheelText slice3-text3" transform="translate(2134.37 1606.74) rotate(3.37)"><tspan x="0" y="0">Nothing</tspan></text>
  </g>
  <g id="wheel-pin-fixed" class="wheel-pin-container" transform="translate(3050 1250) rotate(33)">
    <g class="wheel-pin">
      <g class="cls-511">
        <g>
          <path class="cls-211" d="M173.55,76.83c14-22.54,33.67-41.22,56.88-54.02,22.92-12.64,48.84-19.32,74.96-19.32,11.72,0,23.47,1.34,34.94,3.99,83.4,19.25,135.59,102.77,116.34,186.17-14.94,64.71-69.37,112.74-135.44,119.51L6.73,345.39,173.55,76.83Z"/>
          <path class="cls-211" d="M305.39,7c11.32,0,22.78,1.27,34.15,3.9h0c81.65,18.85,132.56,100.32,113.71,181.98h0c-14.6,63.25-67.81,110.2-132.38,116.81L13.47,341.18,176.52,78.68C204.61,33.46,253.74,7,305.39,7M305.39,0v7S305.39,0,305.39,0c-26.71,0-53.22,6.83-76.65,19.75-23.73,13.09-43.85,32.19-58.17,55.24L7.52,337.48l-7.52,12.11,14.18-1.45,307.4-31.49c67.56-6.92,123.22-56.03,138.49-122.2,9.54-41.31,2.42-83.87-20.05-119.82S382.43,13.61,341.12,4.08C329.4,1.37,317.38,0,305.39,0h0Z"/>
        </g>
        <circle class="cls-311" cx="311.47" cy="154.96" r="50"/>
      </g>
      <g>
        <path class="cls-611" d="M452.84,192.02h0c18.85-81.65-32.06-163.13-113.72-181.98h0c-63.25-14.6-128.77,12.65-163.02,67.78L13.05,340.33l307.41-31.49c64.57-6.61,117.78-53.57,132.38-116.81Z"/>
        <circle class="cls-111" cx="311.28" cy="153.77" r="54.06"/>
        <circle class="cls-411" cx="311.06" cy="154.11" r="43.17"/>
      </g>
    </g>
  </g>
</svg>`;

const games = [
  {
    id: 1,
    name: "wheel",
    game: wheelSVG,
    gameRewards: [
      {
        text: "50% OFF",
        weight: 9,
        couponCode: "SAVE50",
        hasReward: true,
        sliceText: "slice2-text1",
      },
      {
        text: "Sorry",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice1-text1",
      },
      {
        text: "30% OFF",
        weight: 26,
        couponCode: "SAVE30",
        hasReward: true,
        sliceText: "slice2-text2",
      },
      {
        text: "Almost",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice1-text2",
      },
      {
        text: "70% OFF",
        weight: 5,
        couponCode: "SAVE70",
        hasReward: true,
        sliceText: "slice2-text3",
      },
      {
        text: "Next time",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice1-text3",
      },
      {
        text: "40% OFF",
        weight: 17,
        couponCode: "SAVE40",
        hasReward: true,
        sliceText: "slice4-text1",
      },
      {
        text: "Nope",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice3-text1",
      },
      {
        text: "20% OFF",
        weight: 34,
        couponCode: "SAVE20",
        hasReward: true,
        sliceText: "slice4-text2",
      },
      {
        text: "No luck today",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice3-text2",
      },
      {
        text: "60% OFF",
        weight: 9,
        couponCode: "SAVE60",
        hasReward: true,
        sliceText: "slice4-text3",
      },
      {
        text: "Nothing",
        weight: 0,
        couponCode: "",
        hasReward: false,
        sliceText: "slice3-text3",
      },
    ],
    gameColors: {
      "--primary-color": "#00C39A",
      "--secondary-color": "#808080",
      "--text-color": "#F2F2F2",
      "--accent-color": "#00008B",
      "--background-color": "#F0E8D5",
      "--slice-color-1": "#edc2c1",
      "--slice-color-2": "#e3e9bf",
      "--slice-color-3": "#eb9853",
      "--slice-color-4": "#87bbb5",
      "--pin-color-1": "#ff8061",
      "--pin-color-2": "#F2F2F2",
    },
  },
  {
    id: 2,
    name: "scratchcard",
    game: scratchCardSVG,
    gameRewards: [
      { text: "50% OFF", weight: 10, couponCode: "SAVE50", hasReward: true },
      { text: "Sorry", weight: 40, couponCode: "", hasReward: false },
      { text: "20% OFF", weight: 50, couponCode: "SAVE20", hasReward: true },
    ],
    gameColors: {
      "--primary-color": "#00C39A",
      "--secondary-color": "#C0C0C0",
      "--text-color": "#FFFFFF",
    },
  },
];

function resolveGameRowForDefaultSvgs(raw) {
  if (raw == null || raw === "") return null;
  if (typeof raw === "number" && Number.isInteger(raw) && raw > 0) {
    return games.find((g) => g.id === raw) ?? null;
  }
  const s = String(raw).trim();
  if (/^\d+$/.test(s)) {
    const n = parseInt(s, 10);
    return games.find((g) => g.id === n) ?? null;
  }
  const compact = s.toLowerCase().replace(/[\s_-]+/g, "");
  const nameToId = {
    wheel: 1,
  };
  const id = nameToId[compact];
  if (id != null) return games.find((g) => g.id === id) ?? null;
  return null;
}

export function getGameRecordById(id) {
  if (id == null || id === "") return null;
  const n = Number(id);
  if (Number.isNaN(n)) return null;
  return games.find((g) => g.id === n) ?? null;
}

class DefaultGameSvgs {
  static getGameById(gameId) {
    const row = resolveGameRowForDefaultSvgs(gameId) ?? games[0];
    return {
      id: row.id,
      name: row.name,
      svg: row.game,
      gameRewards: row.gameRewards,
      gameColors: row.gameColors,
    };
  }

  /** @deprecated — getGameById(gameID) kullan. */
  static getGame(gameId) {
    return this.getGameById(gameId);
  }

  static getGameSvg(gameId) {
    return this.getGameById(gameId).svg;
  }
}

export { DefaultGameSvgs };
if (typeof window !== "undefined") {
  window.DefaultGameSvgs = DefaultGameSvgs;
}
