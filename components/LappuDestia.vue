<template lang="pug">
	.lappu-wrap
		.header
			img.logo(src="/bingologo.png")
		.ruudut(v-if="currentList")
			button.ruutu(v-for="i in currentList.songs" :key="i.artist" @click="artistClick(i)" :class="{'selected': i.selected}") 
				span {{i.artist}}
				svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 165.5 56.75')
					g(data-name='Layer 2')
						path(stroke-miterlimit="10" stroke-width="18" fill='red', d='M99.68.18q-6.51.18-13 .6t-13 1.06A203.27 203.27 0 0048.14 6a110.59 110.59 0 00-24.29 8.24 61 61 0 00-10.77 6.56 26.61 26.61 0 00-7.84 9.11A9.33 9.33 0 004.14 35a3.46 3.46 0 00.33 1c0 .12.22.42.33.62l.36.63a7.38 7.38 0 001.64 2 11.73 11.73 0 002.34 1.48c.91.47 1.85.91 2.81 1.33 1.92.83 3.9 1.56 5.91 2.23a132.81 132.81 0 0025 5.39c8.5 1.07 17.1 1.56 25.73 1.82s17.31.33 26 .29 17.31-.17 25.89-.67 17.1-1.5 25.14-3.84a37.93 37.93 0 0011.05-5.14 13 13 0 003.8-4 4.51 4.51 0 00.27-4.31 14.11 14.11 0 00-3.46-4.35 41.4 41.4 0 00-4.92-3.71 67.1 67.1 0 00-11.3-5.77 146 146 0 00-24.65-7.2 185.21 185.21 0 00-25.58-3.53A152 152 0 0065 9.58a113.6 113.6 0 00-12.81 2c-2.11.44-4.22 1-6.3 1.56-1 .3-2.08.6-3.09 1a8.25 8.25 0 00-2.8 1.55 8.25 8.25 0 012.74-1.76c1-.44 2-.81 3-1.17q3.07-1.08 6.24-1.93A116.28 116.28 0 0164.8 8.22 149.38 149.38 0 0191 6.84a185.53 185.53 0 0126 2.81 143 143 0 0125.46 6.79 70.67 70.67 0 0112.05 5.82 41.13 41.13 0 015.53 4 17.8 17.8 0 014.6 5.76 8.91 8.91 0 01.83 4.17 9.56 9.56 0 01-1.17 4 17.28 17.28 0 01-5 5.48 41.69 41.69 0 01-12.36 6c-8.63 2.66-17.47 3.61-26.22 4.22s-17.45.71-26.17.79-17.41-.1-26.13-.39-17.48-.82-26.2-2a137.62 137.62 0 01-25.78-5.94c-2.1-.73-4.19-1.54-6.24-2.45-1-.47-2-1-3-1.5A15.94 15.94 0 014 42.42a11.36 11.36 0 01-2.48-3.05l-.43-.79c-.09-.28-.2-.45-.37-.82a8.27 8.27 0 01-.63-2.11 10.12 10.12 0 01.29-4 17.7 17.7 0 011.31-3.45 30.15 30.15 0 019.17-10.3 61.48 61.48 0 0111.57-6.7 113.16 113.16 0 0125.19-7.67 198.2 198.2 0 0126-3.1C82.29-.09 91-.09 99.68.18z', data-name='Layer 1')

		.footer
			.left
				p Pelilapussa on arvottuna 15 artistia. Kun tunnistat artistin merkitse se lappuusi. Voittaja on se joka saa ensimmäisenä haetun voittotason oikein. Voittotasoja on yhdellä kierrokselle 4 kappaletta. Ensin 5 artistia oikein missä tahansa kohtaa lappua, sitten 1-vaakarivi, 2-vaakariviä ja lopuksi täysi lappu! Yksinkertaista mutta hauskaa! 
			.right 
				.category
					p KATEGORIA
					button.category-ruutu {{currentList.name}}
			
</template>

<script>
export default {
	computed: {
		selectedList(catgory) {
			return this.$store.commit('setSelectedList', category);
		},
		currentList() {
			return this.$store.getters.getSelectedList
		},
		categories() {
			return this.$store.getters.getCategories
		},
	},
	methods: {
		artistClick(artist) {
			this.$store.commit('addSelectedArtist', artist);
		}
	},
	created() {
		this.$store.dispatch('setSelectedList', this.categories['destia']);
	},
}

</script>

<style lang="sass">
	@keyframes reveal
		to 
			opacity: 1
	.lappu-wrap
		background: url("/bingotausta.png")
		background-position: center
		background-size: cover
		box-shadow: 0 2px 23px -5px rgba(black, 0.7), 0 0px 10px -5px rgba(black,.8), 0 8px 62px -3px black
		padding: 20px
		max-width: 850px
		margin: 0
		@media (min-width: 768px)
			margin: 24px 8px
	.ruutu
		background: white
		border: 2px solid black
		display: flex
		align-items: center
		justify-content: center
		line-height: 1.2
		position: relative
		cursor: pointer
		user-select: none
		padding: 2px
		transition: all 100ms
		span
			opacity: 0
			animation: reveal 150ms forwards
		@for $i from 1 through 15
			&:nth-child(#{$i})
				span
					animation-delay: calc(#{$i} * 15ms)
		&:active
			background: rgb(214,214,214)
		svg
			position: absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			padding: 2px 3px 3px 3px
			stroke-dasharray: 450
			stroke-dashoffset: 450
			visibility: hidden
			opacity: 0
			transition: all 100ms
		&.selected
			svg
				visibility: visible
				opacity: 1
				display: block

	.logo
		max-width: 200px
		margin: 0 auto 20px
	.ruudut
		@apply grid gap-0
		grid-template-rows: repeat(3, minmax(60px, 1fr));
		grid-template-columns: repeat(5, minmax(40px, 1fr))
		margin-bottom: 20px
	.footer
		display: flex
		width: 100%
		justify-content: center
		align-items: flex-end
		.left
			width: calc(100% - 150px)
			text-align: left
			color: white
			padding-right: 16px
			p
				font-size: 12px
				line-height: 16px
				text-shadow: 0px 0 12px black
				backdrop-filter: blur(5px)
			@media (min-width: 768px)
				width: calc(100% - 200px)
				p
					font-size: 14px
					line-height: 19px
		.right
			width: 150px
			@media (min-width: 768px)
				width: 200px
	.category-ruutu
		display: flex
		align-items: center
		justify-content: center
		background: white
		border: 2px solid black
		height: 70px
		margin: auto
		font-size: 16px
		cursor: pointer
		width: 100%
		@media (min-width: 768px)
			font-size: 21px
	.category
		width: 100%
		float: right
		p
			color: white
	.category-list
		z-index: 1000
		position: fixed
		ul
			position: relative
			background: white
			border: 4px solid black
			min-width: 220px
			box-shadow: 0 1px 20px -2px rgba(black, .7)
		@media (max-height: 750px)
			position: fixed
			top: 16px
			display: flex
			align-items: center
			justify-content: center
			flex-direction: column
			top: 0
			bottom: 0
			right: 8px
		@media (max-height: 300px)
			position: fixed
			top: 0
			right: 0
			ul
				overflow: scroll
			.close-list	
				top: 0 !important
				position: relative !important

		li
			display: block
			width: 100%
			font-size: 12px
			cursor: pointer
			button
				padding: 2px
				width: 100%
			&:hover
				background: rgba(black,.2)
			@media (min-width: 768px)
				padding: 4px
				font-size: 14px
		li + li
			border-top: 1px solid rgba(black, .4)
		.close-list	
			position: absolute
			top: -25px
			right: -4px
			background: white
			border: 3px solid black
			width: 24px
			height: 24px
			line-height: 20px
</style>
