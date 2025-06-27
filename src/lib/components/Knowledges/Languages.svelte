<script>
  import Badge from "./Badge.svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="w-11/12 sm:w-4/5 mt-8 pb-8">
  <h1 class="text-green-100 font-semibold text-md sm:text-xl">Idiomas</h1>
  <div class="w-[58px] sm:w-[71px] h-1 rounded-full bg-green-100"></div>
  <p class="pt-2 pr-4 text-white text-sm sm:text-base">
    Esses são os idiomas que eu já possuo um grau de experiência ou os quais eu desejo desenvolver no futuro
  </p>
  <section class="pt-3 flex flex-wrap gap-x-4 gap-y-4">
    <Badge tooltip_data="Nativo" type="success" size="medium">
      <Icon icon="twemoji:flag-brazil" class="text-sm mr-2 hidden sm:block" />
      <span>Português</span>
    </Badge>
    <Badge tooltip_data="Intermediário (B2)" type="warning" size="medium">
      <Icon icon="twemoji:flag-united-states" class="text-sm mr-2 hidden sm:block" />
      <span>Inglês</span>
    </Badge>
    <Badge tooltip_data="Iniciante (A1)" type="error" size="small">
      <Icon icon="twemoji:flag-france" class="text-sm mr-2 hidden sm:block" />
      <span>Francês</span>
    </Badge>
    <Badge tooltip_data="Iniciante (A1)" type="error" size="medium">
      <Icon icon="twemoji:flag-spain" class="text-sm mr-2 hidden sm:block" />
      <span>Espanhol</span>
    </Badge>
  </section>
</div>
