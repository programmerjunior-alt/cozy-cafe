import { ref, onMounted, onUnmounted } from 'vue'

export function useTyping(text: string, speed: number = 100) {
  const typedText = ref('')
  let index = 0
  let timer: any = null

  onMounted(() => {
    timer = setInterval(() => {
      if (index < text.length) {
        typedText.value += text[index]
        index++
      } else {
        clearInterval(timer)
      }
    }, speed)
  })

  onUnmounted(() => clearInterval(timer))

  return { typedText }
}
