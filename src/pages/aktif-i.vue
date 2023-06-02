<template>
  <q-layout>
    <div>
      <p id="firstitle" class="text-center">
        The Purest Solutions Ürün İçerikleri
      </p>
    </div>
    <div class="q-pt-xl"></div>
    <q-separator />
    <div class="row">
      <div class="col q-pl-lg q-pt-lg">
        <q-img
          src="https://cdn.myikas.com/images/theme-images/60ffb42d-417b-4cc5-91cf-7a81d8935a69/image_1080.webp"
          style="height: 700px; width: 700px"
        ></q-img>
      </div>

      <div class="col" id="info">
        <q-list>
          <q-expansion-item
            group="somegroup"
            v-for="title in informations"
            :key="title.title"
            style="color: white; width: 740px"
          >
            <template v-slot:header>
              <q-item-section
                ><div class="q-pb-md" style="color: #435364">
                  {{ title.title }}
                </div>
                <q-separator style="width: 700px"
              /></q-item-section>
            </template>

            <q-card>
              <q-card-section style="color: #435364">
                {{ title.info }}
              </q-card-section>
            </q-card>
            <div class="q-pl-md">
              <q-separator style="width: 700px" />
            </div>
          </q-expansion-item>
          <q-separator />
        </q-list>
      </div>
    </div>
  </q-layout>
</template>
<style lang="scss">
#firstitle {
  padding-top: 180px;
  font-size: 35px;
  color: #435364;
  font-family: "Museo", sans-serif;
  font-weight: normal;

  line-height: 1.65;
  letter-spacing: 0em;
}
#info {
  padding-top: 60px;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "aktif-i",
  data() {
    return {
      informations: [
        {
          title: "Alfa Hidroksi Asit/ Alpha Hydroxy Acid",
          info: "Alfa hidroksi asitler (AHA'lar) kozmetik ve dermatolojide sıklıkla kullanılan bir kimyasal bileşik sınıfıdır. AHA'lar, bitişik karbon üzerinde bir hidroksil grubu ile ikame edilmiş bir karboksilik gruptan oluşan organik asitlerdir. AHA'lar doğal olarak meyveler gibi birçok botanik maddenin asit bileşeni olarak ortaya çıkabilir, ancak sentetik olarak da üretilebilir. Yaygın örnekler laktik asit, sitrik asit veya glikolik asittir. AHA içeren ürünlerin endikasyon alanı, cildin nemlendirilmesinden, kırışıklıkların azaltılmasına ve en önemlisi cildin derin kimyasal soyulmasına kadar uzanmaktadır. Akne tedavisinde ve önlenmesinde AHA’lar: Akneler, gözeneklerin ölü deri hücreleri, yağ (sebum) yada bakteriler sebebiyle tıkanması sonucunda ortaya çıkar. AHA'larla peeling yapmak tıkanıklığı gevşetmeye ve temizlemeye yardımcı olur. Sürekli kullanım gelecekteki tıkanıklıkların oluşmasını da önleyebilir. AHA'lar ayrıca akneye meyilli ciltlerde yaygın olarak görülen genişlemiş gözeneklerin boyutunu da azaltmaya yardımcı olur. Eksfoliye edici glikolik ve laktik asitlerden gelen cilt hücresi döngüsü efekti, akne izlerini azaltır. AHA’ların Anti-aging etkisi: Yapılan araştırmalarda Alfa Hidroksi Asit kullanımı ardından kaba doku ve kırışıklıkta azalmanın yanı sıra epidermal kalınlaşma ve dermal kolajen kalınlığında artış gözlemlenmiştir. Cilt renk düzensizliği: AHA’ların daha pürüzsüz cilt oluşumuna destek olduğu ve aynı zamanda cilt rengi eşitsizliğini azalttığını ortaya koymuştur. ",
        },
        {
          title: "Beta Hidroksi Asit/ Beta Hydroxy Acids",
          info: "Alfa hidroksi asit (AHA) ve beta hidroksi asit (BHA), iki ana hidroksi asit sınıfıdır. Hem Alfa hidroksi asitler (AHA) hem de Beta hidroksi asitler (BHA) eksfoliyant görevi görürken, BHA’ların ince çizgilerin ve kırışıklıkların görünümünü azaltmada ve genel cilt dokusunu iyileştirmede de etkili olduğu gözlemlenmiştir. Aynı zamanda akne skarları, yara izi, pigmentasyon, cilt kuruluğu ve kırışıklıklar gibi çeşitli cilt durumlarının tedavisinde de kullanılır. Salisilik asit gibi Beta Hidroksi Asitler (BHA'lar) çözünürlüklerindeki farklılık dışında AHA'lara çok benzemektedir. Diğer dikkat çekici özelliklerinden biri de, AHA'ların suda çözünürlüğünün aksine BHA’lar lipitte çözünürler. Bu özellikleri sayesinde yağ folikülleri yoluyla cilde nüfuz etmeleri kolaylaşır, yağlı cilt ve açık komedonları olan hastalar için daha uygun olurlar. BHA'ların (örn. Salisilik asit) anti-inflamatuar etkisinin kanıtlanmasına ek olarak, bunların cilt tahriş edici etkisinin de AHA'lardan daha az olduğu kanıtlanmıştır. ",
        },
        {
          title: "Arbutin",
          info: "Arbutin, dünya çapında en yaygın önerilen cilt aydınlatma ve pigment giderme ajanlarından biridir. Yapısı gereği arbutin hiperpigmentasyon tedavisinde yararlı olabilecek melanin oluşumunu engelleyen aktivitelere sahiptir ve bu cilt tonu eşitsizliği tedavilerinde önerilen bir içerik olmasına sebep olur. Arbutin yüksek oranda bearberry bitkisinden elde edilir fakat armut, kızılcık ve yaban mersini ağaçlarının yapraklarında ve buğdayda da düşük miktarlarda bulunur ve melanin üretimini engeller. Arbutin neden önemlidir? Temel olarak ciltte oluşan kahverengi veya koyu lekeler tirozinaz enzimlerini içeren melanosit hücreleri tarafından üretilen melanin adı verilen pigmentlerden oluşur. Melanin ciltte renk bozukluğuna sebep olur ve aslında melanin, cildin güneş ve diğer etkenlere karşı savunma aracıdır ve bu savunma sırasında ciltte kalıcı yada geçici lekeler oluşturur. Bu pigmentler UV ışınları ile temas ettikleri her an etkinleşebilir bu nedenle güneşe çok yoğun bir şekilde maruz kalmak lekelerin oluşmasında veya çillerin görünür hale gelmesinde önemli bir nedendir. Cilt lekelerinin oluşmasında güneş kadar akneler, hormonlar, yanlış kullanılan kozmetikler veya ilaçlar da etkilidir diyebiliriz. Arbutin topikal olarak uygulandığında, tirozinaz enzimini inhibe ederek melanin oluşumunu önler. Bu özelliği sayesinde cilt aydınlatıcı ve koyu leke karşıtı olarak kullanılır. ",
        },
        {
          title: "Argireline",
          info: "Argireline, peptitler olarak bilinen amino asit zincirlerinden oluşur. Ciltte oluşan kırışıklık ve ince çizgilenmelerin azaltılmasında kullanılan en etkili peptidlerden biridir. Asetil hekzapeptit-8 olarak da bilinir. Gün içerisinde ifade oluşumunu sağlayan kas hareketleri çokça tekrarlanır. Uyurken dahi yüzümüzde kas gerilimleri meydana gelir. Peptitler, özellikle mimik hareketlerinden dolayı ortaya çıkan ince çizgilenmelerin ve derin kırışıklıkların azaltılmasında etkilidir. Cildin pürüzsüz ve canlı bir görünüm kazanmasında yardımcı olurlar. Asetil hekzapeptid-8, topikal enjeksiyonlara alternatif olarak ifade çizgilerinin oluşumundan sorumlu kasların gevşemesini ve kas hareketlerinin yavaşlamasını sağlayarak botox benzeri bir etki gösterir. Kozmetik avantajları Botulinum toksini ile aynı, ancak daha güvenli ve pürüzsüz olan bu kırışıklık önleyici peptit, kısa süreli kullanım sonrasında bile kırışıklık hacminin ve uzunluğunun görünümünü azaltır. Var olan kırışıklıkların giderilmesine yardımcı olduğu gibi yenilerinin de oluşmasını engeller. ",
        },
        {
          title: "C Vitamini/ Vitamin C",
          info: "C vitamini cildi güneş yanığı, foto yaşlanma, hiperpigmentasyon, kırışıklıklar, sarkma, kuruluk ve düzensiz cilt tonu gibi birçok sorundan korumaya yardımcı olabilir. Antioksidan özellikleri nedeniyle, C vitamini cildinizin doğal yenilenme sürecine yardımcı olur ve hasarlı cilt hücrelerinin onarılmasına katkı sağlar",
        },

        {
          title: "Çinko PCA/Zinc PCA",
          info: "Çinko PCA, pirolidon karboksilik asidin Çinko tuzudur. Sebum salgılanmasını azaltarak akne kontrolü sağlar ve aynı zamanda cildin nemini korumasına yardımcı olur. Çinko metal tuzları yapısı sayesinde akne kaynaklı iltihabı kurutur ve aynı zamanda sebum salgısını azaltır ve yağ bezlerinin aktivitesini kontrol eder. Basit bir molekül yapıdadır, doğal olarak vücudumuz tarafından üretilir ve cildimizin su kaybını yavaşlatmak için ürettiği “doğal nemlendirme faktörü” bileşenlerinden biridir. Çinko PCA Nasıl çalışır? Çinko PCA virüs ve bakterilerle savaşmaya yardımcı olur. Çinko ayrıca anti-enflamatuar özelliklere sahiptir. Bu, orta ila şiddetli akne ilişkili kızarıklık ve tahrişin hafifletilmesine yardımcı olur. ",
        },
        {
          title: "Glikolik Asit/ Glycolic Acid",
          info: "Glikolik asit; Alfa Hidroksi Asit (AHA) ailesindeki kimyasal eksfoliantlardan biridir. Cildin tonunu ve dokusunu iyileştirerek genel görünümünün iyileştirilmesine yardımcı olur. Daha canlı, pürüzsüz ve genç görünümlü bir cilt dokusu sağlar. Glikolik asit, küçük molekül yapısı sayesinde cildin katmanlarına rahatlıkla nüfuz edebilme özelliğinde olup, ciltte var olan ölü hücrelerin atılması ve fazla sebumun giderilmesi konusunda da uzmandır. ",
        },
        {
          title: "Hyaluronik Asit/ Hyaluronic Acid",
          info: "Hyaluronik asit (HA), cilt onarımı, yara iyileşmesi, doku rejenerasyonu, anti-inflamatuar gibi çeşitli biyolojik süreçlerin düzenlenmesinde çok yönlü bir rol oynar. Olağanüstü biyomedikal ve doku rejenerasyon potansiyeli nedeniyle HA, dermokozmetik ürünlerinin vazgeçilmez etken maddesidir. Hyaluronik asitin sunduğu geliştirilmiş cilt hidrasyonu, kollajen ve elastin uyarımı ve cilt yüzeyi restorasyonu ile gerçekleşir. Farklı özelliklerle dört çeşit Hyaluronic Acid'in bir kombinasyonu olan Hymagic-4D, ciltteki nemi korumak ve nem kazandırmak için cildin farklı katmanlarını hedefleyerek üç boyutlu bir ağ kurar. Bu şekilde cilt tamamen nemlendirilir ve bu doğrudan cildin elastikiyetini artırır. ",
        },
        {
          title: "Kafein/Caffeine",
          info: "Kafein, yaşlanma karşıtı yararları ile bilinen güçlü bir antioksidandır. Vazokonstriktör(damar daraltıcı) etkiye sahip olan kafein, kan damarlarını daraltarak etki eder, iltihabı ve şişkinliği azaltmaya yardımcı olur. Ayrıca cildi sıkılaştırır, aydınlatır, kırışıklıkları azaltır ve vücuttaki selüliti gözle görülür biçimde azaltır. ",
        },
        {
          title: "Niasinamid/ Niacinamide;",
          info: "Niasinamid, herkesin merak ettiği kozmetik ve dermokozmetik sektörlerde en yaygın ve kullanılan bileşenlerden biridir. Bu malzemeyi özel yapan nedir? Markalar ve kullanıcılar neden her gün bu konuda daha fazla bilgi edinmek için çabalıyor? Niasinamid nedir? Nikotinamid olarak da adlandırılan niasinamid, bir B3 vitamini ve temel bir besin maddesi olan aktif niasinin bir formudur. Vitamin B3 eksikliği cilt sorunlarına yol açabilir. Niasinamid, Viramin B3 eksikliğini önlemeye yardımcı olur. Vitamin B3, sindirim ve zihinsel sağlık adına da önemli bir rol oynar ve vücuttaki 200'den fazla enzimin çalışmasını destekler. ",
        },
        {
          title: "Pantenol(B5 Vitamini)",
          info: "Pantenol, dermatolojide cilt sağlığını korumak, cilt yüzeyini nemlendirmek, yumuşatmak ve bariyer onarımı için kullanılan bir aktif maddedir. ",
        },
        {
          title: "Azelaik Asit",
          info: "Azelaik asit (COOH-(CH2 )7 - COOH ), yakın zamanda önemli biyolojik aktivitelere ve bazı yararlı pratik terapötik uygulamalara sahip olduğu gösterilen, orta zincir uzunluğunda doymuş, 9 karbon atomlu bir dikarboksilik asittir. Arpa, buğday ve çavdar gibi tahıllarda doğal olarak bulunan bir asit çeşididir. Antimikrobiyal ve antienflamatuar özelliklere sahip asittir. Diğer asitlere kıyasla daha nazik bir soyucudur bu sebeple hassas ciltler için de uygundur. Cilt tonunu ve dokusunu iyileştirmeye yardımcı olan azelaik asit özellikle akne ve roza hastalığının tedavisinde tercih edilmektedir. Akne ve iltihaplanlamalara sebep olan bakterilerinin varlığını azaltır ve ciltte meydana gelen kızarıklık, düzensiz cilt tonu problemlerini tedavi eder. Bununla beraber cilt çatlaklarını sınırlamaya yardımcı olabilecek keratin üretimini de azaltır.",
        },
        {
          title: "Malik Asit",
          info: "Derinlemesine temizlik sebum kontrolü ve eksfoliasyon ile hücresel yenilenmeyi, akneyi önlemeyi ve aynı zamanda gözenek temizliği sağlamayı hedefler. Ayrıca kollajen üretimini teşvik ederek kırışıklıkları indirger ve pürüzsüz ve parlak bir görünüm sağlar.",
        },
        {
          title: "Ferulik Asit",
          info: "Ferulik asit, yaşlanma, ince çizgiler, kırışıklıklar, renk bozulması ve hasarlı cilt hücreleriyle savaşan antioksidan bakımından zengin bir aktiftir. Ferulik asit cilt tarafından kolayca emilebilir ve serbest radikallerle savaşmak ve hücre hasarını önlemek söz konusu olduğunda başarılı bir aktif maddedir. Ferulik Asit, cilt bakımı akabinde ultraviyole ışınların zararlarından korumaya ve yüksek düzeyde nemlendirmeye devam eder. Antioksidan özelliğiyle hücre onarımını hızlandırıp, fotohasarları, doğuştan gelen lekeleri, güneş lekelerini, çilleri ve kalıcı olmaya yüz tutmuş koyu lekeleri açar. Doğal beyazlatıcı etkisiyle göz kamaştıran kusursuz bir cilde kavuşturur. Yaşlanma belirtilerini ve mimik çizgilerinin oluşmasını engellemeye yardımcı olur. Ferulik Asit kendi yapısı itibariyle bol C Vitamin barındırdığı için cildin sıkılaşmasında büyük rol oynar. Kollajen oluşumunda çok etkili olup, kan dolaşımını hızlandırır.",
        },
        {
          title: "Tazmanya Biberi (Tasmannia Lanceolata Fruit Extract,)",
          info: "Yaygın olarak Tazmanya Biberi veya Dağ Biberi olarak bilinen Tasmannia lanceolata, Avustralya'nın güneydoğu kesimindeki ılıman yağmur ormanları ve ormanlık alanlara özgü bir çalıdır. Tazmanya Biberi, odunsu tatlılık ve bitki tonlarının birleşimi ile biber benzeri lezzetli bir tada ve aromaya sahip olan Tazmanya lanceolata ağacının bir meyvesidir. Cildi canlandıran ve gençleştiren, kuru, kaşıntılı ve iltihaplı cildi tedavi eden antioksidanlar açısından zengin olduğu için cilt için süper bir besin olarak kabul edilir. Tazmanya biberinden elde edilen bitkisel aktif; suda çözünür (ve alkolde çözünür) bir anti-inflamatuar aktif bileşendir. İritasyon, yanma, batma ve kaşıntı gibi hassasiyet durumlarında yatıştırıcı etki gösterir. Cilt kızarıklıklarında anında etki göstererek cildin daha konforlu bir hal almasında etkilidir.",
        },
        {
          title: "Centella Asiatica Ekstresi (Gotu cola ekstrakt)",
          info: "Centella Asiatica, yani diğer adıyla Gotu Kola’nın anavatanı Endonezya, Çin, Hindistan ve Güneydoğu Asya. Zengin bir amino asit, flavonoid, fitosterol ve yağ asidi kaynağı olan bu özel bitkinin cilt bakım ürünü olarak gösterdiği belki de en önemli özellik, yara, sivilce ve lekelerin iyileşmesine yardımcı olması. Gotu kola, bu gibi sorunlarla mücadele eden bir ciltte söz konusu bölgedeki kan akışını artırarak kan dolaşımını hızlandırıyor.",
        },
        {
          title: "Pepha Age (Scenedesmus Rubescens Extract)",
          info: "UV ve mavi ışığa maruz kaldıktan sonra yaşlanma görünümünü en aza indiren bir mikro alg. Doğal ve yapay mavi ışık kaynaklarının neden olduğu cilt hasarını azaltır ve genel cilt görünümünü iyileştirir. yaşlanma karşıtı ve güneşten koruyucu bir madde olarak işlev görür. UV ve mavi ışık kaynaklı cilt hasarına karşı koruma sağlar. Kollajen III üretimini uyarır ve güneş yanığı hücrelerinin ve oksidatif stresin sayısını azaltır. Ayrıca, genel cilt görünümünü iyileştirir ve güzel bir cilt görünümü sunar. Amino asitler, vitaminler (B3), alg sakkaritler ve mineraller (Zn) içerir. Mavi ışığa maruz kaldıktan sonra ciltteki hiper pigmentasyonu ve tahrişi anında ve güçlü bir şekilde azaltır ve eşit bir cilt tonunu geri kazandırır. Gündüz, güneş, güneş sonrası ve yenileyici gece bakım ürünlerinin formüle edilmesinde kullanılır.",
        },
      ],
    };
  },
});
</script>
