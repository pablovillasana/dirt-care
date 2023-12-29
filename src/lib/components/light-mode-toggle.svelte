<script>
  import { page } from "$app/stores";

  let checked = $page.data.preferedTheme === "dim";

  const toggleLightMode = (event) => {
    checked = !checked;

    let selectedTheme = checked ? "dim" : "nord";
    sendSelectedThemeToServer(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    setTimeout(() => (event.target.checked = checked), 0);
  };

  const sendSelectedThemeToServer = (selectedTheme) => {
    try {
      fetch(`/?theme=${selectedTheme}&redirectTo=${$page.url.pathname}`, {
        method: "POST",
        body: new FormData(),
      });
    } catch (e) {
      console.error(e);
    }
  };
</script>

<div class="flex">
  <label class="label cursor-pointer">
    <span class="label-text"><i class="bi bi-sun text-xl"></i></span>
    <input
      type="checkbox"
      class="toggle toggle-sm mx-3"
      {checked}
      on:click|preventDefault={toggleLightMode}
    />
    <span class="label-text"><i class="bi bi-moon text-xl"></i></span>
  </label>
</div>
