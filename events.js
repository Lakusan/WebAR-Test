    window.onload = function () {
      document
        .querySelector("#hinweis")
        .addEventListener("click", function () {
          // here you can change also a-scene or a-entity properties, like
          // changing your 3D model source, size, position and so on
          // or you can just open links, trigger actions...
          alert("Hi there!");
          console.log("Clicked");
        });
    };

    
 