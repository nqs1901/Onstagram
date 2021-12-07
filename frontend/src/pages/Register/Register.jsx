import React from 'react'

export default function Register() {
    return (
        <div className="auth_page">
        <form>
            <h3 className="text-uppercase text-center mb-4">Onstagram</h3>
            <div align="center">Sign up to see photos and videos from your friends. </div><br/>
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" name="fullname"
        
                style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                
                <small className="form-text text-danger">
                    {alert.fullname ? alert.fullname : ''}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" id="username" name="username"
                // onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                
                <small className="form-text text-danger">
                    {alert.username ? alert.username : ''}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                // onChange={handleChangeInput} value={email}
                style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                
                <small className="form-text text-danger">
                    {alert.email ? alert.email : ''}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>

                <div className="pass">
                    
                    <input type={  "password" } 
                    className="form-control" id="exampleInputPassword1"
                    // onChange={handleChangeInput} value={password} 
                    name="password"
                    style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

                    <small>
                        { 'Show'}
                    </small>
                </div>

                <small className="form-text text-danger">
                    {alert.password ? alert.password : ''}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="cf_password">Confirm Password</label>

                <div className="pass">
                    
                    <input type={  "password" } 
                    className="form-control" id="cf_password"
                    // onChange={handleChangeInput} value={cf_password} 
                    name="cf_password"
                    style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                    <small>
                        { 'Show'}
                    </small>
                </div>

                <small className="form-text text-danger">
                    {alert.cf_password ? alert.cf_password : ''}
                </small>
            </div>

            {/* <div className="row justify-content-between mx-0 mb-1">
                <label htmlFor="male">
                    Male: <input type="radio" id="male" name="gender"
                    value="male"  />
                </label>

                <label htmlFor="female">
                    Female: <input type="radio" id="female" name="gender"
                     />
                </label>

                <label htmlFor="other">
                    Other: <input type="radio" id="other" name="gender"
                    />
                </label>
            </div> */}
            
            <button type="submit" className="btn btn-dark w-100">
                Register
            </button>

            <p className="my-2" align="center">
                Already have an account? <div to="/" style={{color: "crimson"}}>Login Now</div>
            </p>
        </form>
    </div>
    )
}
