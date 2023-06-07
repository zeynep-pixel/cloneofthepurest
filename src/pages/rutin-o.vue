<template>
  <div>
    <p id="first" class="text-center">Cilt Bakım Rutini Adımları</p>
  </div>
  <div class="row">
    <div class="col-4 q-pt-xl" style="width: 400px">
      <q-img
        src="https://cdn.myikas.com/images/theme-images/730345a7-db0f-44d3-9168-680a1968e5d1/image_3840.webp"
        style="height: 400px; width: 400px"
      ></q-img>
    </div>
    <div class="col-8" style="width: 950px">
      <p id="aa">Cilt Bakım Rutindeki Adımlar</p>
      <p id="bb">1. ADIM: Cilt Temizliği</p>
      <p id="cc">
        Cilt bakım rutinlerinizin temeli cilt temizliğidir. Ilık su ile birlikte
        Fruit Enzyme Powder Cleanser kullanmak cildinizin temizlenmesine
        yardımcı olacaktır. İçerdiği meyve asiti parçacıklar sayesinde cildinizi
        nazikçe temizler ve arındırır. Cilt yenilenmesi ile cilt tonu
        farklılıklarında azalma, gözeneklerde küçülme ve temizlemenin yanı sıra
        nem oranının arttırılması ile ciltte dolgun bir görünüm hedefler. Fruit
        Enzyme Powder Exfoliator & Peeling ise içerdiği nazik kimyasal
        eksfoliyatörler Azeleic ve Malic Asit sayesinde, yağ, kir, ölü hücre ve
        makyaj kalıntılarından cildin arındırılmasına ve pürüzsüzleşmesine
        yardımcı olur.
      </p>
    </div>
  </div>
  <div id="roww" class="row">
    <div class="col q-pt-xl" v-for="product in products1" :key="product">
      <div>
        <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
      </div>
      <div>
        <p
          class="text-center q-pt-md"
          style="height: 80px; width: 300px"
          id="productnamee"
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
  </div>

  <div class="row">
    <div class="col-4 q-pt-xl" style="width: 400px">
      <q-img
        src="https://cdn.myikas.com/images/theme-images/170f5d25-c438-4831-9da8-ed26b8471390/image_3840.webp"
        style="height: 400px; width: 400px"
      ></q-img>
    </div>
    <div class="col-8" style="width: 950px">
      <p id="aa">Cilt Bakım Rutindeki Adımlar</p>
      <p id="bb">2.ADIM: Tonik</p>
      <p id="cc">
        Cilt temizliğinin ardından tonik kullanmak, gözenekleri temizler, sebum
        salgısını dengeler ve cildin nazikçe ölü deri, yağ, kir ve makyaj
        kalıntılarından arındırılmasına yardımcı olur. Gözenek problemi yaşayan
        ciltler her akşam, Exfoliating and Clarifying Toner, Akneli ve skarlı
        ciltler ise her akşam Oil Control Toner kullanabilirler.
      </p>
    </div>
  </div>
  <div id="roww" class="row">
    <div class="col q-pt-xl" v-for="product in products2" :key="product">
      <div>
        <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
      </div>
      <div>
        <p
          class="text-center q-pt-md"
          style="height: 80px; width: 300px"
          id="productnamee"
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
  </div>
  <div class="row">
    <div class="col-4 q-pt-xl" style="width: 400px">
      <q-img
        src="https://cdn.myikas.com/images/theme-images/409aeba6-23ad-4b33-9b6d-f2407754a186/image_3840.webp"
        style="height: 400px; width: 400px"
      ></q-img>
    </div>
    <div class="col-8" style="width: 950px">
      <p id="aa">Cilt Bakım Rutindeki Adımlar</p>
      <p id="bb">3. ADIM: Serum</p>
      <p id="cc">
        Farklı cilt tiplerine & yapılarına uygun birçok serum vardır. Önemli
        olan şey ise cilt bakım hedeflerinizi belirleyerek uygun çözümleri
        seçmektir. Renk tonu eşitsizliğini gidermek, cildinizin canlanmasını ve
        soluk görüntüsünden kurtulmasını istiyorsanız,Brightening Serum Arbutin
        ve Brightening & Lightening Vitamin C Serum deneyebilirsiniz. Gözaltı
        morlukları ve torbalanmaları için en iyi yardımcı Radiance Eye Contour
        Serum olacaktır. Exfoliating Facial Peeling ise cilt tonu
        farklılıklarınızı yok eder. Gözenekleriniz için ise Intensive Pore
        Tightening & Lightening Serum ve Fruit Enzyme Powder Cleanser iyi tercih
        olabilir.
      </p>
    </div>
  </div>
  <div id="roww" class="row">
    <div class="col q-pt-xl" v-for="product in products3" :key="product">
      <div>
        <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
      </div>
      <div>
        <p
          class="text-center q-pt-md"
          style="height: 80px; width: 300px"
          id="productnamee"
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
  </div>
  <div class="row">
    <div class="col-4 q-pt-xl" style="width: 400px">
      <q-img
        src="https://cdn.myikas.com/images/theme-images/9c8db237-a542-4ba2-af7c-fc0c39906c94/image_3840.webp"
        style="height: 400px; width: 400px"
      ></q-img>
    </div>
    <div class="col-8" style="width: 950px">
      <p id="aa">Cilt Bakım Rutindeki Adımlar</p>
      <p id="bb">4.ADIM: Nemlendirme</p>
      <p id="cc">
        Nemlendirme aşaması, cildiniz için en önemli adımlardan biridir.
        Cildinizin daha canlı, dolgun ve pürüzsüz gözükmesine yardımcı olması
        için Intensive Hydration Serum ve Hydration Booster Daily Moisturizing
        Cream kullanabilirsiniz.
      </p>
    </div>
  </div>
  <div id="roww" class="row" style="width: 800px">
    <div class="col q-pt-xl" v-for="product in products4" :key="product">
      <div>
        <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
      </div>
      <div>
        <p
          class="text-center q-pt-md"
          style="height: 80px; width: 300px"
          id="productnamee"
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
  </div>
  <div class="row">
    <div class="col-4 q-pt-xl" style="width: 400px">
      <q-img
        src="https://cdn.myikas.com/images/theme-images/955b9bb8-3e96-4310-a225-2472abcd1cba/image_3840.webp"
        style="height: 400px; width: 400px"
      ></q-img>
    </div>
    <div class="col-8" style="width: 950px">
      <p id="aa">Cilt Bakım Rutindeki Adımlar</p>
      <p id="bb">5.ADIM: SPF</p>
      <p id="cc">
        Cildi korumasız şekilde güneşe maruz bırakmak hızlı yaşlanma
        belirtilerine sebep olur. Rutininizin son adımında mutlaka güneş
        koruyucu kullanmanızı öneriyoruz. Ciltte yağlanmaya sebep olmadan UV
        ışınından korunmanıza Invisible UV Protection Daily Ultimate Moisturizer
        yardımcı olacak.
      </p>
    </div>
  </div>
  <div id="roww" class="row" style="width: 800px">
    <div class="col q-pt-xl" v-for="product in products5" :key="product">
      <div>
        <q-img :src="product.src" style="height: 350px; width: 325px"></q-img>
      </div>
      <div>
        <p
          class="text-center q-pt-md"
          style="height: 80px; width: 300px"
          id="productnamee"
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
  </div>
</template>

<style lang="scss">
#first {
  padding-top: 160px;
  font-size: 35px;
  font-weight: 10;
  font-family: "Museo", sans-serif;
  color: #435364;
}

#aa {
  padding-top: 150px;
  padding-left: 50px;
  font-size: 17px;
  font-family: "Museo", sans-serif;
  color: #435364;

  line-height: 1;
}
#bb {
  padding-left: 50px;
  font-size: 45px;
  font-family: "Museo", sans-serif;
  color: #435364;
  line-height: 1.2;
}
#cc {
  padding-top: 20px;
  padding-left: 50px;
  font-size: 17px;
  font-family: "Museo", sans-serif;
  color: #435364;
}
#roww {
  padding-top: 15px;
  padding-left: 60px;
  background-size: 350px 350px;
}
#productnamee {
  padding-left: 20px;
  font-size: 18px;
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

export default defineComponent({
  name: "rutin-o",
  data() {
    return {
      products1: [
        {
          price: "₺ 249.90",
          name: "Nemlendirici ve Bariyer Onarıcı Kuru ve Karma Ciltler için Hyaluronik Asit Temizleme Jeli 200 ml (%0,5 Hyaluronic Acid, %0.5 Sodium PCA Ceramide) ",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/09d165bf-5d49-4b07-8bc2-1332443ba386/1080/mavi-cleanser---new.webp",
        },
        {
          price: "₺ 249.90",
          name: "Sivilce ve Siyah Nokta Karşıtı Yağlı ve Karma Ciltler İçin Arındırıcı Temizleme Jeli 200 ml (0,5 % Salicylic Acid, 1% Niacinamide)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/879af128-b62b-4488-a7d9-df90a1846b42/1296/sari-cleanser---new.webp",
        },
        {
          price: "₺ 379.90",
          name: "Arındırıcı ve Canlandırıcı Tüm ciltler için  Meyve Asitleri İçeren Toz Temizleyici 55 Gr (%0,2 Azelaik Asit & Malik Asit) ",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/bd62af63-489f-423f-9d49-8349adccaeb8/1080/tps207-1.webp",
        },
        {
          price: "₺ 409.90",
          name: "Arındırıcı Ve Aydınlatıcı Enzim Peeling Toz Temizleyici 55 Gr (%0,6 Azelaic Acid & Malic Acid)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/c62131db-886e-4266-904b-f247a71c9c52/1296/tps206-1.webp",
        },
      ],
      products2: [
        {
          price: "₺ 299.90",
          name: "TPS X LESS (Oil Control Toner + 2 Temizleme Pamuğu)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/f52b74b6-a634-4bed-9b0e-8789cd37cc64/image_1080.webp",
        },
        {
          price: "₺ 279.90",
          name: "Gözenek Sıkılaştırıcı Ve Arındırıcı Sürdürülebilir 2'Li Cilt Bakım Seti (Less Pamuk + TPS Tonik)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/7280794b-a0c5-415a-88d1-9218339ead23/image_1080.webp",
        },
        {
          price: "₺ 279.90",
          name: "Yağlı Ve Karma Cilt Sivilce Ve Siyah Nokta Karşıtı,Gözenek Sıkılaştırıcı Salisilik Asit Tonik 200 Ml",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/197bf082-6cfc-4625-b86a-00466512cdcb/1080/275697b1-11d0-4b75-aa0b-8fd9f4ebad42.webp",
        },
        {
          price: "₺ 279.90",
          name: "Sivilce Ve Siyah Nokta Karşıtı, Gözenek Sıkılaştırıcı Yağlı Ve Karma Ciltler Için Glikolik Asit Tonik 200 Ml.",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/69332226-cb72-4e61-92db-d201896d9592/1080/tps104-1.webp",
        },
      ],
      products3: [
        {
          price: "₺ 269.90",
          name: "Gözenek Ve Siyah Nokta Karşıtı, Sivilce Önleyici Niacinamide Cilt Bakım Serumu 30 Ml (Niacinamide 5% & Zinc Pca 1%)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/61399e99-7a42-42b1-9e8a-5b39bc4c561b/1080/bdd33a59-8560-4319-bfde-1513b38b96e0.webp",
        },
        {
          price: "₺ 279.90",
          name: "AHA & BHA Canlandırıcı & Cilt Tonu Eşitleyici Kırmızı Peeling Cilt Bakım Serumu 30 Ml  (Aha 10% + Bha 2%)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/b8254b91-2172-4fc3-b2f1-8276138a7dc6/1080/tps101-1.webp",
        },
        {
          price: "₺ 269.90",
          name: "Yoğun Nemlendirme Ve Dolgunlaştırıcı Etkili, Yenileyici Cilt Bakım Serumu 30 Ml (Hyaluronic Acid %2 + B5)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/e792c062-cf71-4d08-b04b-bb7446949cde/1080/578f3af1-b9d9-448a-8aef-12f7dd04eaf9.webp",
        },
        {
          price: "₺ 279.90",
          name: "Leke Karşıtı Ve Leke Görünümü Azaltıcı Arbutin Cilt Bakım Serumu 30 Ml  (Arbutin %2 + Hyaluronic Acid)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/ab67e95e-3740-477d-9742-ab4210c159c5/1080/tps103-1.webp",
        },
      ],
      products4: [
        {
          price: "₺ 269.90",
          name: "Yoğun Nemlendirme Ve Dolgunlaştırıcı Etkili, Yenileyici Cilt Bakım Serumu 30 Ml (Hyaluronic Acid %2 + B5)",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/e792c062-cf71-4d08-b04b-bb7446949cde/1080/578f3af1-b9d9-448a-8aef-12f7dd04eaf9.webp",
        },
        {
          price: "₺ 279.90",
          name: "24 Saat Etkili Günlük Yoğun Nemlendirici Cilt Bakım Kremi 50 Ml",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/bb4f1ad1-689c-4f1b-a2e7-3c71a0aa1b6b/image_1080.webp",
        },
      ],
      products5: [
        {
          price: "₺ 209.92",
          name: "Yüksek Koruma Ve Nemlendirici Etkili Güneş Koruyucu Krem SPF 50, 50 Ml.",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/4d7e12cd-1e65-4f55-9e55-726f22a85049/image_1080.webp",
        },
        {
          price: "₺ 209.92",
          name: "Leke Karşıtı Ve Cilt Tonu Eşitleyici Renkli Güneş Koruyucu Krem SPF 50, 50 Ml",
          src: "https://cdn.myikas.com/images/d3378d43-0c01-4053-9a53-957c4ae7edc1/71bbb658-bef0-4049-a8d3-c8319bc17c06/1080/tps209-1.webp",
        },
      ],
    };
  },
});
</script>
