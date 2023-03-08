<template lang="">
  <header>
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <router-link :to="{ name: 'Home' }"> Home </router-link>
          <a href="#">
            <img
              class="avatar-small"
              src="https://pbs.twimg.com/profile_images/1188775562657091594/5mgkg44t_400x400.jpg"
              alt=""
            />
            <span>
              {{ singleUserStore.authUser.name }}
            </span>
          </a>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <!-- <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <a href="profile.html">View profile</a>
              </li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div> -->
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { userStore } from "../stores/userStore.js";
const singleUserStore = userStore();
</script>
<style scoped>
.navbar {
  background-color: lightslategray;
}
.navbar img {
  width: 100px;
  border-radius: 210px;
}
.navbar-user {
  list-style: none;
  /* display: flexbox; */
}
a:link {
  text-decoration: none;
  color: black;
}
</style>
