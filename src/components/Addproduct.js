import React, { useState } from 'react'
import { useNavigate } from 'react-router'
function Addproduct(props) {
    // var authtoken = localStorage.getItem("token")
    var history = useNavigate();
    const [usersid, setusersid] = useState({ files: "" })
    const [usersfile, setusersfile] = useState({ Cost: "", Description: "", Productname: "" })
    const handleclick = (e) => {
        e.preventDefault();
        var yes = window.confirm("Are you sure ?")
        if (yes) {
            alert("We would be contacting you later")
        }
        handleImageUpload()
    }
    var back = "http://localhost:3001/"
    const handleImageUpload = event => {
        const files = [usersid.files]
        const formData = new FormData()
        formData.append('myFile', files[0])
        fetch(`${back}upload`, {
            method: 'POST',
            headers: {
                "cost": usersfile.Cost,
                "productname": usersfile.Description,
                "description": usersfile.Productname
            },
            body: formData
        })

            .then(response => {
                response.json()
            })
            .then(data => {
                history("/")
            })
            .catch(error => {

                alert(error)
            })
    }
    const onchange = (e) => {
        setusersid({ ...usersid, [e.target.name]: e.target.files[0] })
    }
    const onchange1 = (e) => {
        setusersfile({ ...usersid, [e.target.name]: e.target.value })
    }
    return (
        <>
        <div className='border m-5'>
            <div className='m-2 p-5'>
                <h2 className='mb-4 text-center'>Replacement Form</h2>
                <div className='container'>
                    <form>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" required name='Productname' onChange={onchange1} placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "60px" }} aria-describedby="titlehelp"></textarea>
                            <label htmlFor="floatingTextarea">Enter The Productname</label>
                            <div id="titlehelp" className="form-text">please Enter some title .</div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" name='Description' onChange={onchange1} placeholder="Leave a comment here" style={{ height: "100px" }} id="floatingTextarea2" />
                            <label htmlFor="floatingTextarea2" >Description</label>
                            <div id="questionhelp" className="form-text">please Enter some details.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" name='Cost' onChange={onchange1} placeholder="Leave a comment here" style={{ height: "70px" }} id="floatingTextarea" />
                            <label htmlFor="floatingTextarea" className="form-label">Cost</label>
                            <div id="questionhelp" className="form-text">Please Enter the Tag .</div>
                        </div>
                        <div className="form-floating mb-3">
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" name='files' onChange={onchange} id="fil" />
                                <label className="input-group-text" htmlFor="fil">Upload</label>
                            </div>
                        </div>
                    </form>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" onClick={handleclick} data-bs-dismiss="modal">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Addproduct




