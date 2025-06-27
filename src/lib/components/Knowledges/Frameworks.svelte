<script>
  import Badge from "./Badge.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="w-11/12 sm:w-4/5 mt-8">
  <h1 class="text-yellow-100 font-semibold text-md sm:text-xl">Frameworks</h1>
  <div class="w-[88px] sm:w-[110px] h-1 rounded-full bg-yellow-100"></div>
  <p class="pt-2 pr-4 text-white text-sm sm:text-base">
    Alguns dos frameworks no qual eu já utilizei
  </p>
  <section class="pt-3 flex flex-wrap gap-x-4 gap-y-4">
    <Badge tooltip_data="Intermediário" type="warning" size="small">
      <Icon icon="skill-icons:svelte" class="text-sm mr-2 hidden sm:block" />
      <span>Svelte</span>
    </Badge>
    <Badge tooltip_data="Intermediário" type="warning" size="medium">
      <Icon icon="skill-icons:tailwindcss-dark" class="text-sm mr-2 hidden sm:block" />
      <span>TailwindCSS</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="small">
      <Icon icon="skill-icons:react-light" class="text-sm mr-2 hidden sm:block" />
      <span>React</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="medium">
      <Icon icon="skill-icons:bootstrap" class="text-sm mr-2 hidden sm:block" />
      <span>Bootstrap</span>
    </Badge>
  </section>
</div>
