const containerEl = document.getElementsByClassName("quote_container")[0];
const BtnEl = document.getElementById("btn");
const url = "https://type.fit/api/quotes";

let pTag = "";
let qTag = "";

// Creating a Tag's and add The Data

function Createtag(quote, author) {
    const pTag = document.createElement("p");
    pTag.setAttribute("id", "quotes");

    const qTag = document.createElement("p");
    qTag.setAttribute("class", "author");


    pTag.innerHTML = `  ' ${quote} ' <br>`;
    qTag.innerHTML = ` -${author}`;
    containerEl.append(pTag);
    containerEl.append(qTag);
    
    //When Button Click

    BtnEl.addEventListener('click', randomQuotes)
    function randomQuotes() {
        containerEl.style.cssText = " box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px";
        postArray = JSON.parse(xhr.response);
        random1 = Math.floor(Math.random() * 1000);
        let randomQuote = postArray[random1].text;
        let randomAuthor = postArray[random1].author;
        pTag.innerHTML = `  ' ${randomQuote} ' `;
        qTag.innerHTML = ` -${ randomAuthor}`;    
    }  
}

// Getting data From API and Fetch It Using CreateTag Function.

const xhr = new XMLHttpRequest();
let random1 = "";
let postArray;
function fetchPost() {
    xhr.onload = () => {       //onreadystatechange it is a property!! instead of this use onload
        if (xhr.status == 200) {
         postArray = JSON.parse(xhr.response);
            random1 = Math.floor(Math.random() * 1000);
            let randomQuote = postArray[random1].text;
            let randomAuthor = postArray[random1].author;
            Createtag(randomQuote, randomAuthor);
        } else {
            console.log("There is an Error in the Network")      
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

 fetchPost();











