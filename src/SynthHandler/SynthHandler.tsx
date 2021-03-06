import { FC } from "react"
import { useState } from "react"
import KeyboardHandler from "../KeyboardHandler"
import TopLevelStuff from "../TopLevelStuff"
import * as Tone from "tone"

const SynthHandler: FC = () => {
  const [synth, setSynth] = useState<Tone.PolySynth>(
    new Tone.PolySynth(Tone.Synth).toDestination(),
  )

  return (
    <div className="flex flex-col justify-center space-y-2 py-2">
      <TopLevelStuff synth={synth} setSynth={setSynth} />
      <KeyboardHandler synth={synth} />{" "}
    </div>
  )
}

export default SynthHandler
