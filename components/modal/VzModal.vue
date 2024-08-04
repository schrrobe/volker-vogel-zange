<template>
	<div
		class="modal"
		:class="{
			'modal--full': full,
		}"
	>
		<div
			v-if="closable"
			class="m-actions"
		>
			<button
				type="button"
				class="m-close"
				@click="$emit('close')"
			>
				<q-icon name="cancel" />
			</button>
		</div>

		<slot name="beforeContent" />

		<div class="m-content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'VzModal',
	props: {

		closable: {
			type: Boolean,
			default: true,
		},

		loading: {
			type: Boolean,
		},

		small: {
			type: Boolean,
		},

		medium: {
			type: Boolean,
		},

		large: {
			type: Boolean,
		},

		full: {
			type: Boolean,
		},

		fixed: {
			type: Boolean,
		},

		overlay: {
			type: Boolean,
		},

	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";

.modal {
  position: relative;
  display: block;
  width: 100%;
  max-width: 700px;
  margin: auto auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0;
  transition: all .3s ease-in-out;
  padding: 10px;

  @include bp(m) {
    margin: 100px auto auto;
    padding: 30px
  }

  .m-actions {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    @include bp(m) {
      padding: 10px;
    }
  }

  .m-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: black;
    font-size: 30px;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;

    .icon::after{
      content: 'x';
    }
  }

  .m-content {
    padding: 0;

    @include bp(m) {
      padding: 10px;
    }

    .modal-header {
      min-height: 40px;
      margin-bottom: 25px;

      .headline {
        font-weight: 900;
      }
    }
  }

  &.modal--full {
    position: absolute;
    width: 100%;
    min-height: 100%;
    border-radius: 0;

    @include bp(m, max) {
      max-width: none;
    }

    @include bp(m) {
      position: relative;
      min-height: auto;
      border-radius: 20px;
    }
  }

  &.modal--fixed {
    position: fixed;
    top: 0;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);

    @include bp(m) {
      height: auto;
    }

    .m-content {
      height: calc(100% - 100px);
    }
  }

  &.modal--overlay {
    z-index: 110;
    margin-top: 0;
  }
}
</style>
