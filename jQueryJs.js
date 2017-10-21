// Tag name 변경 불가능
console.log(document.getElementById('active').tagName)


var active = document.getElementById('active');
console.log(active.id);
// id 변경가능
active.id = 'deactive';
console.log(active.id);
