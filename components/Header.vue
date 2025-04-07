<template>
     <div class=" grid md:flex  items-center mx-8 mt-9  md:w-auto  md:justify-between">
        <img class=" h-10 max-w-36 " src="public/Converselogo.svg" alt="">
        <div class=" hidden  md:flex  font-semibold md:gap-4 lg:gap-14  ">
            <a class=" text-[#00927C]" href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact us</a>
        </div>

        <div class="  grid md:flex  gap-4">
        <button class="button btn-secondary">
            Login
        </button>

        <button class="button btn-primary ">
        Try for 7 days
        </button>
    </div>

    <div class=" md:hidden block"  >
    <!-- Hamburger Icon -->
    <button @click="isOpen = !isOpen"class="p-4 z-50  absolute top-4 right-4">
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button> 

    <!-- Sidebar Menu -->
    <transition name="fade">
      <nav
        v-if="isOpen"
        class="absolute top-0 left-0 w-full h-full bg-[#00927C]/50 flex flex-col items-center justify-center space-y-6 text-white text-xl z-40"
      >
        <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Features</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Pricing</NuxtLink>
        <NuxtLink to="/" @click="isOpen = false">Contact us</NuxtLink>

      </nav>
    </transition>
  </div>
    

</div>
</template>

<script setup>
import { ref, } from 'vue'



const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
