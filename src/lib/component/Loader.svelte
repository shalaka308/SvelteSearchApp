<script>
        export let isLoading = false;
</script>

{#if isLoading}
<div class="loader-wrap" id="loader-wrap">
        <div id="loader" class="loader"></div>
    </div>
{/if}


<style>
	.loader-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #ffffffdb;
        z-index: 1;
	}
        .loader {
            border: 16px solid #f3f3f3;
            border-top: 16px solid #9fbb3b;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
            position: fixed;
            top: 40%;
            left: 45%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }


    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>