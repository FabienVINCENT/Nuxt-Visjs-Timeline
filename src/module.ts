import {defineNuxtModule, addComponent, createResolver} from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push('vis-timeline/dist/vis-timeline-graph2d.css')

    // From the runtime directory
    addComponent({
      name: 'VisTimeline', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/VisTimeline.vue'),
      mode: 'client'
    })
  }
})
