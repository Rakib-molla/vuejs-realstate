<template>
    <div>
        <!-- nvbar start -->
       <nav class="navbar navbar-expand-md bg h-90">
           <div class="container">
              
                   <a class="navbar-brand" href="#">
                       <img class="logo" src="@/assets/logo.png"/>
                   </a>
                <ul class="navbar-nav ">
                    <li ><router-link :to="{name:'Home'}" class="nav-link text-white">HOME</router-link></li>
                    <li><router-link :to="{name:'About'}" class="nav-link text-white">ABOUT</router-link></li>
                    <li><router-link :to="{name:'Project'}" class="nav-link text-white">PROJECT</router-link></li>
                    <li><router-link :to="{name: 'Pricing'}" class="nav-link text-white">PRICING</router-link></li>
                    <li><router-link :to="{name:'Carrer'}" class="nav-link text-white">CARRER</router-link></li>
                    <li><router-link :to="{name:'Contact'}" class="nav-link text-white">CONTACT US</router-link></li>
                </ul>
             
           </div>
       </nav>  <!-- nvbar end -->       

    </div>
    
</template>

<script>

export default {
   
}
</script>

<style>
.bg{
    background-color: #1E3853;
    color: white;
}
.h-90{
    height: 90px;
}
.f{
    font-size: 25px;
    font-weight: bold;
    margin-left: 45px;
    color: teal;
    text-transform: uppercase;
}
.f:hover{
    text-decoration: underline;
    cursor:pointer;
    
}
.logo{
    height: 80px;
    width: 250px;
}

</style>
