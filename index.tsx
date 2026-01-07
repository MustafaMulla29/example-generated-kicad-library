import { NormalKey } from "./lib/components/NormalKey"
import { SpacebarKey } from "./lib/components/SpacebarKey"
import { KEY_SPACING } from "./lib/src/global"

// Simplified example with just 4 keys for faster rendering
export default () => (
  <board width="100mm" height="60mm">
    {/* 3 normal keys */}
    <NormalKey name="K1" pcbX={-KEY_SPACING} pcbY={0} schX={0} schY={0} />
    <NormalKey name="K2" pcbX={0} pcbY={0} schX={3} schY={0} />
    <NormalKey name="K3" pcbX={KEY_SPACING} pcbY={0} schX={6} schY={0} />

    {/* 1 spacebar */}
    <SpacebarKey name="SPACE" pcbX={0} pcbY={KEY_SPACING} schX={3} schY={3} />
  </board>
)
