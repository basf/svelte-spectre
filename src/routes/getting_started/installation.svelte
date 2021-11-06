<div class="docs-content" id="content">
	<div class="container" id="installation">
		<h3 class="s-title">
			Installation<a class="anchor" href="#installation" aria-hidden="true">#</a>
		</h3>
		<p>
			There are 5 ways to get started with Spectre CSS framework in your projects. You can
			either install manually, from CDN or use package managers.
		</p>
		<h4 class="s-subtitle" id="install-manually">
			Install manually<a class="anchor" href="#install-manually" aria-hidden="true">#</a>
		</h4>
		<p>
			Download the compiled and minified <a
				href="https://github.com/picturepan2/spectre/releases"
				target="_blank">Spectre CSS file</a
			> (core ~10KB min+gzip):
		</p>
		<p>
			<a
				class="btn btn-primary"
				href="https://github.com/picturepan2/spectre/releases"
				target="_blank">Download Spectre.css</a
			>
		</p>
		<p>
			Include <code>spectre.css</code> located in <strong>/dist</strong> in your website or
			Web app . Also, you can add <code>spectre-icons.css</code> and
			<code>spectre-exp.css</code> accordingly.
		</p>
		<pre
			class="code"
			data-lang="HTML"><code><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"spectre.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"spectre-exp.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"spectre-icons.min.css"</span>&gt;</span>
</code></pre>
		<h4 class="s-subtitle" id="install-cdn">
			Install from CDN<a class="anchor" href="#install-cdn" aria-hidden="true">#</a>
		</h4>
		<p>
			Alternatively, you can use the <a href="https://unpkg.com/" target="_blank">unpkg</a> or
			<a href="https://cdnjs.com/libraries/spectre.css" target="_blank">cdnjs</a> CDN to load compiled
			Spectre.css.
		</p>
		<pre
			class="code"
			data-lang="HTML"><code><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/spectre.css/dist/spectre.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/spectre.css/dist/spectre-exp.min.css"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/spectre.css/dist/spectre-icons.min.css"</span>&gt;</span>
</code></pre>
		<h4 class="s-subtitle" id="install-npm">
			Install with NPM<a class="anchor" href="#install-npm" aria-hidden="true">#</a>
		</h4>
		<pre
			class="code c-select-all"
			data-lang="Bash"><code>npm install spectre.css --save
</code></pre>
		<h4 class="s-subtitle" id="install-yarn">
			Install with Yarn<a class="anchor" href="#install-yarn" aria-hidden="true">#</a>
		</h4>
		<pre class="code c-select-all" data-lang="Bash"><code>yarn add spectre.css
</code></pre>
		<h4 class="s-subtitle" id="install-bower">
			Install from Bower<a class="anchor" href="#install-bower" aria-hidden="true">#</a>
		</h4>
		<pre
			class="code c-select-all"
			data-lang="Bash"><code>bower install spectre.css --save
</code></pre>
	</div>
	<div class="docs-footer container grid-lg" id="copyright">
		<p>
			<a href="https://github.com/picturepan2/spectre" target="_blank">GitHub</a> ·
			<a href="https://twitter.com/spectrecss" target="_blank">Twitter</a>
			· <a href="https://www.paypal.me/picturepan2" target="_blank">PayPal Donate</a> ·
			<a href="https://www.patreon.com/spectrecss" target="_blank">Patreon Sponsor</a>
			· Version <span class="version" />
		</p>
		<p>
			Designed and built with <span class="text-error">♥</span> by
			<a href="https://twitter.com/picturepan2" target="_blank">Yan Zhu</a>. Licensed under
			the
			<a href="https://github.com/picturepan2/spectre/blob/master/LICENSE" target="_blank"
				>MIT License</a
			>.
		</p>
	</div>
</div>

<script context="module">
	// import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	// export const prerender = true;
</script>
