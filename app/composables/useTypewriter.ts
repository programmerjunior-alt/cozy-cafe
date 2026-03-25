import { ref, watch, onUnmounted } from 'vue'

export function useTypewriter(text: string | null, speed: number = 100) {
  const typedText = ref('')
  let timer: any = null

  const startTyping = (newText: string) => {
    typedText.value = ''
    let i = 0
    clearInterval(timer)
    timer = setInterval(() => {
      if (i < newText.length) {
        typedText.value += newText[i]
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
  }

  watch(() => text, (newText) => {
    if (newText) startTyping(newText)
  }, { immediate: true })

  onUnmounted(() => clearInterval(timer))

  return { typedText }
}
