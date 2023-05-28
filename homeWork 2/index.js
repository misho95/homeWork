
// დავალება 1 მოცემული შემდეგი მასივი
// 1. გარდაქმენით იმგვარ სტრუქტრად რომ მივიღოთ დაჯგუფეგული
// ინფორმაცია category ს მიხედვით

const data = [
    {
      id: 1,
      category: "sport",
      title: "sport post 1",
      views: 200
    },
    {
      id: 2,
      category: "sport",
      title: "sport post 1",
      views: 400
    },
    {
      id: 3,
      category: "movies",
      title: "movie post 1",
      views: 500
    },
    {
      id: 4,
      category: "movies",
      title: "movie post 1",
      views: 150
    }
  ];
  
  // სასურველი output:
  const result = {
    // ყველა ობჯექთი სპორტის
    sport: [{}],
  
    // ყველა ობჯექთი ფილმების
    movies: [{}]
  };

  //პირველი დავალება

  const sport = data.filter( (e) => {
      if(e.category === "sport"){
        return e;
      }
  });

  const movies = data.filter( (e) => {
    if(e.category === "movies"){
      return e;
    }
  });

  const newResult = { sport , movies};


    //კომენტარი მოხსენით რეზულტატის სანახავად
       // console.log(newResult);

////
  
  // დავალება 2:
  const users = [
    {
      id: 1,
      name: "george",
      surname: "batsiashvili",
      is_admin: false,
      total_sales: 150
    },
    {
      id: 2,
      name: "alex",
      surname: "abesadze",
      is_admin: false,
      total_sales: 190
    },
    {
      id: 3,
      name: "nino",
      surname: "shubladze",
      is_admin: false,
      total_sales: 80
    }
  ];
  
  // . დაწერეთ ფუნქცია sort_by_sales
  // რომელიც არგუმენტად მიიღებს users, დასორტავს მეტიდან ნაკელბამდე total_sales key ს დახმარებით
  
  // . დაწერეთ ფუნქცია generatefullname რომელიც არგუმენტად მიიღებს users მასივს, ყოველ ელემენტზე დაააგენერირებს ახალ
  // fullname ატრიბუტს ობიექტზე შემდგარს user.name + user_surname ით
  
  // . დაწერეთ ფუნქცია highestsales რომელიც უკან დააბრუნებს ახალ მასივს სადაც გვექნება მხოლოდ ის გაყუდვები რომელთა თანხაც 80 ზე მეტია
  


 const sort_by_sales = (e) => {
    const sort = e.sort( (a,b) => {
      return  b.total_sales - a.total_sales;
    })
    return sort;
 }


 const res = sort_by_sales(users);


 // console.log(res);



const generatefullname = (e) => {
    const map = e.map( (user) => {
      const fullname = user.name + " " + user.surname;
      user.fullName = fullname;
      return user;
    })
    return map;
}

const fullNameResult = generatefullname(users);

// console.log(fullNameResult);


const highestsales = (e) => {
  const filterd = e.filter( (user) => {
    if(user.total_sales > 80){
      return user;
    }
  });
  return filterd;
}

const highestsalesResutl = highestsales(users);

// console.log(highestsalesResutl);














  // დავალება 3:
  // 1. გამოითხოვეთ სია პოსტების  https://jsonplaceholder.typicode.com/posts
  // 2. წაიკითხეთ json დატა response ობიექტიდან
  // 3. შექმენით მარკაპი
  // <div>
  //   <div>post id {}</div
  //   <h1>title</h1>
  //   <p>body</p>
  // </div>
  // 4. შეიტანეთ თითოეული პოსტი body ელემენტში
  