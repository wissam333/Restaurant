<script setup lang="ts">
import { ref, defineComponent, onMounted } from "vue";
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

onMounted(() => {
  const slider = document.querySelector(".slider");
  const wrapper = document.querySelector(".wrapper");
  if (wrapper && slider) {
    wrapper.addEventListener("scroll", () => {
      if (wrapper.scrollTop > 0) {
        // Scrolling of the .wrapper element has begun
        slider.classList.add("fade-out");
        slider.classList.remove("fade-in");
      } else {
        // Scrolling of the .wrapper element has not yet begun
        slider.classList.add("fade-in");
        slider.classList.remove("fade-out");
      }
    });
  }
});
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
              <img src="../assets/pngwing.com(1).png" alt="" />
              <p>Burger</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Pizza'"
              :class="active == 'Pizza' ? 'active' : ''"
            >
              <img src="../assets/pngwing.com(6).png" alt="" />
              <p>Pizza</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Others'"
              :class="active == 'Others' ? 'active' : ''"
            >
              <img src="../assets/menu-item-1.png" alt="" />
              <p>Others</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Burger'"
              :class="active == 'Burger' ? 'active' : ''"
            >
              <img src="../assets/pngwing.com(1).png" alt="" />
              <p>Burger</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Pizza'"
              :class="active == 'Pizza' ? 'active' : ''"
            >
              <img src="../assets/pngwing.com(6).png" alt="" />
              <p>Pizza</p>
            </div>
          </swiper-slide>
          <swiper-slide class="item">
            <div
              class="box"
              @click="active = 'Others'"
              :class="active == 'Others' ? 'active' : ''"
            >
              <img src="../assets/menu-item-1.png" alt="" />
              <p>Others</p>
            </div>
          </swiper-slide>
        </swiper>
        <p class="time text-center">Ready in <span>15</span> minutes!</p>
      </div>
      <div class="container-fluid">
        <div class="food">
          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <i class="bi bi-star-fill"></i>
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>

          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>

          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>

          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>

          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>

          <div class="food-cards">
            <div class="card">
              <div class="food-info">
                <div class="content">
                  <div class="info">Double Cheese & Meat</div>
                </div>
                <div class="badge bg-danger">$10.90</div>
              </div>
              <div class="food-img">
                <img src="../assets/pngwing.com(4).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="burger1" src="../assets/pngwing.com(1).png" alt="" />
      <img class="burger2" src="../assets/pngwing.com(2).png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/var.scss";
.slider.fade-out {
  animation: fade-out 0.5s linear forwards;
  @keyframes fade-out {
    0% {
      opacity: 1;
      height: 226px;
    }
    50% {
      opacity: 0.5;
      height: calc(226px / 2);
    }
    100% {
      opacity: 0;
      height: 0;
    }
  }
}
.slider.fade-in {
  animation: fade-in 0.5s linear forwards;
  @keyframes fade-in {
    0% {
      opacity: 0;
      height: 0;
    }
    50% {
      opacity: 0.5;
      height: calc(226px / 2);
    }
    100% {
      opacity: 1;
      height: 226px;
    }
  }
}
.home-wrapper {
  overflow: hidden;
  height: calc(100vh - 81px);
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
    max-height: calc(100% - 169px);
    .slider {
      width: 100%;
      padding-right: 0;
      margin-bottom: 0px;
      .swiper {
        padding: 0 10px 10px 10px;
        .item {
          overflow: visible;
          margin: 20px 0;
          .box {
            width: 100%;
            height: 140px;
            border-radius: 16px;
            background-color: #f4f4f7;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.8s ease-in-out;
            cursor: pointer;
            &.active {
              background-color: #fe746a;
              box-shadow: 0px 0px 14px 0px #fe746a;
              p {
                color: #fff;
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
        margin-bottom: 30px;
        span {
          color: $mainColor;
        }
      }
    }
    .food {
      padding-top: 40px;
      .food-cards {
        padding: 0 10px 10px 10px;
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
            width: 150px;
            height: 90px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .burger1 {
      position: fixed;
      width: 240px;
      top: 150px;
      left: -125px;
      z-index: -1;
    }
    .burger2 {
      position: fixed;
      width: 240px;
      top: 300px;
      right: -125px;
      z-index: -1;
    }
  }
}
</style>
