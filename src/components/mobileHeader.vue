<script>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

export default {
  name:'MobileHeader',
  props:['fullMenu'],
  components: {
    RouterLink
  },
  setup() {
    const isSidebarOpen = ref(false);
    function toggleSidebar() {
      isSidebarOpen.value = !isSidebarOpen.value;
    }

    return {
      isSidebarOpen,
      toggleSidebar
    }
  }
}
</script>
<template>
    <div
      class="flex sticky top-0 z-2 items-center justify-between p-4 lg:hidden bg-fuchsia-900/50 backdrop-blur-md drop-shadow-2xl max-h-15"
    >
      <div class="w-1/6">
        <button @click="toggleSidebar" class="text-white focus:outline-none focus:text-fuchsia-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div class="w-full">
        <div
          class="flex flex-row self-center place-self-center justify-self-center place-items-center gap-5 text-white text-xs sm:text-sm md:text-base"
        >
          <RouterLink :to="{ name: 'home' }">
            <img src="/img/nowe_logo_ptpipn_biale.png" alt="PTPiPN logo" class="w-10 min-w-10" />
          </RouterLink>
          <p>Polskie Towarzystwo Pielęgniarek i Położnych Neonatologicznych</p>
        </div>
      </div>
      <div class="w-0 sm:w-1/12 md:w-1/6"/>
    </div>
    <!-- Sidebar overlay (optional) -->
    <div v-if="isSidebarOpen" class="fixed inset-0 bg-black/20 z-40 lg:hidden" @click="toggleSidebar"></div>

    <!-- Sidebar panel -->
    <div
      :class="['fixed top-0 left-0 w-full sm:w-2/3 md:w-1/3 h-full bg-fuchsia-100 drop-shadow-2xl shadow-fuchsia-900 transform transition-transform duration-300 z-50 lg:hidden', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']"
    >
      <div class="p-4">
        <button @click="toggleSidebar" class="mb-4 text-gray-800 focus:text-fuchsia-900">✕</button>
        <!-- Navigation Items -->
        <div class="flex flex-col-reverse gap-10">
          <div v-for="menuItem in fullMenu" :key="menuItem.name" class="w-full">
            <RouterLink :to="{name: menuItem.name}" class="app-menu-button">{{ menuItem.title }}</RouterLink>
            <div v-if="menuItem.submenus.length>0" class="flex flex-col gap-6 ml-5 mt-6 w-full">
              <div v-for="subItem in menuItem.submenus" :key="subItem.hash">
                <RouterLink :to="{name: subItem.name, hash: subItem.hash}" class="app-submenu-button w-full">{{ subItem.title }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
