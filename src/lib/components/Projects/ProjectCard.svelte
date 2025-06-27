<script lang="ts">
  import Icon from "@iconify/svelte";
  import { setRotation } from "$lib/utils/funcs/rotation";
  import type { languages } from "$lib/utils/types/card";
  import type { statusType } from "$lib/utils/types/card";
  import type { imageType } from "$lib/utils/types/card";

  export let title: string;
  export let description: string;
  export let languages: Array<languages>;
  export let status: statusType;
  export let link: string;
  export let image: imageType;

  let card: HTMLElement;
  let x: number = 0;
  let y: number = 0;  

  const handleMovement = (e: MouseEvent) => {
    const values = setRotation(e, card);
    x = values.x;
    y = values.y;
  };

  const handleReset = () => {
    x = 0;
    y = 0;
  };
</script>

<main
  class="w-full h-[410px] md:h-[400px] xl:h-[370px] mb-8"
  bind:this={card}
  on:mousemove={(e) => handleMovement(e)}
  on:mouseleave={handleReset}
>
  <div
    class={`w-full h-[410px] md:h-[400px] xl:h-[370px] bg-gray-900 rounded-lg translate-z-4 rotate-z-4 text-white transition-transform duration-500 hover:duration-0`}
    style="transform: perspective(800px) rotateX({x}deg) rotateY({y}deg); transition: 0.07s;"
  >
    <img
      src={image.url}
      class={`w-full h-40 rounded-lg object-none`}
      alt="banner"
      style="object-position: {x / image.cal[0].x1 + image.cal[0].x2}% {y /
        image.cal[1].y1 +
        image.cal[1].y2}%; transition: 0.1s"
    />
    <section class="flex flex-col justify-center items-center min-h-[100px]">
      <h1 class="pt-2 text-xl font-bold text-center text-primary">
        {title}
      </h1>
      <p class="w-11/12 sm:w-4/5 text-center text-xs sm:text-sm px-4 pt-2 text-gray-300">
        {description}
      </p>
    </section>
    <section
      class="flex justify-center items-center flex-wrap pt-6 pl-2 w-full gap-x-2"
    >
      {#each languages as language}
        <div
          class="tooltip tooltip-accent text-white font-regular text-md"
          data-tip={language.language}
        >
          <Icon icon={language.icon} class="text-sm size-6" />
        </div>
      {/each}
    </section>
    <section
      class="w-full flex justify-center items-center mt-4 rounded-b-lg text-center text-white absolute bottom-0 text-sm h-6"
    >
      <p
        class={`w-1/2 ${status.text === "Finalizado" ? "bg-success" : (status.text === "Pendente" ? "bg-warning" : "bg-error")} rounded-bl-lg h-6 flex justify-center items-center gap-x-1`}
      >
        <Icon icon={status.icon} class="text-sm size-4" /><span
          >{status.text}</span
        >
      </p>
      <a
        href={link}
        class="w-1/2 bg-secondary rounded-br-lg h-6 flex justify-center items-center gap-x-1"
        target="_blank"
        ><Icon icon="mdi:github" class="text-sm size-4" /><span>GitHub</span></a
      >
    </section>
  </div>
</main>
