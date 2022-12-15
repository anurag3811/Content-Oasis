import React from "react";

const Howtouse = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-400 mt-10">
            Instructions:
          </h1>
          {/* <p class="lg:w-full w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
        </div>
        <div className="flex justify-center">
          <div class="flex flex-wrap -m-4 xl:w-2/3 justify-center">
            <div class=" xl:w-full md:w-full p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div className="flex justify-center">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center">
                  <h2 class="text-lg text-gray-600 font-medium title-font mb-2">
                    Creating Page:
                  </h2>
                </div>
                <p class="leading-relaxed text-base">
                  You can easily Create your own page by clicking on 'Create
                  Page'. Once you create a page by entering necessary inputs,
                  you can then go on to add content. (One user can only create
                  one contract in their lifetime)
                </p>
              </div>
            </div>
            <div class="xl:w-full md:w-full p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div className="flex justify-center">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h2 class="text-lg text-gray-600 font-medium title-font mb-2">
                    Adding Content:
                  </h2>
                </div>
                <p class="leading-relaxed text-base">
                  To add content, first to go your page, by clicking on 'See
                  your page' (or by choosing your page in the list of pages).
                  Once you are on Adminpage you can easily add links of your
                  content to specific levels. Note: As of now, add only links of
                  images that are hosted on ipfs, you can use web3.storage for
                  the same. The link should contain '.ipfs.w3s.link/' in it. It
                  is best recommended to use square images for better
                  user-experience.
                </p>
              </div>
            </div>
            <div class="xl:w-full md:w-full p-4">
              <div class="border border-gray-200 p-6 rounded-lg">
                <div className="flex justify-center">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h2 class="text-lg text-gray-600 font-medium title-font mb-2">
                    Deleting Page:
                  </h2>
                </div>
                <p class="leading-relaxed text-base">
                  You can delete your page anytime you want, just go to your
                  page and scroll to bottom, and click on 'Delete Page'. You can
                  access your page even after deleting it(For withdrawing Funds)
                  , but it won't be visible to the users on Content Oasis's
                  Landing Page. (Since, this is a project and not a live
                  website, I can also delete pages of people to avoid spamming
                  and cluttering of explicit content. I would definitely not
                  keep that authority if this is was an actual Web3 website, as
                  the whole purpose of this platform is to avoid someone's
                  control on your content and reach)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </div>
    </section>
  );
};

export default Howtouse;
