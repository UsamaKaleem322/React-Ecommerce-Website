import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardProduct from './Card';
import Carouselbar from './Carouselbar';
import './style.css'
import Loading from '../Loading/Loading';

function Products() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const products = useSelector(state => state.products.allProducts)
    const loading = useSelector(state => state.products.loading)
    const Categories = [...new Set(products.map(item => item.category))];
    return (
        <>
            <Carouselbar title={'Featured Products'} />
            <div className="container my-5">
                <div className="row products1">
                    {!loading ? products.map((item) => {
                        return (
                            <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2 " key={item.id}>
                                <CardProduct id={item.id} name={item.name} image={item.image} desc={item.desc} price={item.price} category={item.category} />
                            </div>
                        )
                    }).slice(4, 8) : <Loading />}
                </div>
            </div>

            <div className="offer text-center">
                <h2>Attention! Deal Zone</h2>
                <p>Hurry up! Discounts up to 70%</p>
            </div>

            <div className="products">
                <div className="container my-5  py-5">
                    <div className="row products1">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            arrows={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            transitionDuration={3000}
                        >
                            {products.map((item) => {
                                return (
                                    <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2" key={item.id}>
                                        <CardProduct id={item.id} name={item.name} image={item.image} desc={item.desc} price={item.price} category={item.category} />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-3 featured2 text-center p-0">
                        <div className="content p-5 d-flex flex-column gap-2" >
                            <h3 className='my-4' >Categories</h3>
                            {Categories.map(item => <a className='category'>{item}</a>)}
                            <Link to={'/shop'} className='btn btn-sm my-4 categorybutton'>See All</Link>
                        </div>
                    </div>
                    <div className="col-xl-9">

                        {!loading?<Tabs
                            defaultActiveKey={Categories[0]}
                            id="uncontrolled-tab-example"
                            className="mb-3 tabs mt-1"
                            color="black"
                        >
                            {Categories.map((category, index) => (
                                <Tab
                                    eventKey={category}
                                    title={category}
                                    style={{ color: 'black' }}
                                    key={index}
                                >
                                    <div className="row cards">
                                        {!loading ? products
                                            .filter((product) => product.category === category)
                                                .map((item) => (
                                                    <div
                                                        className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2"
                                                        key={item.id}
                                                    >
                                                        <CardProduct
                                                            id={item.id}
                                                            name={item.name}
                                                            image={item.image}
                                                            desc={item.desc}
                                                            price={item.price}
                                                            category={item.category}
                                                        />
                                                    </div>
                                                ))
                                                .slice(0, 4)
                                            : <Loading />}
                                    </div>
                                </Tab>
                            ))}
                        </Tabs>:<Loading/>}

                    </div>
                </div>
            </div>
        </>
    );
}
export default Products;