import React, { useState } from 'react'
import '../App.css'
function Addrecommendation(props) {
    const [usersid, setusersid] = useState({ files: "" })
    const [results, setresults] = useState([])
    const [results1, setresults1] = useState([])
    // const array = [1, 'hello', 5, 8];
    var array = [
        "mamaearth",
        "lorem",
        "wow",
        "niacinamide",
        "salicylic",
        "alpha arbutin",
        "rosehip",
        "Skin Correct Face Serum",
        "Facewash",
        "Rice Face Wash",
        " Ubtan Natural Face Wash",
        "Mamaearth Oil Free Face Wash ",
        "Refreshing Facial Wash",
        " Vitamin C Facial Wash",
        "Purifying Gel Facial Wash",
        "Moisturizers",
        "CoCo Nourishing Cold Winter Cream",
        "Vitamin C Oil-Free Moisturizer",
        "POND'S Cream Moisturizer",
        "Ponds Super Light Gel",
        "lipbalm",
        "Baby Lips Color -Berry Crush",
        "Cherry Tinted 100% Natural Lip Balm",
        "Rose Lip Oil",
        "primer",
        "Lakme Absolute Blur primer",
        "Lakme Absolute under cover gel primer",
        "Insight Primer",
        "Blue Heaven Primer",
        "Swiss beauty",
        "Colorbar Primer",
        "Wet and wild Primer",
        "Product Category- Foundation",
        "Maybelline Fitme"
    ];
    const handleclick = (e) => {
        e.preventDefault();
        setresults(getRandomItem(array))
    }
    const handleclick1 = (e) => {
        e.preventDefault();
        setresults1(getRandomItem1(array))
    }
    const onchange = (e) => {
        setusersid({ ...usersid, [e.target.name]: e.target.files[0] })
    }
    function getRandomItem(arr) {
        // get random index value
        const items = []
        for (var i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            // get random item
            const item = arr[randomIndex];
            items.push(item)
        }
        return items;
    }
    function getRandomItem1(arr) {
        // get random index value
        const items = []
        for (var i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            // get random item
            const item = arr[randomIndex];
            items.push(item)
        }
        return items;
    }
    return (
        <>
            <div className='border m-5'>

                <div className='m-2 p-5'>
                    <h2 className='mb-4 text-center'>Recommendation Form</h2>
                    <div className='container'>
                        <form>
                            <div className="form-floating mb-3">
                                <div className="input-group mb-3">
                                    <input type="file" className="form-control" name='files' onChange={onchange} id="fil" required />
                                    <label className="input-group-text" htmlFor="fil">Upload</label>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary ms-2" onClick={handleclick} data-bs-dismiss="modal">Submit</button>
                    </div>
                </div>
                <div className='displayresult border m-2'> <p className='ms-4'>According to us ....</p><br /><br></br>
                    <ul className='ms-5' style={{ textDecoration: "none", listStyleType: "none" }}>{results.map((remaind) => {
                        return (
                            <li><a>{remaind}</a></li>
                        )
                    })}</ul>
                </div>
            </div>

            <div className='border-top border-bottom m-5'>
                <div className='m-2'>
                    <h2 className='mb-4 text-center'>HAIRCARE / Skincare</h2>
                    <div className='container'>
                        <form>
                            HAIRCARE
                            <div className='m-3'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                            </div>
                            Skincare
                            <div className='m-3'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        What is Sell on Amazon or SOA?
                                    </label>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary ms-2" onClick={handleclick1} data-bs-dismiss="modal">Submit</button>
                    </div>
                </div>
                <div className='displayresult border m-2'> <p className='ms-4'>According to us ....</p><br /><br></br>
                    <ul className='ms-5' style={{ textDecoration: "none", listStyleType: "none" }}>{results1.map((remaind) => {
                        return (
                            <li><a>{remaind}</a></li>
                        )
                    })}</ul>
                </div>
            </div>

        </>

    )
}

export default Addrecommendation





