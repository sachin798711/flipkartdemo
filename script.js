fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 6; i++) {
      var phoneDiv = document.createElement("div");
      phoneDiv.className = `class${i + 1}`;
      var right = document.getElementById("right");
      right.appendChild(phoneDiv);
      var imgsrc1 = data[i].image;
      var phone1Elem = document.getElementById("phone1Id");
      var imgTag = document.createElement("img");
      imgTag.id = "myImg";
      imgTag.className = `class${i + 1}`;
      imgTag.style.height = "370px";
      imgTag.style.margin = "10px";
      // document.getElementById("myImg").height = "300";
      // console.log(phone1Elem);
      imgTag.setAttribute("src", imgsrc1);
      phone1Elem.appendChild(imgTag);

      var header = document.getElementById("right");

      var h2Elem = document.createElement("h2");
      h2Elem.style.marginTop = "15px";
      h2Elem.innerHTML = data[i].name;
      phoneDiv.appendChild(h2Elem);
      var rating = document.createElement("span");

      var ratingValue = data[i].rating;
      // console.log(ratingValue);
      if (ratingValue < 3) {
        rating.style.backgroundColor = "red";
        rating.style.color = "white";
        rating.style.borderRadius = "2px";
      } else {
        rating.style.backgroundColor = "green";
        rating.style.color = "white";

        rating.style.borderRadius = "2px";
      }

      rating.innerHTML = data[i].rating + "&#9733;";
      phoneDiv.appendChild(rating);

      var span1 = document.createElement("span");
      span1.id = "spanId";
      h2Price = document.createElement("h2");
      h2Price.className = `price${i + 1}`;
      h2Price.innerHTML = "₹" + data[i].discounted_price;
      // h2Price.style.strong = h2Price;
      phoneDiv.appendChild(h2Price);
      // var span2 = document.createElement("span");
      var strike = document.createElement("strike");
      strike.innerHTML = "₹" + data[i].original_price;
      span1.appendChild(strike);
      phoneDiv.appendChild(span1);
      var fheading = document.createElement("h5");
      fheading.innerHTML = "Specifications";
      fheading.style.color = "green";
      span1.appendChild(fheading);
      // var span2 = document.getElementById("spanId");
      for (let j = 0; j < 5; j++) {
        var feature = document.createElement("p");
        feature.innerHTML = data[i].features[j];
        span1.appendChild(feature);
      }
    }
    $("#btn1").click(function (e) {
      e.preventDefault();

      console.log("clicked");
      var a = $("#input1").val();
     // location.reload();
      //var max=0;
      for (i = 0; i < 6; i++) {
        if (Number(a) < data[i]["discounted_price"]) {
          $(`.class${i + 1}`).css("display", "none");
        }
      }
    });
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err);
  });
