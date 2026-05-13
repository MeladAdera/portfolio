<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.meladadera.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-4 text-gray-300 leading-8">
  I'm a Full Stack Developer with 1.5+ years of experience building
  scalable and modern web applications using React, Next.js,
  TypeScript, Node.js, NestJS, and PostgreSQL.
</p>
        <p class="mt-4 text-gray-300 leading-8">
  I enjoy working across both frontend and backend, building clean,
  responsive, and maintainable applications that solve real-world
  problems.
</p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJs</li>
              <li>TailwindCSS</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>shadcn/ui</li>
              <li>jQuery</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer
            v-for="career in timeline"
            :key="career.companyName + career.duration"
            :career-details="career"
          />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
