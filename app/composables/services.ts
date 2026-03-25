export const useServices = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.NUXT_PUBLIC_API_URL

  const services = ref<any[]>([])
  const loadingService = ref(false)
  const errorService = ref<string | null>(null)

  const getServices = async (type?: string) => {
    loadingService.value = true
    errorService.value = null
    try {
      const res = await $fetch<{ data: any[] }>(`${baseUrl}/v1/services/${type}`)
      services.value = res.data
    } catch (err: any) {
      errorService.value = err.message || "Failed to fetch services"
    } finally {
      loadingService.value = false
    }
  }

  return { services, loadingService, errorService, getServices }
}
