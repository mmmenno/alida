<template>
  <div class="popup"
    :style="`left: ${location.x}px; top: ${location.y}px; width: ${width}px`">
    <h3>{{ dataset.name }}</h3>
    <div>
    {{ dataset.description }}
    </div>
    <div>
      <span>Tags: </span>
      <ul class="tags">
        <li v-for="tag in dataset.tags" :key="tag">
          <span class="tag">{{ tag }}</span>
        </li>
      </ul>
    </div>
    <div>
      ⟶ <a :href="dataset.url">Visit dataset</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Popup',
  props: {
    dataset: Object,
    location: Object,
    width: Number
  },
  mounted () {
  }
}
</script>

<style scoped>
.popup {
  position: absolute;
	background: white;
	border: 1px solid black;
  border-radius: 3px;
  max-width: 100%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  padding: 1em;
  box-sizing: border-box;
}

.popup:after,
.popup:before {
	bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: ' ';
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.popup:after {
	border-bottom-color: white;
	border-width: 5px;
	margin-left: -5px;
}

.popup:before {
	border-bottom-color: black;
	border-width: 6px;
	margin-left: -6px;
}

.popup h3 {
  margin-top: 0;
}

.popup div:not(:last-child) {
  margin-bottom: 1em;
}
</style>
