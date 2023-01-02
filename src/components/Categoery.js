import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
const Categoery = () => {
    var history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
          history("/login")
        }
      }, [])
  return (
    <section class="categories ">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="categories__item categories__large__item set-bg"
                    style={{backgroundImage:'url("../img/categories/category-1.jpg")'}}>
                    <div class="categories__text">
                        <h1>Women’s </h1>
                        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                        edolore magna aliquapendisse ultrices gravida.</p>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="categories__item set-bg" style={{backgroundImage:'url("../img/product/related/rp-2.jpg")'}}>
                            <div class="categories__text">
                                <h4>MAKEUP</h4>
                                <p>358 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="categories__item set-bg" style={{backgroundImage:'url("../img/categories/category-3.jpg")'}}>
                            <div class="categories__text">
                                <h4>HAIRCARE</h4>
                                <p>273 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="categories__item set-bg" style={{backgroundImage:'url("../img/categories/category-4.jpg")'}}>
                            <div class="categories__text">
                                <h4>Cosmetics</h4>
                                <p>159 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                        <div class="categories__item set-bg" style={{backgroundImage:'url("../img/categories/category-5.jpg")'}}>
                            <div class="categories__text">
                                <h4>SkinCARE</h4>
                                <p>792 items</p>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Categoery