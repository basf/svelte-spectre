<div {...$$restProps} class="container grid-{size}">
	<slot />
</div>

<script context="module"></script>

<script>
	export let size = 'md';
</script>

<style>
	:global(.spectre) .container {
		margin-left: auto;
		margin-right: auto;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		width: 100%;
	}
	:global(.spectre) .container.grid-xl {
		max-width: 1296px;
	}
	:global(.spectre) .container.grid-lg {
		max-width: 976px;
	}
	:global(.spectre) .container.grid-md {
		max-width: 856px;
	}
	:global(.spectre) .container.grid-sm {
		max-width: 616px;
	}
	:global(.spectre) .container.grid-xs {
		max-width: 496px;
	}
	:global(.spectre) .show-xs,
	:global(.spectre) .show-sm,
	:global(.spectre) .show-md,
	:global(.spectre) .show-lg,
	:global(.spectre) .show-xl {
		display: none !important;
	}
	:global(.spectre) .cols,
	:global(.spectre) .columns {
		display: flex;
		flex-wrap: wrap;
		margin-left: -0.4rem;
		margin-right: -0.4rem;
	}
	:global(.spectre) .cols.col-gapless,
	:global(.spectre) .columns.col-gapless {
		margin-left: 0;
		margin-right: 0;
	}
	:global(.spectre) .cols.col-gapless > .column,
	:global(.spectre) .columns.col-gapless > .column {
		padding-left: 0;
		padding-right: 0;
	}
	:global(.spectre) .cols.col-oneline,
	:global(.spectre) .columns.col-oneline {
		flex-wrap: nowrap;
		overflow-x: auto;
	}
	:global(.spectre) [class~='col-'],
	:global(.spectre) .column {
		flex: 1;
		max-width: 100%;
		padding-left: 0.4rem;
		padding-right: 0.4rem;
	}
	:global(.spectre) [class~='col-'].col-12,
	:global(.spectre) [class~='col-'].col-11,
	:global(.spectre) [class~='col-'].col-10,
	:global(.spectre) [class~='col-'].col-9,
	:global(.spectre) [class~='col-'].col-8,
	:global(.spectre) [class~='col-'].col-7,
	:global(.spectre) [class~='col-'].col-6,
	:global(.spectre) [class~='col-'].col-5,
	:global(.spectre) [class~='col-'].col-4,
	:global(.spectre) [class~='col-'].col-3,
	:global(.spectre) [class~='col-'].col-2,
	:global(.spectre) [class~='col-'].col-1,
	:global(.spectre) [class~='col-'].col-auto,
	:global(.spectre) .column.col-12,
	:global(.spectre) .column.col-11,
	:global(.spectre) .column.col-10,
	:global(.spectre) .column.col-9,
	:global(.spectre) .column.col-8,
	:global(.spectre) .column.col-7,
	:global(.spectre) .column.col-6,
	:global(.spectre) .column.col-5,
	:global(.spectre) .column.col-4,
	:global(.spectre) .column.col-3,
	:global(.spectre) .column.col-2,
	:global(.spectre) .column.col-1,
	:global(.spectre) .column.col-auto {
		flex: none;
	}
	:global(.spectre) .col-12 {
		width: 100%;
	}
	:global(.spectre) .col-11 {
		width: 91.66666667%;
	}
	:global(.spectre) .col-10 {
		width: 83.33333333%;
	}
	:global(.spectre) .col-9 {
		width: 75%;
	}
	:global(.spectre) .col-8 {
		width: 66.66666667%;
	}
	:global(.spectre) .col-7 {
		width: 58.33333333%;
	}
	:global(.spectre) .col-6 {
		width: 50%;
	}
	:global(.spectre) .col-5 {
		width: 41.66666667%;
	}
	:global(.spectre) .col-4 {
		width: 33.33333333%;
	}
	:global(.spectre) .col-3 {
		width: 25%;
	}
	:global(.spectre) .col-2 {
		width: 16.66666667%;
	}
	:global(.spectre) .col-1 {
		width: 8.33333333%;
	}
	:global(.spectre) .col-auto {
		flex: 0 0 auto;
		max-width: none;
		width: auto;
	}
	:global(.spectre) .col-mx-auto {
		margin-left: auto;
		margin-right: auto;
	}
	:global(.spectre) .col-ml-auto {
		margin-left: auto;
	}
	:global(.spectre) .col-mr-auto {
		margin-right: auto;
	}
	@media (max-width: 1280px) {
		:global(.spectre) .col-xl-12,
		:global(.spectre) .col-xl-11,
		:global(.spectre) .col-xl-10,
		:global(.spectre) .col-xl-9,
		:global(.spectre) .col-xl-8,
		:global(.spectre) .col-xl-7,
		:global(.spectre) .col-xl-6,
		:global(.spectre) .col-xl-5,
		:global(.spectre) .col-xl-4,
		:global(.spectre) .col-xl-3,
		:global(.spectre) .col-xl-2,
		:global(.spectre) .col-xl-1,
		:global(.spectre) .col-xl-auto {
			flex: none;
		}
		:global(.spectre) .col-xl-12 {
			width: 100%;
		}
		:global(.spectre) .col-xl-11 {
			width: 91.66666667%;
		}
		:global(.spectre) .col-xl-10 {
			width: 83.33333333%;
		}
		:global(.spectre) .col-xl-9 {
			width: 75%;
		}
		:global(.spectre) .col-xl-8 {
			width: 66.66666667%;
		}
		:global(.spectre) .col-xl-7 {
			width: 58.33333333%;
		}
		:global(.spectre) .col-xl-6 {
			width: 50%;
		}
		:global(.spectre) .col-xl-5 {
			width: 41.66666667%;
		}
		:global(.spectre) .col-xl-4 {
			width: 33.33333333%;
		}
		:global(.spectre) .col-xl-3 {
			width: 25%;
		}
		:global(.spectre) .col-xl-2 {
			width: 16.66666667%;
		}
		:global(.spectre) .col-xl-1 {
			width: 8.33333333%;
		}
		:global(.spectre) .col-xl-auto {
			width: auto;
		}
		:global(.spectre) .hide-xl {
			display: none !important;
		}
		:global(.spectre) .show-xl {
			display: block !important;
		}
	}
	@media (max-width: 960px) {
		:global(.spectre) .col-lg-12,
		:global(.spectre) .col-lg-11,
		:global(.spectre) .col-lg-10,
		:global(.spectre) .col-lg-9,
		:global(.spectre) .col-lg-8,
		:global(.spectre) .col-lg-7,
		:global(.spectre) .col-lg-6,
		:global(.spectre) .col-lg-5,
		:global(.spectre) .col-lg-4,
		:global(.spectre) .col-lg-3,
		:global(.spectre) .col-lg-2,
		:global(.spectre) .col-lg-1,
		:global(.spectre) .col-lg-auto {
			flex: none;
		}
		:global(.spectre) .col-lg-12 {
			width: 100%;
		}
		:global(.spectre) .col-lg-11 {
			width: 91.66666667%;
		}
		:global(.spectre) .col-lg-10 {
			width: 83.33333333%;
		}
		:global(.spectre) .col-lg-9 {
			width: 75%;
		}
		:global(.spectre) .col-lg-8 {
			width: 66.66666667%;
		}
		:global(.spectre) .col-lg-7 {
			width: 58.33333333%;
		}
		:global(.spectre) .col-lg-6 {
			width: 50%;
		}
		:global(.spectre) .col-lg-5 {
			width: 41.66666667%;
		}
		:global(.spectre) .col-lg-4 {
			width: 33.33333333%;
		}
		:global(.spectre) .col-lg-3 {
			width: 25%;
		}
		:global(.spectre) .col-lg-2 {
			width: 16.66666667%;
		}
		:global(.spectre) .col-lg-1 {
			width: 8.33333333%;
		}
		:global(.spectre) .col-lg-auto {
			width: auto;
		}
		:global(.spectre) .hide-lg {
			display: none !important;
		}
		:global(.spectre) .show-lg {
			display: block !important;
		}
	}
	@media (max-width: 840px) {
		:global(.spectre) .col-md-12,
		:global(.spectre) .col-md-11,
		:global(.spectre) .col-md-10,
		:global(.spectre) .col-md-9,
		:global(.spectre) .col-md-8,
		:global(.spectre) .col-md-7,
		:global(.spectre) .col-md-6,
		:global(.spectre) .col-md-5,
		:global(.spectre) .col-md-4,
		:global(.spectre) .col-md-3,
		:global(.spectre) .col-md-2,
		:global(.spectre) .col-md-1,
		:global(.spectre) .col-md-auto {
			flex: none;
		}
		:global(.spectre) .col-md-12 {
			width: 100%;
		}
		:global(.spectre) .col-md-11 {
			width: 91.66666667%;
		}
		:global(.spectre) .col-md-10 {
			width: 83.33333333%;
		}
		:global(.spectre) .col-md-9 {
			width: 75%;
		}
		:global(.spectre) .col-md-8 {
			width: 66.66666667%;
		}
		:global(.spectre) .col-md-7 {
			width: 58.33333333%;
		}
		:global(.spectre) .col-md-6 {
			width: 50%;
		}
		:global(.spectre) .col-md-5 {
			width: 41.66666667%;
		}
		:global(.spectre) .col-md-4 {
			width: 33.33333333%;
		}
		:global(.spectre) .col-md-3 {
			width: 25%;
		}
		:global(.spectre) .col-md-2 {
			width: 16.66666667%;
		}
		:global(.spectre) .col-md-1 {
			width: 8.33333333%;
		}
		:global(.spectre) .col-md-auto {
			width: auto;
		}
		:global(.spectre) .hide-md {
			display: none !important;
		}
		:global(.spectre) .show-md {
			display: block !important;
		}
	}
	@media (max-width: 600px) {
		:global(.spectre) .col-sm-12,
		:global(.spectre) .col-sm-11,
		:global(.spectre) .col-sm-10,
		:global(.spectre) .col-sm-9,
		:global(.spectre) .col-sm-8,
		:global(.spectre) .col-sm-7,
		:global(.spectre) .col-sm-6,
		:global(.spectre) .col-sm-5,
		:global(.spectre) .col-sm-4,
		:global(.spectre) .col-sm-3,
		:global(.spectre) .col-sm-2,
		:global(.spectre) .col-sm-1,
		:global(.spectre) .col-sm-auto {
			flex: none;
		}
		:global(.spectre) .col-sm-12 {
			width: 100%;
		}
		:global(.spectre) .col-sm-11 {
			width: 91.66666667%;
		}
		:global(.spectre) .col-sm-10 {
			width: 83.33333333%;
		}
		:global(.spectre) .col-sm-9 {
			width: 75%;
		}
		:global(.spectre) .col-sm-8 {
			width: 66.66666667%;
		}
		:global(.spectre) .col-sm-7 {
			width: 58.33333333%;
		}
		:global(.spectre) .col-sm-6 {
			width: 50%;
		}
		:global(.spectre) .col-sm-5 {
			width: 41.66666667%;
		}
		:global(.spectre) .col-sm-4 {
			width: 33.33333333%;
		}
		:global(.spectre) .col-sm-3 {
			width: 25%;
		}
		:global(.spectre) .col-sm-2 {
			width: 16.66666667%;
		}
		:global(.spectre) .col-sm-1 {
			width: 8.33333333%;
		}
		:global(.spectre) .col-sm-auto {
			width: auto;
		}
		:global(.spectre) .hide-sm {
			display: none !important;
		}
		:global(.spectre) .show-sm {
			display: block !important;
		}
	}
	@media (max-width: 480px) {
		:global(.spectre) .col-xs-12,
		:global(.spectre) .col-xs-11,
		:global(.spectre) .col-xs-10,
		:global(.spectre) .col-xs-9,
		:global(.spectre) .col-xs-8,
		:global(.spectre) .col-xs-7,
		:global(.spectre) .col-xs-6,
		:global(.spectre) .col-xs-5,
		:global(.spectre) .col-xs-4,
		:global(.spectre) .col-xs-3,
		:global(.spectre) .col-xs-2,
		:global(.spectre) .col-xs-1,
		:global(.spectre) .col-xs-auto {
			flex: none;
		}
		:global(.spectre) .col-xs-12 {
			width: 100%;
		}
		:global(.spectre) .col-xs-11 {
			width: 91.66666667%;
		}
		:global(.spectre) .col-xs-10 {
			width: 83.33333333%;
		}
		:global(.spectre) .col-xs-9 {
			width: 75%;
		}
		:global(.spectre) .col-xs-8 {
			width: 66.66666667%;
		}
		:global(.spectre) .col-xs-7 {
			width: 58.33333333%;
		}
		:global(.spectre) .col-xs-6 {
			width: 50%;
		}
		:global(.spectre) .col-xs-5 {
			width: 41.66666667%;
		}
		:global(.spectre) .col-xs-4 {
			width: 33.33333333%;
		}
		:global(.spectre) .col-xs-3 {
			width: 25%;
		}
		:global(.spectre) .col-xs-2 {
			width: 16.66666667%;
		}
		:global(.spectre) .col-xs-1 {
			width: 8.33333333%;
		}
		:global(.spectre) .col-xs-auto {
			width: auto;
		}
		:global(.spectre) .hide-xs {
			display: none !important;
		}
		:global(.spectre) .show-xs {
			display: block !important;
		}
	}
</style>
