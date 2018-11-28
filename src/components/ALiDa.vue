<template>
  <div class="alida" v-on:click="showPopup(null, $event)">
    <section class="graphics">
      <!-- <img class="logo" id="logo-atm" :src="`${require('@/assets/amsterdam-time-machine.svg')}`" /> -->
      <!-- <img id="logo-alida" :src="`${require('@/assets/alida.svg')}`" /> -->
      <svg version="1.1" class="logo" id="logo-alida" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 421.1 204" style="enable-background:new 0 0 421.1 204;" xml:space="preserve">
        <title>ALiDa - Amsterdam Linked Data</title>
        <g>
          <path d="M31.1,181.7l-2.4-6.7h-9.3l-2.4,6.7h-4.2l9.1-24.4h4.3l9.1,24.4H31.1z M27.6,171.5l-2.3-6.6c-0.2-0.4-0.4-1.1-0.7-2.1
            s-0.5-1.7-0.6-2.1c-0.3,1.4-0.7,2.9-1.3,4.5l-2.2,6.3H27.6z"/>
          <path d="M53.6,181.7h-3.9v-11.3c0-1.4-0.3-2.5-0.8-3.1c-0.5-0.7-1.4-1-2.5-1c-1.5,0-2.6,0.5-3.3,1.5s-1.1,2.6-1.1,4.9v9.2h-3.9
            v-18.4h3.1l0.5,2.4h0.2c0.5-0.9,1.2-1.6,2.2-2c1-0.5,2-0.7,3.2-0.7c2.8,0,4.7,1,5.6,2.9h0.3c0.5-0.9,1.3-1.6,2.3-2.1
            c1-0.5,2.1-0.8,3.4-0.8c2.2,0,3.8,0.6,4.8,1.7c1,1.1,1.5,2.8,1.5,5.1v12h-3.9v-11.3c0-1.4-0.3-2.5-0.8-3.1c-0.5-0.7-1.4-1-2.5-1
            c-1.5,0-2.6,0.5-3.3,1.4s-1.1,2.4-1.1,4.4V181.7z"/>
          <path d="M83,176.5c0,1.8-0.7,3.2-2,4.1c-1.3,1-3.2,1.4-5.6,1.4c-2.4,0-4.4-0.4-5.9-1.1v-3.4c2.2,1,4.2,1.5,6,1.5
            c2.4,0,3.6-0.7,3.6-2.2c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.6-1.3-1c-0.6-0.3-1.5-0.7-2.5-1.1c-2.1-0.8-3.5-1.6-4.3-2.5
            c-0.7-0.8-1.1-1.9-1.1-3.2c0-1.6,0.6-2.8,1.9-3.7c1.3-0.9,3-1.3,5.2-1.3c2.2,0,4.2,0.4,6.1,1.3l-1.3,2.9c-2-0.8-3.7-1.2-5-1.2
            c-2.1,0-3.1,0.6-3.1,1.8c0,0.6,0.3,1.1,0.8,1.5c0.5,0.4,1.7,0.9,3.5,1.6c1.5,0.6,2.6,1.1,3.3,1.6s1.2,1,1.5,1.7
            C82.8,174.8,83,175.6,83,176.5z"/>
          <path d="M94.1,178.9c1,0,1.9-0.1,2.9-0.4v2.9c-0.4,0.2-1,0.3-1.7,0.5c-0.7,0.1-1.4,0.2-2.1,0.2c-3.7,0-5.6-1.9-5.6-5.8v-9.9h-2.5
            v-1.7l2.7-1.4l1.3-3.9h2.4v4.1h5.2v3h-5.2v9.8c0,0.9,0.2,1.6,0.7,2.1C92.7,178.7,93.3,178.9,94.1,178.9z"/>
          <path d="M108.6,182c-2.9,0-5.1-0.8-6.7-2.5c-1.6-1.7-2.4-4-2.4-6.9c0-3,0.7-5.4,2.2-7.1c1.5-1.7,3.6-2.6,6.2-2.6
            c2.4,0,4.3,0.7,5.8,2.2s2.1,3.5,2.1,6.1v2.1h-12.2c0.1,1.8,0.5,3.2,1.4,4.1c0.9,1,2.2,1.4,3.8,1.4c1.1,0,2.1-0.1,3-0.3
            c0.9-0.2,1.9-0.5,3-1v3.2c-1,0.5-1.9,0.8-2.9,1C111,182,109.9,182,108.6,182z M107.9,166c-1.2,0-2.2,0.4-3,1.2
            c-0.7,0.8-1.2,1.9-1.3,3.4h8.3c0-1.5-0.4-2.7-1.1-3.4S109.1,166,107.9,166z"/>
          <path d="M129.5,163c0.8,0,1.4,0.1,1.9,0.2l-0.4,3.6c-0.6-0.1-1.1-0.2-1.7-0.2c-1.6,0-2.8,0.5-3.8,1.5c-1,1-1.5,2.3-1.5,4v9.6h-3.9
            v-18.4h3.1l0.5,3.2h0.2c0.6-1.1,1.4-2,2.4-2.6S128.4,163,129.5,163z"/>
          <path d="M141.1,182c-2.3,0-4.1-0.8-5.4-2.5c-1.3-1.7-1.9-4-1.9-7c0-3,0.7-5.4,2-7c1.3-1.7,3.1-2.5,5.4-2.5c2.4,0,4.3,0.9,5.5,2.7
            h0.2c-0.2-1.3-0.3-2.4-0.3-3.1v-6.7h3.9v25.9h-3.1l-0.7-2.4h-0.2C145.3,181.1,143.5,182,141.1,182z M142.1,178.9
            c1.6,0,2.8-0.5,3.5-1.4c0.7-0.9,1.1-2.4,1.1-4.4v-0.5c0-2.3-0.4-4-1.1-4.9c-0.8-1-1.9-1.5-3.5-1.5c-1.4,0-2.4,0.6-3.2,1.7
            s-1.1,2.7-1.1,4.8c0,2,0.4,3.6,1.1,4.7S140.7,178.9,142.1,178.9z"/>
          <path d="M167.6,181.7l-0.8-2.6h-0.1c-0.9,1.1-1.8,1.9-2.7,2.3s-2,0.6-3.5,0.6c-1.8,0-3.2-0.5-4.2-1.5c-1-1-1.5-2.4-1.5-4.1
            c0-1.9,0.7-3.3,2.1-4.3c1.4-1,3.6-1.5,6.4-1.6l3.2-0.1v-1c0-1.2-0.3-2.1-0.8-2.6c-0.5-0.6-1.4-0.9-2.6-0.9c-0.9,0-1.8,0.1-2.7,0.4
            s-1.7,0.6-2.5,1l-1.3-2.8c1-0.5,2.1-0.9,3.3-1.2c1.2-0.3,2.3-0.4,3.4-0.4c2.3,0,4.1,0.5,5.3,1.5s1.8,2.6,1.8,4.8v12.4H167.6z
            M161.8,179.1c1.4,0,2.6-0.4,3.4-1.2c0.9-0.8,1.3-1.9,1.3-3.3v-1.6l-2.4,0.1c-1.8,0.1-3.2,0.4-4,0.9c-0.8,0.5-1.3,1.4-1.3,2.5
            c0,0.8,0.2,1.5,0.7,1.9C160.1,178.8,160.8,179.1,161.8,179.1z"/>
          <path d="M191.3,181.7h-3.9v-11.3c0-1.4-0.3-2.5-0.8-3.1c-0.5-0.7-1.4-1-2.5-1c-1.5,0-2.6,0.5-3.3,1.5s-1.1,2.6-1.1,4.9v9.2h-3.9
            v-18.4h3.1l0.5,2.4h0.2c0.5-0.9,1.2-1.6,2.2-2c1-0.5,2-0.7,3.2-0.7c2.8,0,4.7,1,5.6,2.9h0.3c0.5-0.9,1.3-1.6,2.3-2.1
            c1-0.5,2.1-0.8,3.4-0.8c2.2,0,3.8,0.6,4.8,1.7c1,1.1,1.5,2.8,1.5,5.1v12H199v-11.3c0-1.4-0.3-2.5-0.8-3.1c-0.5-0.7-1.4-1-2.5-1
            c-1.5,0-2.6,0.5-3.3,1.4s-1.1,2.4-1.1,4.4V181.7z"/>
          <path d="M217.6,181.7v-24.3h4v20.9h10.3v3.4H217.6z"/>
          <path d="M235.4,158.5c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6
            c0,0.7-0.2,1.2-0.6,1.6c-0.4,0.4-0.9,0.6-1.6,0.6c-0.7,0-1.3-0.2-1.6-0.6C235.6,159.6,235.4,159.1,235.4,158.5z M239.6,181.7h-3.9
            v-18.4h3.9V181.7z"/>
          <path d="M261.3,181.7h-3.9v-11.3c0-1.4-0.3-2.5-0.9-3.2c-0.6-0.7-1.5-1-2.7-1c-1.7,0-2.9,0.5-3.6,1.5c-0.8,1-1.1,2.6-1.1,4.9v9.2
            h-3.9v-18.4h3.1l0.5,2.4h0.2c0.6-0.9,1.3-1.6,2.4-2c1-0.5,2.1-0.7,3.4-0.7c4.4,0,6.6,2.2,6.6,6.7V181.7z"/>
          <path d="M270.5,172l2.2-2.8l5.6-5.9h4.5l-7.4,7.9l7.9,10.5h-4.6l-5.9-8.1l-2.1,1.8v6.3h-3.9v-25.9h3.9v12.6l-0.2,3.5H270.5z"/>
          <path d="M294.2,182c-2.9,0-5.1-0.8-6.7-2.5c-1.6-1.7-2.4-4-2.4-6.9c0-3,0.7-5.4,2.2-7.1c1.5-1.7,3.6-2.6,6.2-2.6
            c2.4,0,4.3,0.7,5.8,2.2c1.4,1.5,2.1,3.5,2.1,6.1v2.1h-12.2c0.1,1.8,0.5,3.2,1.4,4.1s2.2,1.4,3.8,1.4c1.1,0,2.1-0.1,3-0.3
            s1.9-0.5,3-1v3.2c-1,0.5-1.9,0.8-2.9,1C296.6,182,295.5,182,294.2,182z M293.5,166c-1.2,0-2.2,0.4-3,1.2c-0.7,0.8-1.2,1.9-1.3,3.4
            h8.3c0-1.5-0.4-2.7-1.1-3.4C295.7,166.3,294.8,166,293.5,166z"/>
          <path d="M312,182c-2.3,0-4.1-0.8-5.4-2.5c-1.3-1.7-1.9-4-1.9-7c0-3,0.7-5.4,2-7c1.3-1.7,3.1-2.5,5.4-2.5c2.4,0,4.3,0.9,5.5,2.7h0.2
            c-0.2-1.3-0.3-2.4-0.3-3.1v-6.7h3.9v25.9h-3.1l-0.7-2.4h-0.2C316.3,181.1,314.4,182,312,182z M313.1,178.9c1.6,0,2.8-0.5,3.5-1.4
            s1.1-2.4,1.1-4.4v-0.5c0-2.3-0.4-4-1.1-4.9c-0.8-1-1.9-1.5-3.5-1.5c-1.4,0-2.4,0.6-3.2,1.7c-0.7,1.1-1.1,2.7-1.1,4.8
            c0,2,0.4,3.6,1.1,4.7C310.5,178.4,311.6,178.9,313.1,178.9z"/>
          <path d="M356,169.3c0,4-1.1,7.1-3.3,9.2c-2.2,2.1-5.4,3.2-9.6,3.2h-6.8v-24.3h7.5c3.9,0,6.9,1,9,3.1C355,162.6,356,165.6,356,169.3
            z M351.9,169.5c0-5.8-2.7-8.7-8.2-8.7h-3.4v17.6h2.8C348.9,178.4,351.9,175.4,351.9,169.5z"/>
          <path d="M372.3,181.7l-0.8-2.6h-0.1c-0.9,1.1-1.8,1.9-2.7,2.3s-2,0.6-3.5,0.6c-1.8,0-3.2-0.5-4.2-1.5s-1.5-2.4-1.5-4.1
            c0-1.9,0.7-3.3,2.1-4.3s3.6-1.5,6.4-1.6l3.2-0.1v-1c0-1.2-0.3-2.1-0.8-2.6c-0.5-0.6-1.4-0.9-2.6-0.9c-0.9,0-1.8,0.1-2.7,0.4
            s-1.7,0.6-2.5,1l-1.3-2.8c1-0.5,2.1-0.9,3.3-1.2s2.3-0.4,3.4-0.4c2.3,0,4.1,0.5,5.3,1.5c1.2,1,1.8,2.6,1.8,4.8v12.4H372.3z
            M366.5,179.1c1.4,0,2.6-0.4,3.4-1.2c0.9-0.8,1.3-1.9,1.3-3.3v-1.6l-2.4,0.1c-1.8,0.1-3.2,0.4-4,0.9c-0.8,0.5-1.3,1.4-1.3,2.5
            c0,0.8,0.2,1.5,0.7,1.9C364.8,178.8,365.6,179.1,366.5,179.1z"/>
          <path d="M387.4,178.9c1,0,1.9-0.1,2.9-0.4v2.9c-0.4,0.2-1,0.3-1.7,0.5c-0.7,0.1-1.4,0.2-2.1,0.2c-3.7,0-5.6-1.9-5.6-5.8v-9.9h-2.5
            v-1.7l2.7-1.4l1.3-3.9h2.4v4.1h5.2v3h-5.2v9.8c0,0.9,0.2,1.6,0.7,2.1C386.1,178.7,386.7,178.9,387.4,178.9z"/>
          <path d="M405.5,181.7l-0.8-2.6h-0.1c-0.9,1.1-1.8,1.9-2.7,2.3s-2,0.6-3.5,0.6c-1.8,0-3.2-0.5-4.2-1.5s-1.5-2.4-1.5-4.1
            c0-1.9,0.7-3.3,2.1-4.3s3.6-1.5,6.4-1.6l3.2-0.1v-1c0-1.2-0.3-2.1-0.8-2.6c-0.5-0.6-1.4-0.9-2.6-0.9c-0.9,0-1.8,0.1-2.7,0.4
            s-1.7,0.6-2.5,1l-1.3-2.8c1-0.5,2.1-0.9,3.3-1.2s2.3-0.4,3.4-0.4c2.3,0,4.1,0.5,5.3,1.5c1.2,1,1.8,2.6,1.8,4.8v12.4H405.5z
            M399.7,179.1c1.4,0,2.6-0.4,3.4-1.2c0.9-0.8,1.3-1.9,1.3-3.3v-1.6L402,173c-1.8,0.1-3.2,0.4-4,0.9c-0.8,0.5-1.3,1.4-1.3,2.5
            c0,0.8,0.2,1.5,0.7,1.9C397.9,178.8,398.7,179.1,399.7,179.1z"/>
        </g>
        <g>
          <g>
            <path class="st0" d="M95.9,133.3l-7-23.1H53.5l-7,23.1H24.3l34.2-97.3h25.1l34.3,97.3H95.9z M83.9,92.9C77.5,72,73.8,60.2,73,57.5
              c-0.8-2.7-1.4-4.9-1.8-6.5c-1.5,5.7-5.6,19.6-12.5,42H83.9z"/>
            <path class="st0" d="M130.2,133.3V36.3h20.6v80h39.3v17H130.2z"/>
            <path class="st0" d="M204.5,40c0-6.6,3.7-9.9,11-9.9c7.3,0,11,3.3,11,9.9c0,3.1-0.9,5.6-2.8,7.3c-1.8,1.7-4.6,2.6-8.3,2.6
              C208.2,49.9,204.5,46.6,204.5,40z M225.6,133.3h-20.2V59.1h20.2V133.3z"/>
            <path class="st0" d="M328.8,83.9c0,16-4.5,28.2-13.6,36.7c-9.1,8.5-22.2,12.7-39.4,12.7h-27.4V36.3h30.4
              c15.8,0,28.1,4.2,36.9,12.5C324.4,57.2,328.8,68.9,328.8,83.9z M307.5,84.4c0-20.8-9.2-31.2-27.6-31.2h-10.9v63.1h8.8
              C297.6,116.3,307.5,105.6,307.5,84.4z"/>
            <path class="st0" d="M394.4,133.3l-3.9-10.1h-0.5c-3.4,4.3-6.9,7.3-10.5,8.9c-3.6,1.7-8.3,2.5-14.1,2.5c-7.1,0-12.7-2-16.8-6.1
              c-4.1-4.1-6.1-9.9-6.1-17.4c0-7.9,2.8-13.7,8.3-17.4c5.5-3.7,13.8-5.8,24.9-6.2l12.9-0.4v-3.2c0-7.5-3.8-11.3-11.5-11.3
              c-5.9,0-12.9,1.8-20.9,5.4l-6.7-13.7c8.5-4.5,18-6.7,28.4-6.7c9.9,0,17.6,2.2,22.9,6.5c5.3,4.3,8,10.9,8,19.8v49.4H394.4z
              M388.4,98.9l-7.8,0.3c-5.9,0.2-10.3,1.2-13.1,3.2c-2.9,1.9-4.3,4.9-4.3,8.9c0,5.7,3.3,8.6,9.8,8.6c4.7,0,8.4-1.3,11.2-4
              c2.8-2.7,4.2-6.3,4.2-10.7V98.9z"/>
          </g>
          <g>
            <path class="st1" d="M82.9,122.9l-7-23.1H40.5l-7,23.1H11.3l34.2-97.3h25.1l34.3,97.3H82.9z M70.9,82.6
              c-6.5-20.9-10.2-32.7-11-35.5c-0.8-2.7-1.4-4.9-1.8-6.5c-1.5,5.7-5.6,19.6-12.5,42H70.9z"/>
            <path class="st1" d="M117.2,122.9V26h20.6v80h39.3v17H117.2z"/>
            <path class="st1" d="M191.5,29.6c0-6.6,3.7-9.9,11-9.9c7.3,0,11,3.3,11,9.9c0,3.1-0.9,5.6-2.8,7.3c-1.8,1.7-4.6,2.6-8.3,2.6
              C195.2,39.6,191.5,36.3,191.5,29.6z M212.6,122.9h-20.2V48.8h20.2V122.9z"/>
            <path class="st1" d="M315.8,73.5c0,16-4.5,28.2-13.6,36.7c-9.1,8.5-22.2,12.7-39.4,12.7h-27.4V26h30.4c15.8,0,28.1,4.2,36.9,12.5
              C311.4,46.9,315.8,58.5,315.8,73.5z M294.5,74.1c0-20.8-9.2-31.2-27.6-31.2h-10.9v63.1h8.8C284.6,105.9,294.5,95.3,294.5,74.1z"/>
            <path class="st1" d="M381.4,122.9l-3.9-10.1h-0.5c-3.4,4.3-6.9,7.3-10.5,8.9c-3.6,1.7-8.3,2.5-14.1,2.5c-7.1,0-12.7-2-16.8-6.1
              c-4.1-4.1-6.1-9.9-6.1-17.4c0-7.9,2.8-13.7,8.3-17.4c5.5-3.7,13.8-5.8,24.9-6.2l12.9-0.4v-3.2c0-7.5-3.8-11.3-11.5-11.3
              c-5.9,0-12.9,1.8-20.9,5.4L336.3,54c8.5-4.5,18-6.7,28.4-6.7c9.9,0,17.6,2.2,22.9,6.5c5.3,4.3,8,10.9,8,19.8v49.4H381.4z
              M375.4,88.6l-7.8,0.3c-5.9,0.2-10.3,1.2-13.1,3.2c-2.9,1.9-4.3,4.9-4.3,8.9c0,5.7,3.3,8.6,9.8,8.6c4.7,0,8.4-1.3,11.2-4
              c2.8-2.7,4.2-6.3,4.2-10.7V88.6z"/>
          </g>
          <g>
            <path class="st2" d="M100.6,119.3l-7-23.1H58.2l-7,23.1H29l34.2-97.3h25.1l34.3,97.3H100.6z M88.6,78.9
              c-6.5-20.9-10.2-32.7-11-35.5c-0.8-2.7-1.4-4.9-1.8-6.5c-1.5,5.7-5.6,19.6-12.5,42H88.6z"/>
            <path class="st2" d="M134.9,119.3V22.3h20.6v80h39.3v17H134.9z"/>
            <path class="st2" d="M209.2,26c0-6.6,3.7-9.9,11-9.9c7.3,0,11,3.3,11,9.9c0,3.1-0.9,5.6-2.8,7.3c-1.8,1.7-4.6,2.6-8.3,2.6
              C212.8,35.9,209.2,32.6,209.2,26z M230.2,119.3H210V45.1h20.2V119.3z"/>
            <path class="st2" d="M333.5,69.9c0,16-4.5,28.2-13.6,36.7c-9.1,8.5-22.2,12.7-39.4,12.7H253V22.3h30.4c15.8,0,28.1,4.2,36.9,12.5
              C329.1,43.2,333.5,54.9,333.5,69.9z M312.1,70.4c0-20.8-9.2-31.2-27.6-31.2h-10.9v63.1h8.8C302.2,102.3,312.1,91.6,312.1,70.4z"/>
            <path class="st2" d="M399.1,119.3l-3.9-10.1h-0.5c-3.4,4.3-6.9,7.3-10.5,8.9c-3.6,1.7-8.3,2.5-14.1,2.5c-7.1,0-12.7-2-16.8-6.1
              c-4.1-4.1-6.1-9.9-6.1-17.4c0-7.9,2.8-13.7,8.3-17.4c5.5-3.7,13.8-5.8,24.9-6.2l12.9-0.4v-3.2c0-7.5-3.8-11.3-11.5-11.3
              c-5.9,0-12.9,1.8-20.9,5.4L354,50.3c8.5-4.5,18-6.7,28.4-6.7c9.9,0,17.6,2.2,22.9,6.5c5.3,4.3,8,10.9,8,19.8v49.4H399.1z
              M393.1,84.9l-7.8,0.3c-5.9,0.2-10.3,1.2-13.1,3.2c-2.9,1.9-4.3,4.9-4.3,8.9c0,5.7,3.3,8.6,9.8,8.6c4.7,0,8.4-1.3,11.2-4
              c2.8-2.7,4.2-6.3,4.2-10.7V84.9z"/>
          </g>
          <g>
            <path class="st3" d="M88.9,127.9l-7-23.1H46.5l-7,23.1H17.3l34.2-97.3h25.1l34.3,97.3H88.9z M76.9,87.6
              c-6.5-20.9-10.2-32.7-11-35.5c-0.8-2.7-1.4-4.9-1.8-6.5c-1.5,5.7-5.6,19.6-12.5,42H76.9z"/>
            <path class="st3" d="M123.2,127.9V31h20.6v80h39.3v17H123.2z"/>
            <path class="st3" d="M197.5,34.6c0-6.6,3.7-9.9,11-9.9c7.3,0,11,3.3,11,9.9c0,3.1-0.9,5.6-2.8,7.3c-1.8,1.7-4.6,2.6-8.3,2.6
              C201.2,44.6,197.5,41.3,197.5,34.6z M218.6,127.9h-20.2V53.8h20.2V127.9z"/>
            <path class="st3" d="M321.8,78.5c0,16-4.5,28.2-13.6,36.7c-9.1,8.5-22.2,12.7-39.4,12.7h-27.4V31h30.4c15.8,0,28.1,4.2,36.9,12.5
              C317.4,51.9,321.8,63.5,321.8,78.5z M300.5,79.1c0-20.8-9.2-31.2-27.6-31.2h-10.9v63.1h8.8C290.6,110.9,300.5,100.3,300.5,79.1z"
              />
            <path class="st3" d="M387.4,127.9l-3.9-10.1h-0.5c-3.4,4.3-6.9,7.3-10.5,8.9c-3.6,1.7-8.3,2.5-14.1,2.5c-7.1,0-12.7-2-16.8-6.1
              c-4.1-4.1-6.1-9.9-6.1-17.4c0-7.9,2.8-13.7,8.3-17.4c5.5-3.7,13.8-5.8,24.9-6.2l12.9-0.4v-3.2c0-7.5-3.8-11.3-11.5-11.3
              c-5.9,0-12.9,1.8-20.9,5.4L342.3,59c8.5-4.5,18-6.7,28.4-6.7c9.9,0,17.6,2.2,22.9,6.5c5.3,4.3,8,10.9,8,19.8v49.4H387.4z
              M381.4,93.6l-7.8,0.3c-5.9,0.2-10.3,1.2-13.1,3.2c-2.9,1.9-4.3,4.9-4.3,8.9c0,5.7,3.3,8.6,9.8,8.6c4.7,0,8.4-1.3,11.2-4
              c2.8-2.7,4.2-6.3,4.2-10.7V93.6z"/>
          </g>
        </g>
      </svg>
      <svg class="graph" :width="`${graph.width}px`"
        :viewBox="graph.viewBox && graph.viewBox.join(' ')"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g :transform="graph.transform">
          <g v-for="(node) in graph.nodes"
            v-bind:class="{
              node: true,
              selected: popup && node.index === popup.datasetIndex,
              faded: !intersect(checkedTags, datasets[node.index].tags)
            }"
            v-on:click="showPopup(node.index, $event)" :key="node.name">
            <g class="edge-blobs">
              <path v-for="(path, index) in node.edges.in" :d="path" :key="`in${index}`" class="edge-blob-in" />
              <path v-for="(path, index) in node.edges.out" :d="path" :key="`out${index}`" class="edge-blob-out" />
            </g>
            <title>{{ node.name }}</title>

            <ellipse v-for="color in colors" class="colored-ellipse" :key="color"
              :style="`fill: ${color};`"
              :cx="node.cx" :cy="node.cy" :rx="node.rx" :ry="node.ry" />

            <ellipse :cx="node.cx" :cy="node.cy" :rx="node.rx" :ry="node.ry" />

            <text :x="node.cx" :y="node.cy + 4">
              {{ node.name }}
            </text>
          </g>
          <g v-for="edge in graph.edges" class="edge" :key="edge.edge.join('-')">
            <path v-for="(path, index) in edge.paths" :d="path" :key="`path${index}`" />
            <polygon v-for="(polygon, index) in edge.polygons" :points="polygon" :key="`polygon${index}`" />
          </g>
        </g>
      </svg>
    </section>
    <div>
      <Popup v-if="popup"
        :dataset="datasets[popup.datasetIndex]"
        :location="popup.location" :width="popup.width" />
    </div>
    <section>
      <fieldset>
        <span class="legend">Filter by tag:</span>
        <ul class="tags">
          <li v-for="tag in tags" :key="tag">
            <input  type="checkbox" :id="`tags-${tag}`"
              name="tags" :value="tag" v-model="checkedTags">
            <label :for="`tags-${tag}`" class="tag">{{ tag }}</label>
          </li>
        </ul>
      </fieldset>
    </section>
    <section class="text">
      <div>
        <h2>ALiDa</h2>
        <p>
          ALiDa, the Amsterdam Linked Data cloud, visualises LOD resources on Amsterdam history.
          By linking to each other and using shared vocabularies, together they spin a web of data
          that facilitates research on a whole new level. The datasets in ALiDa are the backbone
          of the <a href="https://amsterdamtimemachine.nl/">Amsterdam Time Machine</a>.
        </p>
        </div>
      <div>
        <h2>Add your data</h2>
        <p>
          Do you want your data to be a part of ALiDa?
          If your dataset is linked, open and about Amsterdam history, it should!
          Please read more on requirements and procedure
          in the section <em><a href="https://amsterdamtimemachine.nl/data/alida/">Contributing your dataset to the ALiDa cloud</a></em>.
        </p>
      </div>
    </section>
    <footer>
      <img :src="require('@/assets/lines-straight.svg')" />
    </footer>
  </div>
</template>

<script>
import Popup from './Popup.vue'
import axios from 'axios'
import {render, Module} from 'viz.js/lite.render.js'

const VIZ_DEFAULTS = {
  files: [],
  format: 'svg',
  engine: 'dot'
}

function getPopupStyle (width, diffX) {
  const left = Math.round((width / 2 + diffX) / width * 100)
  return `
    .popup:after,
    .popup:before {
      left: ${left}% !important;
  }`
}

function dotGraphFromDatasets (datasets) {
  return `strict digraph {
    #concentrate=true;
    node [fontname="monospace" margin=0.06];

  ${datasets.map((dataset) => dataset
    .outgoinglinks
    .map((link) =>
      `"${dataset.name}" -> "${link}";`
     ).join('\n')).join('\n')}
  }`
}

function renderDatasetGraph (datasets) {
  const options = Object.assign({}, VIZ_DEFAULTS)
  const module = Module(options)

  const dot = dotGraphFromDatasets(datasets)
  const svg = render(module, dot, options)

  return svg
}

function stringToDOM (string) {
  const parser = new DOMParser()
  return parser.parseFromString(string, 'text/xml')
}

function getPopupLocation (element) {
  const rect = element.getBoundingClientRect()

  return {
    x: window.scrollX + rect.left + rect.width / 2,
    y: window.scrollY + (rect.top + rect.bottom) / 2 + rect.height / 2 + 12
  }
}

export default {
  name: 'ALiDa',
  components: {
    Popup
  },
  props: {
    dataUrl: String
  },
  data () {
    return {
      datasets: undefined,
      popup: undefined,
      popupStyle: undefined,
      tags: [],
      checkedTags: [],
      svg: '',
      graph: {
        nodes: [],
        edges: [],
        viewBox: undefined,
        width: 0,
        height: 0
      },
      colors: [
        '#5CBD70',
        '#0099CD',
        '#EE275F'
      ]
    }
  },
  methods: {
    intersect: function (a, b) {
      let intersection = new Set(
        [...a].filter((tag) => new Set(b).has(tag))
      )

      return intersection.size > 0
    },
    showPopup: function (index, event) {
      if (index === null || (this.popup && this.popup.datasetIndex === index)) {
        this.popup = undefined
        event.stopPropagation()
      } else if (index >= 0) {
        const location = getPopupLocation(event.target)

        const width = Math.min(300, document.body.clientWidth)
        // console.log(width, document.body.clientWidth)


        location.x -= Math.round(width / 2)

        var padding = 10
        var minX = padding
        var maxX = document.body.clientWidth - padding - width
        var diffX = 0

        if (location.x < minX) {
          diffX = location.x - minX
          location.x = minX
        } else if (location.x > maxX) {
          diffX = location.x - maxX
          location.x = maxX
        }

        if (!this.popupStyle) {
          this.popupStyle = document.createElement('style')
          document.head.appendChild(this.popupStyle)
        }

        this.popupStyle.innerHTML = getPopupStyle(width, diffX)

        this.popup = {
          datasetIndex: index,
          location,
          width
        }

        event.stopPropagation()
      }
    }
  },
  mounted () {
    axios
      .get(this.dataUrl)
      .then((response) => {
        this.datasets = response.data

        const tags = [...this.datasets
          .reduce((tags, dataset) =>
            new Set([...tags, ...dataset.tags]),
            new Set()
          )]

        this.tags = tags
        this.checkedTags = [...tags]

        return this.datasets
      })
      .then((datasets) => {
        const svgPadding = 10

        const svgString = renderDatasetGraph(datasets)
        const dom = stringToDOM(svgString)

        const svg = dom.querySelector('svg')
        const graph = dom.querySelector('.graph')

        const width = parseInt(svg.getAttribute('width')) + svgPadding * 2
        const height = parseInt(svg.getAttribute('height')) + svgPadding * 2

        const viewBox = svg.getAttribute('viewBox')
          .split(' ')
          .map((n) => Math.round(parseInt(n)))
          .map((n, i) => n + (i < 2 ? -svgPadding : svgPadding * 2))

        const transform = graph.getAttribute('transform')

        const domEdges = dom.querySelectorAll('.edge')
        const domNodes = dom.querySelectorAll('.node')

        const outEdgesPerNode = {}
        const inEdgesPerNode = {}

        const edges = Array.from(domEdges)
          .map((edge) => {
            // TODO: '->' or '-&gt;'
            const fromTo = edge.querySelector('title').innerHTML.split('-&gt;')

            const paths = edge.querySelectorAll('path')
            const polygons = edge.querySelectorAll('polygon')

            const ds = Array.from(paths).map((path) => path.getAttribute('d'))

            outEdgesPerNode[fromTo[0]] = outEdgesPerNode[fromTo[0]] ? [ds, ...outEdgesPerNode[fromTo[0]]] : [ds]
            inEdgesPerNode[fromTo[1]] = inEdgesPerNode[fromTo[1]] ? [ds, ...inEdgesPerNode[fromTo[1]]] : [ds]

            return {
              edge: fromTo,
              paths: ds,
              polygons: Array.from(polygons).map((polygon) => polygon.getAttribute('points'))
            }
          })

        const nodes = Array.from(domNodes)
          .map((node) => {
            const name = node.querySelector('title').innerHTML
            const ellipse = node.querySelector('ellipse')

            let index = 0
            this.datasets.some((dataset, currentIndex) => {
              index = currentIndex
              return dataset.name === name
            })

            return {
              index,
              name,
              cx: parseFloat(ellipse.getAttribute('cx')),
              cy: parseFloat(ellipse.getAttribute('cy')),
              rx: parseFloat(ellipse.getAttribute('rx')),
              ry: parseFloat(ellipse.getAttribute('ry')),
              edges: {
                in: inEdgesPerNode[name],
                out: outEdgesPerNode[name]
              }
            }
          })

        this.graph = {
          width,
          height,
          viewBox,
          transform,
          nodes,
          edges
        }
      })
  }
}
</script>

<style scoped>
.alida {
  margin: 0.5em;
}

.graphics {
  width: 1400px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.graphics .logo {
  width: 200px;
}

.graphics .graph {
  width: 800px;
  max-width: 100%;
}

#logo-alida {
  isolation: isolate;
}

.st0{fill:#5CBD70;}
.st1{fill:#0099CD;}
.st2{fill:#EE275F;}
.st3{fill:#FFFFFF; stroke-width: 3px; stroke:#231F20;stroke-linecap:round;stroke-linejoin:round;}

.st0, .st1, .st2 {
  mix-blend-mode: screen;
}

@media only screen and (max-width: 600px) {
  .graphics img {
    width: 150px;
  }
}

@media only screen and (max-width: 400px) {
  .graphics img {
    width: 100px;
  }
}

header img:first-child {
  float: left;
}

header img:last-child {
  float: right;
}

footer, section {
  font-size: 16px;
  width: 600px;
  max-width: 100%;
  margin: 1em auto;
}

.graph {
  width: 100%;
  margin: 1em 0;
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

footer img {
  width: 100%;
}

.node {
  isolation: isolate;
  cursor: pointer;
  transition: opacity 0.2s;
}

.node ellipse {
  fill: white;
  stroke: black;
  stroke-width: 1px;
  transition: fill 0.2s, stroke-width 0.2s;
  mix-blend-mode: screen;
}

.node .colored-ellipse {
  mix-blend-mode: screen;
}

.node:hover ellipse,
.node.selected ellipse {
  fill: rgba(255, 255, 255, 0);
}

.node .colored-ellipse {
  stroke: none;
  transition: transform 0.2s;
}

.node.selected .colored-ellipse:nth-of-type(1),
.node:hover .colored-ellipse:nth-of-type(1) {
  transform: translate(6px, 3px);
}

.node.selected .colored-ellipse:nth-of-type(2),
.node:hover .colored-ellipse:nth-of-type(2) {
  transform: translate(-6px, 2px);
}

.node.selected .colored-ellipse:nth-of-type(3),
.node:hover .colored-ellipse:nth-of-type(3) {
  transform: translate(5px, -6px);
}

.node.faded {
  opacity: 0.2;
}

.node text {
  fill: black;
  text-anchor: middle;
  font-size: 12px;
  font-weight: 500;
}

.edge path {
  fill: none;
  stroke: black;
  stroke-width: 1px;
  mix-blend-mode: darken;
}

.edge polygon {
  fill: black;
  stroke: black;
}

.node .edge-blobs path {
  fill: none;
  mix-blend-mode: darken;
  stroke-width: 0;
  transition: stroke-width 0.3s;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.node .edge-blobs .edge-blob-in,
.node .edge-blobs .edge-blob-out {
  stroke: black;
}

.node.selected .edge-blobs path {
  stroke-width: 2px;
}

.node:hover .edge-blobs path {
  stroke-width: 2px;
}

.text {
  columns: 2;
}

.text > *,
.text > * p {
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}

.text h2:first-child {
  margin-top: 0;
}

@media only screen and (max-width: 600px) {
  .text {
    columns: 1;
  }
}
</style>
