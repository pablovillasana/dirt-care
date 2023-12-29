<script lang="ts">
  import { page } from "$app/stores";

  import LightModeToggle from "$lib/components/light-mode-toggle.svelte";
</script>

<div class="drawer xl:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

  <div class="drawer-content flex flex-col">
    <!-- Page content here -->
    <div class="navbar bg-base-100 xl:hidden">
      <div class="flex-none">
        {#if $page.data.user}
          <label for="my-drawer-2" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path></svg
            >
          </label>
        {/if}
      </div>
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">Dirt care</a>
      </div>
    </div>
    <div class="container p-6">
      <slot />
    </div>
  </div>

  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul
      class="menu p-4 w-80 min-h-full bg-base-200 text-base-content shadow-2xl"
    >
      <!-- Sidebar content here -->
      <a href="/" class="btn btn-ghost text-xl">Dirt care</a>

      <!-- Settings section -->
      {#if $page.data.user}
        <a href="/settings" title="Settings"
          ><i class="bi bi-gear text-xl"></i>
          <span class="text-base ml-2">Settings</span></a
        >
      {/if}

      {#if !$page.data.user}
        <a href="/login" title="Sign In"
          ><i class="bi bi-box-arrow-in-righ text-xl">LogIn</i></a
        >
      {:else}
        <form method="POST" action="/logout">
          <button type="submit" title="Sign Out"
            ><i class="bi bi-box-arrow-right text-xl"></i>
            <span class="text-base ml-2">Sign Out</span>
          </button>
        </form>
      {/if}

      <LightModeToggle />
    </ul>
  </div>
</div>
