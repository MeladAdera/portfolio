<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <!-- <nav>
          <NuxtLink
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="footerBtn"
            >{{ item.name }}</NuxtLink
          >
        </nav> -->
        <!-- nav - end -->

        <!-- social - start -->
        <nav class="footer-social" aria-label="Social links">
          <a
            href="https://www.instagram.com/melad.dev"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="footerIcon"
          >
            <IconsInstaIcon />
          </a>

          <a
            href="https://www.facebook.com/melad.adera"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="footerIcon"
          >
            <IconsFacebookIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/melad-adera-97105a371/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            class="footerIcon"
          >
            <IconsLinkedInIcon />
          </a>

          <a
            href="https://github.com/MeladAdera"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            class="footerIcon"
          >
            <IconsGithubIcon />
          </a>
        </nav>
        <!-- social - end -->
      </div>

      <div class="copyright" role="contentinfo">
        © {{ CURRENT_YEAR }} Melad Adera. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
const CURRENT_YEAR = new Date().getFullYear();
</script>
