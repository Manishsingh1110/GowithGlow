import React, { useState } from 'react'
const Search = () => {
    const [usersid, setusersid] = useState({ search: "" })
    const onchange = (e) => {
        setusersid({ ...usersid, [e.target.name]: e.target.value })
    }
    const [users, setusers] = useState([])
    var objects = [
        {
            "product": "mamaearth",
            "price": "307"
        },
        {
            "product": "lorem",
            "price": "297"
        },
        {
            "product": "wow",
            "price": "678"
        },

        {
            "product": "niacinamide",
            "price": "678"
        },
        {
            "product": "salicylic",
            "price": "678"
        },
        {
            "product": "alpha arbutin",
            "price": "678"
        },
        {
            "product": "rosehip",
            "price": "678"
        },
        {
            "product": "Skin Correct Face Serum",
            "price": "678"
        },

        {
            "product": "Facewash",
            "price": "678"
        },
        {
            "product": "Rice Face Wash",
            "price": "678"
        },
        {
            "product": " Ubtan Natural Face Wash",
            "price": "678"
        },
        {
            "product": "Mamaearth Oil Free Face Wash ",
            "price": "678"
        },
        {
            "product": "Refreshing Facial Wash",
            "price": "678"
        },
        {
            "product": " Vitamin C Facial Wash",
            "price": "678"
        },
        {
            "product": "Purifying Gel Facial Wash",
            "price": "678"
        },

        {
            "product": "Moisturizers",
            "price": "678"
        },
        {
            "product": "CoCo Nourishing Cold Winter Cream",
            "price": "678"
        },
        {
            "product": "Vitamin C Oil-Free Moisturizer",
            "price": "678"
        },
        {
            "product": "POND'S Cream Moisturizer",
            "price": "678"
        },
        {
            "product": "Ponds Super Light Gel",
            "price": "678"
        },

        {
            "product": "lipbalm",
            "price": "678"
        },
        {
            "product": "Baby Lips Color -Berry Crush",
            "price": "678"
        },
        {
            "product": "Cherry Tinted 100% Natural Lip Balm",
            "price": "678"
        },
        {
            "product": "Rose Lip Oil",
            "price": "678"
        },

    ];
    function trimString(s) {
        var l = 0, r = s.length - 1;
        while (l < s.length && s[l] == ' ') l++;
        while (r > l && s[r] == ' ') r -= 1;
        return s.substring(l, r + 1);
    }

    function compareObjects(o1, o2) {
        var k = '';
        for (k in o1) if (o1[k] != o2[k]) return false;
        for (k in o2) if (o1[k] != o2[k]) return false;
        return true;
    }

    function itemExists(haystack, needle) {
        for (var i = 0; i < haystack.length; i++) if (compareObjects(haystack[i], needle)) return true;
        return false;
    }
    function searchFor(toSearch) {
        var results = [];
        toSearch = trimString(toSearch); // trim it
        for (var i = 0; i < objects.length; i++) {
            for (var key in objects[i]) {
                if (objects[i][key].indexOf(toSearch) !== -1) {
                    if (!itemExists(results, objects[i])) results.push(objects[i]);
                }
            }
        }
        return results;
    }
    const handleclick = (e) => {
        e.preventDefault();
        setusers(searchFor(usersid.search));
    }
    console.log(users)
    return (
        <>
        {/* {users[1].product} */}
            <div className='m-5'>
                <div className='container'>
                    <h5 className='mb-4'>Enter the thing you want to find...........</h5>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" name='search' onChange={onchange} placeholder="Search" aria-label="Search" />
                        <button type="submit" className="btn btn-primary" onClick={handleclick} data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
            </div>

            <section class="product spad">
                <div class="container">
                <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Searched products</h4>
                </div>
            </div>
        </div>
                    <div class="row property__gallery">
            {(users.length === 0 ?
                <>
                    <div className='p-5 mt-5  text-secondary'>
                        <figcaption className="fs-2 p-5 ms-5 ">There is no Nothing available</figcaption>
                    </div>
                </> : (
                    
                    users.map((remaind) => {
                        return (
                            <>
                                <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/search.webp")' }}>
                                    <div class="label new">New</div>
                                    <ul class="product__hover">
                                        <li><a href="img/product/product-1.jpg" class="image-popup"><i class="fa-solid fa-square-plus"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                                        <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">{remaind.product}</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        {/* <i class="fa fa-star"></i> */}
                                    </div>
                                    <div class="product__price">${remaind.price}</div>
                                </div>
                            </div>
                        </div>
                            </>
                        );
                    }
                    )))
            }
            </div>
            </div>
            </section>
            <section class="product spad">
                <div class="container">
                <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="section-title">
                    <h4>Recommended products based on your search</h4>
                </div>
            </div>
        </div>
                    <div class="row property__gallery">
                        <div class="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/mamaearth1.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/mamaearth2.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/mamaearth3.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/mamaearth4.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/loreal1.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/loreal2.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/loreal3.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/loreal4.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/wow1.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/wow2.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/wow3.jpg")' }}>
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
                                <div class="product__item__pic set-bg" style={{ backgroundImage: 'url("../img/product/wow1.jpg")' }}>
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
        </>
    )
}

export default Search