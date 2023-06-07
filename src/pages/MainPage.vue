<template>
  <q-layout id="lay" class="bg-white">
    <div class="q-pa-md example-column-row-width">
      <div class="column" id="ana">
        <div class="col" id="carousel">
          <q-carousel
            v-model="slide"
            navigation
            infinite
            animated
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="grey"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            style="height: 660px"
            class="bg-white"
          >
            <q-carousel-slide name="style" class="column">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/85ee742b-69e8-4d9e-a85b-977a4403f1b5/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/b952a5c4-1c04-49c1-b195-00cb29f5d1e9/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/91d14b8e-2aef-4331-94c8-57697349bb9a/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide name="show" class="column no-wrap flex-center">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/d2505957-9222-49ba-b3ec-98ddc8ce1645/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>

            <q-carousel-slide name="e" class="column no-wrap flex-center">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/ac2672e1-ab3c-48c4-b63d-ddfa7dc57d48/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>
            <q-carousel-slide name="f" class="column no-wrap flex-center">
              <q-img
                src="https://cdn.myikas.com/images/theme-images/69dee816-8ffb-45a9-8c8f-47df54ce0963/image_3840.webp"
                style="height: 660px"
              ></q-img>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <q-space />
    <q-space />
    <div>
      <div class="row" id="imgrow">
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/5aa2dfb3-bd6f-4a3c-a512-ed108a2030c9/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">Leke</p></q-img
          >
        </div>
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/925bb745-fab9-4d4a-8728-1c98715d0072/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">
              Nemlendirme
            </p></q-img
          >
        </div>
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/a8464384-cee6-476e-b8bd-61491b92c397/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">
              Güneş Koruma
            </p></q-img
          >
        </div>
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/cc758fc4-46ee-418e-b21f-3f8e6c86f2c1/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">
              Sivilce/Akne
            </p></q-img
          >
        </div>
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/7983f4ab-9f5e-4359-9744-c64b69a02b52/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">
              Kırışıklık ve İnce Çizgiler
            </p></q-img
          >
        </div>
        <div class="col" id="img">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/a3ea436d-5e2d-4e7b-9651-0dabb08c83aa/image_1080.webp"
            style="height: 300px"
            ><p class="text-center text-white" id="imgtext">
              Gözenek Problemi
            </p></q-img
          >
        </div>
      </div>
    </div>
    <div id="separator"></div>
    <q-separator class="bg-grey-4" />
    <div id="separator"></div>
    <div class="row">
      <div class="col"></div>
      <div class="col text-center" style="width: 300px">
        <h4 style="height: 50px" id="solution">
          Solution for healthy <br />skin!
        </h4>
        <div>
          <p id="thepurestsolution">
            The Purest Solutions for healthy skin! #thepurestsolutions
          </p>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div>
      <div class="row" id="fourimg">
        <div class="col">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/549033c3-5713-46b3-9ab8-cab36d5b1ae6/image_1080.webp"
            style="height: 450px; width: 350px"
          ></q-img>
          <div
            class="row text-center"
            id="etiket1"
            style="height: 50px; width: 350px"
          >
            Serum
          </div>
          <div
            class="row text-center"
            style="height: 50px; width: 350px"
            id="etiket2"
          >
            <p id="ürünegit">Ürüne Git</p>
          </div>
          <div
            class="row text-center"
            id="etiket3"
            style="height: 50px; width: 350px"
          >
            Tüm serumler
          </div>
        </div>
        <div class="col">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/bae9b5dd-6d61-4e78-9818-800401877f9a/image_1080.webp"
            style="height: 450px; width: 350px"
          ></q-img>
          <div
            class="row text-center"
            id="etiket1"
            style="height: 50px; width: 350px"
          >
            Tonik
          </div>
          <div
            class="row text-center"
            style="height: 50px; width: 350px"
            id="etiket2"
          >
            <p id="ürünegit">Ürüne Git</p>
          </div>
          <div
            class="row text-center"
            id="etiket3"
            style="height: 50px; width: 350px"
          >
            Tüm tonikler
          </div>
        </div>
        <div class="col">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/0bc0c48f-ee62-44c4-8191-021d49ebdb72/image_1080.webp"
            style="height: 450px; width: 350px"
          ></q-img>
          <div
            class="row text-center"
            id="etiket1"
            style="height: 50px; width: 350px"
          >
            Serum
          </div>
          <div
            class="row text-center"
            style="height: 50px; width: 350px"
            id="etiket2"
          >
            <p id="ürünegit">Ürüne Git</p>
          </div>
          <div
            class="row text-center"
            id="etiket3"
            style="height: 50px; width: 350px"
          >
            Tüm serumler
          </div>
        </div>
        <div class="col">
          <q-img
            src="https://cdn.myikas.com/images/theme-images/9677f8e2-8d47-41e5-b13a-2985b1b0aa31/image_1080.webp"
            style="height: 450px; width: 350px"
          ></q-img>
          <div
            class="row text-center"
            id="etiket1"
            style="height: 50px; width: 350px"
          >
            Serum
          </div>
          <div
            class="row text-center"
            style="height: 50px; width: 350px"
            id="etiket2"
          >
            <a href="http://localhost:8080/#/" id="hreff">Ürüne Git</a>
          </div>
          <div
            class="row text-center"
            id="etiket3"
            style="height: 50px; width: 350px"
          >
            Tüm serumler
          </div>
        </div>
      </div>
      <div class="row" style="height: 200px"></div>
    </div>
  </q-layout>
</template>

<style lang="scss">
.body {
  font-family: "Museo", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  line-height: 1.65;
  letter-spacing: 0em;
}
#toolbar {
  color: #435364;
}
#items {
  padding-top: 15px;
}

#bar {
  background-color: #435364ff;
}
#messagebar {
  background-color: #435364ff;
  font-family: "Museo", sans-serif;
}
#imgrow {
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 30px;
}
#imgtext {
  padding-top: 150px;
  font-size: 20px;
}

#carousel {
  padding-top: 60px;
}
#img {
  padding-left: 10px;
}
#separator {
  padding-top: 50px;
}
#solution {
  color: #435364;
  font-size: 40px;
}
#thepurestsolution {
  color: #435364;
}
#fourimg {
  padding-left: 30px;
}
#etiket1 {
  padding-left: 145px;
  padding-top: 15px;
  padding-bottom: 60px;
}
#etiket2 {
  background-color: #435364;
  padding-left: 135px;
  padding-top: 15px;
}
#hreff {
  text-decoration: none;
  color: white;
}
#ürünegit {
  color: white;
}
#etiket3 {
  padding-left: 125px;
  padding-top: 15px;
}
#resim {
  height: 700px;
}
#moretexts {
  padding-left: 50px;
  padding-top: 50px;
  font-size: 40px;
  color: #435364;
  font-family: "Museo", sans-serif;
  line-height: 1.65;
  letter-spacing: 0em;
}
</style>

<script>
import { defineComponent, ref, onMounted } from "vue";

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});

export default defineComponent({
  name: "MainPage",

  setup() {
    return {
      autoplay: ref(true),
      slide: ref("style"),
    };
  },
});
</script>
