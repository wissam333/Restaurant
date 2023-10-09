<script lang="ts" setup>
import { onMounted, defineComponent, ref, computed } from "vue";
// import AOS
import AOS from "aos";
// router
import { useRoute } from "vue-router";
//data
import fakeData from "../Data/MOCK_DATA.json";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// swiper configuration
defineComponent({
  name: "BreakPoints",
  components: {
    SwiperSlide,
    Swiper,
  },
});
const breakpoints = ref({
  swiperOptions: {
    breakpoints: {
      // 700px and up
      0: {
        slidesPerView: 1.5,
      },
    },
  },
});

// Get Item
const route = useRoute();
let Item = computed(() => {
  return fakeData.filter((item) => {
    if (item.id == +route.params.id) {
      return item;
    }
  });
});
//check badge
const toggleCheck = (event: any) => {
  const check = event.currentTarget.querySelector(".check");
  check.style.display = check.style.display === "none" ? "flex" : "none";
};

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="item container" v-for="SingleItem in Item">
    <h2 class="text-center" data-aos="fade-up" data-aos-duration="700">
      {{ SingleItem.Name }}
    </h2>
    <p class="text-center" data-aos="fade-up" data-aos-duration="700">
      Lorem ipsum dolor sit amet consectetur adipisicing elitoluptatem.
    </p>
    <div class="wrapper">
      <div class="item-img">
        <!-- <img :src="SingleItem.image" alt="" /> -->
        <img
          v-if="SingleItem.Name.includes('Burger')"
          src="../assets/pngwing.com(1).webp"
          alt=""
        />
        <img
          v-if="SingleItem.Name.includes('Pizza')"
          src="../assets/pngwing.com(10).webp"
          alt=""
        />
        <span
          v-if="SingleItem.star"
          class="star"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <i class="bi bi-star-fill"></i>
        </span>
      </div>
    </div>
    <h5>Extras</h5>
    <div data-aos="fade-left" data-aos-duration="700">
      <swiper
        :breakpoints="breakpoints.swiperOptions.breakpoints"
        :space-between="20"
        v-if="breakpoints"
        class="slider"
      >
        <swiper-slide class="addons" @click="toggleCheck">
          <div class="addons-card">
            <img src="../assets/katchap.png" alt="" />
            <p>Extra Katchap</p>
            <span class="check">
              <i class="bi bi-check-lg"></i>
            </span>
          </div>
        </swiper-slide>
        <swiper-slide class="addons" @click="toggleCheck">
          <div class="addons-card">
            <img src="../assets/cheese.png" alt="" />
            <p>Extra Cheese</p>
            <span class="check">
              <i class="bi bi-check-lg"></i>
            </span>
          </div>
        </swiper-slide>
        <swiper-slide class="addons">
          <div class="addons-card" @click="toggleCheck">
            <img src="../assets/cheese.png" alt="" />
            <p>Extra Cheese</p>
            <span class="check">
              <i class="bi bi-check-lg"></i>
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div data-aos-offset="0" data-aos="fade-up" data-aos-duration="700">
      <div class="add-to-cart">
        <h1><span>$</span>{{ SingleItem.Price }}</h1>
        <button>
          <i class="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/var.scss";
.item {
  height: calc(100vh - 81px);
  overflow: hidden;
  padding: 0 40px;
  .wrapper {
    padding: 30px 0;
    .item-img {
      width: 50%;
      height: auto;
      margin: auto;
      mix-blend-mode: darken;
      animation: zoom-in 0.5s linear forwards;
      @keyframes zoom-in {
        0% {
          opacity: 0.5;
          transform: translate(2%, 20%) scale(1.4);
        }
        100% {
          opacity: 1;
          transform: translate(0%, 0%) scale(1.5);
        }
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    h2 {
      padding: 0px 40px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      padding: 0px 40px;
    }
    .star {
      position: absolute;
      font-size: 13px;
      width: 25px;
      height: 25px;
      color: #000;
      display: flex;
      right: 0;
      background: gold;
      border-radius: 50%;
      top: 0px;
      justify-content: center;
      align-items: center;
    }
  }
  h5 {
    padding: 20px 0px;
    font-weight: bold;
  }
  .slider {
    margin-bottom: 30px;
    overflow: visible;
    .addons {
      .addons-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        border-radius: 16px;
        background: rgba(233, 233, 233, 0.7882352941);
        cursor: pointer;
        img {
          width: 70px;
        }
        p {
          font-weight: bold;
          line-height: 16px;
          font-size: 14px;
          margin-bottom: 0 !important;
          margin-right: 16px;
        }
        .check {
          position: absolute;
          font-size: 15px;
          width: 30px;
          height: 30px;
          color: #000;
          display: none;
          right: -15px;
          background: gold;
          border-radius: 50%;
          top: 30%;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 8px 1px gold;
        }
      }
    }
  }
  .add-to-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    h1 {
      margin: 0;
      font-size: 45px;
      font-weight: bold;
      span {
        font-size: 25px;
        font-weight: bolder;
      }
    }
    button {
      background-color: $mainColor;
      color: #fff;
      border: none;
      font-size: 22px;
      padding: 10px 26px;
      border-radius: 16px;
    }
  }
}
</style>
