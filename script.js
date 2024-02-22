// question1
// let p = document.querySelector("p");
// let button = document.querySelector("button");

// button.addEventListener("click", function () {
//   p.textContent = "It changed";
// });

// Question2
// let button = document.querySelector("button");
// let img1 = document.getElementById('one');
// let img2 = document.getElementById('two');

// button.addEventListener("click", function () {
//     let src1 = img1.src;
//     let src2 = img2.src;

//     img1.src = src2;
//     img2.src = src1;
// });

// Question3
// let form = document.querySelector('form');
// let h4 = document.querySelector('h4');
// let inpts = document.querySelectorAll('input[type="text"]');
// let  btn = document.querySelector('input[type="submit"]');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     for (let i = 0; i < inpts.length; i++) {
//         if (inpts[i].value === '') {
//             h4.textContent = 'Error, Something is blank';
//             h4.style.color = 'red';
//             break;
//         }  else {
//             h4.textContent = '';
//             h4.style.color = 'black';
//         }
//     }
// });

// Question4
// let inpt = document.querySelector('input');
// let add = document.getElementById('addBtn');
// let remove = document.getElementById('removeBtn');
// let ul = document.querySelector('ul');

// add.addEventListener("click",() => {
//     if(inpt.value.trim() !== ""){
//     let li = document.createElement('li');
//     li.textContent = inpt.value;
//     ul.appendChild(li);
//     inpt.value = "";
// }else alert("Please write something");
// });

// remove.addEventListener("click", ()=>{
//    if(ul.childElementCount > 0){
//        ul.removeChild(ul.lastElementChild);
//    }else alert("The list is empty!");
// });

// Question5
// let h3 = document.querySelector('h3');
// let start  = document.querySelector('.start');
// let stop = document.querySelector('.stop');

// var count = 0;
// let counting;
// start.addEventListener("click", ()=>{
//     counting =setInterval(()=>{
//         h3.textContent = count;
//         count++;
//     },1000)
// });

// stop.addEventListener("click",() => {
//     clearInterval(counting);
//     count = 0;
// })

// Question6
// let tabs = document.querySelectorAll("button");
// let content = document.querySelectorAll("p");

// content[0].style.display = "block";

// const hideAll = () => {
//   content.forEach((item) => {
//     item.style.display = "none";
//   });
// };

// // 1st method
// // for (let i = 0; i < tabs.length; i++) {
// //   tabs[i].addEventListener("click", () => {
// //     hideAll();
// //     content[i].style.display = "block";
// //   });
// // }

// // 2nd method
// tabs.forEach((tab,i) => {
//   tab.addEventListener("mouseover", function () {
//     hideAll();
//     content[i].style.display = "block";
//   });
// });

// Question7
// let bar = document.querySelector('.progress');
// let h3 = document.querySelector('h3');

// let progess = 0;
// setInterval(()=>{
//     progess += 5;
//     if (progess <= 100){
//         bar.style.width = progess + '%';
//     }
//     else{
//         h3.textContent = 'Completed';
//         clearInterval();
//     }
// },200)

// Question8
// let container = document.querySelector(".container");
// let search = document.querySelector(".search");

// const data = [
//   {
//     name: "sahil",
//     src: "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     name: "saurabh",
//     src: "https://images.pexels.com/photos/4167729/pexels-photo-4167729.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     name: "dheeraj",
//     src: "https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     name: "prasant",
//     src: "https://images.pexels.com/photos/5854711/pexels-photo-5854711.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     name: "tailor",
//     src: "https://images.pexels.com/photos/10811816/pexels-photo-10811816.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     name: "yash",
//     src: "https://images.pexels.com/photos/14660635/pexels-photo-14660635.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
//   {
//     name: "subham",
//     src: "https://images.pexels.com/photos/7538787/pexels-photo-7538787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   },
// ];

// let content = "";

// data.forEach((e) => {
//   content += `<div class="people">
//   <div class="content">
//     <img
//       src=${e.src}
//       alt="people"
//     />
//   </div>
//   <h4>${e.name}</h4>
// </div>`;
// });

// container.innerHTML = content;

// search.addEventListener("input", () => {
//   let matching = data.filter((e) => {
//     return e.name.startsWith(search.value);
//   });

//   let newUser = "";
//   matching.forEach((e) => {
//     newUser += `<div class="people">
//         <div class="content">
//           <img
//             src=${e.src}
//             alt="people"
//           />
//         </div>
//         <h4>${e.name}</h4>
//       </div>`;
//   });
//   container.innerHTML = newUser;
// });


// Question9
let input = document.querySelector('textarea');
let count = document.querySelector('span')

input.addEventListener('input', () => {
  count.textContent = input.value.length;
})
