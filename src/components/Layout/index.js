import React from 'react'
import FontAwesomeIcon from '../fontawesome/fa'

function Layout() {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    {/* <!-- fixed-width --> */}
    <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
        <div className="sticky top-0 p-4 w-full h-full">
        <ul class="flex sm:flex-col overflow-hidden content-center justify-center">
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="truncate" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" class="w-7 sm:mx-2 mx-4 inline" />
                        <span class="hidden sm:inline">Home</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="truncate" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Settings</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Products</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/chart-bar.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Reports</span>
                    </a>
                </li>
                <li class="py-2 hover:bg-indigo-300 rounded">
                    <a class="" href="#">
                        <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/collection.svg" class="w-7 sm:mx-2 mx-4 inline" /> <span class="hidden sm:inline">Integrations</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <main role="main" className="w-full flex-grow pt-1 px-3">
    <h1 class="text-3xl md:text-5xl mb-4 font-extrabold" id="home">The Holy Grail Layout</h1>
        <p class="py-2">Are you in search of this? In terms of Web design, grail" is that has 3 columns. It is commonly desired and implemented, but for many years, the various ways in which it could be 
        implemented with available technologies all had drawbacks. Because of this, finding an optimal implementation was likened to searching 
        for the elusive Holy Grail.</p>
        <p class="py-2">
        As of 2021, the Holy Grail layout is implemented using CSS Flexbox or CSS Grid display. For this example, we're using
        the <a class="text-indigo-600" href="https://tailwindcss.com/">Tailwind CSS</a> utility framework. As part of it's default classes, Tailwind includes
        <a class="text-indigo-600" href="https://tailwindcss.com/docs/flex-direction">Flexbox classes</a> which make this implementation possible. The holy grail 
        example is also responsive so that the layout stacks vertically on smaller mobile screens.
        </p>
        <p class="py-2">
        Many web pages require a layout with multiple (often three) columns, with the 
        main page content in one column (often the center), and supplementary content such as menus 
        and advertisements in the other columns (sidebars). These columns commonly require separate 
        backgrounds, with borders between them, and should appear to be the same height no matter 
        which column has the tallest content. A common requirement is that the sidebars have a fixed width, 
        with the center column adjusting in size to fill the window (fluid or liquid layout). 
        Another requirement is that, when a page does not contain enough content to fill the screen, 
        the footer should drop to the bottom of the browser window instead of leaving blank space underneath.
        </p>    </main>
    <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
        {/* <!-- fixed-width --> */}
        <div className="flex sm:flex-col px-2">
sidebar goes here        </div>
    </div>
</div>
<footer className="bg-black mt-auto">
    footer here
</footer>
<br />
<h1>Font Awesome</h1>
<FontAwesomeIcon />
</>
  )
}

export default Layout
