import React from 'react';

const FeedbackForm = () => {
    return (
        <div className="container">
            <form class="row">
                <div class="col-12 mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name" />
                </div>
                <div class="col-12 mb-3">
                    <label for="LastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="LastName" placeholder="Last Name" />
                </div>
                <div class="col-12 mb-3">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" id="address" rows="3"></textarea>
                </div>
            
                <div class="col-12 mb-3">
                    <label for="country" class="form-label">Country</label>
                    <input type="text" class="form-control" id="country" placeholder="country" />
                </div>
                <div class="col-12 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="col-2 mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="phone" placeholder="+088" />
                </div>
                <div class="col-10 mb-3">
                    <label for="phone" class="form-label"> a</label>
                    <input type="phone number" class="form-control" id="phone" placeholder="Phone Number" />
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>           
        </div>
    );
};

export default FeedbackForm;