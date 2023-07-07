import React, { useEffect, useState , useContext} from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import './ProductDetails.css';
import { Context } from '../Context/Context';

const ProductDetails = () => {
    const { handleOnAddCart, user } = useContext(Context);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const response = await commerce.products.retrieve(`${id}`); // Assuming fetchProducts is an asynchronous function that fetches products
       
        setProduct(response);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    getProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div class="container">
    <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src={product.image.url} /></div>
                      <div class="tab-pane" id="pic-2"><img src={product.image.url} /></div>
                      <div class="tab-pane" id="pic-3"><img src={product.image.url} /></div>
                      <div class="tab-pane" id="pic-4"><img src={product.image.url} /></div>
                      <div class="tab-pane" id="pic-5"><img src={product.image.url}/></div>
                    </div>
                    <ul class="preview-thumbnail nav nav-tabs">
                      <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={product.image.url} /></a></li>
                      <li><a data-target="#pic-2" data-toggle="tab"><img src={product.image.url} /></a></li>
                      <li><a data-target="#pic-3" data-toggle="tab"><img src={product.image.url} /></a></li>
                      <li><a data-target="#pic-4" data-toggle="tab"><img src={product.image.url} /></a></li>
                      <li><a data-target="#pic-5" data-toggle="tab"><img src={product.image.url} /></a></li>
                    </ul>
                    
                </div>
                <div class="details col-md-6">
                    <h3 class="product-title">{product.name}</h3>
                    <div class="rating">
                        <div class="stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                        <span class="review-no">41 reviews</span>
                    </div>
                    <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body6' color='textSecondary' />
                    <h4 class="price">current price: <span>{product.price.formatted_with_symbol}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">sizes:
                        <span class="size" data-toggle="tooltip" title="small">s</span>
                        <span class="size" data-toggle="tooltip" title="medium">m</span>
                        <span class="size" data-toggle="tooltip" title="large">l</span>
                        <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <h5 class="colors">colors:
                        <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span class="color green"></span>
                        <span class="color blue"></span>
                    </h5>
                    <div class="action">
                        <button class="add-to-cart btn btn-default" type="button" onClick={()=>handleOnAddCart( product.id, 1)}
                        style={{color:'white', background:'black'}}>add to cart</button>
                        <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ProductDetails;
