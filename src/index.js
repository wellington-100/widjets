
import ReactDOM from 'react-dom/client';
import { Carousel } from './carousel/Carousel';


const root = ReactDOM.createRoot(document.getElementById('root'));

const slidesData = [
    { 
        title: 'We have a warm winter!',
        image: '/images/slide-1.jpg'
    },
    {
        title: 'And a very hot summer!',
        image: '/images/slide-2.jpg'
    }

]
root.render(< Carousel data={slidesData} initialSlideIdx={0}/>); 

