import { FC } from "react"

type TitleSlideProps = {}

const TitleSlide: FC<TitleSlideProps> = () => {
  return (
    <div className="top-tab-style">
      <h1 className="self-center font-mono text-xl md:text-3xl lg:text-5xl tracking-[-0.08em] text-text-yellow ">
        The Synth
      </h1>
      <p className="self-start font-mono text-sm tracking-tighter mb-4 text-text-yellow ">
        by Tej Chhabra
      </p>
    </div>
  )
}

export default TitleSlide
