<template>
	<div>
		<!-- desktop -->
		<div class="flex-box show-desktop">
			<div class="flexbox-item q-pr-md">
				<div class="row items-center q-pr-xl q-mt-xl">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="plumbing"
							class="q-mr-xs"
						/>
					</div>
					<div class="col-xs-10">
						<span class="text-white item-title"><strong>{{ $t('homeView.ringSizeTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white q-pr-xl">
					{{ $t('homeView.ringSizeText') }}
				</p>
			</div>
			<div class="flexbox-item image">
				<NuxtImg
					src="1.jpg"
					width="90%"
					height="400"
				/>
			</div>
			<div class="flexbox-item image">
				<NuxtImg
					src="2.jpg"
					width="90%"
					height="400"
				/>
			</div>
			<div class="flexbox-item q-pl-md ">
				<div class="row items-center q-pr-xl ">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="close"
							class="q-mr-xs"
						/>
					</div>
					<div class="col-xs-10">
						<span class="text-white item-title"><strong>{{ $t('homeView.ringDestructionTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white q-pr-xl">
					{{ $t('homeView.ringDestructionText') }}
				</p>
			</div>
			<div class="flexbox-item q-pr-md">
				<div class="row items-center q-pr-xl q-mt-xl">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="thumb_up"
							class="q-mr-xs"
						/>
					</div>
					<div class="col-xs-10">
						<span class="text-white item-title"><strong>{{ $t('homeView.easyHandlingTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white q-pr-xl">
					{{ $t('homeView.easyHandlingText') }}
				</p>
			</div>
			<div class="flexbox-item image3">
				<NuxtImg
					src="3.jpg"
					width="90%"
					height="400"
				/>
			</div>
			<div class="flexbox-item image4">
				<NuxtImg
					src="4.jpg"
					width="90%"
					height="400"
				/>
			</div>
			<div class="flexbox-item q-pl-md">
				<div class="row items-center q-pr-xl q-mt-xl">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="handyman"
						/>
					</div>
					<div class="col-xs-10">
						<span class="text-white item-title"><strong>{{ $t('homeView.qualityTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white q-pr-xl">
					{{ $t('homeView.qualityText') }}
				</p>
			</div>
		</div>
		<!-- mobile -->
		<div class="flex-box show-mobile">
			<div class="flexbox-item q-pa-xs mt-space-2 mb-space-2">
				<div class="row items-center">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="plumbing"
						/>
					</div>
					<div class="col-xs-10 margin-left-icon">
						<span class="text-white item-title"><strong>{{ $t('homeView.ringSizeTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white">
					{{ $t('homeView.ringSizeText') }}
				</p>
			</div>
			<div class="flexbox-item image1 mt-space-2 mb-space-2">
				<NuxtImg
					class="image"
					src="entenberingung-m.jpeg"
				/>
			</div>
			<div class="flexbox-item q-pa-xs mt-space-2 mb-space-2">
				<div class="row items-center">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="close"
						/>
					</div>
					<div class="col-xs-10 margin-left-icon">
						<span class="text-white item-title"><strong>{{ $t('homeView.ringDestructionTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white">
					{{ $t('homeView.ringDestructionText') }}
				</p>
			</div>
			<div class="flexbox-item image2 mt-space-2 mb-space-2">
				<NuxtImg
					class="image"
					src="vogelringzange.jpeg"
				/>
			</div>
			<div class="flexbox-item q-pa-xs">
				<div class="row items-center">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="thumb_up"
							class="margin-right-icon"
						/>
					</div>
					<div class="col-xs-10 margin-left-icon">
						<span class="text-white item-title"><strong>{{ $t('homeView.easyHandlingTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white">
					{{ $t('homeView.easyHandlingText') }}
				</p>
			</div>
			<div class="flexbox-item image3 mt-space-2 mb-space-2">
				<NuxtImg
					class="image"
					src="greifvogelberingung-m.jpeg"
				/>
			</div>
			<div class="flexbox-item image4 mt-space-2 mb-space-2" />
			<div class="flexbox-item q-pa-xs mt-space-2 mb-space-2">
				<div class="row items-center">
					<div class="col-xs-1">
						<q-icon
							size="28px"
							color="white"
							name="handyman"
						/>
					</div>
					<div class="col-xs-10 margin-left-icon">
						<span class="text-white item-title"><strong>{{ $t('homeView.qualityTitle') }}</strong></span>
					</div>
				</div>
				<q-separator
					color="white q-mt-md q-mb-md seperator-ml"
					size="3px"
				/>
				<p class="text-white">
					{{ $t('homeView.qualityText') }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
    @import '../assets/scss/styles.scss';
    .flex-box{
        display:flex;
        background-color: $primary;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: stretch;

        .flexbox-item{
            width: 100%;

            @include bp(l){
                width: 50%;
                height: 20%;
              margin-top: $pad*3.5;
            }
            .item-title{
                font-size: 22px;
                color: white;
            }

        }
    }
    .seperator-ml{
        margin-left: 0px;
    }
    .q-separator {
    width: 100px;
}

.image{
    width: 100%;
}
.margin-left-icon{
    margin-left: 5px;
    @include bp(l){
        margin-left: 10px;
    }
}
</style>
