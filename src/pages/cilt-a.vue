<template>
  <q-layout
    ><div class="q-gutter-sm" id="breadcrumbs">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Anasayfa" to="/" />
        <q-breadcrumbs-el label="Tüm Cilt Bakım Ürünleri" to="/cilt-a" />
      </q-breadcrumbs>
    </div>
    <div>
      <p class="q-pt-lg" id="title">Tüm Cilt Bakım Ürünleri</p>
    </div>
    <div class="row q-pl-lg" id="mainrow">
      <div
        id="roww"
        style="height: 750px; width: 350px"
        v-for="product in products"
        :key="product.name"
      >
        <div>
          <q-img
            src="https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09d165bf-5d49-4b07-8bc2-1332443ba386/1080/mavi-cleanser---new.webp"
            style="height: 350px; width: 325px"
          ></q-img>
        </div>
        <div>
          <p
            class="text-center q-pt-md"
            style="height: 80px; width: 300px"
            id="productname"
          >
            {{ product.name }}
          </p>
        </div>
        <div class="q-pt-xl" id="icons">
          <q-img
            style="height: 70px; width: 70px"
            src="https://thepurestsolutions.com/media/icons/alcoholFree.png"
          ></q-img>
          <q-img
            style="height: 70px; width: 70px"
            src="https://thepurestsolutions.com/media/icons/paraben.png"
          ></q-img>
          <q-img
            style="height: 70px; width: 70px"
            src="https://thepurestsolutions.com/media/icons/vegan.png"
          ></q-img>
        </div>
        <div class="row">
          <p class="q-pt-md" id="productprice">{{ product.price }}</p>

          <q-rating
            id="rating"
            v-model="ratingModel"
            size="13px"
            :max="5"
            color="black"
          />
          <a class="q-pt-md q-pl-sm" href="https://www.w3schools.com">Yorum</a>
        </div>
        <div class="row" id="buttons">
          <q-item clickable style="height: 10px; width: 140px" id="ürün">
            Ürüne Git
          </q-item>
          <div style="height: 10px; width: 5px"></div>
          <q-item
            clickable
            style="height: 10px; width: 140px; color: white"
            id="sepete"
          >
            Sepete Git</q-item
          >
        </div>
      </div>
    </div></q-layout
  >
</template>

<style lang="scss">
a {
  color: black;
  font-size: 7 px;
}
#breadcrumbs {
  padding-top: 125px;
  padding-left: 50px;
  font-size: 15px;
  color: #435364;
}
#title {
  padding-left: 50px;
  font-size: 25px;
  color: #435364;
}

#roww {
  padding-top: 15px;
  padding-left: 60px;
  background-size: 350px 350px;
}
#productname {
  padding-left: 20px;
  font-size: 20px;
  color: #435364;
}
#productprice {
  padding-left: 15px;
  font-size: 17px;
  color: #435364;
}
#icons {
  padding-left: 50px;
}

#rating {
  padding-left: 100px;
}
#buttons {
  padding-left: 5px;
}
#sepete {
  background-color: #435364;
  padding-top: 13px;
  padding-left: 35px;
  border-radius: 2px;
}
#ürün {
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  padding-top: 13px;
  padding-left: 35px;
  border-radius: 2px;
}
</style>

<script>
import { defineComponent } from "vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "cilt-a",
  setup() {
    return {
      essentialLinks: linksList,
    };
  },
  data() {
    return {
      products: [
        {
          link: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09d165bf-5d49-4b07-8bc2-1332443ba386/1080/mavi-cleanser---new.webp",
          name: "Hydrating Gentle Facial Cleanser 0,5% Hyaluronic Acid, 0.5% Sodium PCA Ceramide",
          price: "224 TL",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
        {
          link: "",
          name: "",
          price: "",
        },
      ],
    };
  },
});
</script>
