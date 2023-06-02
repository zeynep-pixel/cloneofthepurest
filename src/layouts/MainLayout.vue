<template>
  <q-layout id="lay" class="bg-white">
    <div>
      <q-header elevated>
        <div class="fixed-top">
          <div class="text-center q-pt-sm q-pb-sm" id="messagebar">
            TÜM SİPARİŞLERDE KARGO ÜCRETSİZ!
          </div>

          <q-tabs dense class="bg-white" id="toolbar" style="height: 50px">
            <q-item clickable to="/"
              ><div>
                <img
                  class="q-pl-md text-center"
                  src="https://cdn.myikas.com/images/theme-images/95c8bf9a-ae57-4bc1-914f-3c4b4a619033/image_1080.webp"
                  style="height: 40px"
                />
              </div>
            </q-item>
            <q-space />

            <q-item clickable id="items" name="ciltbakımı" to="/cilt-a"
              >Cilt Bakımı
            </q-item>
            <q-item clickable id="items" name="rutinoluştur" to="/rutin-o"
              >Rutin Oluştur</q-item
            >
            <q-item clickable id="items" name="aktifiçerikler" to="/aktif-i">
              Aktif İçerikler</q-item
            >
            <q-item clickable id="items" name="sürdürülebilirlik" to="/sürdü-b"
              >Sürdürülebilirlik</q-item
            >
            <q-item clickable id="items" name="bizkimiz" to="/biz-k"
              >Biz Kimiz?</q-item
            >
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
    <keep-alive> <router-view /></keep-alive>
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
</style>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      autoplay: ref(true),
      slide: ref("style"),
    };
  },
});
</script>
