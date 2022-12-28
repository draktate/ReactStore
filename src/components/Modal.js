import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer,ModalContainer } from './StyledComponents';
import { Link} from 'react-router-dom';

export default class Modal extends Component {
  
render()
{
    return( 
    <ProductConsumer>
        {(value=>{
            const {modalOpen, closeModal} = value;
            const {img, title, price } = value.modalProduct;
            if(!modalOpen){
                return null;
            }
            else{
                return(
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize p-5 ">
                                    <h5> Item added to the Cart</h5>
                                    <img src={img} className="img-fluid" alt="product" />
                                    <h5>
                                        {title}
                                    </h5>
                                    <h5 className="text-muted">
                                        Price: Rs.{price}

                                    </h5>
                                    <Link to="/">
                                        <ButtonContainer onClick={()=> closeModal()}>
                                            Continue Shopping...
                                        </ButtonContainer>

                                    </Link>

                                    <Link to="/cart">
                                        <ButtonContainer cart onClick={()=> closeModal()}>
                                            Go to the Cart
                                        </ButtonContainer>

                                    </Link>

                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    );
            }
        })}
    </ProductConsumer>
    );
  }
}
