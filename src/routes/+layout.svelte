<script lang="ts">
  import Drawer from "$lib/components/drawer.svelte";
  import "../app.css";
</script>

<!-- Main layout. Drawer + navbar -->
<Drawer>
  <slot />
</Drawer>
