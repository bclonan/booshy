<template>
<article class="markdown-body">
  <slot name="content">
            <h1>Here might be a page title</h1>
  </slot>
</article>
</template>

<script>

   export default {
      name: "editContainer",
      props: ['documentContents']
      
   }
</script>

<style scoped>
@import url("../../../../../styles/Markdown/GithubFlavor.css");
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>