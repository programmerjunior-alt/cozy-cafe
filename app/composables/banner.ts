export const useBanners = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.NUXT_PUBLIC_API_URL

  const banners = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getBanners = async (type?: string) => {
    loading.value = true
    error.value = null
    try {
      const res = await $fetch<{ data: any[] }>(`${baseUrl}/v1/banner/${type}`)
      banners.value = res.data
    } catch (err: any) {
      error.value = err.message || "Failed to fetch banners"
    } finally {
      loading.value = false
    }
  }

  return { banners, loading, error, getBanners }
}
