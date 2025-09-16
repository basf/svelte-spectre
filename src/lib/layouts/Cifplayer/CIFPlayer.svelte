<iframe
	title="cifplayer"
	name="CifplayerFrame"
	{src}
	style="width:100%;height:600px;border:none;"
	allowfullscreen
	scrolling="no"
	frameborder="0"
	on:load={() => data && load(data)}
/>

<script lang="ts">
	export let data: string = '';
	export let src: string = 'http://nanoshow.mpds.io/';

	function load(message: string) {
		const timer = setInterval(() => {
			const CifplayerFrame = window.frames.CifplayerFrame;
			if (CifplayerFrame) {
				CifplayerFrame.postMessage(message, '*');
				clearInterval(timer);
			}
		}, 250);
	}
</script>
