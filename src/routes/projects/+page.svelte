<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";
  import ProjectCard from "$lib/components/Projects/ProjectCard.svelte";
  import Screen from "$lib/components/Screen.svelte";
  import { projects } from "$lib/utils/variables/projects";
</script>

<svelte:head>
    <title>Conheça alguns dos meus projetos</title> 
</svelte:head>


<Screen>
  <section class="w-full h-full flex flex-col items-center pt-6">
    <Logo />
    <h1 class="font-bold text-4xl md:text-5xl text-primary text-center">
      Projetos
    </h1>
    <p class="text-white px-6 pt-2 md:pt-4 text-center">
      Conheça alguns dos meus projetos acabados e inacabados
    </p>
    <div class="w-11/12 sm:w-4/5 mt-8">
      {#each projects as project}
        <ProjectCard
          title={project.title}
          description={project.description}
          languages={project.languages}
          status={project.status}
          link={project.link}
          image={project.image}
        />
      {/each}
    </div>
  </section>
</Screen>
