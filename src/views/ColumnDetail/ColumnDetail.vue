<template>
  <div class="max-w-screen-xl mx-auto">
    <column-info class="mt-6 mb-8" :name="column?.title" :description="column?.description" />

    <div class="mt-2">
      <column-item :posts="list"/>
    </div>

    <!-- <button 
      @click="loadMorePage"
      v-if="!isLastPage"
      class="block mx-auto mt-6 rounded border border-blue-500 text-blue-500 pl-20 pr-20 pt-1.5 pb-1.5  hover:bg-blue-500 hover:text-white">
      加载更多
    </button> -->
  </div>

  <pre>{{route}}</pre>

</template>

<script lang="ts" setup>
  import ColumnInfo from './cpns/ColumnInfo.vue';
  import ColumnItem from './cpns/ColumnPost.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { ColumnProps, GlobalDataProps } from '@/store/types';
  import { onMounted } from 'vue';
  import { computed } from '@vue/reactivity';
  import useLoadMore from '@/hooks/userLoadMore';

  const route = useRoute()

  const store = useStore<GlobalDataProps>()
  const currentId = route.params.id

  onMounted(() => {
    store.dispatch('fetchColumn', currentId)
    store.dispatch('fetchPosts', {currendId: currentId})
  })

  const column = computed(() => {
    //TODO why
    const selectColumn = store.getters.getColumnById(currentId) as ColumnProps | undefined
    if (selectColumn) {
      
    }
    return selectColumn
  })

  // const posts = computed(() => store.getters.getPostsByCid(currentId))


  const list = computed(() => store.getters.getPosts)
  const total = computed(() => store.state.posts.total)
  
  console.log('Detail   ', list)

  // console.log('detail', currentId)
  // const { loadMorePage, isLastPage } = useLoadMore('fetchPosts', total, { currentId: currentId, currentPage: 2, pageSize: 3})

</script>