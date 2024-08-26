<script>
    import Icon from "@iconify/svelte";
</script>

<body data-theme="coffee" class="w-screen h-screen grid place-items-center">
    <main class="w-3/4 h-screen flex flex-col justify-center">
        <h1 class="text-3xl lg:text-5xl font-bold uppercase text-center group">Olá, tudo bem? Meu nome é <span class="text-accent group-hover:text-secondary transition delay-50">André </span>"<span class="text-accent group-hover:text-secondary transition delay-50">Fantta</span>"<span class="text-accent group-hover:text-secondary transition delay-50">Garcia</span>!</h1>
        <p class="pt-4 text-lg lg:text-2xl text-center font-semibold">Infelizmente não existem projetos aqui ainda. Porém caso queira ver meu perfil no GitHub ou meu TCC fique à vontade!</p>
        <div class="divider"></div>
        <section class="w-full flex justify-center *:btn *:btn-secondary *:w-20 *:sm:w-28 *:lg:w-32 *:mx-2 *:text-base">
            <button class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><a href="https://www.swibly.com.br/" class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white sm:flex sm:items-center sm:gap-2" target="_blank"><Icon class="w-full mx-auto" icon="mdi:koala" />Swibly</a></button>
            <button class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><a href="https://github.com/Fantta8820" class="sm:flex sm:items-center sm:gap-2" target="_blank"><Icon class="w-full mx-auto" icon="mdi:github" />GitHub</a></button>
            <button class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><a href="https://arkhon.swibly.com.br/" class="sm:flex sm:items-center sm:gap-2" target="_blank"><Icon class="w-full mx-auto" icon="mdi:pencil" />Arkhon</a></button>
        </section>
    </main>
</body>