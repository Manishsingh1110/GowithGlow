import React from 'react'
const Products = () => { 
  return (
    <>
    <section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>New product</h4>
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <ul class="filter__controls">
                    <li class="active" data-filter="*">All</li>
                    <li data-filter=".women">Women’s</li>
                    <li data-filter=".men">Men’s</li>
                    <li data-filter=".kid">Kid’s</li>
                    <li data-filter=".accessories">Accessories</li>
                    <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Purifying.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">niacinamide </a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/salicylicserum.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">salicylic</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/wow3.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">alpha arbutin
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/RoseLipOil.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-4.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">rosehip
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix kid">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash1.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-5.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Skin Correct Face Serum 
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item sale">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash2.jpg")'}}>
                        <div class="label sale">Sale</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-6.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Rice Face Wash
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash3.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-7.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#"> Ubtan Natural Face Wash
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div class="product__item sale">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Mamaearth3.jpg")'}}>
                        <div class="label">Sale</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-8.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Mamaearth Oil Free Face Wash 
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0 <span>$ 59.0</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Makeup</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/foundation1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Maybelline Fitme</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/foundation2.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Lakme</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/foundation3.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/foundation4.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">L.A pro girl</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/primer1.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Lakme Absolute Blur primer
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/primer2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Lakme Absolute under cover gel primer
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/primer3.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Insight Primer
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/primer4.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Blue Heaven Primer
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/Beauty1.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss beauty

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/Primer2.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Colorbar Primer

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/Primer3.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Wet and wild Primer

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/foundation4.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Maybelline Fitme</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Product category - Concellar</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/concealer1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Maybelline </a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/concealer2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/concealer3.jpeg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">L.A pro girl
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/concealer4.jpeg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Product category - bronzer</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Sugar Cosmetics </a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Coloressence</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush3.webp")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush4.webp")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Coloressence</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Product Category - lipstick</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/lipstick1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Sugar </a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/lipstick2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Sugar Cosmetics</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/lipstick3.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">NAYKA
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/lipstick4.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Sugar Cosmetics</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Product Category - Blush</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Sugar Cosmetics </a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush3.webp")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Mac
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Newfolder/blush4.webp")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Swiss Beauty</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Haircare</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">mamaearth</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth2.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">mamaearth</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth3.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">mamaearth</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth4.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">mamaearth</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/loreal1.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">loreal
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/loreal2.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">loreal
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/loreal3.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">loreal
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/loreal4.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">loreal
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/wow1.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">wow

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/wow2.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">wow

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/wow3.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">wow

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/wow1.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">wow

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>skin Care</h4>
                </div>
            </div>
        </div>
        <div class="row property__gallery">
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/minimalist1.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li className='cart'><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">minimalist
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Moisturizer.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">minimalist
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth11.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">minimalist
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth12.jpg")'}}>
                        <div class="label new">New</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">minimalist
</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            {/* <i class="fa fa-star"></i> */}
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth13.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">simple

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/mamaearth14.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">simple

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/CoCo1.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">simple

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix men">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash1.jpg")'}}>
                        <ul class="product__hover">
                            <li><a href="img/product/product-2.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">simple

</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 49.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash2.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ponds


</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/facialwash3.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ponds


</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/Cherry1.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ponds


</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div class="product__item">
                    <div class="product__item__pic set-bg" style={{backgroundImage:'url("../img/product/ponds1.jpg")'}}>
                        <div class="label stockout">out of stock</div>
                        <ul class="product__hover">
                            <li><a href="img/product/product-3.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ponds


</a></h6>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>

  )
}

export default Products