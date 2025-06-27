<script lang="ts">
  import me from "$lib/assets/me.jpg";
</script>

<div class="w-full 2xl:w-2/5 hidden sm:flex  flex-col justify-center items-center mt-4 mb-8 2xl:mt-0">
  <div class="w-full 2xl:w-56 mt-4 rounded-full group">
    <img src={me} class="w-full h-32 2xl:size-56 rounded-lg 2xl:rounded-full object-cover object-[0%_20%] 2xl:object-center opacity-50" alt="me" />

    <div class="flex justify-center relative">
      <p
        class="pt-2 italic absolute mx-auto text-xs opacity-0 transition-opacity group-hover:opacity-100"
      >
        (Sim esse sou eu)
      </p>
    </div>
  </div>
</div>
