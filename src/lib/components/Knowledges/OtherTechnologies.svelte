<script>
  import Badge from "./Badge.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="w-11/12 sm:w-4/5 mt-8">
  <h1 class="text-blue-100 font-semibold text-md sm:text-xl">
    Outras tecnologias
  </h1>
  <div class="w-[136px] sm:w-[170px] h-1 rounded-full bg-blue-100"></div>
  <p class="pt-2 pr-4 text-white text-sm sm:text-base">
    Outras tecnologias e ferramentas que eu utilizo ou já utilizei em algum momento
  </p>
  <section class="pt-3 flex flex-wrap gap-x-4 gap-y-4">
    <Badge tooltip_data="Intermediário" type="warning" size="small">
      <Icon icon="skill-icons:git" class="text-sm mr-2 hidden sm:block" />
      <span>Git</span>
    </Badge>
    <Badge tooltip_data="Intermediário" type="warning" size="medium">
      <Icon
        icon="skill-icons:github-dark"
        class="text-sm mr-2 hidden sm:block"
      />
      <span>Github</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="small">
      <Icon
        icon="skill-icons:vercel-dark"
        class="text-sm mr-2 hidden sm:block"
      />
      <span>Vercel</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="medium">
      <Icon icon="skill-icons:wordpress" class="text-sm mr-2 hidden sm:block" />
      <span>Wordpress</span>
    </Badge>
  </section>
</div>
