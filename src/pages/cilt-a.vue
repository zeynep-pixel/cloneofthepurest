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
          <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
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
          <a class="q-pt-md q-pl-sm" href="https://www.w3schools.com">Yorum</a>
          <q-rating
            id="rating"
            v-model="ratingModel"
            size="13px"
            :max="5"
            color="black"
          />
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
    </div>
  </q-layout>
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
  font-size: 17px;
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
  padding-left: 80px;
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

export default defineComponent({
  name: "cilt-a",
  setup() {},
  data() {
    return {
      products: [
        {
          name: "Nemlendirici Ve Bariyer Onarıcı Kuru Ve Karma Ciltler Için Hyaluronik Asit Temizleme Jeli 200 Ml (%0,5 Hyaluronic Acid, %0.5 Sodium PCA Ceramide)",
          price: "₺ 249.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09d165bf-5d49-4b07-8bc2-1332443ba386/1080/mavi-cleanser---new.webp",
        },
        {
          name: "Sivilce Ve Siyah Nokta Karşıtı Yağlı Ve Karma Ciltler İçin Arındırıcı Temizleme Jeli 200 Ml (0,5 % Salicylic Acid, 1% Niacinamide",
          price: "₺ 249.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/879af128-b62b-4488-a7d9-df90a1846b42/1080/sari-cleanser---new.webp",
        },
        {
          name: "Gözenek Ve Siyah Nokta Karşıtı, Sivilce Önleyici Niacinamide Cilt Bakım Serumu 30 Ml (Niacinamide 5% & Zinc Pca 1%)",
          price: "₺ 269.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/61399e99-7a42-42b1-9e8a-5b39bc4c561b/1080/bdd33a59-8560-4319-bfde-1513b38b96e0.webp",
        },
        {
          name: "AHA & BHA Canlandırıcı & Cilt Tonu Eşitleyici Kırmızı Peeling Cilt Bakım Serumu 30 Ml  (Aha 10% + Bha 2%)",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/b8254b91-2172-4fc3-b2f1-8276138a7dc6/1080/tps101-1.webp",
        },
        {
          name: "Yoğun Nemlendirme Ve Dolgunlaştırıcı Etkili, Yenileyici Cilt Bakım Serumu 30 Ml (Hyaluronic Acid %2 + B5)",
          price: "₺ 269.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/e792c062-cf71-4d08-b04b-bb7446949cde/1080/578f3af1-b9d9-448a-8aef-12f7dd04eaf9.webp",
        },
        {
          name: "Leke Karşıtı Ve Leke Görünümü Azaltıcı Arbutin Cilt Bakım Serumu 30 Ml  (Arbutin %2 + Hyaluronic Acid)",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/ab67e95e-3740-477d-9742-ab4210c159c5/1080/tps103-1.webp",
        },
        {
          name: "Sivilce Ve Siyah Nokta Karşıtı, Gözenek Sıkılaştırıcı Yağlı Ve Karma Ciltler Için Glikolik Asit Tonik 200 Ml.",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/69332226-cb72-4e61-92db-d201896d9592/1080/tps104-1.webp",
        },
        {
          name: "Torbalanma Ve Morluk Karşıtı, Aydınlatıcı Kafein Göz Altı Serumu 30 Ml. (Caffeine 5% + Vitamin C)",
          price: "₺ 299.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/c21e6673-a774-4747-acff-a2db3c19d37b/1080/dfa3a043-92ce-4c74-8fdd-e8e89b9ceb19.webp",
        },
        {
          name: "Cilt Yenileyici Ve Yaşlanma Karşıtı, Onarıcı Peptit Cilt Bakım Serumu 30 Ml (Peptide Complex)",
          price: "₺ 379.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/d8c8061a-4808-4991-96e7-be7109ee8dee/1080/tps106-1.webp",
        },
        {
          name: "C Vitamini Aydınlatıcı Ve Cilt Tonu Eşitleyici Cilt Bakım Serumu 30 Ml (%10 Ascorbic Acid & Ferulic Acid %0,5)",
          price: "₺ 329.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/a21217e4-cb31-4ef9-8402-e1d3fc7fc9b5/1080/tps200-1-1.webp",
        },
        {
          name: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09bebf53-e16a-4afc-8422-1b4af7718adf/1080/tps205-1.webp",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09bebf53-e16a-4afc-8422-1b4af7718adf/1080/tps205-1.webp",
        },
        {
          name: "Yaşlanma Karşıtı Ve Kırışıklık Giderici, Onarıcı Retinol (A Vitamini ) Gece Serumu 30 Ml (1% Retinol + Ceramide)",
          price: "₺ 409.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/7802250f-401d-4a8a-b028-43965365c2a8/image_1080.webp",
        },
        {
          name: "Yağlı Ciltler Için Anında Matlaştırıcı Ve Sivilce Önleyici Yüz Bakım Maskesi T-Zone 10 Ml",
          price: "₺ 219.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/c926cd2c-e1e9-4bb0-9d4c-63eb48d24f00/1080/untitled-2-13.webp",
        },
        {
          name: "Arındırıcı Ve Aydınlatıcı Enzim Peeling Toz Temizleyici 55 Gr (%0,6 Azelaic Acid & Malic Acid)",
          price: "₺ 409.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/c62131db-886e-4266-904b-f247a71c9c52/1080/tps206-1.webp",
        },
        {
          name: "Arındırıcı Ve Canlandırıcı Tüm Ciltler Için  Meyve Asitleri İçeren Toz Temizleyici 55 Gr (%0,2 Azelaik Asit & Malik Asit)",
          price: "₺ 379.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/bd62af63-489f-423f-9d49-8349adccaeb8/1080/tps207-1.webp",
        },
        {
          name: "Yağlı Ve Karma Cilt Sivilce Ve Siyah Nokta Karşıtı,Gözenek Sıkılaştırıcı Salisilik Asit Tonik 200 Ml",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/197bf082-6cfc-4625-b86a-00466512cdcb/1080/275697b1-11d0-4b75-aa0b-8fd9f4ebad42.webp",
        },
        {
          name: "Yüksek Koruma Ve Nemlendirici Etkili Güneş Koruyucu Krem SPF 50, 50 Ml.",
          price: "₺ 209.92",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/4d7e12cd-1e65-4f55-9e55-726f22a85049/image_1080.webp",
        },
        {
          name: "Leke Karşıtı Ve Cilt Tonu Eşitleyici Renkli Güneş Koruyucu Krem SPF 50, 50 Ml",

          price: "₺ 209.92",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/71bbb658-bef0-4049-a8d3-c8319bc17c06/1080/tps209-1.webp",
        },
        {
          name: "Yağlı Ve Karma Ciltler İçin Matlaştırıcı Güneş Koruyucu Krem SPF 50, 50 Ml.",
          price: "₺ 202.42",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/d4169d23-3287-4991-bd4a-56084a0ba419/1080/1cf3a618-4b80-4720-b514-9442aef12f89.webp",
        },
        {
          name: "24 Saat Etkili Günlük Yoğun Nemlendirici Cilt Bakım Kremi 50 Ml",
          price: "₺ 279.90",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/bb4f1ad1-689c-4f1b-a2e7-3c71a0aa1b6b/image_1080.webp",
        },
      ],
    };
  },
});
</script>
