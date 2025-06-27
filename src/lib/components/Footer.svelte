<script>
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
</script>

<footer class="w-full flex justify-center gap-x-5">
  <a
    class={`btn btn-soft ${$page.url.pathname === "/" ? "btn-secondary" : "btn-primary"} btn-xs sm:btn-sm text-gray-200`}
    href="/"
    ><Icon icon="fluent:person-24-filled" class="text-sm -mr-1" />Sobre</a
  >
  <a
    class={`btn btn-soft ${$page.url.pathname === "/knowledges" ? "btn-secondary" : "btn-primary"} btn-xs sm:btn-sm text-gray-200`}
    href="/knowledges"
    ><Icon icon="material-symbols:book" class="text-sm -mr-1" />Conhecimentos</a
  >
  <a
    class={`btn btn-soft ${$page.url.pathname === "/projects" ? "btn-secondary" : "btn-primary"} btn-xs sm:btn-sm text-gray-200`}
    href="/projects"
    ><Icon
      icon="material-symbols:star-rounded"
      class="text-base -mr-1"
    />Projetos</a
  >
</footer>
