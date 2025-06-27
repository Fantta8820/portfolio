<script lang="ts">  
  import Links from "./Links.svelte";
</script>

<div
  class="w-full 2xl:w-3/5 h-full bg-gray-900 rounded-xl hover:bg-gray-700 pb-4"
>
  <div class="flex gap-x-1 pt-3 pl-3">
    <div class="size-3 bg-gray-500 rounded-full"></div>
    <div class="size-3 bg-gray-500 rounded-full"></div>
    <div class="size-3 bg-gray-500 rounded-full"></div>
  </div>
  <div class="w-full pl-6 pt-5 opacity-70 text-sm sm:text-base">
    <h1>Algumas informações extras sobre mim:</h1>
    <ul class="text-xs sm:text-sm list-disc pl-3 pt-4 pr-4 space-y-2">
      <li>
        Possuo Inglês intermediário (B2) e atualmente estou aprendendo Francês
      </li>
      <li>
        Eu fiz ensino médio técnico no curso de Informática para Internet na
        ETEC
      </li>
      <li>
        Possuo o que chamam de Síndrome de Asperger, uma faceta do autismo no qual faz com que eu
        tenha dificuldade de socialização, porém tirando esse fato, eu sou uma
        pessoa completamente normal e funcional
      </li>
      <li>
        Tenho o plano de começar a faculdade de Análise e Desenvolvimento de Sistemas em
        Agosto
      </li>
    </ul>    
  </div>
  <Links />
</div>
