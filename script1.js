//get the data
let users = [
    {
        profilePic:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D",
        displayPic: 
          "https://images.unsplash.com/photo-1707452023179-d237a850039d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 3,
        locaion: "Guna,India",
        name: "Niyati",
        age: 23,
        interests: [
            {
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        },
         {
             icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        },
    ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        isfriend: null
    },
    {
        profilePic: 
          "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D",
        displayPic: 
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 5,
        locaion: "Kota,India",
        name: "Pragya",
        age: 21,
        interests: [
            {
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        },
         {
             icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        },
    ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque perferendis laborum possimus cumque.",
        isfriend: null
    },
    {
        profilePic: 
          "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvdHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displayPic: 
          "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 7,
        locaion: "Jaipur,India",
        name: "Janvi",
        age: 27,
        interests: [
            {
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, 
         {
             icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        },
    ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque perferendis laborum possimus cumque.",
        isfriend: null
    },
    {
        profilePic: 
          "https://images.unsplash.com/photo-1679505442670-2390dea94115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvdHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D",
        displayPic: 
          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage: 15,
        locaion: "Ajmer,India",
        name: "Nikita",
        age: 23,
        interests: [
            {
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, 
         {
             icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        },
    ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque perferendis laborum possimus cumque. cupiditate, vel.",
        isfriend: null
    },
];

function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3"),textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;
    
    let clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}<h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;
    
    select(".bio p").textContent = users[index].bio;
}

(function setInitial(){
select(".maincard img").src = users[curr].displayPic;
select(".incomingcard img").src = users[curr + 1]?.displayPic;
    
setData(curr);

curr = 2;
})();


function imageChange() {
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
           onComplete: function(){
              isAnimating = false;
              let main= select(".maincard");
              let incoming = select(".incomingcard");

     incoming.classList.remove("z-[2]");
     incoming.classList.add("z-[3]");
     incoming.classList.remove("incomingcard");

     main.classList.remove("z-[3]");
     main.classList.add("z-[2]");
     gsap.set(main, {
        scale: 1,
        opacity: 1
     })
       if(curr === users.length) curr = 0;
       select(".maincard img").src = users[curr].displayPic;
       curr++;
       main.classList.remove("maincard");
       incoming.classList.add("maincard");
       main.classList.add("incomingcard");
    }
});
}
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});

accept.addEventListener("click", function() {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});