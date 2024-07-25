import { Slide } from "./Slide.js"
import './Track.css'

const Track = ({data, currentSlideIdx}) => {
    return (
        <div className="track">
            <Slide data={data[currentSlideIdx]}/>
        </div>
    )
}

export {Track}