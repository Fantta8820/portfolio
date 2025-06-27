<script lang="ts">    
    export let tooltip_data: String;
    export let type: "success" | "warning" | "error";
    export let size: "small" | "medium" | "big";

    const w = {
      "small": "w-16 sm:w-24",
      "medium": "w-24 wm:w-36",
      "big": "w-32 sm:w-40"
    }    

    const color = {
      "success": "hover:bg-success",
      "warning": "hover:bg-warning",
      "error": "hover:bg-error"
    }

    const tooltip = {
      "success": "tooltip-success",
      "warning": "tooltip-warning",
      "error": "tooltip-error"
    }
</script>

<div
  class={`tooltip ${tooltip[type]} badge badge-outline badge-${type} ${color[type]} hover:text-black font-semibold  w-${w[size]} h-8 flex justify-center items-center text-xs`}
  data-tip={`${tooltip_data}`}
>
  <slot />
</div>
