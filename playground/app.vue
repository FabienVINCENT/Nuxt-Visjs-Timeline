<template>
  <div>
    Nuxt module playground!
    <VisTimeline
      :groups="groups"
      :items="items"
      :options="{height: '300dpx',
        clickToUse: true,}"
      @click="click"
    />


    <button @click="remove">remove</button>
    <button @click="add">add</button>

  </div>
</template>

<script setup>

const groups = ref([
  {content: "Formula E", id: "Formula E",  className: 'openwheel'},
  {content: "WRC", id: "WRC", className: 'rally'},
  {content: "MotoGP", id: "MotoGP", className: 'motorcycle'},
])

const items = ref([
  {
    start: new Date(2024, 0, 29),
    end: new Date(2024, 0, 30),
    group: "Formula E",
    className: "openwheel",
    content: "Argentina",
    id: "531@motocal.net"
  },
  {
    start: new Date(2024, 1, 22),
    end: new Date(2024, 1, 26),
    group: "WRC",
    className: "rally",
    content: "Rallye Monte-Carlo",
    id: "591@motocal.net"
  },
  {
    start: new Date(2024, 4, 4),
    end: new Date(2024, 4, 8),
    group: "MotoGP",
    className: "motorcycle",
    content: "Sepang MotoGP Test 1",
    id: "578@motocal.net"
  },
])

const remove = () => {
  items.value.pop()
}
const add = () => {
  items.value.push(
    {
      start: new Date(2024, 1, 22),
      end: new Date(2024, 4, 4),
      group: "Formula E",
      className: "openwheel",
      content: "Argentina",
      id: "qsd"
    }
  )
}

const click = (props) => {
  console.log('click')
}

</script>

