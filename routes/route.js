exports.home=function(req,res){
  res.render('home',{title:'I Love My City',
                    headline:'My favorite cities'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='chennai'){
       title="Chennai";
       headline ="Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.";
    }
    else if(cityName==='hyderabad'){
       title="Hyderabad";
       headline="Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.";
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
