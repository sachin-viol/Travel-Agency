const GuidedTravel = () => {
  const FeaturePoint = ({
    title,
    description,
    offset = false,
    delay = 0,
  }: {
    title: string;
    description: string;
    offset?: boolean;
    delay?: number;
  }) => {
    return (
      <div
        className={`relative mb-16 ${offset ? "ml-20" : ""} animate-fade-in`}
        style={{ animationDelay: `${delay}ms` }}>
        <div className="absolute -left-8 top-0">
          <div className="w-6 h-6 bg-travel-earth-light rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-travel-earth-light">
          {title}
        </h3>
        <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-travel-terracotta uppercase tracking-wider">
              Why travel with us
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-4xl">
              Why Guided Travel by WANDER TRIBE
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              You're a traveler with places to go. We'll take care of the
              details. You embrace the journey.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-travel-earth">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </div>
                  Social Connections
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Meet a group of people who share your love of travel. Learn
                  from locals. Forge friendships in the coolest places.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-travel-earth">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  Independence
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  There's plenty of time built into our itineraries, plus
                  optional tours, Choice on Tour excursions, and more. It's your
                  trip, your way.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-travel-earth">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Expertly Planned
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  You know what you want to see and do - let a team of experts
                  handle all the details from the must-sees to centrally-located
                  accommodations and local lessons.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-travel-earth">
                    <svg
                      className="size-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                      />
                    </svg>
                  </div>
                  The Best Pacing
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Don't rush – this is your time to see the world. Get more time
                  in the destination, and enjoy an ideal balance of included
                  excursions and free time.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="flex flex-col justify-center md:pl-0 pl-5">
            <div className="relative mb-16">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Social Connections</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                Meet a group of people who share your love of travel. Learn from
                locals. Forge friendships in the coolest places.
              </p>
            </div>

            <div className="relative mb-16 ml-20">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Independence</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                There's plenty of time built into our itineraries, plus optional tours, Choice on
                Tour excursions, and more. It's your trip, your way.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">Expertly Planned</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                You know what you want to see and do - let a team of experts handle
                all the details from the must-sees to centrally-located
                accommodations and local lessons.
              </p>
            </div>

            <div className="relative ml-20">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth-light">The Best Pacing</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                Don't rush – this is your time to see the world. Get more time in the destination,
                and enjoy an ideal balance of included excursions and free time.
              </p>
            </div>
          </div>


          <div className="animate-fade-in ml-10">
            <span className="text-travel-terracotta font-semibold uppercase tracking-wider">Why travel with us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-travel-earth-light">Why Guided Travel by WANDER TRIBE</h2>
            <div className="w-20 h-1 bg-travel-teal mb-6"></div>
            <p className="text-lg mb-8 text-gray-700">
              You're a traveler with places to go. We'll take care of the details. You
              embrace the journey.
            </p>
            <div className="relative mt-12">
              <div className="rounded-full overflow-hidden border-8 border-white w-64 h-64 z-20 relative shadow-xl hover-lift hover-glow transition-all duration-500">

                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
                  alt="Traveler with bird"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute bottom-4 right-12 rounded-full overflow-hidden border-8 border-travel-cloud-white md:w-40 md:h-40 w-20 h-20 z-10 shadow-lg animate-float">
                <img
                  src="https://images.unsplash.com/photo-1534008897995-27a23e859048"
                  alt="Group travel"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute md:-left-6 md:top-24 top-3 left-1 z-30">
                <div className="w-3 h-3 bg-travel-earth rounded-full animate-pulse"></div>
              </div>
              {/* <div className="absolute right-20 top-0 z-30">
                <div className="w-3 h-3 bg-travel-earth rounded-full animate-pulse"></div>
              </div> 
              <div className="absolute md:right-8 md:bottom-24 z-30 bottom-7 right-10">
                <div className="w-3 h-3 bg-travel-earth rounded-full animate-pulse"></div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50,100 Q100,50 150,100 T250,100 T350,100"
                  fill="none"
                  stroke="#2A9D8F"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-dash"
                />
              </svg>
            </div>
          </div>


        </div> */}
      </div>
    </section>
  );
};

export default GuidedTravel;
