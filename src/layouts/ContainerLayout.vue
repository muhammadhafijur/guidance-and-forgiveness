<template>
  <main
    :class="[
      storedTheme === 'light'
        ? 'bg-white'
        : storedTheme === 'dark'
        ? 'dark'
        : 'bg-[#F9F8F4]',
    ]"
    class=""
  >
    <section class="min-h-screen dark:bg-zinc-800 dark:text-white">
      <div class="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8">
        <div class="py-8">
          <a href="/" class="flex group items-center gap-2 text-sm font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5 group-hover:-translate-x-1 transition duration-300 ease-out"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            BACK
          </a>
        </div>
        <div class="text-center font-medium font-inter">
    <p class="font-bold text-lg sm:text-xl">
      بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
    </p>
    <p class="mt-4 text-base sm:text-lg">BISMILLAHIR RAHMANIR RAHIM</p>
  </div>
        <div class="mt-8">
          <slot />
        </div>
      </div>
    </section>

    <div
      class="fixed bottom-10 font-inter text-sm font-medium left-1/2 -translate-x-1/2"
    >
      <div
        :class="[showThemePopup ? 'flex' : 'hidden']"
        class="flex-col items-start w-full max-w-32 p-1 mb-2 shadow bg-white dark:bg-zinc-950 rounded-md border dark:border-emerald-500"
      >
        <button
          @click="toggleTheme('light')"
          class="py-1.5 text-start px-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 w-full"
        >
          Light
        </button>
        <button
          @click="toggleTheme('yellow')"
          class="py-1.5 text-start px-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 w-full"
        >
          Yellow
        </button>
        <button
          @click="toggleTheme('dark')"
          class="py-1.5 text-start px-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 w-full"
        >
          Dark
        </button>
      </div>
      <!-- Menu -->
      <div
        :class="[showMenuPopup ? 'flex' : 'hidden']"
        class="flex-col items-start w-full max-w-32 absolute bottom-16 right-0 p-1 mb-2 shadow bg-white dark:bg-zinc-950 rounded-md border dark:border-emerald-500"
      >
        <a
          href="/istighfar/"
          class="py-1.5 text-start px-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 w-full"
        >
          Istighfar
        </a>
        <a
          href="/istikhara/"
          class="py-1.5 text-start px-2 rounded-md hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 w-full"
        >
          Istikhara
        </a>
      </div>
      <div
        :class="[infoPopup ? 'block' : 'hidden']"
        class="w-full max-w-[90%] absolute bottom-16 right-0 p-2 mb-2 font-normal shadow bg-white dark:bg-zinc-950 dark:text-gray-100 rounded-md border dark:border-emerald-500"
      >
        <p>Reciting dua in Arabic carries special significance as it preserves the original words revealed in the Quran and spoken by the Prophet Muhammad (PBUH). Arabic is a precise language, and even small changes in pronunciation can alter the meaning. By reciting in Arabic, you ensure the true message and blessings of the dua are maintained. Don't worry if you're still learning—every effort you make is rewarding!</p>
      </div>
      <nav
        class="shadow-sm rounded-full p-2 bg-white dark:bg-zinc-950 dark:border-emerald-500 border flex space-x-4"
      >
        <a
          href="/"
          class="text-zinc-700 hover:bg-gray-200 w-12 h-12 grid place-items-center dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-6"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path
              d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            />
          </svg>
          <span class="sr-only">Home</span>
        </a>
        <button
          @click="showThemePopup = !showThemePopup"
          ref="themeRef"
          class="text-zinc-700 hover:bg-gray-200 w-12 h-12 grid place-items-center dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-palette"
          >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
            />
          </svg>
          <span class="sr-only">Light/Dark Mode</span>
        </button>
        <button
          ref="menuRef"
          @click="showMenuPopup = !showMenuPopup"
          class="text-zinc-700 hover:bg-gray-200 w-12 h-12 grid place-items-center dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-justify w-5 h-5"
          >
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
          <span class="sr-only">Menu</span>
        </button>
        <button
          ref="infoRef"
          @click="infoPopup = !infoPopup"
          class="text-zinc-700 hover:bg-gray-200 w-12 h-12 grid place-items-center dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-full"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span class="sr-only">Info</span>
        </button>
      </nav>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useClickOutside } from '../composables/useClickOutside';

const storedTheme = ref("light");

onMounted(() => {
  if (typeof localStorage !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme) {
      storedTheme.value = theme;
    }
  }
});

const showThemePopup = ref(false);
const showMenuPopup = ref(false);
const infoPopup = ref(false);



const { elementRef: menuRef } = useClickOutside(() => {
  showMenuPopup.value = false
});


const { elementRef: themeRef } = useClickOutside(() => {
  showThemePopup.value = false
});


const { elementRef: infoRef } = useClickOutside(() => {
  infoPopup.value = false
});




function toggleTheme(theme) {
  localStorage.setItem("theme", theme); // Store theme in local storage
  storedTheme.value = theme;
}
</script>

<style lang="scss" scoped></style>
