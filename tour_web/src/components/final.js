import React from 'react';
import '../css/styles.css'
const Final=()=>{
    return (
        <div>
            
<h1>Reviews</h1>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          {/* <a class="text-indigo-500">example@email.com</a> */}
          <p class="leading-normal my-5">49 Smith St.
            <br />Saint Cloud, MN 56301
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer> 
       
        </div>

    );
}

export default Final;