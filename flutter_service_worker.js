'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "7ac6ee5cef539985145381e575b8981b",
"icons/flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/favicon.png": "7ac6ee5cef539985145381e575b8981b",
"icons/flutter_bootstrap.js": "bdfa194a20947653ea13c8cb992eb82b",
"icons/canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"icons/canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"icons/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"icons/canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"icons/canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"icons/canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"icons/canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"icons/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"icons/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"icons/canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"icons/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"icons/canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "eaf5dc0b59dbc6cc44c703fe4ee58186",
"icons/assets/env.json": "10f1070097adfbe45d8c8ad0fbe094a4",
"icons/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"icons/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"icons/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"icons/assets/fonts/MaterialIcons-Regular.otf": "78a27bbfc46a95f8b4bde8c6a6225277",
"icons/assets/NOTICES": "098bb660e4f9c555f8fcb7f15e48ad1b",
"icons/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"icons/assets/AssetManifest.bin.json": "98a2c85e0cc4a00e563e93ba5c676b2d",
"icons/assets/assets/Member-List-Export-2025-September-17-0519.csv": "1597896dd34660a8b5b94c4794027ed3",
"icons/assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816229809.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"icons/assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757660089947.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"icons/assets/assets/images/sad_face.svg": "4eccb4273d492e76924127c7520b7890",
"icons/assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757661642785.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"icons/assets/assets/images/img_app_logo.svg": "52e0f13a4898fcb7e2e6b785bc50d3e8",
"icons/assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757815904909.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"icons/assets/assets/images/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"icons/assets/assets/images/WhatsApp%2520Image%25202025-10-20%2520at%25206.59.32%2520AM.jpeg": "cc8ebcba90f3d66ce34fe1d1474e86d4",
"icons/assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816484789.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"icons/assets/assets/images/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"icons/assets/assets/images/apple_icon.png": "be00559b7ff821149abce8b2ddf4675d",
"icons/assets/assets/images/IMG_1961-1757564924074.jpeg": "b1f9482ac1a90156ed05de596944420e",
"icons/assets/assets/images/PHOTO-2025-09-12-14-33-14-1757658826356.jpeg": "0601ef083817eb20bfcdb7fce17988f7",
"icons/assets/assets/images/no-image.jpg": "1a5d2f8e2ae237e2dd853bd7b3fa7287",
"icons/assets/assets/members.json": "4a97544ef2e394c4dd7846373e8e61df",
"icons/assets/assets/README.md": "310a970fa31389fa571855f5bf8dee2d",
"icons/assets/AssetManifest.json": "de1e8a82587766009df5818ac3b285c4",
"icons/assets/AssetManifest.bin": "09e208078f0583f59a27d42c620bc709",
"icons/Icon-192.png": "fe3ec33f931b2d50a5fd151282f22036",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "5869feac268b17476840a251de4f9678",
"flutter_bootstrap.js": "e39b985a854d9046b3b4b46279469e59",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"index.html": "841ddba5a92de9d03579234ec3652e59",
"/": "841ddba5a92de9d03579234ec3652e59",
"assets/env.json": "10f1070097adfbe45d8c8ad0fbe094a4",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "fee69f909518c0f8e7fb441c3d26d5f7",
"assets/NOTICES": "098bb660e4f9c555f8fcb7f15e48ad1b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "98a2c85e0cc4a00e563e93ba5c676b2d",
"assets/assets/Member-List-Export-2025-September-17-0519.csv": "1597896dd34660a8b5b94c4794027ed3",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816229809.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757660089947.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/sad_face.svg": "4eccb4273d492e76924127c7520b7890",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757661642785.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/img_app_logo.svg": "52e0f13a4898fcb7e2e6b785bc50d3e8",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757815904909.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"assets/assets/images/WhatsApp%2520Image%25202025-10-20%2520at%25206.59.32%2520AM.jpeg": "cc8ebcba90f3d66ce34fe1d1474e86d4",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816484789.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/images/apple_icon.png": "be00559b7ff821149abce8b2ddf4675d",
"assets/assets/images/IMG_1961-1757564924074.jpeg": "b1f9482ac1a90156ed05de596944420e",
"assets/assets/images/PHOTO-2025-09-12-14-33-14-1757658826356.jpeg": "0601ef083817eb20bfcdb7fce17988f7",
"assets/assets/images/no-image.jpg": "1a5d2f8e2ae237e2dd853bd7b3fa7287",
"assets/assets/members.json": "4a97544ef2e394c4dd7846373e8e61df",
"assets/assets/README.md": "310a970fa31389fa571855f5bf8dee2d",
"assets/AssetManifest.json": "de1e8a82587766009df5818ac3b285c4",
"assets/AssetManifest.bin": "09e208078f0583f59a27d42c620bc709",
"manifest.json": "b81888306fb711ca3b343e1ef2f67e80",
"version.json": "e1f17f19cf6203e97437a0e5be7d88cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "d997d8d44ec7b34124140b364069e1e8",
".git/objects/13/a8dde1cc4b6bfa69ea09f2c062390143d33852": "5a59b57f78cc07f7587a047cd218df46",
".git/objects/2f/e232b078718e02a082b87a50e9172702a9af5f": "d6c3a124f1151a05ece7c469574828f5",
".git/objects/ca/6257bed4b06a449b643ecdc0af41f5d658b6b6": "0328a458bb05cbc9d8906f85b99bb0de",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/00/8bc059276be57fd9d818fa59fa67f37e102f6e": "d146b51a8ae59333a434828a427fb703",
".git/objects/7a/4bfa26482ba0dcf91c279750fdf23d2a7fa91b": "2bb14a6e0c352bc32d25433b11d5300d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b0/b87f0551d148aa636e2512b31390455891b0e9": "a255bcc8d4a8808313f8a70fcf14f946",
".git/objects/fd/30f62d2bd1cc335ad3bc85cf382aee58c3c968": "82da326df7302d827ffb7787e9b3dff7",
".git/objects/fd/d22be8dea0407ec82ed706745179ffdb6d5727": "9ac7c6e0b5307fecc5e3cd3cf974dd57",
".git/objects/b8/314e304ed4937a9af704c1ae71b557c2993dcf": "4926f4f2e604a2e1c71ffcf7e1df5d9f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a0/fbbe79db584de4b56c4f5323997ee9a0b2723e": "8b8f00f9af757cc7c21a4e1954b66213",
".git/objects/a0/ab9d2b394b39eec5143e7f61514a13ae088c5d": "304a3f334abf59658ec34ce3caccebe9",
".git/objects/83/7bb63c0b35d0beda641416a7231ae1f29d0865": "d879b4572427463261edcf5c45d01afe",
".git/objects/a3/5b86f42d8fcf7b8b1b979f41193bbc564fe121": "8b27f60ea30811d8759ae5690f23cd31",
".git/objects/e4/e5958c2aee1aab4d90ecfd76f57f6356aec8fc": "a52ec32d7b4b7b47ad7e7ea324f97798",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/be/bf0cfac0fa9492be41df93c01fce195df6bb97": "226e6b0b639b4b694323f60d3e890739",
".git/objects/9b/9748cddd84b46501853e2952f1ee9533c12357": "28ccfc535613d6f340d05b2d3b94f583",
".git/objects/2e/49fe941ca0b5483d6d655cf55a8c6f75ca4a67": "842c8596fb44ac64e9c7a75da6312c89",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/43/30b4b1c46762d65d0574e0d54aac42b404d457": "a0f0b2d5b24bba935a42b006d5204b91",
".git/objects/6e/3cabaeee64718142c987c30731d0343f62d0bf": "ad064a94f2f1f862cfb4493fb862385e",
".git/objects/95/db5a3a1df55ee7f82efe9d2a0e0911737659fa": "fae768ebba887c1e026c2245380c0023",
".git/objects/95/685e171b5edffdb50a36b9b1c899edb67f9388": "dab304fac6b7a45fbcd10b4f388d4c87",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/2c/aea68f4565a74f3eef6f49f0e632179a0b6e64": "0f2d871bcf854789406d5e580dd4ea97",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/1b/031f35ba6b93573e5835daf2351cef8bf541e2": "9fffe576a53d1dad8281efc374796d03",
".git/objects/9d/c4de240b56e6b251328d2ba480d81ce9ef41b9": "5d0f4db57338628558898bb24852f9a9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/07/97079e28749a51f1d0f5b0848491139428abc2": "37bc022d0327329e23ae316b0991ec3a",
".git/objects/9e/d35558ff5a255819568f950541aac68ccd996b": "fdd85211edb96f7da295f7daa7e1173c",
".git/objects/23/afb1bf4c1d37e185ed6b7919a477797ab111ce": "4c0402ed0e78b5256a7a356388794393",
".git/objects/66/1739d01f96d57f7044c78491eb9ab50cb468cd": "b03adc8dba9e2c5d958f031b421dbaa5",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/d8/22cd8009359f68abfbc3eae156bbba647772e7": "d5db3b9723562a08f81b074961673e8f",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/4c/c50443b341691faeb15384c671c919038ca050": "dea9723b4d2ab9f3b115d60d494695c1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/16989ce28f4e4867121f59aaf0deed2b392238": "e638d2a47334b666cf96f9edf8908c08",
".git/objects/ac/47c624d411006ad60449ee8f5c31eef617af2d": "85c498a1deec4c99874509590bf99dfe",
".git/objects/b9/1399a4aab77714268ea5c4ecafe3cfd9183dde": "dad865449d325d0292b2bb3cb6d7cadf",
".git/objects/0e/c6515f02e69ea73780358efbd6d606c29105ef": "daa706dcdd345e350e3ac0da4e879e72",
".git/objects/b1/600de46a0541cfb9dddbf6e87a0d8506683109": "157a732bdc0df6c156b8ab96e6e90968",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/4b/8d0c1d74c53aeefaeb595371e5038233423163": "3966e948f5cafda952b62bbaab917e05",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/44/4e59e6e7a44113e12548fb7c4098a60fc68751": "8a1b174f07f5f365655e62edc9206d6a",
".git/objects/b3/76b92a0738ea10ea1946bfd05a12e08189838c": "3c81b17838b976327c81543af5379a9b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/c4/ca0669ead7ba96823a60255ac123bf4f4faf68": "b73ec02391f4b8eca8b837909ac40354",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/88/f023f26163f7c462bf319c72b6fd9b294d36fa": "a514568f551f8876c26f58fd14278b93",
".git/objects/8c/4507c42076ef5bd440f41ff6b8a694bd0b9f77": "b5748e18e22b45e02e0d34f4b0b68c63",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/b6/8a2f6a6362ba2a387a8d5abb7fd364b7d299a1": "10b1750f4f0bf50ee256fcc2bbc34410",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/67/50184bc6628442a218cc27af2e40c2c27f74b5": "ea3e637d70957c4bd994b0ac3b48ff13",
".git/objects/de/e37f33b9ec5af1b7ff6d1f8a3c8d0ddba14790": "0b066418aec9853ef76b8ac8a66e4833",
".git/objects/b4/88ed1f33ece38f55018a367af79f90c0b8f210": "6cbd1cc9961a850b335f4d97b616de08",
".git/objects/b4/e89e1da7665df04b69e3160125a9f5aaec3897": "3fa658ebadb61c9720734fb5d22c47a8",
".git/objects/b4/b4664e5fb2420686f45fbcdc516055d631b0a1": "be7a01e0ed99776a1d38cbaad04fb711",
".git/objects/b4/1877dd9c3fb38808791486fb59166a7f92f99e": "aa5ad463667d0a445ebdddc79cadeaec",
".git/objects/b4/2dd2f4fe640c321aed37d1974679f31d554628": "e6035d74a54e92478b154f92f887d73b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/73/4cc5a952ae3cb66a93823a41b3fd42408ac01b": "a79ed58eb2a4a2d1052ff6cf540aaac2",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/refs/remotes/origin/main": "ffddd8fa8e4728b8898803eddea98c9a",
".git/refs/heads/main": "ffddd8fa8e4728b8898803eddea98c9a",
".git/index": "8432de37bb057c5c6e5c11e7e9c75226",
".git/COMMIT_EDITMSG": "26ab0db90d72e28ad0ba1e22ee510510",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "5f6bfc26ed1bce138bd83335008d7355",
".git/logs/refs/heads/main": "b0b57e9da56e589981e1b578a555b856",
".git/logs/HEAD": "986f7c9ff1e9882f63e37db38139df2f",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
