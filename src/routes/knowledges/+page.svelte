<script>
  import Logo from "$lib/components/Logo.svelte";
  import Screen from "$lib/components/Screen.svelte";
  import ProgrammingLanguages from "$lib/components/Knowledges/ProgrammingLanguages.svelte";
  import Frameworks from "$lib/components/Knowledges/Frameworks.svelte";
  import OtherTechnologies from "$lib/components/Knowledges/OtherTechnologies.svelte";
  import Languages from "$lib/components/Knowledges/Languages.svelte";
</script>

<svelte:head>
    <title>Descubra alguns dos meus conhecimentos</title> 
</svelte:head>


<Screen>
  <section class="w-full h-full flex flex-col items-center pt-6">
    <Logo />
    <h1 class="font-bold text-4xl md:text-5xl text-primary text-center">Conhecimentos</h1>
    <p class="text-white px-6 pt-2 md:pt-4 text-center">
      Sobre alguns dos meus conhecimentos
    </p>
    <ProgrammingLanguages />
    <Frameworks />
    <OtherTechnologies />
    <Languages />
  </section>
</Screen>
