<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <div class="mx-4 md:px-0">
      <nav
        class="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border max-w-[1400px] w-full pr-2 md:pr-8 p-[6px] md:p-[6px] flex items-center justify-between"
        data-aos="fade-down"
      >
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            class="w-[48px] md:w-[64px] rounded-full"
            alt="Logo"
          />
          <span class="hidden font-semibold uppercase sm:inline text-slate-800">
            Amarnath
          </span>
        </div>

        <!-- Desktop links -->
        <ul class="hidden space-x-8 md:flex">
          <li>
            <NuxtLink
              to="#hero"
              class="font-semibold transition hover:text-blue-500"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#about"
              class="font-semibold transition hover:text-blue-500"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#skills"
              class="font-semibold transition hover:text-blue-500"
              >Skills</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#projects"
              class="font-semibold transition hover:text-blue-500"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#contact"
              class="font-semibold transition hover:text-blue-500"
              >Contact</NuxtLink
            >
          </li>
        </ul>

        <!-- Mobile burger -->
        <button
          class="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 border border-slate-200 bg-white/80 shadow-sm"
          @click="open = !open"
          aria-label="Toggle navigation"
        >
          <span
            class="w-5 h-0.5 rounded-full bg-slate-800 transition-transform duration-300"
            :class="open ? 'translate-y-1.5 rotate-45' : ''"
          ></span>
          <span
            class="w-5 h-0.5 rounded-full bg-slate-800 transition-opacity duration-200"
            :class="open ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="w-5 h-0.5 rounded-full bg-slate-800 transition-transform duration-300"
            :class="open ? '-translate-y-1.5 -rotate-45' : ''"
          ></span>
        </button>

        <!-- Mobile menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="-translate-y-2 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="-translate-y-2 opacity-0"
        >
          <div
            v-if="open"
            class="absolute top-[72px] right-4 left-4 rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl border md:hidden"
          >
            <ul class="flex flex-col divide-y divide-slate-100">
              <li>
                <NuxtLink
                  @click="close"
                  to="#hero"
                  class="block px-6 py-4 font-semibold text-slate-800 hover:text-blue-500"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  @click="close"
                  to="#about"
                  class="block px-6 py-4 font-semibold text-slate-800 hover:text-blue-500"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  @click="close"
                  to="#skills"
                  class="block px-6 py-4 font-semibold text-slate-800 hover:text-blue-500"
                  >Skills</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  @click="close"
                  to="#projects"
                  class="block px-6 py-4 font-semibold text-slate-800 hover:text-blue-500"
                  >Projects</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  @click="close"
                  to="#contact"
                  class="block px-6 py-4 font-semibold text-slate-800 hover:text-blue-500"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </div>

    <!-- Hero Section - Pure Three.js 3D -->
    <section
      id="hero"
      class="relative min-h-screen overflow-hidden bg-gradient-to-r from-sky-500 to-pink-500"
      style="
        background-image: url('/bgg.png');
        background-size: cover;
        background-position: center;
      "
    >
      <div class="absolute inset-0 bg-white/20 backdrop-blur-xl"></div>
      <canvas ref="canvasRef" class="absolute inset-0 w-full h-screen"></canvas>

      <div
        class="relative z-10 flex flex-col items-center justify-center h-screen px-4 pt-20 text-center text-white md:px-6"
        data-aos="fade-up"
      >
        <div class="rounded-3xl p-4 md:p-12 max-w-[1400px] mx-auto">
          <h1
            class="mb-8 text-6xl font-black text-transparent bg-gradient-to-r from-white to-pink-500 bg-clip-text md:text-8xl drop-shadow-2xl"
          >
            AMARNATH
          </h1>
          <h2 class="mb-8 text-2xl font-bold md:text-4xl drop-shadow-xl">
            Product Designer & XR Developer
          </h2>
          <!-- <p
            class="max-w-3xl mx-auto text-xl leading-relaxed uppercase md:text-2xl drop-shadow-lg"
          >
            3D Pipeline Expert: modeling, texturing, rigging, animation,
            real-time engines, 3D printing, and immersive AR/VR experiences
            SOLID MODELING
          </p> -->
          <p
            class="max-w-3xl mx-auto mt-4 text-xl leading-relaxed uppercase md:text-2xl drop-shadow-lg"
          >
            I work across the full 3D pipeline – modeling, texturing, rigging,
            animation, solid modeling, real-time workflows, and 3D printing to
            move ideas from sketch to production-ready assets.
          </p>
        </div>
        <!-- <div
          class="mt-12 flex justify-center items-center gap-4 md:gap-6 w-full md:max-w-[1440px] md:mx-auto"
        >
          <div
            class="bg-white/30 backdrop-blur-xl rounded-2xl p-2 md:p-6 md:w-[200px] w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="mb-4 text-3xl">🎨</div>
            <h4 class="text-xl font-bold">150+</h4>
            <p>3D Models</p>
          </div>
          <div
            class="bg-white/30 backdrop-blur-xl rounded-2xl p-2 md:p-6 md:w-[200px] w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="mb-4 text-3xl">⚙️</div>
            <h4 class="text-xl font-bold">50+</h4>
            <p>Projects</p>
          </div>
          <div
            class="bg-white/30 backdrop-blur-xl rounded-2xl p-2 md:p-6 md:w-[200px] w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div class="mb-4 text-3xl">🏭</div>
            <h4 class="text-xl font-bold">5+</h4>
            <p>Years Exp</p>
          </div>
        </div> -->
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-10 bg-white md:py-32">
      <div class="max-w-[1400px] mx-auto md:px-6 px-4">
        <!-- Heading -->
        <div class="mb-20 text-center" data-aos="fade-up">
          <div class="mb-16 text-center" data-aos="fade-up">
            <h2 class="mb-4 text-5xl font-black md:text-6xl text-slate-900">
              <span class="text-sky-500"> About </span>
              <span class="text-pink-500"> Me</span>
            </h2>
            <div
              class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-pink-500"
            ></div>
          </div>
          <p class="text-xl md:text-2xl text-slate-500">
            Crafting digital & physical worlds across the complete 3D pipeline
          </p>
        </div>

        <!-- 3D split layout -->
        <div
          class="grid items-center gap-12 mb-20 lg:grid-cols-2 lg:gap-16"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <!-- Text card with 3D feel -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 -inset-1 bg-gradient-to-br from-sky-300/40 via-indigo-300/30 to-emerald-300/40 rounded-3xl blur-xl group-hover:opacity-100"
              aria-hidden="true"
            ></div>

            <div
              class="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-x-3 group-hover:-rotate-y-3 [transform-style:preserve-3d]"
            >
              <h3 class="mb-4 text-2xl font-semibold text-slate-900">
                Product Designer XR Developer
              </h3>
              <p class="mb-4 text-lg text-slate-700">
                I'm a tool maker, product designer, and 3D generalist who loves
                building useful tools, clean product concepts, and detailed 3D
                worlds.
              </p>
              <p class="mb-4 text-lg text-slate-700">
                I work across the full 3D pipeline — modeling, texturing,
                rigging, animation, real-time workflows, and 3D printing to move
                ideas from sketch to production‑ready assets.
              </p>
              <p class="text-lg text-slate-700">
                Recently, I'm pushing into AR/VR/XR, building immersive
                experiences that blend the physical and digital in practical,
                playful ways.
              </p>
            </div>
          </div>

          <!-- Stacked images with depth -->
          <div class="relative h-[320px] md:h-[380px] lg:h-[420px]">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-sky-100 via-indigo-50 to-emerald-100 rounded-[2.5rem] shadow-[0_40px_80px_rgba(15,23,42,0.18)]"
            ></div>

            <div class="absolute grid grid-cols-2 gap-4 inset-4">
              <div
                class="relative overflow-hidden transition-transform duration-500 translate-x-2 translate-y-4 shadow-2xl rounded-3xl lg:translate-y-8 hover:-translate-y-1 hover:-translate-x-1 hover:rotate-1"
                data-aos="zoom-in"
              >
                <img
                  src="/3d.jpg"
                  alt="3D Studio"
                  class="object-cover w-full h-full"
                />
              </div>
              <div
                class="relative overflow-hidden transition-transform duration-500 -translate-x-2 -translate-y-4 shadow-2xl rounded-3xl lg:-translate-y-10 hover:-translate-y-1 hover:translate-x-1 hover:-rotate-1"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop"
                  alt="3D Printing"
                  class="object-cover w-full h-full"
                />
              </div>

              <div
                class="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl translate-y-4 lg:translate-y-6 transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="/xr.png"
                  alt="Realtime & XR"
                  class="object-cover w-full h-44 md:h-52 lg:h-56"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 3-column 3D skill cards -->
        <!-- <div
          class="grid gap-8 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div
            class="group relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 transition-transform duration-500 hover:-translate-y-2 hover:-rotate-1 [transform-style:preserve-3d]"
          >
            <div
              class="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-sky-200/40 to-sky-100/0 opacity-0 group-hover:opacity-100 blur-lg transition"
            ></div>
            <div class="relative">
              <img
                src="/dd.png"
                alt="Modeling"
                class="object-cover w-full h-64 mb-4 rounded-2xl"
              />
              <p class="text-xl font-bold text-center text-slate-900">
                3D Modeling
              </p>
            </div>
          </div>

          <div
            class="group relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 [transform-style:preserve-3d]"
          >
            <div
              class="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-indigo-200/40 to-indigo-100/0 opacity-0 group-hover:opacity-100 blur-lg transition"
            ></div>
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"
                alt="Texturing"
                class="object-cover w-full h-64 mb-4 rounded-2xl"
              />
              <p class="text-xl font-bold text-center text-slate-900">
                Texturing
              </p>
            </div>
          </div>

          <div
            class="group relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 transition-transform duration-500 hover:-translate-y-2 hover:-rotate-1 [transform-style:preserve-3d]"
          >
            <div
              class="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-emerald-200/40 to-emerald-100/0 opacity-0 group-hover:opacity-100 blur-lg transition"
            ></div>
            <div class="relative">
              <img
                src="/dd.png"
                alt="Animation"
                class="object-cover w-full h-64 mb-4 rounded-2xl"
              />
              <p class="text-xl font-bold text-center text-slate-900">
                Animation
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Skills Section -->
    <Skills />

    <!-- Projects Section -->
    <section id="projects" class="py-10 bg-white md:py-32">
      <div class="container px-4 mx-auto fle md:px-6">
        <div class="flex flex-col items-center justify-center">
          <!-- LEFT: Heading / Text -->
          <div
            data-aos="fade-right"
            class="flex flex-col items-center justify-center"
          >
            <h2
              class="mb-4 text-5xl font-black text-center md:text-6xl text-slate-900"
            >
              <span class="text-sky-500">Featured</span>
              <span class="text-pink-500"> Projects</span>
            </h2>
            <div
              class="w-24 h-1 mb-6 rounded-full bg-gradient-to-r from-sky-500 to-pink-500"
            ></div>
            <p class="text-lg text-gray-600">
              A curated selection of recent projects showcasing 3D art, game
              development, and real‑time systems.
            </p>
          </div>

          <!-- RIGHT: Cards -->
          <div class="container px-4 mx-auto md:px-6">
            <!-- Top: 2 columns (Rusted Scooter / Pickup Vehicle) -->
            <div class="grid gap-8 mb-16 md:grid-cols-2">
              <!-- Rusted Scooter -->
              <div
                class="p-4 overflow-hidden transition-all shadow-2xl group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl hover:shadow-3xl"
              >
                <div class="relative mb-6 overflow-hidden rounded-2xl h-80">
                  <Swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :loop="true"
                    effect="fade"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }"
                    class="w-full h-full"
                  >
                    <SwiperSlide v-for="src in scooterImages" :key="src">
                      <img
                        :src="src"
                        alt="Rusted Scooter"
                        class="object-cover w-full transition-transform duration-700 h-80 group-hover:scale-110"
                      />
                    </SwiperSlide>
                  </Swiper>

                  <div
                    class="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"
                  >
                    <p class="text-lg font-bold text-white">
                      Realistic rust effects
                    </p>
                  </div>
                </div>

                <h3 class="mb-4 text-3xl font-black">Rusted Scooter</h3>
                <p class="mb-6 text-gray-600">
                  Realistic old scooter with worn-out metal and rust details,
                  created with a full PBR texturing workflow.
                </p>
                <span
                  class="inline-block px-4 py-2 text-sm font-bold text-blue-800 bg-blue-100 rounded-full"
                >
                  Blender · Substance Painter
                </span>
              </div>

              <!-- Pickup Vehicle -->
              <div
                class="p-4 overflow-hidden transition-all shadow-2xl group bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl hover:shadow-3xl"
              >
                <div class="relative mb-6 overflow-hidden rounded-2xl h-80">
                  <Swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :loop="true"
                    effect="fade"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }"
                    class="w-full h-full"
                  >
                    <SwiperSlide v-for="src in pickupImages" :key="src">
                      <img
                        :src="src"
                        alt="Pickup Vehicle"
                        class="object-cover w-full transition-transform duration-700 shadow-2xl h-80 group-hover:scale-110"
                      />
                    </SwiperSlide>
                  </Swiper>

                  <div
                    class="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"
                  >
                    <p class="text-lg font-bold text-white">
                      Hard‑surface vehicle modeling
                    </p>
                  </div>
                </div>

                <h3 class="mb-4 text-3xl font-black">Pickup Vehicle</h3>
                <p class="mb-6 text-gray-600">
                  Detailed pickup truck model focused on clean topology, panel
                  definition, and realistic material breakup.
                </p>
                <span
                  class="inline-block px-4 py-2 text-sm font-bold text-blue-800 bg-blue-100 rounded-full"
                >
                  Blender · Substance Painter
                </span>
              </div>
            </div>

            <!-- Project 3: Drone AI System (full-width with detailed content) -->
            <div
              class="p-6 mb-12 transition-all shadow-2xl md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl hover:shadow-3xl"
            >
              <div class="grid gap-8 lg:grid-cols-2">
                <div class="relative overflow-hidden rounded-2xl h-full">
                  <iframe
                    src="https://www.youtube.com/embed/13-a70JnyYc"
                    class="w-full h-full border-0 rounded-2xl"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>

                <div>
                  <h3 class="mb-2 text-3xl font-black">Drone AI System</h3>
                  <p class="mb-4 text-gray-700">
                    Unreal Engine 5 autonomous drone AI that patrols, detects,
                    and follows the player using Behavior Trees and AI
                    Perception.
                  </p>

                  <h4 class="mb-2 text-lg font-bold text-slate-900">
                    System Purpose
                  </h4>
                  <ul class="mb-4 space-y-1 text-sm text-gray-700">
                    <li>• Patrols autonomously within a NavMesh‑based area.</li>
                    <li>• Detects player via AI Perception sight.</li>
                    <li>
                      • Switches to follow behavior when the player is visible.
                    </li>
                    <li>• Returns to patrol when the player is lost.</li>
                  </ul>

                  <h4 class="mb-2 text-lg font-bold text-slate-900">
                    Core AI Architecture
                  </h4>
                  <table class="w-full mb-4 text-sm text-left text-gray-700">
                    <tbody>
                      <tr class="border-b">
                        <td class="py-1 font-semibold">
                          Behavior Tree (BT_Drone)
                        </td>
                        <td class="py-1">Main decision‑making brain.</td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-1 font-semibold">
                          Blackboard (BB_Drone)
                        </td>
                        <td class="py-1">
                          Stores AI state and navigation targets.
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-1 font-semibold">AI Controller</td>
                        <td class="py-1">
                          Runs the Behavior Tree and updates the Blackboard.
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td class="py-1 font-semibold">Drone Pawn Blueprint</td>
                        <td class="py-1">
                          Movement and random location utility.
                        </td>
                      </tr>
                      <tr>
                        <td class="py-1 font-semibold">AI Perception</td>
                        <td class="py-1">
                          Player sight detection and state switch.
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h4 class="mb-2 text-lg font-bold text-slate-900">
                    Behavior Overview
                  </h4>
                  <p class="mb-1 text-sm text-gray-700">
                    <span class="font-semibold">Patrol:</span> random reachable
                    NavMesh locations with short waits between moves.
                  </p>
                  <p class="mb-1 text-sm text-gray-700">
                    <span class="font-semibold">Follow:</span> continuously
                    updates target location to the player position at 0.5s
                    intervals.
                  </p>
                  <p class="text-sm text-gray-700">
                    Blackboard keys like
                    <span class="font-semibold">DroneState</span> and
                    <span class="font-semibold">MoveToLocation</span> drive the
                    transitions between Patrol and Follow.
                  </p>
                </div>
              </div>
            </div>

            <!-- Project 4: 3D Clock Web App (full-width with detailed content) -->
            <div
              class="p-6 transition-all shadow-2xl md:p-10 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl hover:shadow-3xl"
            >
              <div class="grid gap-8 lg:grid-cols-2">
                <div class="relative overflow-hidden rounded-2xl">
                  <iframe
                    src="https://amaro0o0o.github.io/THREE.JS_clock/"
                    title="Three.js 3D Clock"
                    class="w-full h-full transition-transform duration-700 border-0 rounded-2xl group-hover:scale-105"
                    loading="lazy"
                  ></iframe>
                </div>
                <div>
                  <h3 class="mb-2 text-3xl font-black">
                    3D Clock Web App — Three.js
                  </h3>
                  <p class="mb-4 text-gray-700">
                    Real‑time 3D clock animation built with Three.js and WebGL,
                    showcasing 3D scene setup, animation loops, and time‑based
                    logic running directly in the browser.
                  </p>

                  <h4 class="mb-2 text-lg font-bold text-slate-900">
                    Key Highlights
                  </h4>
                  <ul class="mb-4 space-y-1 text-sm text-gray-700">
                    <li>
                      ⚙️
                      <span class="font-semibold"
                        >Three.js / WebGL Rendering:</span
                      >
                      full 3D scene with camera, lighting, and geometric clock
                      hands.
                    </li>
                    <li>
                      ⏱ <span class="font-semibold">Animation Logic:</span> uses
                      <code>requestAnimationFrame</code> and time calculations
                      to update clock hands every frame.
                    </li>
                    <li>
                      🧠
                      <span class="font-semibold">Time Management:</span>
                      leverages elapsed time / delta time concepts for smooth
                      real‑time motion.
                    </li>
                    <li>
                      🖱
                      <span class="font-semibold">Interactive & Live:</span>
                      hosted on GitHub Pages so it runs instantly in modern
                      browsers.
                    </li>
                  </ul>

                  <h4 class="mb-2 text-lg font-bold text-slate-900">
                    Technical Stack
                  </h4>
                  <p class="mb-4 text-sm text-gray-700">
                    JavaScript · Three.js · WebGL · HTML5 · CSS3 · GitHub Pages
                  </p>

                  <p class="mb-4 text-sm text-gray-700">
                    This project demonstrates the ability to bridge 3D graphics
                    programming with real‑time animation logic in a web
                    environment.
                  </p>

                  <a
                    href="https://amaro0o0o.github.io/THREE.JS_clock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-5 py-2 text-sm font-bold text-white rounded-full bg-sky-500 hover:bg-sky-600"
                  >
                    View Live →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <!-- <section
      class="py-10 md:py-32 bg-gradient-to-r from-indigo-50 via-sky-50 to-purple-50"
    >
      <div class="max-w-6xl px-4 mx-auto md:px-6">
        <div class="mb-16 text-center" data-aos="fade-up">
          <div class="mb-16 text-center" data-aos="fade-up">
            <h2 class="mb-4 text-5xl font-black md:text-6xl text-slate-900">
              <span class="text-sky-500"> What</span>
              <span class="text-pink-500"> Clients Say </span>
            </h2>
            <div
              class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-pink-500"
            ></div>
          </div>
        </div>

        <div
          class="grid max-w-5xl gap-8 mx-auto md:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="relative group [transform-style:preserve-3d] w-full md:w-auto">
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-sky-300/60 via-indigo-200/50 to-purple-200/40 group-hover:opacity-100 blur-xl"
            ></div>

            <div
              class="relative bg-white/90 rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-1"
            >
              <div class="flex flex-col items-center">
                <div class="relative mb-5">
                  <div
                    class="absolute rounded-full -inset-1 bg-gradient-to-tr from-sky-400 to-indigo-500 opacity-60 blur-md"
                  ></div>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop&crop=face"
                    alt="Client"
                    class="relative object-cover w-20 h-20 rounded-full shadow-xl ring-4 ring-white"
                  />
                </div>
                <p class="mb-4 text-lg italic text-slate-600">
                  “Outstanding 3D work! Delivered production‑ready models ahead
                  of schedule.”
                </p>
                <div class="font-semibold text-slate-900">Tech Startup CEO</div>
              </div>
            </div>
          </div>

          <div class="relative group [transform-style:preserve-3d] w-full md:w-auto">
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-pink-300/60 via-fuchsia-200/50 to-purple-200/40 group-hover:opacity-100 blur-xl"
            ></div>

            <div
              class="relative bg-white/90 rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-1"
            >
              <div class="flex flex-col items-center">
                <div class="mb-4 text-4xl">⭐</div>
                <p class="mb-4 text-lg italic text-slate-600">
                  “Perfect blend of creativity and technical skill. Highly
                  recommended!”
                </p>
                <div class="font-semibold text-slate-900">Product Manager</div>
              </div>
            </div>
          </div>

          <div class="relative group [transform-style:preserve-3d] w-full md:w-auto">
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-emerald-300/60 via-teal-200/50 to-sky-200/40 group-hover:opacity-100 blur-xl"
            ></div>

            <div
              class="relative bg-white/90 rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-1"
            >
              <div class="flex flex-col items-center">
                <div class="mb-4 text-4xl">🧩</div>
                <p class="mb-4 text-lg italic text-slate-600">
                  “From concept to 3D print, flawless execution.”
                </p>
                <div class="font-semibold text-slate-900">
                  Manufacturing Lead
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section
      id="interests"
      class="py-10 md:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black"
    >
      <div class="max-w-5xl px-4 mx-auto md:px-6">
        <div class="mb-12 text-center" data-aos="fade-up">
          <h2 class="mb-4 text-4xl font-black md:text-5xl text-slate-50">
            <span class="text-sky-400">Areas of</span>
            <span class="text-pink-400"> Interest</span>
          </h2>
          <div
            class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-pink-400"
          ></div>
          <p class="max-w-2xl mx-auto mt-4 text-base md:text-lg text-slate-300">
            Blending physical mechanisms, character performance, and real‑time
            engines to craft expressive, interactive experiences.
          </p>
        </div>

        <div
          class="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <!-- Text List -->
          <div
            class="p-4 md:w-[400px] mx-auto bg-slate-900/70 border border-slate-700/70 rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.75)] backdrop-blur-xl"
          >
            <h3 class="mb-4 text-2xl font-bold text-slate-50">
              Interested to work in
            </h3>
            <ul class="space-y-3 text-sm text-slate-200 md:text-base">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Animatronics
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Robotics
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Cinematics
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                3D Printing
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Mechanical Prosthetics
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Unreal Engine Simulations
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                Web AR and AR apps
              </li>
            </ul>
          </div>

          <!-- Visual Card (optional image / artwork) -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-10 md:py-32 bg-gradient-to-b from-slate-50 via-white to-sky-50"
    >
      <div class="max-w-[1440px] px-4 mx-auto text-center md:px-6">
        <!-- title + intro here -->
        <div class="max-w-5xl px-4 mx-auto text-center md:px-6">
          <div data-aos="fade-up">
            <div class="mb-16 text-center" data-aos="fade-up">
              <h2 class="mb-4 text-5xl font-black md:text-6xl text-slate-900">
                <span class="text-sky-500">Let's Create</span>
                <span class="text-pink-500"> Together </span>
              </h2>
              <div
                class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-pink-500"
              ></div>
            </div>
            <p
              class="max-w-2xl mx-auto mb-16 text-xl md:text-2xl text-slate-600"
            >
              Ready for your next 3D project? From concept to fabrication,
              everything can be designed, simulated, and brought into reality.
            </p>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <!-- Email -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-sky-300/50 via-cyan-200/40 to-sky-100/20 group-hover:opacity-100 blur-xl"
            ></div>
            <div
              class="relative p-4 md:p-8 bg-white/90 rounded-3xl border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-1"
            >
              <div
                class="flex items-center justify-center mx-auto mb-5 text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400"
              >
                📧
              </div>
              <p class="mb-1 text-lg font-semibold text-slate-900">Email</p>
              <a
                href="mailto:amarnath02081999@gmail.com"
                class="text-sm break-words text-slate-600 hover:text-sky-600"
              >
                amarnath02081999@gmail.com
              </a>
            </div>
          </div>

          <!-- LinkedIn -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-emerald-300/50 via-teal-200/40 to-sky-100/20 group-hover:opacity-100 blur-xl"
            ></div>
            <div
              class="relative p-4 md:p-8 bg-white/90 rounded-3xl border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-1"
            >
              <div
                class="flex items-center justify-center mx-auto mb-5 text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400"
              >
                💼
              </div>
              <p class="mb-1 text-lg font-semibold text-slate-900">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/amarnath-s-330099211/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm break-words text-slate-600 hover:text-emerald-600"
              >
                linkedin.com/in/amarnath-s-330099211
              </a>
            </div>
          </div>

          <!-- Instagram -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-pink-300/50 via-rose-200/40 to-amber-100/20 group-hover:opacity-100 blur-xl"
            ></div>
            <div
              class="relative p-4 md:p-8 bg-white/90 rounded-3xl border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-1"
            >
              <div
                class="flex items-center justify-center mx-auto mb-5 text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-amber-400"
              >
                📸
              </div>
              <p class="mb-1 text-lg font-semibold text-slate-900">Instagram</p>
              <a
                href="https://www.instagram.com/amarinxr/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm break-words text-slate-600 hover:text-pink-500"
              >
                instagram.com/amarinxr
              </a>
            </div>
          </div>

          <!-- GitHub -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-slate-300/50 via-slate-200/40 to-slate-100/20 group-hover:opacity-100 blur-xl"
            ></div>
            <div
              class="relative p-4 md:p-8 bg-white/90 rounded-3xl border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-1"
            >
              <div
                class="flex items-center justify-center mx-auto mb-5 text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600"
              >
                🐙
              </div>
              <p class="mb-1 text-lg font-semibold text-slate-900">GitHub</p>
              <a
                href="https://github.com/Amaro0o0o/Amaro0o0o"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm break-words text-slate-600 hover:text-slate-900"
              >
                github.com/Amaro0o0o/Amaro0o0o
              </a>
            </div>
          </div>

          <!-- Resume -->
          <div
            class="relative group [transform-style:preserve-3d] w-full md:w-auto"
          >
            <div
              class="absolute transition duration-500 opacity-0 pointer-events-none -inset-1 rounded-3xl bg-gradient-to-br from-indigo-300/50 via-sky-200/40 to-slate-100/20 group-hover:opacity-100 blur-xl"
            ></div>
            <div
              class="relative p-4 md:p-8 bg-white/90 rounded-3xl border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-1"
            >
              <div
                class="flex items-center justify-center mx-auto mb-5 text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500"
              >
                📄
              </div>
              <p class="mb-2 text-lg font-semibold text-slate-900">Resume</p>
              <p class="mb-3 text-sm text-slate-600">
                Download my latest resume as PDF.
              </p>
              <a
                href="/Amarnath_Resume.pdf"
                download
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Skills from "../components/Skills.vue";
import { useHead } from "nuxt/app";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Autoplay, Pagination];
const open = ref(false);
const close = () => {
  open.value = false;
};
const canvasRef = ref(null);
let scene, camera, renderer, torus, icosahedron, controls, clock;
const scooterImages = [
  "/projects/1.jpeg",
  "/projects/2.jpeg",
  "/projects/3.jpeg",
  "/projects/4.jpeg",
  "/projects/5.jpeg",
];
const pickupImages = [
  "/projects/pickup/1.jpeg",
  "/projects/pickup/2.jpeg",
  "/projects/pickup/3.jpeg",
  "/projects/pickup/4.jpeg",
  "/projects/pickup/5.jpeg",
  "/projects/pickup/6.jpeg",
];
onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xbfd1e5, 1, 100);

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 10, 5);
  scene.add(directionalLight);

  // Torus Knot (Scooter wheel)
  const torusGeometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    metalness: 0.7,
    roughness: 0.2,
  });
  torus = new THREE.Mesh(torusGeometry, torusMaterial);
  scene.add(torus);

  // Icosahedron
  const icoGeometry = new THREE.IcosahedronGeometry(0.8);
  const icoMaterial = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    wireframe: true,
    emissive: 0x059669,
    emissiveIntensity: 0.3,
  });
  icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
  icosahedron.position.set(3, 0, 0);
  scene.add(icosahedron);

  // Controls
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Clock
  clock = new THREE.Clock();

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    torus.rotation.y = elapsedTime * 0.5;
    icosahedron.rotation.y = elapsedTime * 0.25;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // Resize
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (renderer) renderer.dispose();
});
useHead({
  title: "Amarnath S - 3D Artist & XR Developer Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Amarnath S, a skilled 3D artist and XR developer specializing in 3D modeling, texturing, and immersive experiences.",
    },
    {
      name: "keywords",
      content:
        "3D Artist, XR Developer, 3D Modeling, Texturing, Animation, AR, VR, Portfolio, Blender, Unreal Engine, Three.js",
    },
    {
      name: "author",
      content: "Amarnath S",
    },
    // Twitter Card
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Amarnath S - 3D Artist & XR Developer Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Portfolio of Amarnath S, a skilled 3D artist and XR developer specializing in 3D modeling, texturing, and immersive experiences.",
    },
    {
      name: "twitter:image",
      content: "/logo.png",
    },
    {
      name: "twitter:image:alt",
      content: "Pickup Vehicle 3D Model by Amarnath S",
    },
  ],
  link: [
    {
      rel: "image_src",
      href: "/logo.png",
    },
  ],
});
</script>
