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
"main.dart.js": "0aa64b505cd7d21a95293fc1f1a67f74",
"flutter_bootstrap.js": "959555dd254ab4f3665c01733ddb964d",
"CNAME": "b6c228fc4d72d0fb14b1958a0e7666fb",
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
"index.html": "65bb3fae71ad38155d857095d62c5706",
"/": "65bb3fae71ad38155d857095d62c5706",
"assets/env.json": "10f1070097adfbe45d8c8ad0fbe094a4",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "fee69f909518c0f8e7fb441c3d26d5f7",
"assets/NOTICES": "098bb660e4f9c555f8fcb7f15e48ad1b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "419a5fff9012e830c59eb07793470a5b",
"assets/assets/Member-List-Export-2025-September-17-0519.csv": "1597896dd34660a8b5b94c4794027ed3",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816229809.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757660089947.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/slider_1.jpeg": "87aa6705dcd78637221c36749eb520e3",
"assets/assets/images/sad_face.svg": "4eccb4273d492e76924127c7520b7890",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757661642785.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/img_app_logo.svg": "52e0f13a4898fcb7e2e6b785bc50d3e8",
"assets/assets/images/32b7e920-537b-4c67-ba5e-01073ef6f56d-1757815904909.jpeg": "dbdebbeefd2dd784d09e4a3c94a1261c",
"assets/assets/images/google_logo.png": "24c22e47b7f198df14783544924f51e3",
"assets/assets/images/slider_2.jpeg": "899b6c87eebbbd20ba6250855bc43dec",
"assets/assets/images/8d557efb-9c20-4c31-b5e4-333f35a4d690-1757816484789.jpeg": "f31bbcdc56ac216d15f9500ae10e2326",
"assets/assets/images/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/images/apple_icon.png": "be00559b7ff821149abce8b2ddf4675d",
"assets/assets/images/IMG_1961-1757564924074.jpeg": "b1f9482ac1a90156ed05de596944420e",
"assets/assets/images/PHOTO-2025-09-12-14-33-14-1757658826356.jpeg": "0601ef083817eb20bfcdb7fce17988f7",
"assets/assets/images/slider_3.jpeg": "831539f8a1a93c3558b94682bcc3f923",
"assets/assets/images/no-image.jpg": "1a5d2f8e2ae237e2dd853bd7b3fa7287",
"assets/assets/members.json": "4a97544ef2e394c4dd7846373e8e61df",
"assets/assets/README.md": "310a970fa31389fa571855f5bf8dee2d",
"assets/AssetManifest.json": "bb0dbed5cc35dfa2367653ee628e9f39",
"assets/AssetManifest.bin": "1d5d1cdb753dab6e7f5c7689e194713b",
"manifest.json": "b81888306fb711ca3b343e1ef2f67e80",
"version.json": "e1f17f19cf6203e97437a0e5be7d88cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "d997d8d44ec7b34124140b364069e1e8",
".git/objects/13/a8dde1cc4b6bfa69ea09f2c062390143d33852": "5a59b57f78cc07f7587a047cd218df46",
".git/objects/34/1da4490f838f8f3aee71a69095e86ec53f9bcf": "a6d1ae94d779af7f4ca4d72f0a698709",
".git/objects/34/9c8c5e88645abbd67f7c01bc26f252e41c4473": "f70f2b7ff3110ff47f9434c0b6f55faa",
".git/objects/2f/e232b078718e02a082b87a50e9172702a9af5f": "d6c3a124f1151a05ece7c469574828f5",
".git/objects/ca/6257bed4b06a449b643ecdc0af41f5d658b6b6": "0328a458bb05cbc9d8906f85b99bb0de",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/b2/d299a8f9a11c725519562be48168c3f07a193b": "f582e9b226958607bb4d65bf4256ae7f",
".git/objects/00/8bc059276be57fd9d818fa59fa67f37e102f6e": "d146b51a8ae59333a434828a427fb703",
".git/objects/00/7f71c5043bc2ed6aca61312159d7e93c59ef6d": "5bd00212282282017036f37ac063e6dc",
".git/objects/00/c48564fa33807da0af51c5a4bd159779816336": "80044bc9d1d9418609a23b011f54d119",
".git/objects/7a/4bfa26482ba0dcf91c279750fdf23d2a7fa91b": "2bb14a6e0c352bc32d25433b11d5300d",
".git/objects/52/dbfaef4cc388e929327afc4cc7a4dea387ae1f": "a1279db0e1e69be058d66db3794f7745",
".git/objects/6d/6d874784807f9eb281a0c2ecbe8394f7111f51": "9db04eada2d3c82689a0bfc99dc93163",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/75/402c26ed723fe936072edc830e32a81493f99a": "abe1453f0d24ef108e4af209a15ffae0",
".git/objects/55/b916f418343e122318ecd5285aa3cc5caa2cb3": "528d72439dfd6b64b54db92d7442d6b8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b0/b87f0551d148aa636e2512b31390455891b0e9": "a255bcc8d4a8808313f8a70fcf14f946",
".git/objects/fd/c1c6caebc16f151d9d51e8c7764897004b2302": "7fb9be47193a5051a58dd33bd55d6986",
".git/objects/fd/30f62d2bd1cc335ad3bc85cf382aee58c3c968": "82da326df7302d827ffb7787e9b3dff7",
".git/objects/fd/d22be8dea0407ec82ed706745179ffdb6d5727": "9ac7c6e0b5307fecc5e3cd3cf974dd57",
".git/objects/60/40fabbfe4200af9c9d4c34aa9888adf79fc641": "a5b944936593814cb414ab506fc4d60f",
".git/objects/b8/314e304ed4937a9af704c1ae71b557c2993dcf": "4926f4f2e604a2e1c71ffcf7e1df5d9f",
".git/objects/f8/3a52279d072bfc40c15f8095eb0da89f24f79c": "54bd958573759606d439eeee0f4a1c32",
".git/objects/48/064b82868387ed0e0ca47bbf2ed0b022fe7a5e": "9013df2b3b36df0d73a84de792c97a34",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a0/fbbe79db584de4b56c4f5323997ee9a0b2723e": "8b8f00f9af757cc7c21a4e1954b66213",
".git/objects/a0/ab9d2b394b39eec5143e7f61514a13ae088c5d": "304a3f334abf59658ec34ce3caccebe9",
".git/objects/83/7bb63c0b35d0beda641416a7231ae1f29d0865": "d879b4572427463261edcf5c45d01afe",
".git/objects/a3/5b86f42d8fcf7b8b1b979f41193bbc564fe121": "8b27f60ea30811d8759ae5690f23cd31",
".git/objects/e4/e5958c2aee1aab4d90ecfd76f57f6356aec8fc": "a52ec32d7b4b7b47ad7e7ea324f97798",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/be/bf0cfac0fa9492be41df93c01fce195df6bb97": "226e6b0b639b4b694323f60d3e890739",
".git/objects/9b/9748cddd84b46501853e2952f1ee9533c12357": "28ccfc535613d6f340d05b2d3b94f583",
".git/objects/21/5d4db8b0f6296447a8d6bdcfcd07184f4a242a": "93312d8a9fbf9a1c24c0616b6c783f37",
".git/objects/2e/49fe941ca0b5483d6d655cf55a8c6f75ca4a67": "842c8596fb44ac64e9c7a75da6312c89",
".git/objects/2e/9d951b59d6621c98bac2e09e80a91fa53090d9": "285946fc350495d60eda9f52941355b4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/1f/edeafee65399e3309ca0e3fa81d10f69b39817": "3067b414a29f20006a5576a990c77307",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/d3/6f65ac1fcc5d18cbbeea56d643fdc6bd46e9d5": "797e0cb62e9fd98b38186b94a28ff0e8",
".git/objects/d3/17fd7834d1f2ed437c247228474b12eec39f31": "eca6ef73914704911454e75d7a440b83",
".git/objects/64/05e0c182b5ba520d8d8b694c8320e03dab8c89": "90ae3263eed9a90fa2819e1c71c5129c",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/c3ec9dac2cda15b0d6f21b8df0d21dbb81dfb5": "f1d737271b3d8ff6df5c76565c849960",
".git/objects/43/c228553fcc07c7bc0b8f41df1ab1c0d1585a88": "90c84964c99fefb41ee80266f0608565",
".git/objects/43/30b4b1c46762d65d0574e0d54aac42b404d457": "a0f0b2d5b24bba935a42b006d5204b91",
".git/objects/25/a8208c5fe5b51e43882fd75376c0468634b39b": "515870089f79506b1d1d2845348a1fa3",
".git/objects/53/a7f7caae3097cf9b8fa92b3c91a7bd25874391": "991bb14aeeb2cf26e658be73de0c2ac3",
".git/objects/5b/50a7869c516fc778c90d6004af8ff282060d1a": "b607282ad6a86cdbb3c6d015cb1821d0",
".git/objects/6e/3cabaeee64718142c987c30731d0343f62d0bf": "ad064a94f2f1f862cfb4493fb862385e",
".git/objects/9c/dd2f546857777bafb81148d8b153b5b4711a03": "b1b050682222841e45231fd7d0fd6f87",
".git/objects/1a/dc0c6f1ee60a56ffbc9ea338aea92caad8c7ee": "4279745224257d55f000458dfd0ec4c6",
".git/objects/8b/23c19b796736b418fc336e2ca8d627b0168154": "32761e3caa14396df80dd675f5bd1166",
".git/objects/95/db5a3a1df55ee7f82efe9d2a0e0911737659fa": "fae768ebba887c1e026c2245380c0023",
".git/objects/95/685e171b5edffdb50a36b9b1c899edb67f9388": "dab304fac6b7a45fbcd10b4f388d4c87",
".git/objects/95/792310fb78207eef85eabf54c3750ebdb897f7": "a3affcdc81abc90653eac75a8bee0aa3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/a7/b061f33cdbd36c149244a1101498de154e278d": "7d9c7613960e8110f1d7b7d1f216f4e7",
".git/objects/2c/aea68f4565a74f3eef6f49f0e632179a0b6e64": "0f2d871bcf854789406d5e580dd4ea97",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/1b/031f35ba6b93573e5835daf2351cef8bf541e2": "9fffe576a53d1dad8281efc374796d03",
".git/objects/1b/d4ef8aa0c78392d39ec308fc7ac399ff5e2a3c": "09a1da7a36e21d1c40a3a36a1ed0eb56",
".git/objects/9d/c4de240b56e6b251328d2ba480d81ce9ef41b9": "5d0f4db57338628558898bb24852f9a9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/07/97079e28749a51f1d0f5b0848491139428abc2": "37bc022d0327329e23ae316b0991ec3a",
".git/objects/9e/d35558ff5a255819568f950541aac68ccd996b": "fdd85211edb96f7da295f7daa7e1173c",
".git/objects/23/afb1bf4c1d37e185ed6b7919a477797ab111ce": "4c0402ed0e78b5256a7a356388794393",
".git/objects/cf/8743d780db0acaf4df31a5546d552ff268003c": "dba834b72b5506e4ad095dc9c8f96085",
".git/objects/68/d973d4c13d2df7775b718cd59d0e18b49cab01": "9e1c114c1d28caa50606034bcee188ac",
".git/objects/94/c45e52281d65af0a1eb067687fb94c3d810129": "086e0c65c8ac07b7d77e20f2ecc1033f",
".git/objects/66/1739d01f96d57f7044c78491eb9ab50cb468cd": "b03adc8dba9e2c5d958f031b421dbaa5",
".git/objects/58/96d346c40bdd08c05bff3848c905599dd22b65": "487dfc7b406bf97cb76ca831c60b8398",
".git/objects/58/0dd6e0b647388b36d93123a96fe79295118792": "eb623e08c5dfcfd197f2012683ee7440",
".git/objects/3c/c18c4c470f88b1900e85194ec295b80f92127d": "3b6a2c6eff68e205721e411ed3aa1357",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/42/e1de16cce327f4f5dee1b2288602b3d993b05d": "3d30bc1efc6627032225941b02552d86",
".git/objects/47/aeee0c48ccb91e4364154e4da5415b26495c74": "88a06a9ac87b22a236995bed5bbf99ee",
".git/objects/ea/88d7ec178177ff3c50ebaa857ccf33c6a64d59": "47da1c4a3d36acf352b825dc2792883a",
".git/objects/ea/4331fb619353b35be8ca130f0a26f1159d0873": "6f5eacc5cb3e28fadd7ef490efb11b72",
".git/objects/d8/22cd8009359f68abfbc3eae156bbba647772e7": "d5db3b9723562a08f81b074961673e8f",
".git/objects/82/0c64c6f2f9f1673ddc048baa4d36f8008e73a1": "644d106f7ab204c9b8e3547af6d95f67",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/4c/c50443b341691faeb15384c671c919038ca050": "dea9723b4d2ab9f3b115d60d494695c1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/207f722e892e354321fd5eeb0338bbf82e005a": "c70e8c9d97907de9edc15225122a57a6",
".git/objects/e9/9991cd183463f36a2e1c0f578f4e7bba17d32e": "28afcb0e50dc393853896207995cde8e",
".git/objects/db/16989ce28f4e4867121f59aaf0deed2b392238": "e638d2a47334b666cf96f9edf8908c08",
".git/objects/3e/d0b6db972e2d3cdfc6d75a90cf1c90606b016c": "f54049d45c56b9061b1fbd2b2ba1e3cd",
".git/objects/3e/491e4a93d75cd8b528858e37c817122ecfeb3d": "90985ec59f28c5fe52fe4fac7cf67641",
".git/objects/bc/71bfac393a046dfcd868187ad69e4362c95c1e": "cb76c5c4fa5c80a2c057198abfd227ca",
".git/objects/c8/7e758b3164bb8e7ab341afde858b2519ac66ca": "67ce4855cd70d37ab989ba74ee17d968",
".git/objects/24/f2f54100b632a8fbbd332afe5ff1e6edc7266f": "56848bfbba9230713288c998a2761042",
".git/objects/24/f2115b70b23393287cb3fb63005f2b09b827ef": "6c611a1e71691aa2fb6618fbe1960615",
".git/objects/cd/cea36ebd307c627d34f078a01e44e733044b40": "aed6fe24940d79b76d2dbccc1a7c1f94",
".git/objects/cd/7ca6803643a2e3bc4c498742f7bf5be83641a9": "56175ec557b37a35f52831871a4c30da",
".git/objects/cd/2fb10c2d3d2f1d0fc67824d29131a6afaa68ae": "051902fe9c6217b13d2fd89848b4a7a9",
".git/objects/16/88ffcfb19123d466b3b9bfb4bce53761c79f67": "2ea094f006bc48f13b6ef275064d0c0c",
".git/objects/16/1726fde583e3d0f6753c120a1a56d25a262ac0": "4a6d830c4d0712edd988745812f04efb",
".git/objects/ac/47c624d411006ad60449ee8f5c31eef617af2d": "85c498a1deec4c99874509590bf99dfe",
".git/objects/b9/e6d0c171c17e6a8d942e8a63932e334ef4d758": "86b74ad98a7f8be3a4f9914618644dbe",
".git/objects/b9/1399a4aab77714268ea5c4ecafe3cfd9183dde": "dad865449d325d0292b2bb3cb6d7cadf",
".git/objects/5a/2e7d13c7633d9bf3e0ec178a02980b30079d76": "fd17d442aee59d1d2f6373f81117941a",
".git/objects/0e/c6515f02e69ea73780358efbd6d606c29105ef": "daa706dcdd345e350e3ac0da4e879e72",
".git/objects/b1/600de46a0541cfb9dddbf6e87a0d8506683109": "157a732bdc0df6c156b8ab96e6e90968",
".git/objects/c9/182a39593b6402ed3a2588fab798b9fb809693": "f0884b209b742ff92e226065126fd28f",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/4b/8d0c1d74c53aeefaeb595371e5038233423163": "3966e948f5cafda952b62bbaab917e05",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/44/4e59e6e7a44113e12548fb7c4098a60fc68751": "8a1b174f07f5f365655e62edc9206d6a",
".git/objects/44/bd9f4d3beff1213cace95884010939ff73dab7": "2ee96e8d07f206acbab4b88fae9991d8",
".git/objects/b3/76b92a0738ea10ea1946bfd05a12e08189838c": "3c81b17838b976327c81543af5379a9b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/a2/6b4a2f1ee2c5f6c8a01c91de849e27b96dfc41": "2c66c7c86b8ef131a284eeb0a876859c",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/c4/ca0669ead7ba96823a60255ac123bf4f4faf68": "b73ec02391f4b8eca8b837909ac40354",
".git/objects/0c/d4b92af184030c80b17a3ebe9240437502ad75": "13a1ca58416f7eb78ff7e7fc31380c3f",
".git/objects/19/2c11c7b0305029907841e2df58f2e02e59e743": "2154f251f46c80ccf52919152b10ada3",
".git/objects/19/dbabc0b29a95d41ca16966a803415e025e86a5": "98a773663bc176282247e8f559f8184f",
".git/objects/69/1203cc7540a10d6e76821f27455cf07684f970": "95dbcd3e1d09d7411344b86e8fd87a8c",
".git/objects/65/19604c8f7144898564a6d832e3605404a7cdd0": "ff3cc44840ef1471c3cad14a62ef67ac",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/88/f023f26163f7c462bf319c72b6fd9b294d36fa": "a514568f551f8876c26f58fd14278b93",
".git/objects/8c/4507c42076ef5bd440f41ff6b8a694bd0b9f77": "b5748e18e22b45e02e0d34f4b0b68c63",
".git/objects/ce/edc50fa90c02a442fdee68a778b2a88334dc62": "843e48b7e9a0b644de10b667ec1deeaa",
".git/objects/c3/4bde3727cc49ba8f9c0bdd107a539755d02b67": "59cfaaf990b0d4ed11a8be3c3d4c1155",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/8e/2a952f6865966ba10bed00880d1c2045b3d0eb": "47b943c9091e17ac8f5b231ed6375c40",
".git/objects/92/ad99962c55118ffe3f5910335f5ef0e977cc4d": "2168907a566bc1221d385efe8b9fca94",
".git/objects/b6/8a2f6a6362ba2a387a8d5abb7fd364b7d299a1": "10b1750f4f0bf50ee256fcc2bbc34410",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/67/6aa92df9ad87b016a3b1f5878f848fe702213f": "d4d9dccc350b3f850d8c9a82b207cb90",
".git/objects/67/50184bc6628442a218cc27af2e40c2c27f74b5": "ea3e637d70957c4bd994b0ac3b48ff13",
".git/objects/a9/3b931dac50bb178c0c18464781c6fc0a842f65": "a9d07a0adfb9944e4da975cf7fae9451",
".git/objects/de/e37f33b9ec5af1b7ff6d1f8a3c8d0ddba14790": "0b066418aec9853ef76b8ac8a66e4833",
".git/objects/b4/88ed1f33ece38f55018a367af79f90c0b8f210": "6cbd1cc9961a850b335f4d97b616de08",
".git/objects/b4/e89e1da7665df04b69e3160125a9f5aaec3897": "3fa658ebadb61c9720734fb5d22c47a8",
".git/objects/b4/b4664e5fb2420686f45fbcdc516055d631b0a1": "be7a01e0ed99776a1d38cbaad04fb711",
".git/objects/b4/1877dd9c3fb38808791486fb59166a7f92f99e": "aa5ad463667d0a445ebdddc79cadeaec",
".git/objects/b4/6d4e013454b9085c5be3c08ad711826108be52": "ec84b720ee97d227d25dae885cf01590",
".git/objects/b4/2dd2f4fe640c321aed37d1974679f31d554628": "e6035d74a54e92478b154f92f887d73b",
".git/objects/dc/5fb7b40cd95edcfb7d641c7bc39d136e6e4860": "0a33b94945d6f05557e1e4aa68949093",
".git/objects/dd/3e40d63adfe190699886c8ba9e61d596677165": "92fa38a16249a3df9743f3e433ecbe21",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/73/4cc5a952ae3cb66a93823a41b3fd42408ac01b": "a79ed58eb2a4a2d1052ff6cf540aaac2",
".git/objects/73/d47eaf850109f56662b66f14e3be012efb918e": "9457ebe277cb99c46c093c9fe8298a5f",
".git/objects/73/c7979991e01e0dba579ddce978e55afc390b5c": "2253c10af350f3a17909a9c56eb94e7e",
".git/objects/59/bb3135ea2e383731b397022ec56443844c6b06": "71ed6da062dc4fa6648bc8741d1c447a",
".git/objects/e0/61799f37e330bb7f4b9e9296654e0e561173be": "b1cab8d2342f17286e8185d84357f3ca",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/refs/remotes/origin/main": "2c967658d59e937c9a61eb1561fd84f5",
".git/refs/heads/main": "2c967658d59e937c9a61eb1561fd84f5",
".git/index": "beef5785ec96c6d32e593707f97bb596",
".git/COMMIT_EDITMSG": "48a24b70a0b376535542b996af517398",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "99b376507ec119b4320dd42be445ae5b",
".git/logs/refs/heads/main": "5003b557a06bb857d98bda017cee228e",
".git/logs/HEAD": "5baafe98f5ed535bc9d10c0141ab1332",
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
