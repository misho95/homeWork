const text = "გიორგი";

function reverString(text){

    let newString = '';

    for(let i = text.length-1; i >= 0; i--){
        newString = newString.concat('',text[i]);
    }

    return newString;
}

console.log(reverString(text));


const names = [["გიორგი", "ალექსი"], ["სალომე", "ნიკა"], ["სალომე", "გიგია"]];

const flatArray = (array) => {
    const flat = array.flat();
    const result = new Set(flat)
    return result;
}

console.log(flatArray(names));



// დავალება 3:
// მოცემული გვაქვს ორი პარალელური ლისტი:
const users = [{id: 1, name: "george"}, { id: 2, name: "alex" }]
const posts = [
    { user_id: 1, title: "post1", desc: "post2" }, 
    { user_id: 1, title: "post2", desc: "post2" },
    { user_id: 2, title: "post3", desc: "post3" },
    { user_id: 2, title: "post3", desc: "post3" },
]

const userMap = users.map( (user) => {
    return {
        ...user,
        post: posts.filter( (post) => {
            if(user.id === post.user_id) return post;
        })
    }
});

console.log(userMap);

// მოცემული გვაქვს შემდეგი სტრუქტურა:
const nodes = {
    node: "p",
    child: {
        node: "div",
        child: {
            node: "span",
            child: {
                node: "h1",
                child: null
            }
        }
    }
}

// დავწეროთ ფუნქცია რომელიც გვეტყვის რამდენი შვილი ყავს p node ტეგს. 
// შეგვიძლია გამოვიყენოთ while loop

const countChilds = (nodes) => {
        let element = nodes.child;
        let count = 0;
    while(element !== null){
        count++;
        element = element.child;
    }
    return count;
}

console.log(countChilds(nodes));




// მოცემული გვაქვს შემდეგი სტრუქტურა:
const node2 = {
    node: "p",
    child: {
        node: "h2",
        child: {
            node: "span",
            child: null,
        }
    }
}

//ობჯექთის ამობრუნება ვერ შევძელი ჯერჯობით სამუშაო მაქვს ამ თემაზეე



// მოცემული გაქვს შემდეგი json დატა
const listings = [
    {
        listing_id: 1,
        name: "Listing 1",
        status: "active",
    },
    {
        listing_id: 2,
        name: "Listing 2",
        status: "deleted",
    },
    {
        listing_id: 3,
        name: "Listing 3",
        status: null,
    }
]
// map მეთოდის დახმარებით დომში დაარენდერეთ სია შემდეგი სახის html ად:


const mapListings = listings.map( (list) => {
    return `
     <div>
        <h1>${list.name}</h1>
        ---
        თუ სტატუსის key ცარიელი არ არის დაამატეთ:
        <div style="${list.status === 'active' ? 'background-color: green' : list.status === 'deleted' ? 'background-color: red' : ' '}">
            ${list.status}
        </div>
    </div>`
});

const root = document.querySelector('#root');
root.innerHTML = mapListings.join('');