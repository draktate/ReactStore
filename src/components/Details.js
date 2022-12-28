import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './StyledComponents';
import { detailProduct } from '../data';

const test1="Testing";

export default class Details extends Component 
{

  componentDidMount() {
    console.log('I was triggered during componentDidMount inside Details');
  }

  componentDidUpdate(){
    console.log('I was triggered during componentDidUpdate inside Details');

  }

  render(){
    return (
      <ProductConsumer>
        {(value)=>{ 
            const {id, company, img, info, price, title, inCart } =value.detailProduct;
            
            return ( 
            <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1> { title} </h1>
                  </div>
                </div>
                {/* end Title */}
                {/* Product Info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product"  />
                  </div>
                  {/* Product Text */ }
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2> model : {title} </h2>
                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Manufacturer: <span className="text-uppercase text-blue">  {company} </span>
                    </h5>
                    <h5 className="text-blue" >
                      <strong>
                        Price: <span> Rs.</span> {price}
                      </strong>
                    </h5>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      About Product:
                    </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    {/* buttons */ }  
                    <div>
                      <Link to="/">
                        <ButtonContainer>
                          Back to Products
                        </ButtonContainer>
                        <ButtonContainer cart disabled={inCart} onClick={()=>{ value.addToCart(id);
                        value.openModal(id);
                         }}>
                          {inCart?"In Cart": "Add to Cart"}
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div> 
                  {/* Product Text ends */}
                </div>
              </div>
            )  
          }
        }
      </ProductConsumer>
    );
  }

}