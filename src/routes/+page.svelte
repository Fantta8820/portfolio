<script>
    import Icon from "@iconify/svelte";
</script>

<body data-theme="coffee" class="w-screen h-screen grid place-items-center">
    <main class="w-3/4 h-screen flex flex-col justify-center">
        <h1 class="text-5xl font-bold uppercase text-center group">Olá, tudo bem? Meu nome é <span class="text-accent group-hover:text-secondary transition delay-50">André </span>"<span class="text-accent group-hover:text-secondary transition delay-50">Fantta</span>"<span class="text-accent group-hover:text-secondary transition delay-50">Garcia</span>!</h1>
        <p class="pt-4 text-2xl text-center font-semibold">Infelizmente não existem projetos aqui ainda. Porém caso queira ver meu perfil no GitHub ou meu TCC fique à vontade!</p>
        <div class="divider"></div>
        <section class="max-w-full mx-auto *:btn *:btn-secondary *:w-32 *:mx-2 *:text-base">
            <a href="https://www.swibly.com.br/" target="_blank" class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><Icon icon="mdi:koala" />Swibly</a>
            <a href="https://github.com/Fantta8820" target="_blank" class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><Icon icon="mdi:github" />GitHub</a>
            <a href="https://arkhon.swibly.com.br/" target="_blank" class="transition delay-50 hover:scale-110 hover:btn-primary hover:text-white"><Icon icon="mdi:pencil" />Arkhon</a>
        </section>
    </main>
</body>