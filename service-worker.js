/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c40c20135261f3913bcdc6c2a9e8c9bc"
  },
  {
    "url": "about/index.html",
    "revision": "25d2f5aa65279ce854e126ff56b9d539"
  },
  {
    "url": "assets/css/0.styles.de8e66ed.css",
    "revision": "ea41ef4442b7efec7202a13d56bc6f38"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fbcb034e.js",
    "revision": "98ebb1892a1aabdd6f7aface02ce7b5c"
  },
  {
    "url": "assets/js/100.9103eff6.js",
    "revision": "224f8867b01bddb5ec5f31fc017e2b33"
  },
  {
    "url": "assets/js/101.f7806ccc.js",
    "revision": "a7e7e1c080c92f78562720b9a44ec5b5"
  },
  {
    "url": "assets/js/102.b00cf1c9.js",
    "revision": "34cdae5e35573d7d8be009388e5960cc"
  },
  {
    "url": "assets/js/103.51dd4360.js",
    "revision": "6bae2e4862b1a8aafbae98714216bfe0"
  },
  {
    "url": "assets/js/104.87ec42d0.js",
    "revision": "14bac960b1bbee43b1a3c0b25aa9447b"
  },
  {
    "url": "assets/js/105.368a39cf.js",
    "revision": "85548a99823967c6e22202d5e884acf5"
  },
  {
    "url": "assets/js/106.c6ac33eb.js",
    "revision": "9a65735badc9e5673d2e953785c77b0e"
  },
  {
    "url": "assets/js/107.f052cdde.js",
    "revision": "723f5b83ac99bf88a2aee4a35d1c32a6"
  },
  {
    "url": "assets/js/108.ad147235.js",
    "revision": "87f70772c6757e27409e1b644512f4d9"
  },
  {
    "url": "assets/js/109.83ced5c5.js",
    "revision": "10f07044c768771284f7d753eb70f120"
  },
  {
    "url": "assets/js/11.a35f5d6d.js",
    "revision": "8c9c2618dda11d74f865071c18134383"
  },
  {
    "url": "assets/js/110.ed575205.js",
    "revision": "340e61fe5c69005f9ff8dc6c8201b2f1"
  },
  {
    "url": "assets/js/111.113ef622.js",
    "revision": "5b8ed58ffe4dd700e30de0ac1fa20d43"
  },
  {
    "url": "assets/js/112.eff1f1f2.js",
    "revision": "a68e365fed79b7c82ae312173e1a98c4"
  },
  {
    "url": "assets/js/113.bb19c68c.js",
    "revision": "0a5b397c869b51f21854c6cd77c4fec8"
  },
  {
    "url": "assets/js/114.93d1e51c.js",
    "revision": "b4e03e5c52ade531a616ed0aeb194f4f"
  },
  {
    "url": "assets/js/115.bbfac958.js",
    "revision": "f2dac6795b73a6b8d4700461688ac39b"
  },
  {
    "url": "assets/js/116.86f18c65.js",
    "revision": "62ecb893727c1905202683d5b341d1f8"
  },
  {
    "url": "assets/js/117.90404183.js",
    "revision": "ef9fa619354958b1718333efc47a119f"
  },
  {
    "url": "assets/js/118.29d3d32d.js",
    "revision": "d54fb9f008d4ccf5d536f8d25bc59b07"
  },
  {
    "url": "assets/js/119.b6975bd5.js",
    "revision": "ccfbdc4131bf032cad2c803ad85ee9aa"
  },
  {
    "url": "assets/js/12.145c8996.js",
    "revision": "4192489db7eef956d769fb0889cbdd2e"
  },
  {
    "url": "assets/js/120.59567f7a.js",
    "revision": "aabae13fec5f705a4406460e8c44f089"
  },
  {
    "url": "assets/js/121.b12d2d42.js",
    "revision": "a0847f4e4f4db66bd264c6171c3cfd82"
  },
  {
    "url": "assets/js/122.289282a0.js",
    "revision": "584fe65b921dffd9568392e8c8d19bad"
  },
  {
    "url": "assets/js/123.03076667.js",
    "revision": "7f4a87ea2cd1bbaa48f5eabf4348471c"
  },
  {
    "url": "assets/js/124.91fed1a1.js",
    "revision": "67e089ff624ddcb3db24dadf15ea8424"
  },
  {
    "url": "assets/js/125.bb97dc71.js",
    "revision": "177ba1dab18c51546121be594a54015e"
  },
  {
    "url": "assets/js/126.1531e22a.js",
    "revision": "a1fed50cf416a183824bbae2f6842e82"
  },
  {
    "url": "assets/js/127.e69b3302.js",
    "revision": "f962f0c2dd3315bf02f6032a708f4e26"
  },
  {
    "url": "assets/js/128.20f2d120.js",
    "revision": "1a754e5d562b9b2567e12a7ee1d8a245"
  },
  {
    "url": "assets/js/129.27fe1854.js",
    "revision": "423b0ef5e094f20c6a860f7ae37b8cbb"
  },
  {
    "url": "assets/js/13.abf4088d.js",
    "revision": "f9c6313b043292307d36cd743e80dc13"
  },
  {
    "url": "assets/js/130.88044cc1.js",
    "revision": "81701fa81c345ba92be337544739e5c8"
  },
  {
    "url": "assets/js/131.88043d37.js",
    "revision": "24aafcb70efed42c8c5b82a0a2429f9f"
  },
  {
    "url": "assets/js/132.d0ab1f98.js",
    "revision": "dbd8c338bfbfaea9e6a04e07d5ea8bfa"
  },
  {
    "url": "assets/js/133.31b4eff0.js",
    "revision": "ec2b26ce5500fbcd3c5be158a6dd8d25"
  },
  {
    "url": "assets/js/134.8ceb74a7.js",
    "revision": "4bad8a753719f7026d1740ac516abb9d"
  },
  {
    "url": "assets/js/135.166601cf.js",
    "revision": "4a892abd35fdfde30dc3dab35d178aed"
  },
  {
    "url": "assets/js/136.72e072b3.js",
    "revision": "70289c3487bb0838b68ab26ce2dc50bf"
  },
  {
    "url": "assets/js/137.560938d2.js",
    "revision": "274a0691d185cbaade09e5fb82aead25"
  },
  {
    "url": "assets/js/138.d918fcb0.js",
    "revision": "5bb87faff7c2339a03fbfda32c2363fe"
  },
  {
    "url": "assets/js/139.a584a428.js",
    "revision": "15c873985c509f04117c843f0f9360b6"
  },
  {
    "url": "assets/js/14.27a3d759.js",
    "revision": "27c7b91733d517958865960ff9fd354b"
  },
  {
    "url": "assets/js/140.ee5fc9c6.js",
    "revision": "9b72e29c266f3346c73c7b8e30aee8f5"
  },
  {
    "url": "assets/js/141.5d014792.js",
    "revision": "e760caad616994487a8db7ceaca8ac18"
  },
  {
    "url": "assets/js/142.da77d5ac.js",
    "revision": "673ac64c114aaced45efab1b1b85f244"
  },
  {
    "url": "assets/js/143.e1139106.js",
    "revision": "9b5f5c91161167eff21da359cfdc8ac0"
  },
  {
    "url": "assets/js/144.444c4869.js",
    "revision": "0520d7e532605ab5f467b135a70db45a"
  },
  {
    "url": "assets/js/145.d15834a1.js",
    "revision": "adaba1ba2a105e042bb6600531a4210b"
  },
  {
    "url": "assets/js/146.18b111e7.js",
    "revision": "941593307683134e143278c21595a671"
  },
  {
    "url": "assets/js/147.0df2f17f.js",
    "revision": "1643a2a94cb1fdbe3f4370a2c384e341"
  },
  {
    "url": "assets/js/148.d4f1c027.js",
    "revision": "16397c6078774ada6afeadb4ec81a40f"
  },
  {
    "url": "assets/js/149.0d44dfba.js",
    "revision": "a4c5b05d094dca673a6720fff6787814"
  },
  {
    "url": "assets/js/15.03339886.js",
    "revision": "6a4900060550fc5ba6ad02db08f1895f"
  },
  {
    "url": "assets/js/150.ef6c4398.js",
    "revision": "5798b89e09fc00c8d13bbb1511917882"
  },
  {
    "url": "assets/js/151.94d55cd1.js",
    "revision": "f37b7f3d9a3f6183b9d229c0025ab3e2"
  },
  {
    "url": "assets/js/152.4acdd6eb.js",
    "revision": "d1978936403af5088a261b581350a136"
  },
  {
    "url": "assets/js/153.9dd6b14d.js",
    "revision": "5695eb3957819311784997a19af38e74"
  },
  {
    "url": "assets/js/154.ffbebf94.js",
    "revision": "60a682fcf4fd0521906423dd8666606a"
  },
  {
    "url": "assets/js/155.4ae64519.js",
    "revision": "f09b37228fe9bac5b4cb467606a342d9"
  },
  {
    "url": "assets/js/156.e87579f7.js",
    "revision": "084669ae3cc238ea6b0b47dbc9cc3229"
  },
  {
    "url": "assets/js/157.57b5097e.js",
    "revision": "969f9e512f83e31842cf301042095f60"
  },
  {
    "url": "assets/js/158.44a4b199.js",
    "revision": "61dabe251a29115e2aa9e670f118e6d7"
  },
  {
    "url": "assets/js/159.c95f5824.js",
    "revision": "592aea25ec45f3ea6a5f47f735f43028"
  },
  {
    "url": "assets/js/16.f45f5b08.js",
    "revision": "8bdab7f500b59c3b2932a754b3a62ef4"
  },
  {
    "url": "assets/js/160.3249127d.js",
    "revision": "c8d7d0a207c99e71a329dc6dab045f43"
  },
  {
    "url": "assets/js/161.b5ebc828.js",
    "revision": "bba32144bd7f6a8be3896f632590f480"
  },
  {
    "url": "assets/js/162.e6cc0e44.js",
    "revision": "b6511439fe652d646cd0a2f366a21c21"
  },
  {
    "url": "assets/js/163.cea0aff4.js",
    "revision": "0cec1787fd14d97edb18c6e3f56b45e2"
  },
  {
    "url": "assets/js/164.df9693d9.js",
    "revision": "0f03b4a6cdae9f48cfb46b0376a2a37c"
  },
  {
    "url": "assets/js/165.1b891c8c.js",
    "revision": "cac8eee00638962c351955bf48caf018"
  },
  {
    "url": "assets/js/166.02666039.js",
    "revision": "e62e822d9eb45a29d447e79be0e196be"
  },
  {
    "url": "assets/js/167.ecf23072.js",
    "revision": "2fe0f840767f75f64bfc4f34cfe86b44"
  },
  {
    "url": "assets/js/168.bb6417b0.js",
    "revision": "b125c76787f0baf458de2eb971cb2b8e"
  },
  {
    "url": "assets/js/169.0f1cec0e.js",
    "revision": "878d1f6a88d684aa0ee79933d5649ed6"
  },
  {
    "url": "assets/js/17.afe9fc09.js",
    "revision": "978acaef6929d199b553dc9f4bf62ec1"
  },
  {
    "url": "assets/js/18.8763cf34.js",
    "revision": "e46e0194ff5f57bc191d5194500552c2"
  },
  {
    "url": "assets/js/19.1c8e975a.js",
    "revision": "b57bfe2132cd8673c6dbeeda0452158d"
  },
  {
    "url": "assets/js/2.88568264.js",
    "revision": "f5a8d932a38b7eb354f75baedf75f339"
  },
  {
    "url": "assets/js/20.88419968.js",
    "revision": "a8651f6899a268e63633b19e26f9dbd6"
  },
  {
    "url": "assets/js/21.6a62cd95.js",
    "revision": "c3205cf7b3f470033bc352114d4c4427"
  },
  {
    "url": "assets/js/22.68b2a074.js",
    "revision": "6087443c205ca64d999d949dc5c4d385"
  },
  {
    "url": "assets/js/23.2d440af6.js",
    "revision": "10145be2084903528f9a0c7b4654a21b"
  },
  {
    "url": "assets/js/24.e8022dbd.js",
    "revision": "e2d09a8939723d1c3a10a8749f8616eb"
  },
  {
    "url": "assets/js/25.54d8e1bf.js",
    "revision": "8141ae37dffdef1b93a682f57b65fb23"
  },
  {
    "url": "assets/js/26.9fc7482b.js",
    "revision": "c2c52eca0b54b1b81970336b6880fe84"
  },
  {
    "url": "assets/js/27.6cde4b6a.js",
    "revision": "714c44d70fa6d1924a069c516f206146"
  },
  {
    "url": "assets/js/28.9ff12c76.js",
    "revision": "bbcf71c889776f33df6f7d45df4dc9f4"
  },
  {
    "url": "assets/js/29.c16b98a3.js",
    "revision": "d2be11809d09b27bf958ce77c1bb5116"
  },
  {
    "url": "assets/js/3.cc606638.js",
    "revision": "66ce270d96cb8dd3460d18b7546a7b8f"
  },
  {
    "url": "assets/js/30.94f034bc.js",
    "revision": "9023c03f04d80f7d7b2151b39752eff5"
  },
  {
    "url": "assets/js/31.766e07c7.js",
    "revision": "4b9eb04417f3b29dbf64cd4b799b0900"
  },
  {
    "url": "assets/js/32.34be02eb.js",
    "revision": "80928a897f82e855ba3be7c13a4dc472"
  },
  {
    "url": "assets/js/33.7a1f20c2.js",
    "revision": "4102baad91f787af6859cc538a7ec2c3"
  },
  {
    "url": "assets/js/34.50fd0cce.js",
    "revision": "33d0a26765633597aaaaae57cf095bc2"
  },
  {
    "url": "assets/js/35.531cea5a.js",
    "revision": "58b855c98ae20c091538adc232261b2f"
  },
  {
    "url": "assets/js/36.cfc3d6df.js",
    "revision": "ad411af7f7cc0018a53308686d6f4904"
  },
  {
    "url": "assets/js/37.d8cd7583.js",
    "revision": "2b94a3d0329d412f3eb40f3e3c419cf7"
  },
  {
    "url": "assets/js/38.6c111b51.js",
    "revision": "87dc1bf82acc7b4b9332825b7453e8a4"
  },
  {
    "url": "assets/js/39.d7ce6825.js",
    "revision": "d2ae03fa39d9da22f18f7d8ff7ec30bb"
  },
  {
    "url": "assets/js/4.f1e467ef.js",
    "revision": "ab22b078456b5c1fd630de767c980247"
  },
  {
    "url": "assets/js/40.3b7bd06a.js",
    "revision": "b1970b78e2dc3fd07f9ce621dd94d15a"
  },
  {
    "url": "assets/js/41.74b891ee.js",
    "revision": "4d8e39f93684ae5a67269cdc43195639"
  },
  {
    "url": "assets/js/42.2021b291.js",
    "revision": "5c5b9e31b384358b31fd194ae141bbe9"
  },
  {
    "url": "assets/js/43.0aca1057.js",
    "revision": "9d8d507578e319d12c807b7337717c61"
  },
  {
    "url": "assets/js/44.9d0e3d58.js",
    "revision": "5ead9639b83a4213fa5fae544dfa2298"
  },
  {
    "url": "assets/js/45.9b4a8ee3.js",
    "revision": "8f3a6f6a8d03bc438cec1fb837b1c2ba"
  },
  {
    "url": "assets/js/46.24497d92.js",
    "revision": "2d6c4d2a4b10a3bc25fbd0c2d58297a1"
  },
  {
    "url": "assets/js/47.f60c7e4a.js",
    "revision": "5304b50a590785c4672495f574fb1f7c"
  },
  {
    "url": "assets/js/48.a6c9ea42.js",
    "revision": "40c1bb7bca0b511bcb50f6018b4b23d6"
  },
  {
    "url": "assets/js/49.37eda12b.js",
    "revision": "7ad5013a9a7dfc028a347b8f35a2dadf"
  },
  {
    "url": "assets/js/5.11bdcb2d.js",
    "revision": "feb53d536c241d7185d73a7cf36dff5d"
  },
  {
    "url": "assets/js/50.04194e33.js",
    "revision": "cd428198a22338ec967ef32c40d8de39"
  },
  {
    "url": "assets/js/51.3166950b.js",
    "revision": "9f94fb95d79d4b0670d372574b2485b6"
  },
  {
    "url": "assets/js/52.53c63848.js",
    "revision": "a1cb58ce8435ddcf1dd88d1a7a2a406f"
  },
  {
    "url": "assets/js/53.640c3582.js",
    "revision": "cce4e6f768f6f9c31b25644188ec0b88"
  },
  {
    "url": "assets/js/54.94f2999b.js",
    "revision": "bb67c8d6f7d165fe0a5ead9ce39ac9af"
  },
  {
    "url": "assets/js/55.560900e0.js",
    "revision": "97fa2cd225868f8b2f04161aa3d4f077"
  },
  {
    "url": "assets/js/56.9aaad15e.js",
    "revision": "fe09c0aab4d39f104e37bd4c103e3046"
  },
  {
    "url": "assets/js/57.ee34f9da.js",
    "revision": "690be65f49b105f5bbde90fb43b80441"
  },
  {
    "url": "assets/js/58.2bffa10c.js",
    "revision": "1f4087e2c4a7ac20b2c24a34c18c7443"
  },
  {
    "url": "assets/js/59.d8945616.js",
    "revision": "809f753df9c41f47722c8126198ffc0c"
  },
  {
    "url": "assets/js/6.ce695ac8.js",
    "revision": "38f94ca1ce7e92f128f3b9588bc40091"
  },
  {
    "url": "assets/js/60.d4594ad5.js",
    "revision": "ad8df1a7fa133828f58c67fca844a3fb"
  },
  {
    "url": "assets/js/61.89c7b580.js",
    "revision": "5b24b997c737a9467622e97dd89ee925"
  },
  {
    "url": "assets/js/62.d825e5b5.js",
    "revision": "f172d7a07cb0ccb573bd1b836f5a2708"
  },
  {
    "url": "assets/js/63.964d963c.js",
    "revision": "366bcca62e6626f385de9c569b87a137"
  },
  {
    "url": "assets/js/64.b1742954.js",
    "revision": "7a57a8dd878bb34fedf0d37fc5fe47ae"
  },
  {
    "url": "assets/js/65.b45459ba.js",
    "revision": "8dd58be69579d6b8c8d83b6aa8cfc2db"
  },
  {
    "url": "assets/js/66.22c8c71d.js",
    "revision": "ae20fbfa6439480f6c830ab1d991d7b1"
  },
  {
    "url": "assets/js/67.f7c177de.js",
    "revision": "ef0e595df92eb54f10472a26694616aa"
  },
  {
    "url": "assets/js/68.d31b3c51.js",
    "revision": "8457b67474895e46569f2170bbbf9916"
  },
  {
    "url": "assets/js/69.f3f19e5e.js",
    "revision": "3719ea82f807e70e2137ad405aa46df3"
  },
  {
    "url": "assets/js/7.e0130bb9.js",
    "revision": "072ccfc800e021fbe4f442bc867fc7a7"
  },
  {
    "url": "assets/js/70.b76743b8.js",
    "revision": "75d15b54aadc59e8c36a8a26a8d51734"
  },
  {
    "url": "assets/js/71.84444059.js",
    "revision": "a36ee0bdd2bf24ea111421df0856b5aa"
  },
  {
    "url": "assets/js/72.ead4b414.js",
    "revision": "f5c835ede0448b2bb53ccfb64c106163"
  },
  {
    "url": "assets/js/73.f91d755e.js",
    "revision": "ec8288ba33173daffe43317a55069374"
  },
  {
    "url": "assets/js/74.f5a25860.js",
    "revision": "287b41977af897915b7ba4c9d176ce8e"
  },
  {
    "url": "assets/js/75.7c7d4c24.js",
    "revision": "c4dac65f6a1d7bfab645996e1787422b"
  },
  {
    "url": "assets/js/76.a6476932.js",
    "revision": "923ee38698a59a36502b42fd3283a01a"
  },
  {
    "url": "assets/js/77.5d10eae4.js",
    "revision": "fc9d5b8c7ea1aed7eb1c560de8eee982"
  },
  {
    "url": "assets/js/78.70f433fa.js",
    "revision": "e6276b82538f6376d9d480feca02994b"
  },
  {
    "url": "assets/js/79.bf117f6e.js",
    "revision": "8f1d481713edce57e56beff2eaead6c3"
  },
  {
    "url": "assets/js/8.43df9305.js",
    "revision": "c09431f802493e6f6f9cc327a1a2d9c8"
  },
  {
    "url": "assets/js/80.1f6056ac.js",
    "revision": "e52a6a5273ac25d9132d62e28d8735dd"
  },
  {
    "url": "assets/js/81.4bd65c9b.js",
    "revision": "3f059f0f38f86ccab0e58caa83208a9d"
  },
  {
    "url": "assets/js/82.040c7c52.js",
    "revision": "3757f0b50a4910e2fff0570de7dccd1d"
  },
  {
    "url": "assets/js/83.90eb7265.js",
    "revision": "cd6f2626e2ee1dab77481d8126ed3b33"
  },
  {
    "url": "assets/js/84.d4d8efec.js",
    "revision": "ad31f262b05615a88b14b24e886a66ba"
  },
  {
    "url": "assets/js/85.a986d859.js",
    "revision": "1fe481327fc0a1f221de72ed8156249a"
  },
  {
    "url": "assets/js/86.0de649e8.js",
    "revision": "c71f161e3b6e6bb2c4372698361ae3b0"
  },
  {
    "url": "assets/js/87.1752e08a.js",
    "revision": "27abd1a26e782384b2ef166b7a1035cb"
  },
  {
    "url": "assets/js/88.48a93f6b.js",
    "revision": "30dd1b8f451ea8440eb92c6a2838f0f5"
  },
  {
    "url": "assets/js/89.a4444e6f.js",
    "revision": "39c3fce9d072afbf6618fbb767446d47"
  },
  {
    "url": "assets/js/9.ae7ee45d.js",
    "revision": "700a0fb2b0d0b8a2ff2696ba71eea6f9"
  },
  {
    "url": "assets/js/90.fe2a9845.js",
    "revision": "ec92dbe409e38e53784948fbc2f7e7f6"
  },
  {
    "url": "assets/js/91.bb77d252.js",
    "revision": "1af44c7bd6fba3e14a7520b875a5a596"
  },
  {
    "url": "assets/js/92.5db3f2e3.js",
    "revision": "69de7cf05030aa92c10e2618b4ad023c"
  },
  {
    "url": "assets/js/93.1bbdbba4.js",
    "revision": "9d6163021d9eb634d98ed5fc9fc3d087"
  },
  {
    "url": "assets/js/94.074f9192.js",
    "revision": "edf99cc5780e904d7feaf143ca2c5528"
  },
  {
    "url": "assets/js/95.2cff0e42.js",
    "revision": "f45464c5b0c1b42d29fe21043064778b"
  },
  {
    "url": "assets/js/96.1154e747.js",
    "revision": "849419ff2c4beb7eb0dc60a0972e519a"
  },
  {
    "url": "assets/js/97.d60132e0.js",
    "revision": "1e63ccdfb07985d974f892c4e2a19306"
  },
  {
    "url": "assets/js/98.5b779fc5.js",
    "revision": "dbd39aae419f01eba4038202015dba4f"
  },
  {
    "url": "assets/js/99.26798082.js",
    "revision": "cc940a451b1b8b11801adb383d4b4bd2"
  },
  {
    "url": "assets/js/app.71b4c543.js",
    "revision": "94d85e1a9f05dcc9e0a6412b39a8df7c"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "58ae8e1c46f5e02f40b4c3c90b84bc43"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "77e664ccb410de6b893c1c28fb8c4906"
  },
  {
    "url": "friends/index.html",
    "revision": "40a11e3b3ea5575ad5c457228eed0395"
  },
  {
    "url": "guide/index.html",
    "revision": "651f8db70d63c0c47352e28f7e251f35"
  },
  {
    "url": "index.html",
    "revision": "b6e6c7ccdc629ac4161b40bc4e1d94e4"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "49b6720342b8518b4a365daa2b16ae64"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "750145f7455909dfb6fcf71c321e8f17"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "aa5d9083d841bee0032f898eda4355ff"
  },
  {
    "url": "notes/待整理.html",
    "revision": "ab3282902687840a57d7c98fe1e4e928"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "f0ad1c65fa7086c31cf85f5514ccca22"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "9455b04cd5c1fdb8c155feadbffcb550"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "1d2387289a35721c9d63fe701a9ae499"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "8f13122764dcb14f4870235d73a2b07d"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "a120157bfd04e51d8c8dca0724d2995e"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "6268cad6f916e467001bb3b29e2790e8"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "94a8761e9d6fded6862a78fb11c46574"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "3c49cd1ca4dad5393274d3e27ae5da2a"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "dfa1c45e23c6efe614b0bf9b375a94fb"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "eac9936874170c1aa9ae856901058eee"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "ed0a93232836c769b7fe9876cc88d119"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "760d166a67ca35013a92488428c7f7b7"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "0836f0a7599ef17579415c45316800e8"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "4df326be308120acd45c1731e7208456"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "2668cabbef665da4983c84dc7c9977b1"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "42f388ed86ae514ca412ec9ec02691e6"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "45ed9dc8c28ec91d0f87296804996534"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "d1a30e56082a8cf8847725fdad9a0f59"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "0025bf6cd5adca50579da303fe7262d7"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "da2a4ce07b68a6ce14a00aa129d7dcce"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "88ca27ffe1dacecec3b6dacc87915cd9"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "aa5d065f2f9528243044954f25c7eef8"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "a7769eae3250418d857e31f1ec4f8a2e"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "b58c6424cc49c94401a712977ac7e6cb"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "dff5e97c3938e7f577d6b2250488903c"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "075f638b8d1c738c07c5a1d69a2477cc"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "5477d584b73a337bf6767d1ced0165cb"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "8268ce489bc728ca764cbb046bd6fd37"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "59b75aedd489327baa2ef0fbaef0b30a"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "6a561f905e51da24a2d88643365e85df"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "bebaa0fd05a64d17f8df14ca845285bf"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "685c07e847e809557511eb5c1bb4d708"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "fbd8e444990f1378b6e9d26e08ad61b1"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "fd5d3ef4a709827beeec33bc6051a589"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "cdf4e7d33152990e42e73114bd865119"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "1f10c277a90f6a12319cae2b456ad36d"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "c263b3975dc034a1f13ffe9fcc51075e"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "f23a5fc50944f17367f7d94082482bd0"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "358783d63367ac7001ee3aea9daeb6b7"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "ea365770a1a81159fa4ba59c7e59b096"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "b6e3a42e87117634440ec471b8194f32"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "47cc4634951b09223ddc8a878d859066"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "332b5af534b48cf9a3d7be774b74911e"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "5c9160f0c766d40f27da641fe8b3cd70"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "6812b638a70f749488817891f9d672be"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "edfec41dda755943e6048a69ca9d03a3"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "f566dd6e5948b54b451070ae5785105b"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "a8705fa6ecd4703843b07c2218e8ec46"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "413ff76cac1341a850770be68194e4c0"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "70a2b45a9fc6438a8bd9af6c6e4ba758"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "f54f546964bea7d6397a2f8e04a8b5ca"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "14f03be7d49ec1b6530c79b73ae34b70"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "845966a6be132c0f00ffd096fa9f0048"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "69c859b0eb8e6b969154c8f7264da4ef"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "937565b9fefbaa6e7ef68adf384182c1"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "4145f311aae525902702994069e3a7e6"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "bdc908299dde58ddc987f7c3df6f8391"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "201c12f59a324384296cc7e50fb45071"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "1d9266572637e06ff3da8ac531e72e43"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "25cd809b30c42b9b2ada494a0d345271"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "44adb290d088c9978713d50ef8832ac5"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "cc0134f950a9bb9bf4d643adb2ab5171"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "73537e7d688a00f668a8f8826f5d1ed6"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "f0329718161b72e4de1c87d253e76081"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "a77a59d7f50fb64481d52c1713c9542a"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "cd3109088c0e9546141d88471eabd942"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "f439780fac06e0f3bd8501835c18d274"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "3652d4be8f17b2beced349abce709718"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "5b98ed564287d5a4646ffe9fcc648df5"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "4127c36b0e199adbc588d24cf76d79f7"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "a6a642152bec61cac253039184edaa13"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "18b7dda9b70bbea06bbb2a943632adcd"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "e0a18a1022abda5d222df6d00d72a302"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "476535ddc4cb256a062b3ea14dec2dca"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "d2acbe4b86004316b2fce0cfd5030c1f"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "16e8e79e725eecf7478eff0825f0fa2a"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "1842386a83e9bceba2afe1ab67faa472"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "33d58c4959dec8e0306122766d213e5e"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "81599ba3c56f7cbba419e3152589a52a"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "7adfd27b9c8602a19df0b22ada3d32ea"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "42b7079cac5009713c1122cef4f6219b"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "f358d82847ee73aa8ea72e3df1e4734f"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "0cf2b7c6665602ee40521c8955fbb868"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "598bb4b9803f38ddc53f9f3b8abe9ddc"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "c7c17cc648dc3aaa516a1eb30da1af1a"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "eb79cbcecd49cf9f47ead4c98a5eae94"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "c9b49db98d8e61fa61e663db5ae5cb54"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "be161bf87a5ce202d83f74dbcdf9774a"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "31182d4e4060a6aebd2e091111f770c3"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "a5ae9a9f07144d41d5fe0e74c1702c94"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "ea8a984175be81b31a512bbf78438fb6"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "0ebc39ad4301491447afd03944015f8d"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "4982f60dcf51ae151fdf9b58d5843bd3"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "72ce313437cb235beba07d912ca154c4"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "bfe7ac16d8a7a5a182f18487d6dc5423"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "52c3a2ef197838c8c888726f689cc395"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "9c1ea44fc965482c170bbf17564558a6"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "c1887b79bb475e9cc2b075b3e11b9570"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "51c1869f2c89f4545d044c3421a398eb"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "aa415dc3a817002cee031e9de3fbae23"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "ac0a1f8e4699c8c1d3a3e06a235d102f"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "cdb685086ae8029cc7d54517a93a0693"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "2579e830fc057639ab3a41485e050eaf"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "97d2d8b813280f3e3755d127afab737a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "54c6f25938df2d34b6ada06935ecb90a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "5b8196fb519099130bbdfba417c85faf"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "58b540cb7cb9eb9d9552829ba3308931"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "b2ebc7d3ce1465dcd281a509509a42f9"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "a03288f0f0dddc8a61502fe98814e771"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "ad0bd4cf76cd5871d763d24c49f430cd"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "c4cd12ee1547f5dc745808e556c91bd4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "0ab2d0930f534183c0006aeb1576ed33"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "b316d79f01460e7ddb7c4587b79c0ca9"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "33c0057a0deceafa0e1957f4d62d9b83"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "1290e59b2f9627eb53994b2dd36eb6a1"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "f90051ca657c77f36d74745e32988f4b"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "2d9fa372cb2fe593397ff823a11c873c"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "95aab02f8ebe151d8499b0b01eddea1a"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "52dd83e7d739a1face7fc17f56a1d714"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "650bcfb40e717fc5966c7efeadce5481"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "d8103d0bc20a91f294fabcef0a01d2dc"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "1954b74f0ad76c73d322e6360a8bd7bb"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "d1513862bc44e89a3810a9ce550f1e64"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "e3c751f98a726fa35f88fe9aedf43024"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "d1df40caca1b62dfef5d6880dac8fbc0"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "c3e158c72f3decd6a8d0e9a092d7b127"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "c4fb269f2a6e9837f072dfb9831049a8"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "81b44d9f7303150f0df37afbfc8b69ec"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "973ecf6139ae20db4f4fb0a7ab9524a8"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "38068abe9fd37b1ff7547d8121940323"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "f8428371025a379d8009845877a3a451"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "41846d4d332aacfb6287d469303a1dd9"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "cc34261791112b9c2de817688a82939a"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "29cbd24458127902b77b12f403b868a6"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "449d7f989e2040727577d5d2eb652e6c"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "a7d39bd9991f445bdc24d3fdb126f85a"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "3731b9c3a3ab927e2fd8b208038802ff"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "97fed76e078cc9d316d626cb8b5f5aa7"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "19405ed4a7d3f935d73d3b0edbd84583"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "a97662875280cdf8123f68c7c1236104"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "531638a1bd829b26e3052a1114622649"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "7742b81a5324bb043267b4c985dbf1fb"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "daa9558b6c3cc0288e2e4256b6902a8a"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "b0a407b93f13ba306a5d6f431889cb38"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "da949c024d4ec787bf717d47371dde04"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "6f887b243b89bc5f65bc01f29992b39e"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "ccbf24a224549a3ce961aa2d95958ef6"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "ccbf049e521fc2e7cc9c29241f0da535"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "fddc42791feefff2b9c85593802e2203"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "a57508393b553e84cffbf2db2181f6b2"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "4d71840f4666d22eafde55512d7dc0b9"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "b5200008e289a8ccded156724435615e"
  },
  {
    "url": "together/index.html",
    "revision": "58795b9a179549c1a515c13dd8545aad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
