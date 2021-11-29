
import { Carousel } from 'react-responsive-carousel';
import "./Cabinets.css"



const Cabinets = ({handleSelect}) => {

    return (
        <div class = "carousel-wrapper">
             <Carousel showThumbs={true} infiniteLoop={true} onChange={handleSelect}>
                <div>
                    <img src="https://kristinadamil.com.mk/wp-content/uploads/2019/05/sku-65989834_1_.jpg" alt="sranje" />
                    <p className="legend" >Kitchen top cabinet, with two doors</p>
                </div>
                <div>
                    <img src="https://www.matimob.ro/wp-content/uploads/2018/05/KUHINJA-IN-D-80-SNE%C5%BDNI-HRAST.jpg" alt="gomno" />
                    <p className="legend">Closet with sliding doors</p>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/plakar_200_210_so_broevi.png`} alt="sliding door closet" />
                    <p className="legend">Closet with sliding doors</p>
                </div>
                <div>
                    <img src="https://kristinadamil.com.mk/wp-content/uploads/2019/07/sku-68486651_4_.jpg" alt="gomno2" />
                    <p className="legend">Closet with sliding doors</p>
                </div>
                <div>
                    <img src="https://kristinadamil.com.mk/wp-content/uploads/2019/07/sku-68486651_4_.jpg" alt="gomno3" />
                    <p className="legend">Closet with sliding doors</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Cabinets
