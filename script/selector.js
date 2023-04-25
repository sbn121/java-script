$(function(){
    // jQuery : write less(코드 적게 쓰고), do more(더 많은 처리) via Javascript

    // 표시 단추를 클릭해서, 네모 상자에 어떤 이미지를 출력하기(p.468)

    // 1. DOM 요소에 접근
    // javascript DOM 선택 메소드 [old]
    // const btn = document.getElementById("displayBtn");

    // var imgNo = 1;  // 전역 변수
    // btn.addEventListener("click", function(){
    //     // 어디에? (타겟)
    //     const displayArea = document.getElementById("displayArea");
    //     imgNo++;
    //     console.log(displayArea.innerHTML="<img src=\"http://picsum.photos/id/"+imgNo+"/200/200\" alt=\"picsum\">");

    // })
    // document.getElementsByClassName();
    // document.getElementsByTagName();

    /* [new] / trend ==> jQeury 때문에 (비슷하게?)
    const btn = document.querySelector("#displayBtn");

    btn.addEventListener("click", function(){
        const displayArea = document.getElementById("displayArea");
        1. HTML DOM 조작
        displayArea.innerHTML = "<img src='images/bg.jpg' alt='some image'>";

        2. CSSOM(CSS DOM) 조작
        displayArea.style.backgroundImage = "url(images/bg.jpg)";
        displayArea.style.backgroundSize = "cover";
        displayArea.style.backgroundRepeat = "no-repeat";
        displayArea.style.backgroundPosition = "center";
    })
    document.querySelectorAll();
    */
    // ======================아래부터는 jQeury=======================
    // $("ul li:nth-child(1)");    //tag, class, id,...css selector : 다 된다..(그래서 편함)
    // $("tag");
    var btn = $("#displayBtn");
    var display = $("#displayArea");

    // 클릭 이벤트 메소드 - 클릭하면 할 일을 수행
    btn.click(function(){
        display.html("");

        display.css({
            "background-image":"url('images/bg.jpg')",
            "background-size":"cover",
            "background-repeat":"no-repeat",
            "background-position":"center"
        }); // : css조작 메소드
    });    
    // $(".class");
})