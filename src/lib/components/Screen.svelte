<main class="w-11/12 sm:w-5/6 lg:w-4/6 h-[700px] bg-gray-800 border-2 border-secondary">
  <div
    class="w-full h-10 bg-secondary flex items-center justify-end px-4 gap-x-2"
  >  
    <div class="size-4 rounded-xl bg-red-500"></div>
    <div class="size-4 rounded-xl bg-yellow-500"></div>
    <div class="size-4 rounded-xl bg-green-500"></div>
  </div>
  <div class="w-full h-[650px] text-black overflow-auto">
    <slot />
  </div>
</main>
