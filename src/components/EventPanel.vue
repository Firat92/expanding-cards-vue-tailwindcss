<template>
	<div
		@click="panelClicked()"
		:class="{ panel: true, active: isActive }"
		:style="{ backgroundImage: `url(${imgURL}) ` }"
	>
		<h3 class="text-xl absolute bottom-5 left-5 m-0 opacity-0">{{ name }}</h3>
	</div>
</template>

<script>
export default {
	name: 'EventPanel',
	props: ['name', 'imgURL', 'isActive', 'panelNumber'],
	methods: {
		panelClicked() {
			this.$emit('clicked', this.panelNumber);
		},
	},
};
</script>
