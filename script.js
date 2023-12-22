// comments Handling
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
  
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
    document.getElementById('commentsContainer').appendChild(commentDiv);
  });
  
// document.getElementById('commentForm2').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name2').value;
//     const message = document.getElementById('message2').value;
  
//     const commentDiv = document.createElement('div');
//     commentDiv.classList.add('comment');
//     commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
//     document.getElementById('commentsContainer2').appendChild(commentDiv);
//   });
  
// document.getElementById('commentForm3').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name3').value;
//     const message = document.getElementById('message3').value;
  
//     const commentDiv = document.createElement('div');
//     commentDiv.classList.add('comment');
//     commentDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
  
//     document.getElementById('commentsContainer3').appendChild(commentDiv);
//   });
  