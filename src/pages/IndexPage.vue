<template>
  <q-layout id="lay" class="bg-white">
    <div>
      <q-header elevated>
        <div class="fixed-top">
          <div class="text-center q-pt-sm q-pb-sm" id="messagebar">
            TÜM SİPARİŞLERDE KARGO ÜCRETSİZ!
          </div>

          <q-tabs dense class="bg-white" id="toolbar" style="height: 50px">
            <q-item clickable
              ><div>
                <img
                  class="q-pl-md text-center"
                  src="https://cdn.myikas.com/images/theme-images/95c8bf9a-ae57-4bc1-914f-3c4b4a619033/image_1080.webp"
                  style="height: 40px"
                />
              </div>
            </q-item>
            <q-space />

            <q-item clickable id="items" name="ciltbakımı">Cilt Bakımı</q-item>
            <q-item clickable id="items" name="rutinoluştur" to="/cilt-a"
              >Rutin Oluştur</q-item
            >
            <q-item clickable id="items" name="aktifiçerikler">
              Aktif İçerikler</q-item
            >
            <q-item clickable id="items" name="sürdürülebilirlik"
              >Sürdürülebilirlik</q-item
            >
            <q-item clickable id="items" name="bizkimiz">Biz Kimiz?</q-item>
            <q-item clickable id="items" name="blog">Blog</q-item>
            <q-item clickable id="items" name="broşürler">Broşürler</q-item>
            <q-item clickable id="items" name="Nerelerdeyiz"
              >Nerelerdeyiz?</q-item
            >
            <q-space />

            <q-btn flat icon="search" />
            <q-btn flat icon="perm_identity" />
            <q-btn flat icon="shopping_bag" />
          </q-tabs>
          <q-separator class="bg-grey-4" />
        </div>
      </q-header>
    </div>
  </q-layout>
</template>

<style lang="scss">
.body {
  font-family: "Museo", sans-serif;
  font-weight: 300;
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

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      autoplay: ref(true),
      slide: ref("style"),
    };
  },
});
</script>
