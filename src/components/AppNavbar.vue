<script setup lang="ts">
import { computed } from "vue";
//router
import { useRoute , useRouter} from "vue-router";
const route = useRoute();
const router = useRouter();
const isItemRoute = computed(() => {
  return route.path.match(/^\/Item\/\d+$/);
});
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div v-if="isItemRoute" class="go-back" @click="router.go(-1)"><i class="bi bi-arrow-left-square-fill"></i></div>
      <a
        :class="isItemRoute ? 'center' : ''"
        class="navbar-brand d-flex"
        href="#"
        ><i class="bi bi-cup-straw"></i> <b>Fasfu</b></a
      >
      <button
        v-if="!isItemRoute"
        class="navbar-toggler burger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "../assets/var.scss";
nav {
  padding: 25px 10px 10px 10px;
  .container-fluid {
    .go-back{
      position: absolute;
      font-size: 30px;
      color: $mainColor;
    }
    .navbar-brand {
      color: #333;
      font-size: 24px;
      &.center {
        position: relative;
        animation: anim 0.7s linear forwards;
        @keyframes anim {
          0% {
            left: 0%;
            transform: translateX(0%);
          }
          100% {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      i {
        font-size: 24px;
        color: $mainColor;
        margin-left: -2px;
        margin-right: 2px;
      }
    }
    .burger {
      border: none !important;
      box-shadow: none;
      font-size: 30px;
      color: $mainColor;
      padding: 0;

      &:focus {
        border: none !important;
        box-shadow: none !important;
      }
    }
  }
}
</style>
