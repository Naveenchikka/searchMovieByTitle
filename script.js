const apiurl = "http://www.omdbapi.com/?apikey=345660a5";

async function getdata()
{

    try {
		let title = document.getElementById('t').value;
		let year = document.getElementById('y').value;
		var e = document.getElementById('p');
		console.log(e);
        var value = e.options[e.selectedIndex].value;
		console.log("value",value);
        var text = e.options[e.selectedIndex].text;
		console.log("text",text);
		var response = await fetch(apiurl+"&t="+title+"&y="+year+"&plot="+text);
		var movie = await response.json()
		console.log(movie)
		if(movie.Response != 'False')
		{
        createPost(movie);
		}
		// if(movie)
		//     document.getElementsByClassName('card').style.property= 'visible';
	  } catch (err) {
		console.error(err)
	  }

}

function resetFields()
{
	document.getElementById('t').value = '';
	document.getElementById('y').value = '';
	document.getElementById('p').selectedIndex = '';
}

function createPost(movie)
{
   
	animateScroll('display');
	document.getElementById('display').style.visibility= 'visible';
	document.getElementById('display').style.display = 'flex';
	var img = document.getElementById('poster')
	img.src = movie.Poster;

	document.getElementById("card-title").innerHTML = ''+movie.Title;
	document.getElementById("year").innerHTML = ''+movie.Year;
	document.getElementById("genre").innerHTML = ''+movie.Genre;
   
}

function animateScroll(id) {
	$('html, body').animate({
	  scrollTop: ($(`#${id}`).offset().top - 50)
	}, 800);
  }