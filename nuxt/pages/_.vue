<template>
  <DruxtRouter path="/node/1" class="my-16 mx-8">
    <template #default="{ route }">
      <DruxtEntity v-bind="route.props" :settings="{ query: { include: ['field_spheres', 'field_spheres.field_media_image'] }}">
        <template #default="{ entity }">
          <h1 class="text-2xl mb-4" v-text="entity.attributes.title" />

          <div class="grid gap-8 md:grid-cols-2">
            <div
              class="card bg-base-100 shadow-xl"
              v-for="sphere of entity.included.filter((o) => o.type === 'media--sphere')"
              :key="sphere.id"
            >
              <figure class="h-48">
                <ClientOnly>
                  <a-scene embedded>
                    <a-assets>
                      <component
                        :is="!$nuxt.context.isDev ? 'nuxt-img' : 'img'"
                        :id="sphere.relationships.field_media_image.data.id"
                        :src="getImageSrc(entity.included, sphere.relationships.field_media_image.data.id)"
                      />
                    </a-assets>
                    <a-sky :src="`#${sphere.relationships.field_media_image.data.id}`" />
                  </a-scene>
                </ClientOnly>
              </figure>
            </div>
          </div>
        </template>
      </DruxtEntity>
    </template>
  </DruxtRouter>
</template>

<script>
if (process.client) require('aframe')

export default {
  methods: {
    getImageSrc(entities, id) {
      const { url } = entities.find((o) => o.id === id).attributes.uri
      if (this.$nuxt.context.isDev) {
        return url
      }
      return this.$druxt.options.baseUrl + url
    }
  }
}
</script>
