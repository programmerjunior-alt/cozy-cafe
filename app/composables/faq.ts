export const useFaqs = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.NUXT_PUBLIC_API_URL

  const faqs = ref<any[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getFaq = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await $fetch<{ data: any[] }>(`${baseUrl}/v1/faq`)
      faqs.value = res.data
    } catch (err: any) {
      error.value = err.message || "Failed to fetch faqs"
    } finally {
      loading.value = false
    }
  }

  return { faqs, loading, error, getFaq }
}
