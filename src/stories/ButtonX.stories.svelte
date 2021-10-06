<Meta
	title="Example/ButtonX"
	component={Button}
	argTypes={{
		onClick: { action: 'onClick' },
		label: { control: 'text' },
		variant: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'link', 'success', 'error'],
			},
		},
		size: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] } },
		shape: { control: { type: 'select', options: ['square', 'circle', false] } },
		active: { control: 'boolean' },
		loading: { control: 'boolean' },
		block: { control: 'boolean' },
		href: { control: 'text' },
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick}>{args.label}</Button>
</Template>

<Story
	name="Primary"
	args={{
		label: 'Button',
		variant: 'primary',
	}}
/>

<Story
	name="Secondary"
	args={{
		label: 'Button',
		variant: 'secondary',
	}}
/>
<Story
	name="Success"
	args={{
		label: 'Button',
		variant: 'success',
	}}
/>

<Story
	name="Error"
	args={{
		label: 'Button',
		variant: 'error',
		size: 'xl',
	}}
/>

<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from 'svelte-spectre';
</script>
