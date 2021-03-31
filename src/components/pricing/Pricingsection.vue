<template>
    <div>
        <div class="pricingtable">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                    <h1 class="text-center py-5">Pricing</h1>
                    </div>
                    <div class="col-12">
                    <p class="text-center">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
                    </div>  

                    <div class="pricing col-md-12">
                        <div class="columns">
                        <ul class="price">
                            <li class="header">Basic</li>
                            <li class="grey">$ 9.99 / year</li>
                            <li>10GB Storage</li>
                            <li>10 Emails</li>
                            <li>10 Domains</li>
                            <li>1GB Bandwidth</li>
                            <li class="grey"><a href="#" class="button">Sign Up</a></li>
                        </ul>
                    </div>
                      
                    <div class="columns">
                        <ul class="price">
                            <li class="header" style="background-color:#4CAF50">Pro</li>
                            <li class="grey">$ 24.99 / year</li>
                            <li>25GB Storage</li>
                            <li>25 Emails</li>
                            <li>25 Domains</li>
                            <li>2GB Bandwidth</li>
                            <li class="grey"><a href="#" class="button">Sign Up</a></li>
                        </ul>
                    </div>

                    <div class="columns">
                        <ul class="price">
                            <li class="header">Premium</li>
                            <li class="grey">$ 49.99 / year</li>
                            <li>50GB Storage</li>
                            <li>50 Emails</li>
                            <li>50 Domains</li>
                            <li>5GB Bandwidth</li>
                            <li class="grey"><a href="#" class="button">Sign Up</a></li>
                        </ul>
                    </div>  
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

<style>
* {
  box-sizing: border-box;
}

.columns {
  float: left;
  width: 33.3%;
  padding: 8px;
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
  background-color: #111;
  color: white;
  font-size: 25px;
}

.price li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
  text-decoration: none;
}
.price .grey a{
  text-decoration: none;
}
.price .grey a:hover{
  color: rgb(10, 8, 7);
}


.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}
.pricing{
    padding-bottom: 30px;
    padding-top: 10px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
</style>