<script>
  import Screen from "$lib/components/Screen.svelte";
  import Logo from "$lib/components/Logo.svelte";
  import ExtraInfo from "$lib/components/About/ExtraInfo.svelte";
  import Pfp from "$lib/components/About/Pfp.svelte";
</script>

<svelte:head>
    <title>Bem vindo ao meu Portfolio</title> 
</svelte:head>


<Screen>
  <section class="w-full h-full flex flex-col items-center pt-6">
    <Logo />
    <h1 class="font-bold text-4xl md:text-5xl text-primary text-center">
      Bem-vindo
    </h1>
    <p class="text-white px-6 pt-2 md:pt-4 text-center">
      Conheça um pouco mais sobre mim através deste Portfolio
    </p>
    <section class="text-white w-11/12 sm:w-4/5 mt-6 text-justify">
      <h1 class="text-purple-300 font-semibold text-md sm:text-xl">Resumo</h1>
      <div class="w-[57px] sm:w-[72px] h-1 rounded-full bg-purple-300"></div>
      <p class="pt-2 text-sm sm:text-base">
        Olá, meu nome é André Victor e sou um desenvolvedor Front-End em
        formação com uma base de conhecimentos em tecnologias como HTML, CSS,
        Javascript, TypeScript e SvelteKit. Sou um dos fundadores da empresa
        fictícia Swibly e desenvolvedor Front-End do projeto Arkhon. Atualmente
        estou focado em adquirir experiência profissional na área de
        Desenvolvimento Web, porém futuramente pretendo me desenvolver mais na
        área de Back-End.
      </p>
    </section>
    <section class="text-white w-11/12 sm:w-4/5 mt-5 flex flex-col 2xl:flex-row pb-4">
      <Pfp />
      <ExtraInfo />
    </section>
  </section>
</Screen>
