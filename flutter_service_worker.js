'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "dc28e0e163bd803b65b24d9c38e98913",
"flutter_bootstrap.js": "766aa85ce19b766e8f821405d38204a1",
"CNAME": "11f8a12f1c63df404f7e10cd9eaf1843",
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
"index.html": "96803609370b8b4a0658d75c13c77981",
"/": "96803609370b8b4a0658d75c13c77981",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/flutter_iconpicker_plus/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/flutter_iconpicker_plus/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker_plus/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/flutter_iconpicker_plus/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "adee38f7024cea4a01aa1b95f172a7f7",
"assets/FontManifest.json": "e1044d6203f63216088caa35ff937713",
"assets/AssetManifest.bin.json": "4a0bb0994d3c25bb88fb071705125b26",
"assets/assets/images/event_3.png": "2e740eb7f0ee233c43b7a07981bf8d98",
"assets/assets/images/no_questions.png": "980e6b5301d2a19ad51964c942d8fe7b",
"assets/assets/images/event_4.png": "2ee4291cbffcde36c62b4ff75801e714",
"assets/assets/images/lady_outlined.png": "fa4e3c104e8612bcc9a90df2d5054ca3",
"assets/assets/images/logo.png": "2dac0218a66a566808fef537c2f1372a",
"assets/assets/images/no_events.png": "c39ba0395ee4b75d76227f851d22ed90",
"assets/assets/images/background_lt.jpeg": "ef835e95114c81ce550fe08b8bb92e6f",
"assets/assets/images/event_2.png": "1ac1fe027908436adad61ceafc186b2c",
"assets/assets/images/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/assets/images/event_1.png": "dcaf325e6252674540c1b85b5ee68bc1",
"assets/assets/images/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/AssetManifest.json": "1184414f9533433ff387610cdc2a313f",
"assets/AssetManifest.bin": "c2a40144e7f0085d889a8edf24170e41",
"manifest.json": "1514ad61885dea9f7838c9e876d407e6",
"version.json": "94c87e5a8f38369875d2f0c59a119fd3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "013faf0f3ff862b8822c250bb27c9658",
".git/objects/13/9a969794be97ec81c7d9fe3df1072c3fd725de": "39875a67527a8e3e0e8068a8a5a1ba2a",
".git/objects/34/db84126b179f798c4bd09c0aa32904d2af2279": "e25ab8c0730cdb8426f3114c588feec1",
".git/objects/2f/9cb18b562e8ab253d18f3e4db924a7941535eb": "c8f9bab2eecbcaa5f69ac5bfb5bbacf8",
".git/objects/8f/3a33c1a19d6300043611da5c6861f07446d236": "97ad4980f5feb12f2c0f13c66af20a61",
".git/objects/85/5cd403712461079b3e762580ce5998db00dff1": "07a54e812a649f0ce12928b51a2cc81a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/27/af7a38e0153ccdbae587f7f0256fc0b6975a7f": "a23830434ec4b88369e0b0b90c385712",
".git/objects/6d/3798d34e5f1c9c89720a4033909c3909be824f": "eddea685ba4ecc811ed46485b90a1006",
".git/objects/d1/37e0919bbf7f1e55d87eea2cc3e6f681c0612e": "b1e5b5fa0dd5c7e207a44263fd973a81",
".git/objects/f7/7d9877553058685c6a92b5d835cd1e68efef90": "2b51dfae1994e1450dfa8f3ad0f0ee65",
".git/objects/ef/9d3798a24be74960754fe2f4b868c33e6d9fc1": "f9bf00f96998286049b16b9a92dcbc00",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/d5/a204fc3e73e6fcfe876e4f8068c7f1b406d870": "b5c774075e6dc378325ff6661220fdcd",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/13c63091ac09166802c08d330e7cc287672da8": "09de575b140712fb93c081ad985b5e05",
".git/objects/90/00e918f58356c02c0d7cad903ff3573729ea97": "b03da1144914f5ff614d2097b96710e9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c6/5f532cf16b819ad121d76a13aff21568ce1767": "0e57405c910920be3887cea0befaa13f",
".git/objects/fd/bf90f811d7fc88868b10cb0ca492d9cb6b7cad": "4171ab187250ad068f305e838525d205",
".git/objects/36/2058f86d34b87f04bcb5b57e6178d3efc5bffc": "bbbb3b5ebc07323e093297c5e19f9678",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/f8/23b55cd149824963c6ebc72e0d270a534d4640": "1fa5f666cca161d274a6221fd48ef497",
".git/objects/a6/374e778bf7674c5b244f12420bd1a2c317bca7": "cee2d4663f8a94e9fcab84f934ba9495",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a3/4d8bb8a81b19d0f1f46b3db923d3dbd94a6f89": "86d1aa6b3648de1af353275a313ccc17",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/c0/e9a621df297b00494cc39def4a5d11caf23c1b": "57b285eee332f1fa6c119d24e00c832e",
".git/objects/c0/dbea4d049aae61c855ac6f293ad89a6237edbe": "57701488a8263353ad8b1d8decf84673",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/ba/f58ee86fd3d4bb89d713c8db53f6c5c84239db": "68f14b94540c3926324487da1c4baefc",
".git/objects/1f/56c83adf73ee6803d9852d8948df9440ceab52": "5281b44cbec98b14703693ec8653162f",
".git/objects/2d/a8f0895f54640f8f8648e19cf3142ab89baf47": "74fd2f1288876b061190ff4dd1a9b2bf",
".git/objects/50/5949c91d092f00072e4e0db5c3eedbdbe38736": "ab5d3995512737618096ef9e4ee04d81",
".git/objects/50/5fdd5789f25941204b127356ff523edaffff64": "89139e52cbf3df6711bd710f8dfe4db4",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/9193febe0774c4f757220f8bb027ff3a176691": "49c7162003a4f679bf4935c6a537a981",
".git/objects/43/46b786a600967a8f1830e43c82cadfde057003": "aa6127e9e816398e6371a7bb83cfcc9e",
".git/objects/77/9d5ed86a4efd85f8406180dc4e27fce715c852": "c9c1e3d5474470f50fb4ca167a2e7a5f",
".git/objects/25/4111d60721719fb00a7fa5f06b9d88e53db03f": "ccb520c8ba6bd848f6a93a3f8df2d9c2",
".git/objects/53/a7c2bd6393748b4238a15f75c014469772d34e": "3f0167dcce683abc8fb8dd0e5edd767e",
".git/objects/32/18a16b1a6e2159b312240a71e98d6ad8bb577d": "cf88c0fb1dc4395f5e1e1bc4589d7eea",
".git/objects/32/4c059586bda05f610c6c107a7b236e3f0363a0": "4e6131de78acd6dc8a84c239a4569833",
".git/objects/39/0f61a74d9cb1c8721993e7008b1d44c0ed1e05": "59c67850aaf5a67ff0e27086919d8bf8",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/8b/23505bae4fcb5658b5c2b29280a54b0e902e8b": "3056d7121cc6d394a8b83510d45ac470",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/3d/c3b786c579126d6742650044c4519522340586": "944f8c3feab78692bfdf2d29aa27a090",
".git/objects/86/3362058024e08ee76844857a6c430a3efb9e54": "f2fdae54980c026a9defa02449052696",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/205e049bd468fb93ba8190eefda8b6e0b7a6f6": "c2d70d6875be41c935ea4e8f1ac5b79b",
".git/objects/2a/20507cc9f06907c988065c723a0981bad652b0": "671040a732a6da0b6d7004026607c612",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/38/b815becc6e1a33e158c15aa833a66c741cc463": "804737f5b91d8e311ac18cb3b6da7caa",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/9d/11ed080d87add9b8301ab27cfebcb686a74ffd": "e576b86a481523a573ceb632150bef4e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f83b1887df77b2f8450b8fce3b526b73f846c8": "6db863c4a120bf184991627e24d4d341",
".git/objects/7b/22350aa4cd68b4f6ccd23ae64ecc7576747357": "b6d05eb4d4a8e7a65c6a77b00295bcce",
".git/objects/0b/82cc157fc6e6017de6a9a378d7dfd4befea180": "aad62c384e8e2a43d27fb0ba0c7d0fe2",
".git/objects/9e/e0d0f6f3e1642b54146c0b2fb5e8c904661d0e": "c5203dcd48afce1b51bffdf0dc8910c2",
".git/objects/9e/85a3c8f70e0ad22b037dd8a172906cafbaa0d5": "2f6a82c7977ace19a5608ded00f11103",
".git/objects/23/669118de6e3456f707cb429a8252a543d7d004": "2da8bf76a230d4ee96c25d6929ee17fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/87/1e49b8c3567444c2caf62e2d2bdc28ce4d61ff": "b71fd93a888497aaa6112d9b08d3951f",
".git/objects/71/d3c30496539f82dcb96afd95b52431bb5a0945": "57b5a0a1c7a9db7751dc72c50b7fcb25",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c1/e09a64d2a07a8745e1ad4f1f2caf212f45b6d0": "dd4485d84862c8becab8c6d541e09f89",
".git/objects/58/99219ed8359262b2d8ae2fea61bb8c10ee8999": "c5cffd34e3c8290de105da503b4090cd",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/10/fe965ad37bae52de86513f549f9d86ffb2f16d": "661c634ed133e896b5ade5afec5c3b60",
".git/objects/10/2a3ba9ce0a9282bcd030d5dd0ef069d86b36cd": "483baf818337de398fe3f237588664d0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/973a714ad852f84f4403e325f25a45cef6176d": "4a2fbb4e675b29a0f8b30f8e15d44e9f",
".git/objects/e9/eb165de09e083c19aeb73c7857ec48d261953d": "7cd762e8955fd421b4c79281f1a4db63",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/6c/ed89a6b20abaf872611dac6dca3f8e973b59be": "109d64ffe9cf3e0398e2c18044f0a4ed",
".git/objects/db/56888fe806600204680396547d3f5a309ebeba": "6b36e4190bc35956525b778e317cc7f6",
".git/objects/bc/b99011fdd91d191fab3ad0726787f5e0636977": "a1d3c340848c607d28d88be9f5839127",
".git/objects/24/a4a83d29dbbb74aacf684b7c10fe566280df88": "35dd2f49919850b6ebd209cfa33c4d88",
".git/objects/54/0422168e1759cbfcb63cacc0952e57f2d8f9e6": "b77d8c9f813a36fb2cb8c9d4d3954118",
".git/objects/cd/b68b30fd307f6d3991b728bc4d46bee3faee18": "aed0e7b9bff3ef55da3708016a07c36f",
".git/objects/ee/9c6e8d53790d02191c7924b5104432e7ba7510": "a1947ebcb2cb88b68270ceed193023b5",
".git/objects/ee/38b12a5bc98726a59fe31eaf87c8cf7bfce49a": "04d38af832a8e65603b0c361d8bbfc2f",
".git/objects/b5/5f793dc3b54b39e0838caaaf90784b7fa824bb": "7b53bd3ee9dc5dc0c99906fe93707bfe",
".git/objects/b5/597023142dbf56164da4d55d6b200abe8767c1": "2d5e2ff5c479ee5a3cbfe07246b38173",
".git/objects/b5/06328686d2e3a896e769f1e677ba090e24275b": "c02480618cc66a83d1a64ee2f20916d4",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/c9/0580a7138c98e42d6cf9edb0a2cd75de622fcd": "d392b2c54f9e1669418ee24d2ea20f12",
".git/objects/c7/5955adb51f1a58eb2daf75cdd4229335ca7c4d": "e50cc9fd3bf0c0067d5e4eb50c5951f3",
".git/objects/c7/84880818338889d56d1db732e57f634fb126b1": "b8a1d91e1309c662d3056873bb4b9dbe",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/74/7069b9bdc65c5ae781a062b8d80b6a9847c79a": "c0b2c0f72a8b1a34de34b28c7db7ac5b",
".git/objects/e8/98dbb6634a03e3ef70f869b695fc7ed4bd2c94": "f433bcc403730f4ba93ef7950f9d3beb",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/c4/7d27ddc65c1292ef623d02b3751c0d2d039a3a": "5d5f4c3572cba8cde0e767d3603f5f74",
".git/objects/cb/3864a01c886a7d9011eb37d8b44c93224ffaf0": "c27e0206a37f16364020f86e60cffc89",
".git/objects/0c/f4f5c219dce29a78b80904ca41707336d67241": "ce9d40bc77ef2f0820eed3c66f50b45f",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/f2/663bbd0cf9d5821753a73b0fa0fb44367dbb48": "e0662472f17a70b8d5e9085d2b0641e4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3094e49f8f5f8a24e7b0895fb3cec4e457bd74": "70bd16ef66ecdfd89604c8ea75a58f53",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/e5/b170a2f5ea60ad1866b143b00a5f70b4ae92aa": "34359ad2e6fe62ea5a40cff6a3561031",
".git/objects/e5/540b67df3cd9067e4a4785f0170498573da72b": "20f81dbeac3b3ec1c748d7621f97585c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ce/f3c63b8e81c2f6891d46083db7d9744bfc77b5": "3638b8717b1e9794c497c71da8322f9c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/7e/1cda881954bbeeab800979cb77b94da29d99d4": "c5da5bed4f40bf0ab56af7c98182acaa",
".git/objects/61/d85fc66ca118121654fa9c921894fe924df269": "e7a2c5a4cf7f2d6ca9d41fac38d878b4",
".git/objects/61/af4f83cec8bb4275b1350710eacce3d8fff7c6": "b8013712c586960cfd431f2d73b314e0",
".git/objects/92/a4242fbe9cf40bbe9ca1f0beeac7f4d7b57b70": "0468960521bb10ed4d9f360a75aeeb76",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/f645dbcaa45e37dc5b4fedfae4bb7580a9b3d0": "cee2d34f3f30b949900887b93f609ec6",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/bf/19d88bb82d82817a72ae8bda80505bb4c43192": "5aabfb5adb7bdbc9c79b353a069149a8",
".git/objects/de/7735db7dad0df550dddcd0d2ca68d51164016c": "3ab3371fe99545a6d5ddf9b7d682ce10",
".git/objects/08/5185898b3bbedaaacd5621ce7668c11e510dc3": "dce47a6c338fd169c1b94f167ea6011c",
".git/objects/dc/4ff140e6c0a475cfe8bdf6e5783564ecf39d35": "a1cfe5acd7cd79713ad7e7679c79ed18",
".git/objects/dd/fa40b147ca99be1bf5c5f2393fe34ab3a9d87b": "53bdaab5d500595b45dce3725b578da7",
".git/objects/dd/10f3e974e28b2e26220df6f9f29135b16d631c": "98d04d54bd9ba66dccb90737f078ae04",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/75315bbc5d78ae495dc9d0684aad690e9d4c7d": "7aa1ceaad2ea1fcb74bc18c696e8590c",
".git/objects/4f/3e7a7a2864c9ac0839a3c3abfd217f37e98060": "dbe5550ad2c041990b9e01589bb4bb61",
".git/objects/ff/f23c4513694be6b13109b3282071bc904fe646": "174af81ae52fb015ded1c913cc2946e2",
".git/objects/3a/baa9d705579061cdb11256af37429933aafc07": "870214a2cfe8db8159a36076d7c60fac",
".git/refs/remotes/origin/main": "84e731928f24ee5f1cd1141a350aa7ce",
".git/refs/heads/main": "84e731928f24ee5f1cd1141a350aa7ce",
".git/index": "e7fe0caf5e280ba0ae79707212bdc446",
".git/COMMIT_EDITMSG": "22c756aa4717096df23ed11c7a840f35",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "d0102a41dc70fc008ae28f6b1e1f9721",
".git/logs/refs/heads/main": "0bc1b629c54290156299fc67fae74a6e",
".git/logs/HEAD": "40ac17b1eb63547c317564a323206477",
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
