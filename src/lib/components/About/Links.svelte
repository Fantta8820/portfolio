<script lang="ts">
  import Icon from "@iconify/svelte";
  import curriculo from "$lib/assets/curriculo.pdf";

  let copyText: String = "Clique para copiar";

  const handleCopy = () => {
    navigator.clipboard.writeText("andrevictor2512@gmail.com");
    copyText = "Copiado!";
  };

  const resetCopy = () => {
    setTimeout(() => {
      copyText = "Clique para copiar";
    }, 300);
  };
</script>

<section class="w-full grid grid-cols-2 space-y-2 sm:grid-cols-4 sm:space-y-0 place-items-center mt-4">
  <button
    class="tooltip text-red-100 flex justify-center items-center gap-x-2 text-xs cursor-pointer"
    data-tip={copyText}
    on:click={handleCopy}
    on:mouseleave={resetCopy}
  >
    <Icon icon="simple-icons:gmail" /><span>Gmail</span>
  </button>
  <a
    class="tooltip text-blue-100 flex justify-center items-center gap-x-2 text-xs"
    data-tip="Abrir"
    href="https://www.linkedin.com/in/andré-victor-garcia"
    target="_blank"
  >
    <Icon icon="simple-icons:linkedin" /><span>Linkedin</span>
  </a>
  <a
    class="tooltip text-white flex justify-center items-center gap-x-2 text-xs"
    href="https://github.com/fantta8820"
    data-tip="Abrir"
    target="_blank"
  >
    <Icon icon="simple-icons:github" /><span>GitHub</span>
  </a>
  <a
    class="tooltip text-white flex justify-center items-center gap-x-2 text-xs"
    data-tip="Baixar"
    href={curriculo}
    download
  >
    <Icon icon="mingcute:paper-2-fill" /><span>Currículo</span>
  </a>
</section>
