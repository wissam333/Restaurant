<script setup lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
//data
import fakeData from "../Data/MOCK_DATA.json";
//router
import { useRouter } from "vue-router";
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
        slidesPerView: 2.5,
      },
    },
  },
});

//active section
let active = ref("Burger");

//data Pizza Burger
let Burgers = computed(() => {
  return fakeData.filter((item) => {
    if (item.Name.includes("Burger")) {
      return item;
    }
  });
});
let Pizzas = computed(() => {
  return fakeData.filter((item) => {
    if (item.Name.includes("Pizza")) {
      return item;
    }
  });
});

onMounted(() => {
  // return images to its normal size
  const image: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(".food-img");
  const home = document.querySelector(".home-wrapper") as HTMLElement;
  home.style.opacity = `1`;
  image.forEach((element) => {
    element.style.animation = "";
    element.style.transform = "";
  });

  const slider = document.querySelector(".slider") as HTMLElement;
  const wrapper = document.querySelector(".wrapper") as HTMLElement;

  const image1List: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(".image1");
  const image2List: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(".image2");

  if (wrapper && slider) {
    wrapper.addEventListener("scroll", () => {
      //slider fade in/out
      // slider.style.height = `${256 - wrapper.scrollTop}px`;
      slider.style.transform = `translate(0px, ${wrapper.scrollTop}px)`;
      slider.style.opacity = `${(256 - wrapper.scrollTop) / 256}`;
      //spin images
      image1List.forEach((image1) => {
        image1.style.transform = `rotate(${wrapper.scrollTop / 2}deg)`;
      });
      image2List.forEach((image2) => {
        image2.style.transform = `rotate(${wrapper.scrollTop / 2}deg)`;
      });
    });
  }
});

const router = useRouter();
const goToItem = (event: { currentTarget: any }, Id: any) => {
  const foodCard = event.currentTarget;
  const image = foodCard.querySelector(".food-img") as HTMLElement;
  const home = document.querySelector(".home-wrapper") as HTMLElement;
  home.style.opacity = `0.5`;
  image.style.animation = `goToItem 0.4s linear forwards`;
  image.style.transform = `translate(-40%,-40%) scale(1.4)`;
  router.push({ name: "Item", params: { id: Id } });
};
</script>
<template>
  <div class="home-wrapper">
    <div class="home">
      <div class="container-fluid">
        <h2>Order now</h2>
        <p class="Welcom">What do you want to eat today?</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="slider container-fluid">
        <swiper
          :breakpoints="breakpoints.swiperOptions.breakpoints"
          :space-between="30"
          ref="slider"
          v-if="breakpoints"
        >
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Burger'"
              :class="active == 'Burger' ? 'active' : ''"
            >
              <img src="../assets/pngwing.com(1).webp" alt="" />
              <p>Burger</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Pizza'"
              :class="active == 'Pizza' ? 'active' : ''"
            >
              <img src="../assets/pngwing.com(6).webp" alt="" />
              <p>Pizza</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Others'"
              :class="active == 'Others' ? 'active' : ''"
            >
              <img src="../assets/menu-item-1.webp" alt="" />
              <p>Others</p>
            </div>
          </swiper-slide>
        </swiper>
        <p class="time text-center">Ready in <span>15</span> minutes!</p>
      </div>
      <div class="container-fluid">
        <div class="food">
          <div
            v-for="Burger in Burgers"
            class="food-cards Burger"
            :class="active == 'Burger' ? 'show' : 'hide'"
            @click="goToItem($event, Burger.id)"
          >
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <i v-if="Burger.star" class="bi bi-star-fill"></i>
                  <div class="info">{{ Burger.Name }}</div>
                </div>
                <div class="badge bg-danger">${{ Burger.Price }}</div>
              </div>
              <div class="food-img">
                <!-- <img :src="Burger.image" alt="" /> -->
                <img src="../assets/pngwing.com(1).webp" alt="" />
              </div>
            </div>
          </div>

          <div class="Pizza-container">
            <div
              v-for="Pizza in Pizzas"
              class="food-cards Pizza"
              :class="active == 'Pizza' ? 'show' : 'hide'"
              @click="goToItem($event, Pizza.id)"
            >
              <div class="card">
                <div class="food-info">
                  <div class="content">
                    <i v-if="Pizza.star" class="bi bi-star-fill"></i>
                    <div class="info">{{ Pizza.Name }}</div>
                  </div>
                  <div class="badge bg-danger">${{ Pizza.Price }}</div>
                </div>
                <div class="food-img">
                  <!-- <img :src="Pizza.image" alt="" /> -->
                  <img src="../assets/pngwing.com(10).webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        :class="active == 'Burger' ? 'show' : 'hide'"
        class="image1"
        src="../assets/pngwing.com(1).webp"
        alt=""
      />
      <img
        :class="active == 'Burger' ? 'show' : 'hide'"
        class="image2"
        src="../assets/pngwing.com(2).webp"
        alt=""
      />
      <img
        :class="active == 'Pizza' ? 'show' : 'hide'"
        class="image1"
        src="../assets/pngwing.com(10).webp"
        alt=""
      />
      <img
        :class="active == 'Pizza' ? 'show' : 'hide'"
        class="image2"
        src="../assets/pngwing.com(8).webp"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/var.scss";
.home-wrapper {
  overflow: hidden;
  height: calc(100vh - 81px);
  transition: all 0.4s linear;
  .home {
    padding: 0 10px 10px 10px;
    .Welcom {
      color: $mainColor;
      font-weight: bold;
      font-size: 14px;
      margin-top: 15px;
      margin-bottom: 0;
    }
  }
  .wrapper {
    position: relative;
    overflow-y: scroll;
    width: 100vw;
    overflow-x: hidden;
    max-height: calc(100vh - 169px);
    .slider {
      width: 100%;
      padding-right: 0;
      margin-bottom: 0px;
      transition: all 0.1s linear;
      .swiper {
        padding: 0 10px 10px 10px;
        .item {
          overflow: visible;
          margin: 20px 0;
          .box {
            width: 100%;
            height: 140px;
            border-radius: 16px;
            background-color: #f4f4f7d9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.6s ease-in-out;
            cursor: pointer;
            &.active {
              background-color: #fe746aed;
              box-shadow: 0px 0px 14px 0px #fe746a;
              p {
                color: #fff !important;
              }
            }

            img {
              width: 70px;
            }
            p {
              margin: 0 !important;
              font-size: 10px;
              font-weight: 500;
              color: #333;
            }
          }
        }
      }
      .time {
        font-size: 14px;
        margin-top: 15px;
        font-weight: 500;
        padding-bottom: 30px;
        span {
          color: $mainColor;
        }
      }
    }
    .food {
      position: relative;
      .Pizza-container {
        position: absolute;
        top: 0px; //food padding-top
        height: 0;
      }
      .food-cards {
        padding: 0 10px 10px 10px;
        transition: all 0.8s ease;
        &.Burger {
          &.hide {
            transform: translateX(-100%);
          }
          &:nth-child(2) {
            transition: all 0.6s ease;
          }
          &:nth-child(3) {
            transition: all 0.5s ease;
          }
          &:nth-child(4) {
            transition: all 0.4s ease;
          }
        }
        &.Pizza {
          &.hide {
            transform: translateX(100%);
          }
          &:nth-child(2) {
            transition: all 0.6s ease;
          }
          &:nth-child(3) {
            transition: all 0.5s ease;
          }
          &:nth-child(4) {
            transition: all 0.4s ease;
          }
        }
        .card {
          padding: 20px;
          border: none;
          border-radius: 20px;
          background-color: #e9e9e9c9;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          .food-info {
            padding: 0 10px;
            width: 50%;

            .content {
              display: flex;
              .info {
                font-size: 14px;
                font-weight: bold;
                color: #333;
                line-height: 15px;
              }
              i {
                color: gold;
                font-size: 10px;
                margin: 0 5px;
              }
            }
            .badge {
              font-weight: 500;
              margin: 10px 0;
              border-radius: 25px;
              padding: 10px 15px;
            }
          }
          .food-img {
            width: 50%;
            height: auto;
            transition: transform 0.4s linear;
            mix-blend-mode: darken;
            z-index: 10;
            @keyframes goToItem {
              0% {
                opacity: 0.2;
              }
              100% {
                opacity: 0.5;
              }
            }
            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
      }
    }
    .image1 {
      position: fixed;
      width: 240px;
      top: 250px;
      transition: all 0.4s linear 0s;
      z-index: -1;
      &.show {
        left: -150px;
      }
      &.hide {
        top: 200px;
        left: -300px;
      }
    }
    .image2 {
      position: fixed;
      width: 240px;
      top: 400px;
      right: -150px;
      transition: all 0.4s linear 0s;
      z-index: -1;
      &.show {
        right: -150px;
      }
      &.hide {
        top: 200px;
        right: -300px;
      }
    }
  }
}
</style>
