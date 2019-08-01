<template>
	<div>
		<footer class="section-footer bg-blue">
		  <section class="footer-top">
		     <div class="container">
		        <nav class="nav-footer nav justify-content-center">
		          <router-link to="/consult" class="nav-link">Konsultatsiya</router-link>
		          <router-link to="/encyclopedia" class="nav-link">Ensiklopedia</router-link>
		          <router-link to="/articles" class="nav-link">Maqolalar</router-link>
		          <router-link to="/doctors" class="nav-link">Doktorlar uchun</router-link>
		          <router-link to="/" class="nav-link">Servis haqida</router-link>
		          <router-link to="/" class="nav-link">Bog'lanish</router-link>
		        </nav>
		     </div>
		  </section> <!-- footer-top .// -->
		  <section class="footer-bottom text-center">
		    <img src="images/misc/payment.png">
		    <p class="text-white mt-3">
		      © 2019 AskDoktor MCHJ xizmat ko’rsatadi <br>
		      Barcha huquqlar himoyalangan
		    </p>
		  </section> <!-- footer-bottom .// -->
		</footer>
	</div>
<!-- offcanvas-bar.// -->
</template>

<script>
export default {
    name: 'Footer'
}
</script>