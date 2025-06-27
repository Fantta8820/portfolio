<script>
  import Footer from "$lib/components/Footer.svelte";
import "../app.css";  
</script>

<main class="w-full h-screen flex flex-col justify-center items-center space-y-8">
  <slot />
  <Footer />
</main>
