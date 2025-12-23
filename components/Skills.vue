<template>
  <section
    id="skills"
    class="py-10 md:py-32 bg-gradient-to-b from-slate-50 via-white to-sky-50"
  >
    <div class="max-w-[1400px] mx-auto px-6">
      <!-- Title -->
      <div class="mb-20 text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-black md:text-6xl text-slate-900">
          <span class="text-sky-500">Technical</span>
          <span class="text-pink-500"> Skills</span>
        </h2>
        <div
          class="h-1 mx-auto rounded-full w-28 bg-gradient-to-r from-sky-500 to-pink-500"
        ></div>
      </div>

      <div
        class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <!-- Card 1 -->
        <div
          class="relative group bg-white/90 border border-slate-200 rounded-[2.2rem] p-4 md:min-h-[340px] shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-4 hover:-rotate-1 [transform-style:preserve-3d]"
        >
          <div
            class="absolute -inset-1 rounded-[2.4rem] bg-gradient-to-br from-sky-300/40 via-cyan-200/30 to-sky-100/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"
          ></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex items-center justify-center text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-sky-500"
              >
                💻
              </div>
              <h3 class="text-xl font-semibold md:text-2xl text-slate-900">
                3D / Modeling
              </h3>
            </div>

            <div class="space-y-4">
              <SkillBar
                label="Blender · Hard Surface"
                value="92"
                color="from-sky-500 to-cyan-400"
              />
              <SkillBar
                label="CADD"
                value="88"
                color="from-sky-500 to-teal-400"
              />
              <SkillBar
                label="Fusion 360"
                value="90"
                color="from-cyan-500 to-emerald-400"
              />
              <SkillBar
                label="Substance Painter"
                value="85"
                color="from-emerald-500 to-sky-400"
              />
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative group bg-white/90 border border-slate-200 rounded-[2.2rem] p-4 md:min-h-[340px] shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-4 hover:rotate-1 [transform-style:preserve-3d]"
        >
          <div
            class="absolute -inset-1 rounded-[2.4rem] bg-gradient-to-br from-pink-300/40 via-fuchsia-200/30 to-purple-100/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"
          ></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex items-center justify-center text-3xl text-white bg-pink-500 shadow-lg w-14 h-14 rounded-2xl"
              >
                🧑‍💼
              </div>
              <h3 class="text-xl font-semibold md:text-2xl text-slate-900">
                Execution skills
              </h3>
            </div>

            <div class="space-y-4">
              <SkillBar
                label="Vendor management"
                value="90"
                color="from-pink-500 to-fuchsia-400"
              />
              <SkillBar
                label="Team management"
                value="88"
                color="from-fuchsia-500 to-violet-400"
              />
              <SkillBar
                label="Product planning & execution"
                value="86"
                color="from-violet-500 to-sky-400"
              />
              <SkillBar
                label="Leadership skills"
                value="92"
                color="from-sky-500 to-pink-400"
              />
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="relative group bg-white/90 border border-slate-200 rounded-[2.2rem] p-4 md:min-h-[340px] shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-4 hover:-rotate-1 [transform-style:preserve-3d]"
        >
          <div
            class="absolute -inset-1 rounded-[2.4rem] bg-gradient-to-br from-emerald-300/40 via-teal-200/30 to-sky-100/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"
          ></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex items-center justify-center text-3xl text-white shadow-lg w-14 h-14 rounded-2xl bg-emerald-500"
              >
                ⚙️
              </div>
              <h3 class="text-xl font-semibold md:text-2xl text-slate-900">
                Engines · XR · Tools
              </h3>
            </div>

            <div class="space-y-4">
              <SkillBar
                label="Unreal Engine"
                value="85"
                color="from-emerald-500 to-teal-400"
              />
              <SkillBar
                label="Unity"
                value="80"
                color="from-teal-500 to-cyan-400"
              />
              <SkillBar
                label="three.js"
                value="88"
                color="from-cyan-500 to-sky-400"
              />
            </div>
          </div>
        </div>

        <!-- Card 4: Machining -->
        <div
          class="relative group bg-white/90 border border-slate-200 rounded-[2.2rem] p-4 md:min-h-[340px] shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-4 hover:rotate-1 [transform-style:preserve-3d]"
        >
          <div
            class="absolute -inset-1 rounded-[2.4rem] bg-gradient-to-br from-amber-300/40 via-orange-200/30 to-rose-100/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"
          ></div>

          <div class="relative">
            <div class="flex items-center gap-4 mb-8">
              <div
                class="flex items-center justify-center text-3xl text-white shadow-lg bg-amber-500 w-14 h-14 rounded-2xl"
              >
                🛠️
              </div>
              <h3 class="text-xl font-semibold md:text-2xl text-slate-900">
                Machining · Fabrication
              </h3>
            </div>

            <div class="space-y-4">
              <SkillBar
                label="3D Printing (FDM / SLA)"
                value="90"
                color="from-amber-500 to-orange-400"
              />
              <SkillBar
                label="Conventional machines (Lathe, Mill, Drill)"
                value="85"
                color="from-orange-500 to-rose-400"
              />
              <SkillBar
                label="CNC (VMC / Turning)"
                value="88"
                color="from-rose-500 to-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillBar from "./SkillBar.vue";
</script>
