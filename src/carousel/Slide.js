import './Slide.css';


const Slide = ({data: {title, image}}) => {
    return(
        <div className='slide'>
            <h2>{title}</h2>
            <img src={image}/>
        </div>
    )
}

export {Slide}