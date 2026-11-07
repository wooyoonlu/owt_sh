const dishes = [
    //супы
{
    keyword: 'cheese_creme_soup',
    name: 'Сырный крем-суп',
    price:'400р',
    volume:'350мл',
    category:'soup',
    image:'https://i.pinimg.com/1200x/c8/14/3d/c8143d462476150ef744f78ef1430e01.jpg',
    kind: ''
},
{
    keyword: 'borsch_soup',
    name: 'Суп Борщ',
    price:'450р',
    volume:'350мл',
    category:'soup',
    image:'https://i.pinimg.com/1200x/c4/c4/c5/c4c4c52dbd7f6836ce7ec6ef17dce543.jpg',
    kind: 'meat'
},
{
    keyword: 'buyabes_soup',
    name: 'Суп Буйабес',
    price:'500р',
    volume:'350мл',
    category:'soup',
    image:'https://i.pinimg.com/1200x/aa/ca/c0/aacac0cf738c9fe86329a5888fee8b0b.jpg',
    kind: 'fish'
},
{
    keyword: 'tom_yam_soup',
    name: 'Суп Том-ям',
    price:'500р',
    volume:'350мл',
    category:'soup',
    image:'https://i.pinimg.com/736x/39/6e/5a/396e5ae4a9574dd367af4f8e4a4e4bc8.jpg',
    kind: 'fish'
},
{
    keyword: 'harcho_soup',
    name: 'Суп Харчо',
    price:'400р',
    volume:'300мл',
    category:'soup',
    image:'https://i.pinimg.com/1200x/1f/a5/92/1fa592b953755b72a3bcaaf6ecc5178e.jpg',
    kind: 'meat'
},
{
    keyword: 'gaspacho_soup',
    name: 'Суп Гаспачо',
    price:'350р',
    volume:'300мл',
    category:'soup',
    image:'https://i.pinimg.com/1200x/3a/3d/15/3a3d1539ec6196ba6844c08fec8c8196.jpg',
    kind: 'veg'
},
{
    keyword: 'post_borsch_soup',
    name: 'Постный Борщ',
    price:'300р',
    volume:'300мл',
    category:'soup',
    image:'https://i.pinimg.com/736x/8d/c2/7a/8dc27a04d8ef689093c3858bd762d9cf.jpg',
    kind: 'veg'
},


//основные блюда
{
    keyword: 'pasta_coutlets',
    name: 'Макароны с котлетами',
    price:'300р',
    volume:'300гр',
    category:'main',
    image:'https://i.pinimg.com/736x/1e/cf/32/1ecf32413153c00236606eb0f6f579f4.jpg',
    kind: 'meat'
},
{
    keyword: 'paelia',
    name: 'Паэлья',
    price:'350р',
    volume:'400гр',
    category:'main',
    image:'https://i.pinimg.com/1200x/82/66/3e/82663e13738a93dffe2cf8adced42778.jpg',
    kind: 'fish'
},
{
    keyword: 'suchi_forel',
    name: 'Суши с форелью',
    price:'500р',
    volume:'350гр',
    category:'main',
    image:'https://i.pinimg.com/1200x/bf/cb/ff/bfcbffe24471fcacc72ccc677c1af5df.jpg',
    kind: 'fish'
},
{
    keyword: 'carbonara',
    name: 'Карбонара',
    price:'350р',
    volume:'300гр',
    category:'main',
    image:'https://i.pinimg.com/736x/d1/77/2c/d1772c1976fb587d0994ff3e7b9556fa.jpg',
    kind: 'meat'
},
{
    keyword: 'lasagna',
    name: 'Лазанья',
    price:'500р',
    volume:'350гр',
    category:'main',
    image:'https://i.pinimg.com/736x/28/d6/ae/28d6ae502c19e790a2b330cb31145f06.jpg',
    kind: 'meat'
},
{
    keyword: 'chana_masala',
    name: 'Чана масала',
    price:'400р',
    volume:'350гр',
    category:'main',
    image:'https://i.pinimg.com/736x/f3/10/f5/f310f572e20ebd474733d1b5d5df277b.jpg',
    kind: 'veg'
},
{
    keyword: 'ratatui',
    name: 'Рататуй',
    price:'390р',
    volume:'350гр',
    category:'main',
    image:'https://i.pinimg.com/736x/f7/7c/62/f77c62b9b8dcbd27b22f13fec1624e55.jpg',
    kind: 'veg'
},

//напитки
{
    keyword: 'black_tea',
    name: 'Чай черный',
    price:'50р',
    volume:'200мл',
    category:'drink',
    image:'https://i.pinimg.com/1200x/cb/51/78/cb51785d160f69c8935842f80547bc24.jpg',
    kind: 'hot'
},
{
    keyword: 'matcha',
    name: 'Матча',
    price:'150р',
    volume:'200мл',
    category:'drink',
    image:'https://i.pinimg.com/736x/53/4b/db/534bdb35bddece9effe9daccc8bacb44.jpg',
    kind: 'hot'
},
{
    keyword: 'coffee_americano',
    name: 'Кофе Американо',
    price:'150р',
    volume:'200мл',
    category:'drink',
    image:'https://i.pinimg.com/736x/e7/94/62/e79462d29862ba440a2b5da3b433b18c.jpg',
    kind: 'hot'
},
{
    keyword: 'water',
    name: 'Вода',
    price:'70р',
    volume:'250мл',
    category:'drink',
    image:'https://i.pinimg.com/736x/18/58/81/1858817f41dcb5e5fdb8d7bedd3497ae.jpg',
    kind: 'cold'
},
{
    keyword: 'latte',
    name: 'Кофе Латте',
    price:'200р',
    volume:'250мл',
    category:'drink',
    image:'https://i.pinimg.com/1200x/aa/bb/39/aabb39ea70e4edd6bd94604d26d8ed32.jpg',
    kind: 'hot'
},
{
    keyword: 'limonade',
    name: 'Лимонад',
    price:'150р',
    volume:'300мл',
    category:'drink',
    image:'https://i.pinimg.com/736x/46/cf/a1/46cfa1a467a842b40e3d59832c772289.jpg',
    kind: 'cold'
},
{
    keyword: 'milkshake',
    name: 'Милкшейк',
    price:'200р',
    volume:'300мл',
    category:'drink',
    image:'https://i.pinimg.com/736x/23/3d/b6/233db62770d0efc196af2512f6a674e2.jpg',
    kind: 'cold'
},

//салаты/стартеры
{
    keyword: 'cesar_chicken',
    name: 'Цезарь с курицей',
    price:'350р',
    volume:'300г',
    category:'salad',
    image:'https://i.pinimg.com/1200x/ab/b1/b4/abb1b4cd4a70371246a118498d8eb8ad.jpg',
    kind: 'meat'
},{
    keyword: 'olivie',
    name: 'Оливье',
    price:'320р',
    volume:'350г',
    category:'salad',
    image:'https://i.pinimg.com/736x/c2/ae/28/c2ae28346ca73436521eb8f14b0d08ff.jpg',
    kind: 'meat'
},{
    keyword: 'coulslow',
    name: 'Коул-слоу',
    price:'250р',
    volume:'300г',
    category:'salad',
    image:'https://i.pinimg.com/736x/c3/4c/4e/c34c4e33ec0c23ba9950f427143c7484.jpg',
    kind: 'veg'
},{
    keyword: 'vinegret',
    name: 'Винегрет',
    price:'250р',
    volume:'280г',
    category:'salad',
    image:'https://i.pinimg.com/736x/d7/6e/e4/d76ee47e69f270ec1759095ef5f15cfa.jpg',
    kind: 'veg'
},{
    keyword: 'tabule',
    name: 'Табуле',
    price:'320р',
    volume:'300г',
    category:'salad',
    image:'https://i.pinimg.com/1200x/06/99/6a/06996a6b45cbebf06368e2752951eb04.jpg',
    kind: 'veg'
},{
    keyword: 'ovoschnoy',
    name: 'Овощной',
    price:'200р',
    volume:'250г',
    category:'salad',
    image:'https://i.pinimg.com/1200x/c9/6d/e6/c96de61b7ad9137037e455a73a851913.jpg',
    kind: 'veg'
},
{
    keyword: 'cesar_shrimp',
    name: 'Цезарь с креветками',
    price:'370р',
    volume:'300г',
    category:'salad',
    image:'https://i.pinimg.com/1200x/88/92/10/88921076e6c270e75d8d45f88cedeb4e.jpg',
    kind: 'fish'
},{
    keyword: 'mimosa',
    name: 'Мимоза',
    price:'320р',
    volume:'300г',
    category:'salad',
    image:'https://i.pinimg.com/736x/54/e7/5f/54e75f5bb16d032209436501f55ce784.jpg',
    kind: 'fish'
},

//десерты
{
    keyword: 'peushka_2',
    name: 'Пышка 2 шт',
    price:'100р',
    volume:'80г',
    category:'desert',
    image:'https://i.pinimg.com/1200x/67/d6/ae/67d6aec511131b4c26c5dff24f7aabf3.jpg',
    kind: 'small'
},{
    keyword: 'ecleur',
    name: 'Эклер',
    price:'70р',
    volume:'80г',
    category:'desert',
    image:'https://i.pinimg.com/1200x/f2/8e/43/f28e43d0e80295ad0b557b9c3cddb448.jpg',
    kind: 'small'
},{
    keyword: 'pirozhok_apple',
    name: 'Пирожок с яблоком',
    price:'55р',
    volume:'70г',
    category:'desert',
    image:'https://i.pinimg.com/736x/b2/f3/70/b2f3702e141c06507dbf870ebe4ced45.jpg',
    kind: 'small'
},{
    keyword: 'tiramisu',
    name: 'Тирамису',
    price:'350р',
    volume:'300г',
    category:'desert',
    image:'https://i.pinimg.com/736x/66/dc/85/66dc85e6580337616ac83955f0d91000.jpg',
    kind: 'mild'
},{
    keyword: 'cheesecake',
    name: 'Чизкейк 1/8',
    price:'320р',
    volume:'300г',
    category:'desert',
    image:'https://i.pinimg.com/736x/78/15/4c/78154cc7087a8977448ed3d428d6fbbc.jpg',
    kind: 'mild'
},{
    keyword: 'pie_cherry',
    name: 'Пирог с вишней',
    price:'1000р',
    volume:'850г',
    category:'desert',
    image:'https://i.pinimg.com/1200x/29/f3/07/29f3071cb4bde3d72860d4f63800038f.jpg',
    kind: 'big'
},{
    keyword: 'peushka_12',
    name: 'Пышка 12 шт',
    price:'600р',
    volume:'480г',
    category:'desert',
    image:'https://i.pinimg.com/736x/56/9a/49/569a49d811730724e7723549dabf70de.jpg',
    kind: 'big'
}
];