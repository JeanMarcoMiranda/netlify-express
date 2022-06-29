const gameData = [
  {
    title: "Hollow Knight",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_62e10cf506d461e11e050457b08aa0e2a1c078d0.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_33a645903d6dd9beec39f272a3daf57174a6cc26.600x338.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
  },
  {
    title: "Left 4 Dead 2",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/ss_29b3b4f2a3994c889f6fc12e0781d9d4726ef33f.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/ss_9488e329bb42d792a059fb44cb7135d25b6262f5.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/ss_6ec4ee04d4924b099e25ce79f3d6571c3b623b3b.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/ss_2eae29fbdfe8e5e8999b96d8bb28c5db70507968.600x338.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/ss_73ad69168a263ce585e4823d9607d901719ca3c5.600x338.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg",
  },
  {
    title: "Stardew Valley",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_10628b4a811c0a925a1433d4323f78c7017dbbe4.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
  },
  {
    title: "Digimon Story Cyber Sleuth",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/ss_95879e0d4dd4c5275fb122672933c850f88e1686.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/ss_13b791963f2f64eac89aaa82105bc1cff697f407.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/ss_b85abb30e749ea91b3f3827b895e0cea2b063d78.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/ss_5d0970e5c22b74d958ad7e57be7490fd05d48517.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/ss_15805bda77751e38398e20fbedd5581760604caf.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1042550/header.jpg",
  },
  {
    title: "STAR WARS Jedi: Fallen Order",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/ss_695a5724e306269d81ca0118d86308a170c9e913.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/ss_cfad9481db1a3b68fb5fcb2298cfc74bcb6a469e.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/ss_763dcc7434f072d6fdbb9037b4d37f4474e29d9b.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/ss_045d78dba983384cf8282e617e7ba04e40a9e2e9.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/ss_8363c00f973874cc19a886e0370c6858a32e3793.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1172380/header.jpg",
  },
  {
    title: "Project Zomboid",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_d4a0f78dc94273c7f0eedc186569efc091387066.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_eca8be032b3f5508bf5bea74cfbc823a4df047ce.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_7300ecc70342b6fcbdf39b6f9ff4c408066f8fc2.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_eb1862af5109e4658e2538d897cbd16b87ad1818.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/ss_3b21d79855804e2a73468328a8fd18df0d238a2a.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg",
  },
  {
    title: "Pummel Party",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/ss_83167567344d0bf0cdbb8005f1d87271f0bfa7b6.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/ss_b51e213e314bdbd953d190b18b119c679ba64922.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/ss_9d352c6fd1d3dec079127a5dd2108b31d57ee072.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/ss_790b659aa31131822d0eae36e5c446b31342fd69.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/ss_f317cd221846a98a62514910bfa4a11fe7a5318e.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/880940/header.jpg",
  },
  {
    title: "Grand Theft Auto V",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_32aa18ab3175e3002217862dd5917646d298ab6b.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_2744f112fa060320d191a50e8b3a92441a648a56.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_da39c16db175f6973770bae6b91d411251763152.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_bd5db78286be0a7c6b2c62519099a9e27e6b06f3.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_b1a1cb7959d6a0e6fcb2d06ebf97a66c9055cef3.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
  },
  {
    title: "Fallout 4",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/ss_c310f858e6a7b02ffa21db984afb0dd1b24c1423.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/ss_5e2d136759e0ff4e0d74940fffc9c64e8cdcd833.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg",
  },
  {
    title: "God of War",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_1bd99270dcbd4ff9fe9c94b0d9c8ffc50ebb42c7.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
  },
  {
    title: "Dota 2",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_ad8eee787704745ccdecdfde3a5cd2733704898d.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_7ab506679d42bfc0c0e40639887176494e0466d9.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_c9118375a2400278590f29a3537769c986ef6e39.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_f9ebafedaf2d5cfb80ef1f74baa18eb08cad6494.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/ss_27b6345f22243bd6b885cc64c5cda74e4bd9c3e8.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
  },
  {
    title: "The Sims 4",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_537683e5e29c2d6d02c64aa7321dcb26166f7d82.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_2fc938d99a1e87893852cb2d2113478190607941.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_b447d6436d2d00cd5e7c170e509b2246dfc879e8.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_e1f0ce3ca2c9a538e382cc8b040944fe05af4bb2.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/ss_7d9baea1aedeeb41cb197a9e45a30f0b91b4baf9.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
  },
  {
    title: "Tyrant's Blessing",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/ss_6fd7d5a049012eec796ab562a4720b0f39648a96.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/ss_b0617274c31bbd1ccad28ac077646fb3d1409273.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/ss_73c4cc42209d2fd90412556736cba69ec71c1881.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/ss_4cd030ee5584687e705086dcf1651b502b30f7e1.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/ss_640f26702d0ae0058e8e535f71060bc2336ae0cb.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1520760/header.jpg",
  },
  {
    title: "Dorfromantik",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/ss_a49e5fcc5301e8a05a1da7ce233a5377cf680e98.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/ss_5388583373f0895184a83c4db492e6f6dff5af2d.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/ss_2232950021d44e7fab5ca387470d4dd909548080.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/ss_7ea026a23427e733f6aa3b88bd1f06c1ad465852.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/ss_137bc5e9ff3d2e08bed463e8ea2d09d8f255fe2e.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1455840/header.jpg",
  },
  {
    title: "OCTOPATH TRAVELER",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/ss_d9c13a8f046e48ae57a2f2d6d134850410fe4932.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/ss_ce917ab0bc7a665ee24cc05fa42d7c3901196265.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/ss_f2d62d746b4733802516c7f76120246ee3e29327.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/ss_3484779b5058b6bfac043604c2c831c522435c45.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/ss_b601b741b6b44c09bc74e8049db30ebaa6813a22.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/header.jpg",
  },
  {
    title: "Crab Game",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/ss_335391df766a29348223d1093551a52c0695b06c.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/ss_fef8f54f0447e49d62564ca8f1cbfdb73801d2f2.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/ss_68030009c572cb7a4f6824e18fcc56d9becb5b28.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/ss_6fd12552e2216d1d02f9f82b97fb3c3f65106e81.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/ss_fe41849b5606af46fb2748780860588af800955f.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1782210/header.jpg",
  },
  {
    title: "Red Dead Redemption 2",
    img: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.1920x1080.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_d1a8f5a69155c3186c65d1da90491fcfd43663d9.1920x1080.jpg",
    ],
    portrait:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
  },
];

module.exports = gameData
