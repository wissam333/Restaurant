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
import router from "@/router";
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
//Order Done
const order = () => {
  const item = document.querySelector(".item") as HTMLElement;
  const fadeContainer = document.querySelector(
    ".fade-container"
  ) as HTMLElement;
  item.style.opacity = "0";
  fadeContainer.style.opacity = "1";
};
//init AOS and qty management
let qty = ref(1);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <transition name="fade" appear>
    <div>
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
              src="../assets/pngwing.com(6).webp"
              alt=""
            />
            <span
              v-if="SingleItem.star"
              class="star"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <i class="bi bi-star-fill"></i>
            </span>
            <div
              class="qty-input"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <button
                class="qty-count qty-count--minus"
                type="button"
                @click="qty > 1 ? (qty -= 1) : (qty = qty)"
              >
                -
              </button>
              <input
                class="product-qty"
                type="number"
                name="product-qty"
                :value="qty"
              />
              <button
                class="qty-count qty-count--add"
                type="button"
                @click="qty += 1"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <h5>Extras</h5>
        <div data-aos="fade-left" data-aos-duration="1000">
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
        <div data-aos-offset="0" data-aos="fade-up" data-aos-duration="1000">
          <div class="add-to-cart">
            <h1><span>$</span>{{ SingleItem.Price }}</h1>
            <button @click="order">
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div class="fade-container">
    <div v-for="SingleItem in Item">
      <p class="name">
        {{ SingleItem.Name }}
      </p>
      <div class="img-wrap">
        <img
          v-if="SingleItem.Name.includes('Burger')"
          src="../assets/pngwing.com(1).webp"
          alt=""
        />
        <img
          v-if="SingleItem.Name.includes('Pizza')"
          src="../assets/pngwing.com(6).webp"
          alt=""
        />
      </div>
      <h1>Restaurant</h1>
      <div class="Order-Successful">
        <i class="bi bi-check-circle-fill"></i>
        <h4>Order Successful</h4>
        <p>ET: 30 Minutes</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/var.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
//qty button
$black: #000;
$white: #fff;
$gray: #ccc;
$smoke: #e2e2e2;
$disable: #f2f2f2;

.qty-input {
  position: absolute;
  bottom: 16px;
  right: 0;
  width: 65px;
  height: 25px;
  color: $white;
  background: $mainColor;
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;

  .product-qty,
  .qty-count {
    display: flex !important;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: $mainColor;
    color: inherit;
    border: none;
    min-width: 0;
    height: 25px;
    line-height: 1;

    &:focus {
      outline: none;
    }
  }

  .product-qty {
    font-size: 12px;
    min-width: 0;
    display: inline-block;
    text-align: center;
    appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }

  .qty-count {
    font-size: 16px;
    padding: 0 10px;
    cursor: pointer;
    position: relative;

    &:disabled {
      color: $gray;
      background: $disable;
      cursor: not-allowed;
      border: none;

      &:before,
      &:after {
        background: $gray;
      }
    }
  }
}
//item
.item {
  height: calc(100vh - 81px);
  overflow: hidden;
  padding: 0 40px;
  transition: all 1s ease;
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
      font-size: 40px;
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
      font-size: 20px;
      padding: 10px 26px;
      border-radius: 16px;
    }
  }
}
.fade-container {
  transition: all 1s ease;
  opacity: 0;
  .name {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 25%;
    font-size: 30px;
    color: $mainColor !important;
    font-weight: bold;
    text-wrap: nowrap;
    text-align: center;
  }
  .img-wrap {
    width: 200px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: 18.5vw;
    font-weight: 800;
    z-index: -1;
    position: absolute;
    opacity: 0.5;
    color: #e67068 !important;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 45%;
  }
  .Order-Successful {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 80%;
    text-align: center;
    text-wrap: nowrap;
    i {
      font-size: 70px;
      background: #fff;
      color: $mainColor;
    }
    h4 {
      font-weight: bold;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: #979797 !important;
    }
  }
}
</style>
