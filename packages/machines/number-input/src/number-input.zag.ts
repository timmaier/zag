import * as numberInput from "./"
import { normalizeProps, useMachine } from "./framework/vue"
import { computed } from "vue"

export function zagNumberInput(machineProps: any, config?: any) {
  const [state, send] = useMachine(numberInput.machine(machineProps), config)
  const api = computed(() => numberInput.connect(state.value, send, normalizeProps))

  return api
}
