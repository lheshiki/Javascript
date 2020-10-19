/*console.log(5+8) //13
console.log(4-2) //2
console.log(8*2) //16
console.log(6/3) //2
console.log(9%2) //1
let place = 'cebu'
console.log('place')
let country = 'Japan'
console.log(country)
country = 'Phillipnes'
console.log(country)
let job = 'engineer'
console.log(job)
console.log(`My job is, ${job}`)
let student_list = ['Yamada','Chihiro','Lisa']
console.log(student_list[1])
student_list.push = ('Takahashi')
console.log(student_list)
let applications = ['Line','Twitter','Facebook']
console.log(applications)
applications.push = ('twitter')
console.log(applications)
let capitalCities = {Japan:'Tokio', Philippines:'Manila', England:'London'}
console.log(capitalCities)
console.log(capitalCities.England)
capitalCities.America = 'Washington'
console.log(capitalCities)

let weight = 201
if(weight >200)
	{console.log('Heavy category')}
else if(weight >115 && weight<118)
	{console.log('Middle category')}
else {console.log('Others')}

let greetings = 'bon dia'
switch(greetings){
					case'Bon jour': console.log('french');break;
					case'Good morning':console.log('english');break;
					default:console.log('?');break;
                   }
for (let i =2; i <= 20; i++) {console.log(i);}     
let k=2
while(k<20){console.log(k);k++;} 
let sports =['basketball','soccer','tennis']
for (let value of sports){console.log(value)}

let height = {Skytree:634, Tokio_tower: 333}

for(let key in height) {console.log(key+' height is'+height[key]+'m')}

let result = 0;
for (let i = 1; i <= 100; i++) {
    result += i;

    if (result > 1000) {
        console.log(`合計値が1000を超えるのは${i}の時`);
        break;
    }
}

for (let i=0; i<50; i++) 
	{if(i%5 !== 0){continue;}
	console.log(i);
	}


for (let i = 1; i <= 30; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    console.log(i);
}
let number = 3
if (number % 2 == 0) {console.log(`This number is pair`)}
else {console.log(`This number is unpair`)}

let profile = ['Luis',25, 67]
for (let value in profile){console.log(profile[value])}

if (profile[2] < 29) {console.log('Correct')}
else{console.log('incorrect')}

let history = 50
let science = 50

if (history + science >= 100) {console.log('passed')}
else{console.log('failed')}



for (let i= 1; i<=15 ; i++)
    {if (i%3 == 0 && i%5 == 0) {console.log(i)+console.log('FizzBuzz')}
	 else if (i%3 == 0) {console.log(i);console.log('Fizz')}
	 else if (i%5 == 0) {console.log(i);console.log('Buzz')}
     }

for (i = 1; i <= 9; i++) 
for (j = 1; i <= 9; i++) 
    { let res = i*j;
     console.log(res)	
}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let res = i * j;
    console.log(res);
  }
}*/

console.log('セブ島'+'留学');
console.log('5たす8='+ String(5+8));
console.log('4ひく2='+ String(4-2));
console.log('8かける2='+ String(8*2))
console.log('6わる3='+String(6/3))
console.log('9わる2のあまりは'+String(9%2))

let country='Japan'
console.log(country)

country='Philippines'
console.log(country)

let job='engineer'
console.log(`私の仕事は${job}です`)

let applications_list=['Line','Facebook','Twitter']
console.log(applications_list)
applications_list.push('Instagram')
console.log(applications_list)
console.log(applications_list['Instagram']);

let capitalCities = {Japan:'Tokio', Philippines:'Manila', France:'Paris'};
console.log(capitalCities);
console.log(capitalCities['France'])
capitalCities.America='Washington'
console.log(capitalCities);

// クラスのみんなの名簿を二次元配列で作っていきましょう
// 配列の中に、連想配列の形です
// リストの０番目の人の名前をconsole表示しましょう
// リストの３番目の人の出身地をconsole表示しましょう
// リストの４番目の人の趣味をconsole表示しましょう

let student_list=[
                  {name:'Seedkun',from:'Sebu',Hobby:'Surfing'},
                  {name:'Shinya',from:'Okinawa',Hobby:'Travel'},
                  {name:'Yoshiya',from:'Kyoto',Hobby:'Soccer'},
                  {name:'Moe',from:'Yamagata',Hobby:'Korean drama'},      
                  {name:'Yuko',from:'Okinawa',Hobby:'Taking photos'}  
                  ];

console.log(student_list[0]['name']);
console.log(student_list[2]['from']);
console.log(student_list[3]['Hobby']) 

        //Challenger 問題

let film_list= [{category:'Love comedy',movie:
                  [
                    {name:'Hitch',main_character:'Will Smith'},
                    {name:'Notebook',main_character:'Rachel McAdams'}
                  ]},
                  {category:'Suspense',movie:
                  [
                     {name:'Sixth sense',main_character:'Bruce Willis'},
                     {name:'Basic Instict',main_character:'Sharon Stone'}
                   ]},
                  {category:'Comedy',movie:
                  [
                     {name:'Men in black',main_character:'Will Smith'},
                     {name:'Superbad',main_character:'Jonah Hill'}
                  ]},
                  {category:'Horror',movie:
                  [
                   {name:'IT',main_character:'Jack Dylan'},
                   {name:'Orphan',main_character:'Isabelle Fuhrman'}
                  ]},
                  {category:'Science Fiction',movie:
                  [
                   {name:'Harry Potter',main_character:'Daniel Radcliffe'},
                   {name:'Star Wars',main_character:'Harrison Ford'}
                  ]}
                ]   

console.log(film_list[0]['movie']['main_character'])


