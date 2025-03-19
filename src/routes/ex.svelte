<script>
	import '../css/styles.css';
	import Search from '../lib/component/Search.svelte';
	import Tabs from './tabs/Tabs.svelte';
	import GitHubTab from './tabs/gitHubTab.svelte';
	import GoogleTab from './tabs/googleTab.svelte';
	import StackOverFlowTab from './tabs/stackOverFlowTab.svelte';
	import YouTubeTab from './tabs/YouTubeTab.svelte';

	let items = [
		{
			label: 'GitHub',
			value: 'github',
			component: GitHubTab,
			image: 'images/github.png',
		},
		{
			label: 'Google',
			value: 'google',
			component: GoogleTab,
			image: 'images/google.png',
		},
		{
			label: 'Stack overflow',
			value: 'stackOverflow',
			component: StackOverFlowTab,
			image: 'images/stack-overflow.png',
		},
		{
			label: 'YouTube Videos',
			value: 'youtube',
			component: YouTubeTab,
			image: 'images/youtube.png',
		},
	];
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
<html lang="en">
	<body>
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="col-12 text-center">
					<div class="logo m-5 position-relative">
						<img
							src="images/logo.png"
							alt="logo"
						/>
					</div>
				</div>
			</div>
			<div class="text-center mb-5">
				<Search />
				<Tabs {items} />
			</div>
			<hr class="mt-5" />
			<p class="copyright text-center">© Copyright CCI</p>
		</div>
	</body>
</html>
