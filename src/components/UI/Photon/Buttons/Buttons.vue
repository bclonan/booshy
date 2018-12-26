<template>
   <div>
<button class="btn" :class="buttonClass">Default</button>
   </div>
</template>

<script>
   export default {
      name:"buttons",
      props: ["buttonClass"]
   }
</script>

<style>

</style>