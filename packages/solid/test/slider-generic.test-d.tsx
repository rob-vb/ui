// Compiled by `pnpm typecheck`, never run.
import { Slider } from "../src/slider"

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false
const exactly = <T, Expected>(_value: T, _same: Equal<T, Expected>) => {}

// The callbacks' value is the value's type itself, with nothing beside it.
const one = (
  <Slider<number>
    onValueChange={(value) => exactly<typeof value, number>(value, true)}
  />
)
const range = (
  <Slider
    defaultValue={[20, 80]}
    onValueCommit={(value) => exactly<typeof value, number[]>(value, true)}
  />
)
// @ts-expect-error Values are numbers.
const wrong = <Slider value="50" />

export { one, range, wrong }
