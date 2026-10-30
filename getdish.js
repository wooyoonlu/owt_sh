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

//салаты/стартеры
{
    keyword: 'cesar_chicken',
    name: 'Цезарь с курицей',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'meat'
},{
    keyword: 'olivie',
    name: 'Оливье',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'meat'
},{
    keyword: 'zdorovie',
    name: 'Здоровье',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'veg'
},{
    keyword: 'ovoschnoy',
    name: 'Овощной',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'veg'
},{
    keyword: 'cesar_shrimp',
    name: 'Цезарь с креветками',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'fish'
},{
    keyword: 'mimosa',
    name: 'Мимоза',
    price:'200р',
    volume:'250мл',
    category:'salad',
    image:'',
    kind: 'fish'
},

//десерты
{
    keyword: 'peushka_2',
    name: 'Пышка 2 шт',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'small'
},{
    keyword: 'ecleur',
    name: 'Эклер',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'small'
},{
    keyword: 'tiramisu',
    name: 'Тирамису 1/8',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'mild'
},{
    keyword: 'cheesecake',
    name: 'Чизкейк 1/8',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'mild'
},{
    keyword: 'pie_cherry',
    name: 'Пирог с вишней',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'big'
},{
    keyword: 'peushka_12',
    name: 'Пышка 12 шт',
    price:'200р',
    volume:'250мл',
    category:'desert',
    image:'',
    kind: 'big'
}
];