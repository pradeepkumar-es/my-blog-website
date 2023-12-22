// comments Handling for Blog Post 1
document.getElementById('commentForm1').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name1').value;
    const message = document.getElementById('message1').value;
  
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    document.getElementById('commentsContainer1').appendChild(commentDiv);
  });
  
// Comment handling for blog post 2  
document.getElementById('commentForm2').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name2').value;
    const message = document.getElementById('message2').value;
  
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    document.getElementById('commentsContainer2').appendChild(commentDiv);
  });
  
// comment handling for blog post 3
document.getElementById('commentForm3').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name3').value;
    const message = document.getElementById('message3').value;
  
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    document.getElementById('commentsContainer3').appendChild(commentDiv);
  });
  