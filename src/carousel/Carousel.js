import { Track } from "./Track"
import { Navigation } from "./Navigation"
import { useState } from "react"

const Carousel = ({data, initialSlideIdx}) => {
    let [currentSlideIdx, setCurrentSlideIdx] = useState(initialSlideIdx)
    return (
        <div className="carousel">
            <Track data={data} currentSlideIdx={currentSlideIdx}/>
            <Navigation 
                action={setCurrentSlideIdx} 
                idx={currentSlideIdx}
                length={data.length}
            />
        </div>
    )
}

export {Carousel}