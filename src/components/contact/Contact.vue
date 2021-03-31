<template>
    <div>
        <div class="contact bgr">
            <div class="container ">
                
            <div class="row ">
                
                <div class="col-md-6 ">
                    <h4 class="text-white py-5">Send Us Message</h4>
                    <form class=" ">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col-md-6">
                    <h4 class="text-white email">SEND US EMAIL</h4>
                    <hr>
                    <h6 class="text-white py-2">Starkwood Real Estate Ltd.</h6>
                    <p class="text-white py-2"> 19 (New) Tejgaon Industrial Area, Dhaka – 1208.
                        <br>
                        Phone: +88 02 887 8119-20 , +88 01910 44 55 77, +88 01910 44 66 77 <br>
                        Email: rakib@starkwoodrealestate.com</p>
                </div>
            </div>
            

        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style >
.bgr{
    background-color: rgb(224, 100, 79);
}
.email{
    padding-top: 58px;
}
.contact{
    padding-bottom: 20px ;
}
</style>