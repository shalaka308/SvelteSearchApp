<script>
  	import '../css/styles.css';
    import Tabs from "./tabs/Tabs.svelte";
    import Search from "../lib/component/Search.svelte";
</script>
  <svelte:head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Search App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    /> <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </svelte:head>

  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 text-center">
        <div class="logo m-5 position-relative">
          <img
            src="/images/logo-white-bg.png"
            alt="logo"
            class="mb-5"
          />
          <div class="text-center mb-5">
          <Search />
          <Tabs />
          </div>
     </div>
</div>
</div>
</div>
  <slot /> <!-- Render child routes here -->
  <hr class="mt-5" />
  <p class="copyright text-center">© Copyright CCI</p>
