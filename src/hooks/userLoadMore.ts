import { ref, computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'


interface LoadParams {
  currentId: string,
  currentPage: number,
  pageSize: number
}

const useLoadMore = (actionName: string, total: ComputedRef,
    params: LoadParams = { currentId: '', currentPage: 2, pageSize: 3}) => {
    const store = useStore()
      const currentPage = ref(params.currentPage)
      const pageSize = ref(params.pageSize)
      const currentId = ref(params.currentId)


      console.log('useLoadMore currendId', currentId)


      const requestParams = computed(() => ({
          currentPage: currentPage.value,
          pageSize: pageSize.value,
          currentId: currentId.value
      }))
    const loadMorePage = () => {
      store.dispatch(actionName, requestParams.value).then(() => {
        currentPage.value ++
      })
    }

    const isLastPage = computed(() => {
      return Math.ceil(total.value / params.pageSize) < currentPage.value
    })
    
    return {
      loadMorePage,
      isLastPage,
      currentPage
    }
}

export default useLoadMore