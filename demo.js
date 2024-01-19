// bai tap 1 :

var x =5;
switch(x){ 
    case 1: {console.log("Thứ 2"); 
        break;}   
    case 2: {console.log("Thứ 3");
        break;}     
    case 3: {console.log("Thứ 4");
        break;}  
    case 4: {console.log("Thứ 5");
        break;}  
    case 5: {console.log("Thứ 6"); 
        break;}  
    case 6: {console.log("Thứ 7"); 
        break;}
    case 7: {console.log("Chủ nhật");
        break;}
         default:{console.log("Khong phai cac thu ngay"); break;}
}

        var thungay = ["thu hai", "thu ba", "thu tu", "thu nam", "thu sau", "thu bay", "chu nhat"];


// bài tập 2 :

function isPrime(number) {
    if (number < 2) { 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let numToCheck = 4;

if (isPrime(numToCheck)) {
    console.log("la so nguyen to")
} else {
    console.log("khong la so nguyen to")
}

// bài 3: hàm matrix 4x3 

var x = [["1", "1", "1"], ["1", "0", "0"], ["0", "1", "0"],["0", "0", "1"]];
var matran = "";

for (var i=0; i<4; i++ ) {
    for (var j=0; j < 3; j++){
        matran += x[i][j] + "";

    }
    matran += "\n"; 
}
console.log(matran);

// bài 4 :  Gmail

var email =  ('Congly@gmail.com');
var filter = /^([a-zA-Z0-8_\.\-])+\@(([a-zA-Z0-8\-])+\.)+([a-zA-Z0-8]{2,4})+$/;
if (!filter.test(email)) {
    console.log('Hay nhap dia chi email hop le.\nExample@gmail.com');
    email.focus();
    return false;
    }
    else{
        console.log('OK roi day, Email nay hop le.');
    }

// bài 5 : 


// bài 6 : giao diện user, pass bắt lỗi


