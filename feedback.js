
function getCommentList(Comments) {
        for (let i = 0; i < Comments.length; i++) {
            let s = '<h3>' + Comments[i].name + ' ' + Comments[i].surname + '</h3>' + 
            '<p id="pp">' + Comments[i].comment + '</p>' + 
            /*'<img src="images/heart.png" style="width:20px; height:20px; float:right;">' + */ 
            '<hr>';
        $('#list').append(s);
	}

}	

	

function addComment() {
    if(document.getElementById('comment').value.length != 0){
        let Users = JSON.parse(localStorage.getItem('lastUser') || '[]');
        if(Users.length === 0){
            swal("Oops...!", "You need to sign in!", "error");
            document.getElementById('comment').value = "";         
        }else{
            let Comments = JSON.parse(localStorage.getItem('Comments') || '[]');
            let comment = {comment: document.getElementById('comment').value, 
                           name: Users.name, 
                           surname: Users.surname,
                           //image: Users.image
        };
            Comments.push(comment);
            localStorage.setItem('Comments', JSON.stringify(Comments));
            //let s = '<p>' + comment + '</p>';
            let s = '<h3>' + comment.name + ' ' + comment.surname + '</h3>' + '<p id="pp">' + comment.comment + '</p>' + '<hr>';
            $('#list').append(s);
            document.getElementById('comment').value = "";
        }
    }
}

/*function addcomm(){
var button = document.getElementById('btn');
            button.addEventListener('click', (e)=>{
                let lastUser = JSON.parse(localStorage.getItem('lastUser') || '[]');
                if(lastUser.length == 0){
                    alert("asda");
                }
                else {
                    let Comments = JSON.parse(localStorage.getItem('Comments') || '[]');
            let comment = {comment: document.getElementById('comment').value, 
                           name: Users.name, 
                           surname: Users.surname
        };
            Comments.push(comment);
            localStorage.setItem('Comments', JSON.stringify(Comments));
            let s = '<p>' + comment + '</p>';
            $('#list').append(s);
            }}, 3000);
        }
*/
function feedback(){
    checkUserLogInOut();
    getCommentList(JSON.parse(localStorage.getItem('Comments') || '[]'), 1);      
}

