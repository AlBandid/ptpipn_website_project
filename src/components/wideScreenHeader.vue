<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'MobileHeader',
  props: ['menuLeft', 'menuRight'],
  components: {
    RouterLink
  }
}
</script>

<template>
  <div class="max-w sticky top-0 bg-fuchsia-900/50 backdrop-blur-md duration-150 drop-shadow-lg shadow-fuchsia-900">
    <div class="flex flex-row place-content-center items-stretch mx-auto h-full gap-5 text-white font-sans text-center line-clamp-1">
      <div class="h-full w-5/12">
        <div class="flex flex-row float-right justify-evenly">
          <div v-for="menuItem in menuLeft" :key="menuItem.name" class="flex flex-col min-w-max">
            <div @mouseenter="menuItem.submenuVisible=true" @mouseleave="menuItem.submenuVisible=false" class="min-w-12/12">
              <div class="app-menu-button">
                <RouterLink :to="{name: menuItem.name}">{{ menuItem.title }}</RouterLink>
              </div>
              <div
                class="absolute bg-fuchsia-100/95 drop-shadow-2xl shadow-fuchsia-900 rounded-b-md text-gray-800 w-3/24"
              >
                <div
                  v-for="subItem in menuItem.submenus" :key="subItem.hash"
                  v-show="menuItem.submenuVisible"
                  class="flex flex-col"
                  @mouseover="menuItem.submenuVisible=true"
                >
                  <RouterLink
                    :to="{name: subItem.name, hash: subItem.hash}"
                    class="app-submenu-button"
                  >
                    {{ subItem.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2/12 min-w-10 w-16 self-center place-self-center justify-self-center">
        <div>
          <RouterLink :to="{name: 'home'}">
            <img src="/img/nowe_logo_ptpipn_biale.png" alt="PTPiPN logo" class=""/>
          </RouterLink>
        </div>
      </div>
      <div class="h-full w-5/12">
        <div class="flex flex-row float-left justify-evenly">
          <div
            v-for="menuItem in menuRight" :key="menuItem.name"
            class="flex flex-col"
          >
            <div @mouseenter="menuItem.submenuVisible=true" @mouseleave="menuItem.submenuVisible=false">
              <div class="app-menu-button">
                <RouterLink :to="{name: menuItem.name}">{{ menuItem.title }}</RouterLink>
              </div>
              <div
                class="absolute bg-fuchsia-100/95 drop-shadow-2xl shadow-fuchsia-900 rounded-b-md text-gray-800"
              >
                <div
                  v-for="subItem in menuItem.submenus" :key="subItem.hash"
                  v-show="menuItem.submenuVisible"
                  class="flex flex-col"
                >
                  <RouterLink
                    :to="{name: subItem.name, hash: subItem.hash}"
                    class="app-submenu-button"
                  >
                    {{ subItem.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
