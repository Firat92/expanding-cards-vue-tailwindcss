<template>
	<div class="w-[90vw] flex sm:w-screen">
		<event-panel
			class="bg-cover bg-center bg-no-repeat h-[80vh] w-60 rounded-[50px] text-slate-100 cursor-pointer m-[10px] relative flex-grow-0.5 shrink basis-[0%] transition-flex duration-700 ease-in sm:[&:nth-child(4)]:hidden sm:[&:nth-child(5)]:hidden"
			v-for="(panel, index) in panels"
			:key="index"
			:name="panel.name"
			:imgURL="panel.imgURL"
			:panelNumber="index"
			:isActive="activePanel === index"
			@clicked="panelClick"
		></event-panel>
	</div>
</template>

<script>
import EventPanel from './EventPanel.vue';
export default {
	name: 'EventPanels',
	components: {
		EventPanel,
	},
	data() {
		return {
			activePanel: 0,
			panels: [
				{
					name: 'Bitcoin',
					imgURL:
						'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
				},
				{
					name: 'Etherum',
					imgURL:
						'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80',
				},
				{
					name: 'Tether',
					imgURL:
						'https://images.unsplash.com/photo-1651055693398-0d66969cf759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
				},
				{
					name: 'Cardano Ada',
					imgURL:
						'https://images.unsplash.com/photo-1640322871249-99eafc9d0730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
				},
				{
					name: 'Shiba Inu',
					imgURL:
						'https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
				},
			],
		};
	},

	methods: {
		panelClick(panelNumber) {
			this.activePanel = panelNumber;
		},
	},
};
</script>
