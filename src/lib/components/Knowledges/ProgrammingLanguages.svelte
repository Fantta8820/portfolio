<script>
  import Badge from "./Badge.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="w-11/12 sm:w-4/5 mt-8">
  <h1 class="text-red-100 font-semibold text-md sm:text-xl">Linguagens</h1>
  <div class="w-[83px] sm:w-[103px] h-1 rounded-full bg-red-100"></div>
  <p class="pt-2 pr-4 text-white text-sm sm:text-base">
    Algumas das linguagens na qual eu já tive contato
  </p>
  <section class="pt-3 flex flex-wrap gap-x-4 gap-y-4">
    <Badge tooltip_data="Avançado" type="success" size="small">
      <Icon icon="skill-icons:html" class="text-sm mr-2 hidden sm:block" />
      <span>HTML</span>
    </Badge>
    <Badge tooltip_data="Intermediário" type="warning" size="small">
      <Icon icon="skill-icons:css" class="text-sm mr-2 hidden sm:block" />
      <span>CSS</span>
    </Badge>
    <Badge tooltip_data="Intermediário" type="warning" size="medium">
      <Icon icon="skill-icons:javascript" class="text-sm mr-2 hidden sm:block" />
      <span>JavaScript</span>
    </Badge>
    <Badge tooltip_data="Intermediário" type="warning" size="medium">
      <Icon icon="skill-icons:typescript" class="text-sm mr-2 hidden sm:block" />
      <span>TypeScript</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="small">
      <Icon icon="skill-icons:python-dark" class="text-sm mr-2 hidden sm:block" />
      <span>Python</span>
    </Badge>
    <Badge tooltip_data="Iniciante" type="error" size="small">
      <Icon icon="skill-icons:php-dark" class="text-sm mr-2 hidden sm:block" />
      <span>PHP</span>
    </Badge>
  </section>
</div>
