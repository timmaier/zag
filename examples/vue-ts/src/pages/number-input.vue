<script setup lang="ts">
import * as numberInput from "@zag-js/number-input"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { numberInputControls } from "@zag-js/shared"
import { StateVisualizer } from "../components/state-visualizer"
import { useControls } from "../hooks/use-controls"
import { Toolbar } from "../components/toolbar"

const controls = useControls(numberInputControls)
const [state, send] = useMachine(numberInput.machine({ id: "1", value: "5" }), {
    context: controls.context,
})
const api = numberInput.connect(state.value, send, normalizeProps)
</script>

<template>
  <main>
    <div ref="ref" v-bind="api.rootProps">
      <div data-testid="scrubber" v-bind="api.scrubberProps" />
      <label v-bind="api.labelProps">Enter number</label>
      <div>
        <button v-bind="api.decrementTriggerProps">DEC</button>
        <input v-bind="api.inputProps" />
        <button v-bind="api.incrementTriggerProps">INC</button>
      </div>
    </div>
  </main>
  <Toolbar :controls="controls.ui" :visualizer="StateVisualizer({state})"/>
</template>
