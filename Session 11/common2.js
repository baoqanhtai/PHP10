document.write("Khai bao bien la ten day du cua minh: ");
var myName = "Bao Quy Anh Tai";
document.write("<br>");
document.write("So ky tu trong ten cua minh la : ");
document.write(myName.length);
document.write("<br>");
document.write("Chu n dau tien trong ten cua minh o vi tri so : ");
document.write(myName.indexOf('n'));
document.write("<br>");
document.write("Chu n cuoi trong ten cua minh o vi tri so : ");
document.write(myName.lastIndexOf('n'));
document.write("<br>");
document.write("Thay the ho cua minh bang chu PHP10: ");
document.write(myName.replace('Bao','PHP10'));
document.write("<br>");
document.write("In hoa ten cua minh : ");
document.write(myName.toUpperCase(''));
document.write("<br>");
document.write("In thuong ten cua minh :");
document.write(myName.toLowerCase(''));